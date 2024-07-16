import { createMachine, assign } from 'xstate'
import { createActorContext } from '@xstate/react';

interface ICounterContext {
  count: number;
  value: number;
}

type TCounterEvent = {
  type: 'INCREMENT' | 'DECREMENT' | 'INCREMENT_BY_AMOUNT' | 'CHANGE';
};

const counterMachine = createMachine({
  types: {} as {
    context: ICounterContext;
    events: TCounterEvent;
  },
  id: 'counter',
  // 初始化状态
  initial: 'active',
  context: {
    count: 0,
    value: 100,
  },
  // 状态
  states: {
    inactive: {
      on: {
        INCREMENT: {
          actions: assign({ count: ({ context }) => context.count - 100 })
        },
        DECREMENT: {
          actions: assign({ count: ({ context }) => context.count - 1000 })
        },
        INCREMENT_BY_AMOUNT: {
          actions: assign({ count: ({ context }) => context.count - 10000 })
        },
        CHANGE: {
          target: 'active',
          actions: assign({ count: 0, value: 100 })
        },
      }
    },
    active: {
      on: {
        INCREMENT: {
          actions: assign({ count: ({ context }) => context.count + 1 })
        },
        DECREMENT: {
          actions: assign({ count: ({ context }) => context.count - 1 })
        },
        INCREMENT_BY_AMOUNT: {
          actions: assign({ count: ({ context }) => context.count + 10 })
        },
        CHANGE: {
          target: 'inactive',
          actions: assign({ count: 1000000, value: 1 })
        }
      }
    }
  }
})

const CounterMachineContext = createActorContext(counterMachine)

// 辅助器
const Helper = () => {
  const value = CounterMachineContext.useSelector((state) => state.context.value);

  return <h1>Helper { value } ---- {Date.now()}</h1>
}

// 监听器
const Listener = () => {
  const { count, state } = CounterMachineContext.useSelector((state) => {
    return {
      count: state.context.count,
      state: state.value as 'string'
    }
  });

  return <h1>{ state } count: {count}</h1>
}

// 控制器
const Controller = () => {
  const counterActorRef = CounterMachineContext.useActorRef();

  return <div className="controller">
  <button
    aria-label="Increment value"
    onClick={() => counterActorRef.send({ type: 'INCREMENT' })}
  >
    增加
  </button>
  <button
    aria-label="Decrement value"
    onClick={() => counterActorRef.send({ type: 'DECREMENT' })}
  >
    减少
  </button>
  <button
    aria-label="IncrementByAmount value"
    onClick={() => counterActorRef.send({ type: 'INCREMENT_BY_AMOUNT' })}
  >
    增加(10)
    </button>
  <button
    aria-label="IncrementByAmount value"
    onClick={() => counterActorRef.send({ type: 'CHANGE' })}
  >
    更改状态机 状态
  </button>
</div>
};

const App = () => {
  return (
    <CounterMachineContext.Provider logic={counterMachine}>
      <Controller />
      <Listener />
      <Helper />
    </CounterMachineContext.Provider>
  );
}

export default App
