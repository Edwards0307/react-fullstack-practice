import { useState } from "react";
import "./ItemCounter.css";

interface props {
  name: string;
  quantity: number;
}

export function ItemCounter({ name, quantity }: props) {
  const [cant, setCant] = useState<number>(quantity);

  const handleOnClick = (isSum: boolean) => {
    if (cant === 0 && !isSum) return;

    setCant((prev) => (isSum ? prev + 1 : prev - 1));
  };
  return (
    <section className="item-row">
      <span
        className="item-text"
        style={{
          color: cant === 0 ? "red" : "black",
        }}
      >
        {name}
      </span>
      <button onClick={() => handleOnClick(false)}>-1</button>
      <span>{cant}</span>
      <button onClick={() => handleOnClick(true)}>+1</button>
    </section>
  );
}
