import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction, Slice } from '@reduxjs/toolkit'

export interface CounterState {
  count: number;
  value: number;
}

export interface IncrementByAmountAction {
  increment: () => PayloadAction<void>
  decrement: () => PayloadAction<void>
  incrementByAmount: (amount: number) => PayloadAction<number>
}
const initialState: CounterState = {
  count: 0,
  value: 100,
}

export const counterSlice: Slice<CounterState> = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    increment: (state) => {
      // Redux 工具包允许我们在还原器中编写 "突变 "逻辑。它
      // 实际上不会改变状态，因为它使用的是 Immer 库 (https://immerjs.github.io/immer/)、
      // 它能检测到 "草稿状态 "的变化，并生成一个全新的
      // 不可变状态
      state.count += 1

      // https://juejin.cn/post/7157745748832944141
    },
    decrement: (state) => {
      state.count -= 1
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.count += action.payload
    },
  },
})

// 为每个案例简化函数生成动作创建器
export const { increment, decrement, incrementByAmount } = counterSlice.actions as unknown as IncrementByAmountAction

export default counterSlice.reducer
