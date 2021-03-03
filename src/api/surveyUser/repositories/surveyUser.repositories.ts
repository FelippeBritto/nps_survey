import { EntityRepository, Repository } from 'typeorm';
import { SurveyUser } from '../surveyUser.entity';

@EntityRepository(SurveyUser)
class SurveysUsersRepository extends Repository<SurveyUser>{}

export { SurveysUsersRepository}