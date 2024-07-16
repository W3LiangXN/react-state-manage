import { atom, useAtom } from 'jotai'

const countAtom = atom(0)
const valueAtom = atom(100);

// 辅助器
const Helper = () => {
  const [value] = useAtom(valueAtom)

  return <h1>Helper {value} ---- {Date.now()}</h1>
}

// 监听器
const Listener = () => {
  const [count] = useAtom(countAtom)

  return <h1>count: { count }</h1>
}

// 控制器
const Controller = () => {
  const [, setCount] = useAtom(countAtom)

  return <div className="controller">
  <button
    aria-label="Increment value"
    onClick={() => setCount(count => count + 1)}
  >
    增加
  </button>
  <button
    aria-label="Decrement value"
    onClick={() => setCount(count => count - 1)}
  >
    减少
  </button>
  <button
    aria-label="IncrementByAmount value"
    onClick={() => setCount(count => count + 10)}
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
