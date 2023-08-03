import { createContext } from "react";

const defaultContext = {
    user: "",
    setUser: (value) => { },
    repo: "",
    setRepo: (value) => { },
    open: true,
    setOpen: (value) => { },
    data: {},
    setData: (value) => { }
}

export const Context = createContext(defaultContext);