# Environment Variable Schema and Validation

By defining a schema for your environment variables, you can ensure that your environment variables are
always in the correct format. You'll also get type safety and autocompletion in your IDE.

> ⚠️ **_NOTE:_** If an environment variable is missing, your application will throw an error.

## Setup

1. Install the `zod` package.

2. Create a file to store your environment variables schema. A good place would be
   `src/utils/env-variables.ts`.

3. Copy the following code into the file you created.
    ```typescript
    import {z} from 'zod';
    
    const envVariables = z.object({
        DATABASE_URL: z.string(),
        SECRET_KEY: z.string(),
        APP_ENV: z.union([
            z.literal('development'),
            z.literal('staging'),
            z.literal('production'),
        ]),
    })
    
    envVariables.parse(process.env)
    
    declare global {
        namespace NodeJS {
            interface ProcessEnv extends z.infer<typeof envVariables> {}
        }
    }
    ```
4. Add all of your environment variables.
5. Import the file into your project and use the `process.env` object as you normally would. In Express, import in the main `server.ts` file.
   ```typescript
   import './utils/env-variables';
   ```

