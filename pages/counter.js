"use client";

import { Provider } from "react-redux";
import Counter from "@/components/counter/Counter";
import { store } from "@/utils/store";
import { CounterProvider } from "@/utils/counterContext";

export default function CounterMain() {
  return (
    <Provider store={store}>
      <CounterProvider>
        <Counter />
      </CounterProvider>
    </Provider>
  );
}
