# 基础类型
* Boolean 
   * 示例
  ```typescript
  let isDone: boolean = false;
  ```
* Number   
   * 示例
  ```typescript
  let decimal: number = 6;
  let hex: number = 0xf00d;
  let binary: number = 0b1010;
  let octal: number = 0o744;
  let big: bigint = 100n;
  ```
* String
  * 示例
  ``` typescript
  let color: string = "blue";
  color = 'red';

  let fullName: string = `Bob Bobbington`;
  let age: number = 37;
  let sentence: string = `Hello, my name is ${fullName}.

  I'll be ${age + 1} years old next month.`;
  ```
* Array
  * 示例
  ```typescript
  let list: number[] = [1, 2, 3];
  let list: Array<number> = [1, 2, 3];
  ```
* Tuple
  * 示例
  ```typescript
  let x: [string, number];
  // Initialize it
  x = ["hello", 10]; // OK
  ```
* Enum
   * 示例
   ```typescript
   enum Color {
      Red,
      Green,
      Blue,
   }
   let c: Color = Color.Green;
   let colorName: string = Color[2];
   ```
* Unknown
  * 示例
    ```typescript
    let notSure: unknown = 4;
    notSure = "maybe a string instead";

    // OK, definitely a boolean
    notSure = false;
    declare const maybe: unknown;
    // 'maybe' could be a string, object, boolean, undefined, or other types
    const aNumber: number = maybe;
    Type 'unknown' is not assignable to type 'number'.

    if (maybe === true) {
    // TypeScript knows that maybe is a boolean now
    const aBoolean: boolean = maybe;
    // So, it cannot be a string
    const aString: string = maybe;
    Type 'boolean' is not assignable to type 'string'.
    }

    if (typeof maybe === "string") {
    // TypeScript knows that maybe is a string
    const aString: string = maybe;
    // So, it cannot be a boolean
    const aBoolean: boolean = maybe;
    Type 'string' is not assignable to type 'boolean'.
    }
    ```