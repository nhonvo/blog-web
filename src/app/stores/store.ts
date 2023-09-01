import { createContext, useContext } from "react";
import ModalStore from "./modalStore";
import CommonStore from "./commonStore";


interface Store {
    modalStore: ModalStore,
    commonStore: CommonStore
}

export const store: Store = {
    modalStore: new ModalStore(),
    commonStore: new CommonStore(),
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}