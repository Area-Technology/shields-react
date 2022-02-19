# Shields React Components

## Installation

To install with npm:

```sh
npm install @areatechnology/shields-react
```

To install with yarn:

```sh
yarn add @areatechnology/shields-react
```

## Usage

There are 5 components available, each rendering an SVG at 100% of the width and height of the parent container. You can pass in additional props into any of these components to add to the SVG.

### Shield

```jsx
import { Shield } from '@areatechnology/shields-react';

<Shield fieldId={...} colors={...} hardwareId={...} frameId={...} />
```

Renders an SVG with the configured shield.

`fieldId` must be a number between 0 and 299.
`colors` must be an array of 4 strings with hex colors.
`hardwareId` must be a number between 0 and 120.
`frameId` must be a number between 0 and 5.

### ShieldID

```jsx
import { ShieldID } from '@areatechnology/shields-react';

<ShieldID shieldId={...} />
```

Renders an SVG with the specified shield based on the Shields collection.

`shieldId` must be between 1 and 5000.

If a Shield has not yet been built, a placeholder shield will be rendered.

### Field

```jsx
import { Field } from '@areatechnology/shields-react';

<Field fieldId={...} colors={...} />
```

Renders an SVG with the configured Field.

`fieldId` must be a number between 0 and 299.
`colors` must be an array of 4 strings with hex colors.

### Hardware

```jsx
import { Hardware } from '@areatechnology/shields-react';

<Hardware hardwareId={...} />
```

Renders an SVG with the configured Hardware.

`hardwareId` must be a number between 0 and 120.

### Frame

```jsx
import { Frame } from '@areatechnology/shields-react';

<Frame frameId={...}/>
```

Renders an SVG with the configured frame.

`frameId` must be a number between 0 and 5.
