// import { SecuritySchemeObject } from '@nestjs/swagger/dist/interfaces/open-api-spec.interface';

export interface ISwagger {
  readonly enable: boolean;
  readonly uri: string;
//   readonly bearerAuth?: SecuritySchemeObject;
}
