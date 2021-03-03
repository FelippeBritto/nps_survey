import 'reflect-metadata' // Import first
import express from 'express';
import createConnection from "./common/database" // Index don't need be especified
import { router } from './api/routes/routes';

createConnection();

const app = express();

app.use(express.json());

app.use(router);

export { app }