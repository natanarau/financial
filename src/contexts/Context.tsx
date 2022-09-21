import React from "react";

type ContextProps = {
  modalOpen: boolean;
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>
  expense: boolean;
  setExpense: React.Dispatch<React.SetStateAction<boolean>>
  revenue: boolean;
  setRevenue: React.Dispatch<React.SetStateAction<boolean>>
  cardExpense: boolean;
  setCardExpense: React.Dispatch<React.SetStateAction<boolean>>
  sideBarState: boolean;
  setSideBarState: React.Dispatch<React.SetStateAction<boolean>>
}

type ProviberProps = {
  children: React.ReactNode
}

export const Contexts = React.createContext<ContextProps>({} as ContextProps);

export const Provider = ({children}:ProviberProps) => {
  const [modalOpen, setModalOpen] = React.useState(false)
  const [expense, setExpense] = React.useState(false)
  const [revenue, setRevenue] = React.useState(false)
  const [cardExpense, setCardExpense] = React.useState(false)
  const [sideBarState, setSideBarState] = React.useState(true)

  return (
    <Contexts.Provider value={{ modalOpen, setModalOpen, expense, setExpense, revenue, setRevenue, cardExpense, setCardExpense, sideBarState, setSideBarState}}>
        {children}
    </Contexts.Provider>
  );
}