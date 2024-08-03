# clamp-v2

Clamp a value between two bounds.

[![CI](https://github.com/rocktimsaikia/clamp-v2/actions/workflows/main.yml/badge.svg)](https://github.com/rocktimsaikia/clamp-v2/actions/workflows/main.yml) [![npm](https://img.shields.io/npm/v/clamp-v2?color=bright)](https://npmjs.com/package/clamp-v2)

## Installation

```sh
pnpm add clamp-v2
```

## Usage

```javascript
import clamp from "clamp-v2";

clamp(1, 5, 10); // => 5
clamp(20, 5, 10); // => 10
clamp(8, 5, 10); // => 8
```

## API

### clamp(value, min, max)

Clamp a number between two given minimum and maximum bound.

#### Parameters:

##### 1. `value`

> Type: `number` \
> The number to be clamped.

##### 2. `min`

> Type: `number` \
> The minimum bound.

#### 3. `max`

> Type: `number` \
> The maximum bound.
