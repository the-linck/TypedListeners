# TypedListeners

Event listeners that convert the value provided by an Input/Textarea ChangeEvent into the desired data type.



## Common syntax

```ts
    TypeListener(setValue: Dispatch<SetStateAction<type>>)
```

Creates an Event Listener ideal for Change Events, that automatically converts the string value from the Event into `type` data type before passing it to `setValue`.

Made to be used with functional components in React.


## Supported types

*  BigInt: `BigIntListener`
*  boolean: `BooleanListener`
*  Date: `DateListener`
*  number: `NumberListener`
*  string: `StringListener`



## Use case

```tsx
const [score, setScore] = useState(0);

// ...

<input
    name="score"
    onChange={NumberListener(setScore)}
    value={score}
/>

```