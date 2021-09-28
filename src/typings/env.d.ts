declare namespace NodeJS {
  type ProcessEnv = {
    readonly LC_APP_ID: string
    readonly LC_APP_KEY: string
    readonly LC_MASTER_KEY: string
    readonly LC_SERVER_URL: string
    readonly BASE_URL: string
  }
}
