import { create } from 'zustand';

interface ICountState {
  count: number;
  value: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: () => void;
}

const useCountStore = create<ICountState>((set) => ({
  count: 0,
  value: 100,
  increment: () => set((state) => ({ count: state.count + 1 })),
  decrement: () => set((state) => ({ count: state.count - 1 })),
  incrementByAmount: () => set((state) => ({ count: state.count + 10 })),
}));

// 辅助器
const Helper = () => {
  const value = useCountStore((state) => state.value)
  return <h1>Helper {value} ---- {Date.now()}</h1>
}

// 监听器
const Listener = () => {
  const count = useCountStore((state) => state.count)
  return <h1>count: { count }</h1>
}

// 控制器
const Controller = () => {
  const increment = useCountStore((state) => state.increment)
  const decrement = useCountStore((state) => state.decrement)
  const incrementByAmount = useCountStore((state) => state.increment)

  return <div className="controller">
  <button
    aria-label="Increment value"
    onClick={() => increment()}
  >
    增加
  </button>
  <button
    aria-label="Decrement value"
    onClick={() => decrement()}
  >
    减少
  </button>
  <button
    aria-label="IncrementByAmount value"
    onClick={() => incrementByAmount()}
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
