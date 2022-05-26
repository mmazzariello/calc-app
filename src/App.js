import React from "react";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Result from "./components/Result";
import "./App.css";
import Numbers from "./components/Numbers";

const App = () => {
  return (
    <main className="react-calculator">
      <Result value={"0"} />
      <div className="numbers">
        <Numbers onClickNumber={(number) => console.log(number)} />
      </div>
      <Functions onContentClear={(clear) => console.log(clear)} onDelete={(onDelete) => console.log(onDelete)} />
      <MathOperations
        onClickOperation={(operation) => console.log(operation)}
        onClickEqual={(equal) => console.log(equal)}
      />
    </main>
  );
};

export default App;
