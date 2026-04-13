import { ItemCounter } from "./shopping-cart/ItemCounter";

interface itemCart {
  productName: string;
  quantity: number;
}

const itemsCasrt: itemCart[] = [
  { productName: "Nintendo Switch 2", quantity: 1 },
  { productName: "Pro Controller", quantity: 2 },
  { productName: "Super Smash", quantity: 4 },
];

export function FirstSteps() {
  return (
    <>
      <h1>Carrito de compras</h1>
      {itemsCasrt.map(({ productName, quantity }) => (
        <ItemCounter key={productName} name={productName} quantity={quantity} />
      ))}
    </>
  );
}
