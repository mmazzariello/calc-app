/* eslint no-eval: 0 */
import React, { useState } from "react";
import words from "lodash.words";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";
import Numbers from "./components/Numbers";

const App = () => {
  const [stack, setStack] = useState("");

  //items retorna el ultimo numero del array con Regex
  const items = words(stack, /[^-^+^*^/]+/g);

  const value = items.length > 0 ? items[items.length - 1] : 0;

  return (
    <main className="react-calculator">
      <Result value={value} />
      <div className="numbers">
        <Numbers onClickNumber={(number) => setStack(`${stack}${number}`)} />
      </div>
      <Functions
        onContentClear={(clear) => setStack("")}
        onDelete={() => {
          if (stack.lenght > 0) {
            const newStack = stack.substring(0, stack.lenght - 1);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => setStack(`${stack}${operation}`)}
        onClickEqual={(equal) => {
          setStack(eval(stack).toString());
        }}
      />
    </main>
  );
};

export default App;
