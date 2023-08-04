import { createContext } from "react";

const defaultContext = {
    user: "",
    setUser: (value) => { },
    repo: "",
    setRepo: (value) => { },
    open: true,
    setOpen: (value) => { },
    data: {},
    setData: (value) => { },
    loading: false,
    setLoading: (value) => { }
}

export const Context = createContext(defaultContext);