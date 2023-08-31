import { makeAutoObservable } from "mobx"

interface Modal {
    open: boolean
    body: JSX.Element | null
}

export default class ModalStore {
    static openModal(arg0: JSX.Element): void {
        throw new Error("Method not implemented.")
    }
    modal : Modal = {
        open: false,
        body: null
    }

    constructor() {
        makeAutoObservable(this)
    }

    openModal = (content: JSX.Element) => {
        this.modal.open = true
        this.modal.body = content
    }

    closeModal = () => {
        this.modal.open = false
        this.modal.body = null
    }
}