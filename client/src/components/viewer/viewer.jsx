import axios from "axios"

import { useState, useEffect, useContext } from "react"
import { Results } from "../results/results"
import { Search } from "../Search/search"
import { Context } from "../Context/Context";

export const Viewer = () => {
    const { open, user, repo, data, setData } = useContext(Context);
    const HOST = process.env.NODE_ENV === 'production' ? 'https://api-express-backend.onrender.com' : ''

    const handleSearch = async () => {
        if (user && repo) {
            const res = await axios.get(`${HOST}/api/express_backend`, { params: { user, repo, open: open ? "open" : "closed" } })
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