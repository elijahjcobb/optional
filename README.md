# Optional
Replicates Swift's Optional, hold a value or undefined, written in TypeScript.

## Usage
```typescript
import Optional from "@elijahjcobb/optional";

let optional: Optional<number> = new Optional<number>(1234);
if (optional.hasValue()) console.log(optional.getValue());
else console.log("NO VALUE");

```


## TypeScript
All classes contain TypeScript declaration files. You can also view all the [source code on GitHub](https://github.com/elijahjcobb/optional/tree/master/ts).

## Bugs
If you find any bugs please [create an issue on GitHub](https://github.com/elijahjcobb/optional/issues) or if you are old fashioned email me at [elijah@elijahcobb.com](mailto:elijah@elijahcobb.com).