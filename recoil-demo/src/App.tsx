import { RecoilRoot, atom, useRecoilState, useRecoilValue } from 'recoil';

const countState = atom({
  key: 'countState',
  default: 0,
});

const valueState = atom({
  key: 'valueState',
  default: 100,
});

// 辅助器
const Helper = () => {
  const value = useRecoilValue(valueState)

  return <h1>Helper {value} ---- {Date.now()}</h1>
}

// 监听器
const Listener = () => {
  const count = useRecoilValue(countState)

  return <h1>count: { count }</h1>
}

// 控制器
const Controller = () => {
  const [, setCount] = useRecoilState(countState)

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
    // 必须使用 RecoilRoot 包裹组件
    <RecoilRoot>
      <Controller />
      <Listener />
      <Helper />
    </RecoilRoot>
  );
}

export default App
