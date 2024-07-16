import { observer } from "mobx-react";
import counterStore from "./store";

const Controller = observer(() => {
  return <div className="controller">
  <button
    aria-label="Increment value"
    onClick={() => counterStore.increment()}
  >
    增加
  </button>
  <button
    aria-label="Decrement value"
    onClick={() => counterStore.decrement()}
  >
    减少
  </button>
  <button
    aria-label="incrementByAmount value"
    onClick={() => counterStore.incrementByAmount()}
  >
    增加(10)
  </button>
</div>
});

const Listener = observer(() => {
  return <h1>count: { counterStore.count }</h1>
})

const Helper = observer(() => {
  return <h1>Helper {counterStore.value} ---- {Date.now()}</h1>
})

const App = () => {
  return (
    <div>
      <Controller />
      <Listener />
      <Helper />
    </div>
  );
}

export default App
