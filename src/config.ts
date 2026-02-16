import * as v from 'valibot';

const configSchema = v.object({
    REQUIRED_ENV_VARIABLE: v.string(),
});

export const configuration = v.parse(configSchema, {
    REQUIRED_ENV_VARIABLE: process.env.REQUIRED_ENV_VARIABLE
});

export const configurationFactory = () => configuration;