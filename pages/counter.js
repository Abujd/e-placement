"use client";

import { Provider } from "react-redux";
import Counter from "@/components/counter/Counter";
import { store } from "@/utils/store";

export default function CounterMain() {
  return (
    <Provider store={store}>
      <Counter />
    </Provider>
  );
}
