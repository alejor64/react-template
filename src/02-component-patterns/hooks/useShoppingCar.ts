import { useState } from "react";
import { Product, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCar = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({
    count,
    product,
  }: {
    product: Product;
    count: number;
  }) => {
    setShoppingCart((prevState) => {
      const productInCard: ProductInCart = prevState[product.id] || {
        ...product,
        count: 0,
      };

      // Se debe agregar el producto
      if (Math.max(productInCard.count + count, 0)) {
        productInCard.count += count;
        return {
          ...prevState,
          [product.id]: productInCard,
        };
      }

      // Se debe borrar producto
      delete prevState[product.id];
      return {
        ...prevState,
      };
    });
  };

  return {
    shoppingCart,
    onProductCountChange,
  }
}
