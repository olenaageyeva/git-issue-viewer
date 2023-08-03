import axios from "axios"

import { useState, useEffect, useContext } from "react"
import { Results } from "../results/results"
import { Search } from "../Search/search"
import { Context } from "../Context/Context";

export const Viewer = () => {
    const { open, user, repo, data, setData } = useContext(Context);

    const handleSearch = async () => {
        if (user && repo) {
            const res = await axios.get(`/api/express_backend`, { params: { user, repo, open: open ? "open" : "closed" } })
            setData(res.data);
        }
    }

    useEffect(() => {
        if (user && repo) {
            handleSearch()
        }
    }, [open])


    return (
        <div className="bg-white w-screen h-fit flex-col divide-y divide-gray-100 mx-auto">
            <Search handleSearch={handleSearch} />
            <Results data={data} />
        </div>

    )
}