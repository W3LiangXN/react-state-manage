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
      state.count += 1
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
