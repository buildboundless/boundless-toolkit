# Prisma Tools

## Setup

1. Create an Enum in the `schema.prisma` file.
2. Import the Enum and generate a Display Map.

## Usage

`generateDisplayEnumFunc` creates helper functions for easily using the display maps in front end components.

```typescript
import { ExampleEnum } from '@prisma/client';
import { generateDisplayEnumFunc } from 'boundless-toolkit';

export const DisplayExampleEnum: Record<ExampleEnum, string> = {
  [ExampleEnum.EXAMPLE_1]: 'Example 1',
  [ExampleEnum.EXAMPLE_2]: 'Example 2',
  [ExampleEnum.EXAMPLE_3]: 'Example 3',
};

export const displayExampleEnum = generateDisplayEnumFunc(DisplayExampleEnum);

// Then displayExampleEnum can be used to display a human readable version of the enum that is returned from the DB.

const exampleLabel = displayExampleEnum(ExampleEnum.EXAMPLE_1); // -> 'Example 1'
```

`createEnumOptions` creates an array of `SelectOption` objects so you can easily use the DisplayMap in select components.

```typescript
import { ExampleEnum } from '@prisma/client';
import { createEnumOptions } from 'boundless-toolkit';

export const DisplayExampleEnum: Record<ExampleEnum, string> = {
  [ExampleEnum.EXAMPLE_1]: 'Example 1',
  [ExampleEnum.EXAMPLE_2]: 'Example 2',
  [ExampleEnum.EXAMPLE_3]: 'Example 3',
};

<SelectField
  name="exampleEnum"
  label="Example Enum"
  placeholder="Select Example Option"
  options={createEnumOptions(ExampleEnum)}
/>;
```
