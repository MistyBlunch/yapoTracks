import convict from 'convict';
import dotenv from 'dotenv';

import { connect } from 'mongoose';

import { App } from './app';
import { configSchema } from './config/config';
import { TrackController } from './controllers/track.controller';
import { TrackRepository } from './models/repositories/track.repository';

dotenv.config();

const config = convict(configSchema).getProperties();

const trackRepository = new TrackRepository();

const app = new App(config, [
  new TrackController(trackRepository, config),
]);

let dbConnection = connect(config.database.url)

Promise.all([dbConnection]).then(async () => {
  app.listen();
})
