import { useContext } from "react";
import { Contexts } from "contexts/Context";

export const useModalState = () => {
  const context = useContext(Contexts)
  return context;
}