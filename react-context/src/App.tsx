import { createContext, useContext, useState } from "react";

const context = createContext<{
  count: number;
  value: number;
  setCount: (count: number) => void;
}>({
  count: 0,
  value: 0,
  setCount: () => { },
});

// 辅助器
const Helper = () => {
  const { value } = useContext(context);
  return <h1>Helper {value} ---- {Date.now()}</h1>
}

// 监听器
const Listener = () => {
  const { count } = useContext(context);
  return <h1>count: { count }</h1>
}

// 控制器
const Controller = () => {
  const { count, setCount } = useContext(context);

  return <div className="controller">
  <button
    aria-label="Increment value"
    onClick={() => setCount(count + 1)}
  >
    增加
  </button>
  <button
    aria-label="Decrement value"
    onClick={() => setCount(count - 1)}
  >
    减少
  </button>
  <button
    aria-label="IncrementByAmount value"
    onClick={() => setCount(count + 10)}
  >
    增加(10)
  </button>
</div>
};

const CountProvider = ({ children }: { children: React.ReactNode }) => {
  const [count, setCount] = useState(0);
  const [value] = useState(100);
  return (
    <context.Provider
      value={{
        count,
        setCount,
        value,
      }}
    >
      {children}
    </context.Provider>
  );
};

const App = () => {
  return (
    <CountProvider>
      <Controller />
      <Listener />
      <Helper />
    </CountProvider>
  );
}

export default App
