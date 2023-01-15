interface Server {
  host: string,
  port: number
}

interface Database {
  url: string,
}

interface Api {
  url: string
}

export interface Config {
  server: Server,
  database: Database,
  api: Api
}

export const configSchema = {
  server: {
    host: {
      format: String,
      default: '0.0.0.0',
      env: 'HOST'
    },
    port: {
      format: Number,
      default: 3000,
      env: 'PORT'
    },
  },
  database: {
    url: {
      format: String,
      default: '',
      env: 'DB_URL'
    },
  },
  api: {
    url: {
      format: String,
      default: '',
      env: 'API_ITUNES_URL'
    },
  }
}
