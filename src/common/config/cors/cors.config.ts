/**
 * Documentação oficial CORS: https://github.com/expressjs/cors#configuration-options
 */

export const corsConfig = {
    origin: ['Allow_any_origin'],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    preflightContinue: false,
    optionsSuccessStatus: 204,
    exposedHeaders: '',
  };
  