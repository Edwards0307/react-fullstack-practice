import { describe, expect, test } from "vitest";
import { add } from "./math.helper";

describe("add", () => {
  test("numeros positivos", () => {
    //! 1. Arrange
    const a = 3;
    const b = 5;

    //! 2. Act
    const result = add(a, b);

    //! 3. Assert
    expect(result).toBe(8);
  });

  test("Numeros negativos", () => {
    const a = -4;
    const b = -6;

    const result = add(a, b);

    expect(result).toBe(-10);
  });

  test("Un numero positivo un numero negativo", () => {
    const a = -3;
    const b = 7;

    const result = add(a, b);

    expect(result).toBe(4);
  });

  test("Suma con 0", () => {
    const a = 0;
    const b = 9;

    const result = add(a, b);

    expect(result).toBe(9);
  });

  test("Decimales", () => {
    const a = 1.5;
    const b = 2.5;

    const result = add(a, b);

    expect(result).toBe(4.0);
  });
});


// Resta

// Positivo mayor menos positivo menor: 10 - 3 = 7
// Positivo menor menos positivo mayor (resultado negativo): 3 - 10 = -7
// Con cero: 5 - 0 = 5
// Números negativos: -5 - (-3) = -2
// Decimales: 4.5 - 1.5 = 3.0



// Multiplicación

// Dos positivos: 4 × 6 = 24
// Positivo × negativo: 5 × (-3) = -15
// Dos negativos: -4 × (-3) = 12
// Por cero: 7 × 0 = 0
// Por uno (identidad): 9 × 1 = 9
// Decimales: 2.5 × 4 = 10.0