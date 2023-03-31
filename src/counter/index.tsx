import { useState } from "react";

function useCounter() {
  const [state, setStete] = useState(0);
  function decrease() {
    setStete(state - 1);
  }
  function reset() {
    setStete(0);
  }
  function increase() {
    setStete(state + 1);
  }
  return { state, decrease, reset, increase };
}

export function Counter() {
  const { decrease, increase, reset, state } = useCounter();
  const stateStyle = () => {
    if (state === 0) return "counter__state";
    if (state >= 0) return "counter__state--positive";
    if (state <= 0) return "counter__state--negative";
  };
  return (
    <section className="counter">
      <h3>counter number</h3>
      <span className={stateStyle()}>{state}</span>
      <div className="counter__buttons">
        <button className="btn--decrease" onClick={decrease}>
          decrease
        </button>
        <button className="btn--reset" onClick={reset}>
          reset
        </button>
        <button className="btn--increase" onClick={increase}>
          Increase
        </button>
      </div>
    </section>
  );
}
