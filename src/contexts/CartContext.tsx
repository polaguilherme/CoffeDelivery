import { ReactNode, useState, useEffect } from "react";
import { Coffe } from "../pages/Home/components/CoffeCards";
import { createContext } from "react";
import { produce } from "immer";

export interface CartItem extends Coffe {
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  cartQuantity: number;
  cartItemsTotal: number;
  addCoffeInCart: (coffe: CartItem) => void;
  changeCartItemQuantity: (
    cartItemId: number,
    type: "increase" | "decrease"
  ) => void;
  removeCartItem: (cartItem: number) => void;
  cleanCart: () => void;
}

export const CartContext = createContext({} as CartContextType);

interface CartContextProviderProps {
  children: ReactNode;
}

const COFFEE_ITEMS_STORAGE_KEY = "coffeeDelivery:cartItems";

export function CartContextProvider({ children }: CartContextProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    const storedCartItems = localStorage.getItem(COFFEE_ITEMS_STORAGE_KEY);
    if (storedCartItems) {
      return JSON.parse(storedCartItems) as CartItem[];
    }
    return [];
  });
  const cartQuantity = cartItems.length;

  const cartItemsTotal = cartItems.reduce((total, cartItem) => {
    return total + cartItem.price * cartItem.quantity;
  }, 0);

  function addCoffeInCart(coffe: CartItem) {
    const coffeeAlreadyExistsInCart = cartItems.findIndex(
      (cartItem) => cartItem.id === coffe.id
    );

    const newCartItems = produce(cartItems, (draft) => {
      if (coffeeAlreadyExistsInCart < 0) {
        draft.push(coffe);
      } else {
        draft[coffeeAlreadyExistsInCart].quantity += coffe.quantity;
      }
    });

    setCartItems(newCartItems);
    console.log(cartItems);
  }

  function changeCartItemQuantity(
    cartItemId: number,
    type: "increase" | "decrease"
  ) {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistsInCart = cartItems.findIndex(
        (cartItems) => cartItems.id === cartItemId
      );

      if (coffeExistsInCart >= 0) {
        const Item = draft[coffeExistsInCart];
        draft[coffeExistsInCart].quantity =
          type === "increase" ? Item.quantity + 1 : Item.quantity - 1;
      }
    });

    setCartItems(newCart);
  }

  function removeCartItem(cartItemId: number) {
    const newCart = produce(cartItems, (draft) => {
      const coffeExistsIncart = cartItems.findIndex(
        (cartItems) => cartItems.id === cartItemId
      );

      if (coffeExistsIncart >= 0) {
        draft.splice(coffeExistsIncart, 1);
      }
    });

    setCartItems(newCart);
  }

  function cleanCart() {
    setCartItems([]);
  }

  useEffect(() => {
    localStorage.setItem(COFFEE_ITEMS_STORAGE_KEY, JSON.stringify(cartItems));
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        cartQuantity,
        cartItemsTotal,
        addCoffeInCart,
        changeCartItemQuantity,
        removeCartItem,
        cleanCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
