# Passwords

## Setup
This module is ready to use without setup. The number of salting rounds defaults to 10 but you can change it by setting the `SALT_ROUNDS` environment variable.

## Usage
```typescript
import { generateHashedPassword, comparePassword } from '~/utils/passwords.utils.ts';
```