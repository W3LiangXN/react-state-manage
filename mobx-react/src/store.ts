// store.js
import { makeAutoObservable } from "mobx";

class CounterStore {
  count = 0;
  value = 100;

  constructor() {
    makeAutoObservable(this);
  }

  increment() {
    this.count++;
  }

  decrement() {
    this.count--;
  }

  incrementByAmount() {
    this.count += 10;
  }
}

const counterStore = new CounterStore();
export default counterStore;
