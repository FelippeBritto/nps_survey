// import { ConnectionOptions } from 'typeorm';
// import * as environment from '../environments/environment';
 import { IApplication, ISwagger } from './interface';

export const application: IApplication = {
  port: 4000,
  title: 'SII - Sistema de cadastramento para o selo Infra+ de Integridade',
  description:
    'SII - Sistema de cadastramento para o selo Infra+ de Integridade',
   abbreviation: "environment.application.abbreviation",
   version: "environment.application.version",
   environment: "develop",
   uriPrefix: "environment.application.uriPrefix",
};

// export const swagger: ISwagger = {
//   ...environment.swagger,
//   bearerAuth: { in: 'header', type: 'http' },
// };

// export const connectionOptions: ConnectionOptions = {
//   ...environment.database,
// };

// export const jwtAuth = {
//   secret: 'EkYmlk0=',
//   signOptions: { expiresIn: '600s' },
//   ignoreExpiration: false,
// };

// export const passportDefault = {
//   defaultStrategy: 'jwt',
// };
