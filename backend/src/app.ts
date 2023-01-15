import express from 'express';
import cors from 'cors';

import { Config } from './config/config';
import { BaseController } from './controllers/base.controller';

export class App {
  private config: Config;
  private app: express.Application;

  constructor(config: Config, controllers: BaseController[]) {
    this.app = express();
    this.config = config;

    this.app.use(express.json());
    this.app.use(cors());
    this.initializeControllers(controllers);
  }

  private initializeControllers(controllers: BaseController[]) {
    controllers.forEach((controller) => {
      this.app.use('/', controller.router);
    });
  }

  public listen() {
    this.app.listen(
      this.config.server.port, this.config.server.host, 511, () => {
        console.log(`The application is listening on ${this.config.server.host}:${this.config.server.port}!`);
      });
  }
}
