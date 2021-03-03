import { EntityRepository, Repository } from "typeorm";
import { User } from "../user.entity";

@EntityRepository(User)
class UsersRepository extends Repository<User>{}

export { UsersRepository }; //Exports inside key improves vscode intelisense work

