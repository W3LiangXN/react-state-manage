import { proxy, useSnapshot } from 'valtio';

const counterStore = proxy({
  count: 0,
  value: 100,
  increment() {
    this.count++;
  },
  decrement() {
    this.count--;
  },
  incrementByAmount() {
    this.count += 10;
  }
})

// 辅助器
const Helper = () => {
  const { value } = useSnapshot(counterStore)
  return <h1>Helper {value} ---- {Date.now()}</h1>
}

// 监听器
const Listener = () => {
  const { count } = useSnapshot(counterStore)
  return <h1>count: { count }</h1>
}

// 控制器
const Controller = () => {
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
    aria-label="IncrementByAmount value"
    onClick={() => counterStore.incrementByAmount()}
  >
    增加(10)
  </button>
</div>
};

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
