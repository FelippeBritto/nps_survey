export interface IDatabase {
    [type: string]: any;
    host: string;
    port: number;
    username: string;
    password: string;
    sid: string;
    logging: boolean;
    synchronize: boolean; // rescreve nova tabelas
    autoLoadEntities: boolean;
    entities?: any;
  }
  