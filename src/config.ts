interface EnvConfig {
  httpPort: number;
  httpsPort: number;
  envName: string;
}

const environments: { [name: string]: EnvConfig } = {
  staging: { httpPort: 3000, httpsPort: 3001, envName: "staging" },
  production: { httpPort: 5000, httpsPort: 5001, envName: "production" },
};

const currentEnv =
  typeof process.env.NODE_ENV === "string"
    ? process.env.NODE_ENV.toLowerCase()
    : "staging";

export const environment = environments[currentEnv] ?? environments.staging;
