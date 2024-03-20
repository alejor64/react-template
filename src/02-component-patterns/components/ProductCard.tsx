import { CSSProperties, ReactElement, createContext } from "react";
import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import {
  Product,
  ProductContextProps,
  OnChangeArgs,
} from "../interfaces/interfaces";
import { ProductImg } from "./ProductImg";
import { ProductTitle } from "./ProductTitle";
import { ProductButtons } from "./ProductButtons";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;

export interface Props {
  children?: ReactElement | ReactElement[];
  className?: string;
  product: Product;
  style?: CSSProperties;
  value?: number;
  onChange?: (args: OnChangeArgs) => void;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  value,
  onChange,
}: Props) => {
  const { counter, handleIncreaseBy } = useProduct({
    onChange,
    product,
    value,
  });

  return (
    <Provider value={{ counter, handleIncreaseBy, product }}>
      <div className={`${styles.productCard} ${className}`} style={style}>
        {children}
      </div>
    </Provider>
  );
};

ProductCard.Title = ProductTitle;
ProductCard.Image = ProductImg;
ProductCard.Buttons = ProductButtons;
