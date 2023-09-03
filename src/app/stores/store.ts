import { createContext, useContext } from "react";
import ModalStore from "./modalStore";
import CommonStore from "./commonStore";
import BlogStore from "./blogStore";


interface Store {
    modalStore: ModalStore,
    commonStore: CommonStore,
    blogStore: BlogStore
}

export const store: Store = {
    modalStore: new ModalStore(),
    commonStore: new CommonStore(),
    blogStore: new BlogStore()
}

export const StoreContext = createContext(store)

export function useStore() {
    return useContext(StoreContext)
}