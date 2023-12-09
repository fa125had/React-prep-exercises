import { useState } from "react";
import Count from "./Count";
import Button from "./Button";

const Counter = () => {
  const [count, setCount] = useState(0);

  const feedback = count > 10 ? "It is higher than 10!" : "Keep counting...";

  const addOne = () => {
    setCount(prev => prev + 1)
  }

  return (
    <div>
      <h1>Counter App</h1>
      <Count count={count} />
      <Button addOne={addOne} />
      <p>{feedback}</p>
    </div>
  );
};

export default Counter;
