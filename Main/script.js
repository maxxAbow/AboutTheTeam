const employeeName = getElementById('name');
const employeeRole = getElementById('role');
const employeeEmail = getElementById('email');

const postData = (employeeForm) => {
    fetch('/api/reviews',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.striginfy(review)
    })
    .then((res) =>res.json())
    .catch(error);}

    ;

/* <a name="answers"></a>
A key/value hash containing the client answers in each prompt.

- **Key** The `name` property of the _question_ object
- **Value** (Depends on the prompt)
  - `confirm`: (Boolean)
  - `input` : User input (filtered if `filter` is defined) (String)
  - `number`: User input (filtered if `filter` is defined) (Number)
  - `rawlist`, `list` : Selected choice value (or name if no value specified) (String) */


//   <a name="questions"></a>
// A question object is a `hash` containing question related values:

// - **type**: (String) Type of the prompt. Defaults: `input` - Possible values: `input`, `number`, `confirm`, `list`, `rawlist`, `expand`, `checkbox`, `password`, `editor`
// - **name**: (String) The name to use when storing the answer in the answers hash. If the name contains periods, it will define a path in the answers hash.
// - **message**: (String|Function) The question to print. If defined as a function, the first parameter will be the current inquirer session answers. Defaults to the value of `name` (followed by a colon).
// - **default**: (String|Number|Boolean|Array|Function) Default value(s) to use if nothing is entered, or a function that returns the default value(s). If defined as a function, the first parameter will be the current inquirer session answers.
// - **choices**: (Array|Function) Choices array or a function returning a choices array. If defined as a function, the first parameter will be the current inquirer session answers.
//   Array values can be simple `numbers`, `strings`, or `objects` containing a `name` (to display in list), a `value` (to save in the answers hash), and a `short` (to display after selection) properties. The choices array can also contain [a `Separator`](#separator).
// - **validate**: (Function) Receive the user input and answers hash. Should return `true` if the value is valid, and an error message (`String`) otherwise. If `false` is returned, a default error message is provided.
// - **filter**: (Function) Receive the user input and answers hash. Returns the filtered value to be used inside the program. The value returned will be added to the _Answers_ hash.
// - **transformer**: (Function) Receive the user input, answers hash and option flags, and return a transformed value to display to the user. The transformation only impacts what is shown while editing. It does not modify the answers hash.
// - **when**: (Function, Boolean) Receive the current user answers hash and should return `true` or `false` depending on whether or not this question should be asked. The value can also be a simple boolean.
// - **pageSize**: (Number) Change the number of lines that will be rendered when using `list`, `rawList`, `expand` or `checkbox`.
// - **prefix**: (String) Change the default _prefix_ message.
// - **suffix**: (String) Change the default _suffix_ message.
// - **askAnswered**: (Boolean) Force to prompt the question if the answer already exists.
// - **loop**: (Boolean) Enable list looping. Defaults: `true`
// - **waitUserInput**: (Boolean) Flag to enable/disable wait for user input before opening system editor - Defaults: `true`

// `default`, `choices`(if defined as functions), `validate`, `filter` and `when` functions can be called asynchronously. Either return a promise or use `this.async()` to get a callback you'll call with the final value.
