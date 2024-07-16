import { create } from "zustand";
import { devtools } from "zustand/middleware";

interface ICountState {
  count: number;
  value: number;
  increment: () => void;
  decrement: () => void;
  incrementByAmount: () => void;
}

const useCountStore = create<ICountState>()(
  devtools(
    (set) => ({
      count: 0,
      value: 100,
      increment: () => set((state) => ({ count: state.count + 1 })),
      decrement: () => set((state) => ({ count: state.count - 1 })),
      incrementByAmount: () => set((state) => ({ count: state.count + 10 })),
    }),
    {
      name: "user_store", // 浏览器调试时显示的 store 名称
      enabled: true, // 是否开启调试工具(通常根据当前环境开启/关闭)
    }
  )
);

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
  const { increment, decrement, incrementByAmount } = useCountStore()

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
