import { Router } from 'express';
import { SendMailController } from '../email/sendMail.controller';
import { SurveysController } from '../survey/surveys.controller';
import { UserController } from '../user/user.controller';
const router = Router();

const userController = new UserController();
const surveysController = new SurveysController();
const sendMailController = new SendMailController();

router.post('/users', userController.create);
router.post('/surveys', surveysController.create);
router.get('/surveys', surveysController.show);
router.post('/sendMail', sendMailController.execute);


export { router };