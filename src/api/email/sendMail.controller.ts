import { resolve } from 'path';
import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SurveysRepository } from '../survey/repositories/surveys.repository';
import { SurveysUsersRepository } from '../surveyUser/repositories/surveyUser.repositories';
import { UsersRepository } from '../user/repositories/UsersRepository';
import SendMailService from './sendMail.service';
import sendMailService from './sendMail.service';

class SendMailController {
    async execute(req: Request, res: Response){
        const { email, survey_id } = req.body;

        const usersRepository = getCustomRepository(UsersRepository);
        const surveyRepository = getCustomRepository(SurveysRepository);
        const surveysUsersRepository = getCustomRepository(SurveysUsersRepository);

        //User validate
        const user = await usersRepository.findOne({email});

        if(!user){
            return res.status(400).json({
                error: "User does not exists."
            });
        }

        //Survey validate
        const survey = await surveyRepository.findOne({id: survey_id});

        if(!survey){
            return res.status(400).json({
                error: "Survey does not exists."
            })
        }

        const npsPath = resolve(__dirname, "..", "..", "views", "email", "npsMail.hbs");

        const variables = {
            name: user.name,
            title: survey.title,
            description: survey.description,
            user_id: user.id,
            link: process.env.URL_MAIL
        }

        //Create just one survey
        const surveyUserAlreadyExists = await surveysUsersRepository.findOne({
            where: [{user_id: user.id}, {value: null}],
            relations: ["user", "survey"]
        })

        if(surveyUserAlreadyExists){
            await sendMailService.execute(email, survey.title, variables, npsPath)
            return res.json(surveyUserAlreadyExists)
        }

        //Save SurveyUser
            const surveyUser = surveysUsersRepository.create({
                user_id: user.id,
                survey_id
            })
            await surveysUsersRepository.save(surveyUser);

        //Send mail
            await SendMailService.execute(email, survey.title, variables, npsPath);
            
            return res.json(surveyUser)

    }
}

export { SendMailController }