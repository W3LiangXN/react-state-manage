import { useSelector, useDispatch } from "react-redux";
import {
  decrement,
  increment,
  incrementByAmount,
} from "./store/counter/counterSlice";
import { RootState } from "./store";

const Helper = () => {
  const value = useSelector((state: RootState) => state.counter.value);

  return <h1>Helper {value} ---- {Date.now()}</h1>
}

const Listener = () => {
  const count = useSelector((state: RootState) => state.counter.count);

  return <h1>count: { count }</h1>
}

const Controller = () => {
  const dispatch = useDispatch();

  return <div className="controller">
    <button
      aria-label="Increment value"
      onClick={() => dispatch(increment())}
    >
      增加
    </button>
    <button
      aria-label="Decrement value"
      onClick={() => dispatch(decrement())}
    >
      减少
    </button>
    <button
      aria-label="incrementByAmount value"
      onClick={() => dispatch(incrementByAmount(10))}
    >
      增加(10)
    </button>
  </div>
}

const App = () => {
  return (
    <div>
      <Controller />
      <Listener />
      <Helper />
    </div>
  );
};

export default App;
