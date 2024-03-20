import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as PropsBtns } from "../components/ProductButtons";
import { Props as PropsImg } from "../components/ProductImg";
import { Props as PropsTitle } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  product: Product;
  handleIncreaseBy: (value: number) => void;
}

export interface ProductCardHOCProps {
  ({ children, product }: ProductCardProps): JSX.Element,
  Buttons: (Props: PropsBtns) => JSX.Element,
  Image: (Props: PropsImg) => JSX.Element,
  Title: (Props: PropsTitle) => JSX.Element,
}

export interface OnChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}