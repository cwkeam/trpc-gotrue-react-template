export declare global {
	namespace NodeJS {
		interface ProcessEnv {
			PORT: string
			
			GOTRUE_URL: string
			GOTRUE_JWT_SECRET: string
			

			DATASOURCE_TYPE: string
			DATASOURCE_HOST: string
			DATASOURCE_PORT: string
			DATASOURCE_USERNAME: string
			DATASOURCE_PASSWORD: string
			DATASOURCE_DATABASE: string

	
		}
	}
}
