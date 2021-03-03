import { Connection, createConnection, getConnectionOptions } from "typeorm";
//This configuration auto generate database.sqlite at ormconfig
// createConnection();

export default async (): Promise<Connection> => {
    const defaultOptions = await getConnectionOptions(); //Get all info from orm config

    return createConnection(
        Object.assign(defaultOptions, {
            database: process.env.NODE_ENV === 'test' 
            ? "./src/common/database/database.test.sqlite" 
            : defaultOptions.database
        })
    );
}