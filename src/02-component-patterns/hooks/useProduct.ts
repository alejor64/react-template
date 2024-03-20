import { useEffect, useRef, useState } from "react";
import { OnChangeArgs, Product } from "../interfaces/interfaces";

interface Args {
  product: Product;
  value?: number;
  onChange?: (args: OnChangeArgs ) => void;
}

export const useProduct = ({product, value = 0, onChange}: Args) => {
  const [counter, setCounter] = useState(value);

  const isControled = useRef(!!onChange);

  useEffect(() => {
    setCounter(value);
  }, [value])
  

  const handleIncreaseBy = (value: number) => {
    if(isControled.current) {
      return onChange!({product, count: value});
    }
    const newCounter = Math.max(counter + value, 0);
    setCounter(newCounter);
  };

  return {
    counter,
    handleIncreaseBy,
  }
};