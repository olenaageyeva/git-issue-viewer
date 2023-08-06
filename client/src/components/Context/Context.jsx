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
    setLoading: (value) => { },
    selected: "",
    setSelected: (value) => { },
    error: "",
    setError: (value) => { }
}

export const Context = createContext(defaultContext);