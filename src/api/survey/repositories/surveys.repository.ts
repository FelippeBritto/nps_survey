import { EntityRepository, Repository } from "typeorm";
import { Survey } from "../surveys.entity";

@EntityRepository(Survey)
class SurveysRepository extends Repository<Survey>{}

export { SurveysRepository };

