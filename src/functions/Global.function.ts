import { useContext } from "react";
import { GlobalContext } from "../stores/Global.context";
import * as models from "../types";
import { toast } from "react-toastify";

export const useGlobalContext = () => {
  const { state, setState } = useContext(GlobalContext);

  const addToCart = (cart: models.Cart) => {
    setState((prev) => {
      const value = { ...prev };

      // check if movie already exist
      const isExist = value.cart.find((item) => {
        if (item.id === cart.id) {
          toast.info("Item already exists in the cart!");
          return true;
        }
        return false;
      });

      // if not exist, add it to cart data
      if (!isExist) {
        value.cart.push(cart);

        // update local storage data
        localStorage.setItem("cart", JSON.stringify(value.cart));
        toast.success("Item added to cart successfully!");
      }

      return value;
    });
  };

  const removeFromCart = (movieId: number) => {
    setState((prev) => {
      const value = { ...prev };

      // remove the movie from the cart array
      const updatedCart = value.cart.filter((item) => {
        return item.id !== movieId;
      });

      value.cart = updatedCart;

      // update local storage data
      localStorage.setItem("cart", JSON.stringify(value.cart));

      return value;
    });
  };

  const clearCart = () => {
    setState((prev) => {
      const value = { ...prev };

      // Clear the cart array
      value.cart = [];

      // Update local storage data
      localStorage.removeItem("cart");

      toast.success("Cart cleared successfully!");

      return value;
    });
  };

  const checkout = () => {
    setState((prev) => {
      const value = { ...prev };

      // Clear the cart array
      value.cart = [];

      // Update local storage data
      localStorage.removeItem("cart");

      toast.success("Checkout successfully!");

      return value;
    });
  };

  return {
    state,
    addToCart,
    removeFromCart,
    clearCart,
    checkout
  };
};
