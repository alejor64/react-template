import { ProductButtons, ProductImg, ProductTitle } from "../components";
import { useShoppingCar } from "../hooks/useShoppingCar";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";
import "../styles/custom-styles.css";

export const ShoppingPage = () => {
  const { shoppingCart, onProductCountChange } = useShoppingCar();

  return (
    <div>
      <h1>ShoppingPage</h1>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            className="bg-dark text-white"
            value={shoppingCart[product.id]?.count}
            onChange={(e) => onProductCountChange(e)}
          >
            <ProductImg className="custom-img" />
            <ProductTitle className="text-bold" />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            key={key}
            product={product}
            value={product.count}
            className="bg-dark text-white"
            style={{ width: "100px" }}
            onChange={(e) => onProductCountChange(e)}
          >
            <ProductImg className="custom-img" />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
