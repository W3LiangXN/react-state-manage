// index.ts 文件

import { configureStore } from "@reduxjs/toolkit";
import counterSlice from "./counter/counterSlice";

// configureStore创建一个redux数据
const store = configureStore({
  // 合并多个Slice
  reducer: {
    counter: counterSlice
  },
});

export default store;


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
