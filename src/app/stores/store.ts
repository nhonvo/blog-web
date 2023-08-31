import { createContext, useContext } from "react";
import ModalStore from "./modalStore";


interface Store {
    modalStore: ModalStore,
}

export const store: Store = {
    modalStore: new ModalStore(),
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}