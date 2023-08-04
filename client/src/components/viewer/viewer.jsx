import axios from "axios"

import {  useEffect, useContext } from "react"
import { Results } from "../Results/results"
import { Search } from "../Search/search"
import { Context } from "../Context/context";

export const Viewer = () => {
    const { open, user, repo, data, setData, setLoading } = useContext(Context);
    const HOST = process.env.NODE_ENV === 'production' ? 'https://api-express-backend.onrender.com' : ''

    const handleSearch = async () => {
        if (user && repo) {
            setLoading(true);
            const res = await axios.get(`${HOST}/api/express_backend`, { params: { user, repo, open: open ? "open" : "closed" } })
            setData(res.data);
            setLoading(false);
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