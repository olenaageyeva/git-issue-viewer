import axios from "axios"
import { useEffect, useContext } from "react"
import { Context } from "../Context/context";
import { Logo } from "../Icons/logo"

export const Search = () => {
    const { user, setUser, repo, setRepo, setLoading, open, setData, setError, error } = useContext(Context);

    const HOST = process.env.NODE_ENV === 'production' ? 'https://api-express-backend.onrender.com' : ''

    const handleSearch = async () => {
        if (user && repo) {
            setLoading(true);
            setError(null);
            try {
                const res = await axios.get(`${HOST}/api/express_backend`, { params: { user, repo, open: open ? "open" : "closed" } })
                setData(res.data);
            } catch (err) {
                console.log("!!!!!!!!!!!!!!!!!!!!!!!", err)
                setError(err.message);
            }
            setLoading(false);
        }
    }

    useEffect(() => {
        if (user && repo) {
            handleSearch()
        }
    }, [open])

    return <header className="flex justify-between p-4">
        <Logo />
        <p className="my-auto font-semibold mr-10">GitHubIssue Viewer</p>
        <form onSubmit={(e) => { e.preventDefault(); handleSearch() }} className="flex flex-auto w-fit gap-4" >

            <input className="text-sm text-gray-900 placeholder-gray-400 rounded-md pl-3 ring-1 ring-gray-200 shadow-sm " type="text" placeholder="Enter user..." value={user} onChange={(e) => setUser(e.target.value)} />
            <input className="text-sm text-gray-900 placeholder-gray-400 rounded-md pl-3 ring-1 ring-gray-200 shadow-sm " type="text" placeholder="Enter repo..." value={repo} onChange={(e) => setRepo(e.target.value)} />
            <button type="submit" className="ring-1 ring-gray-200 rounded-md px-3">
                <svg width="20" height="20" fill="currentColor" className="mt-1 text-gray-400 pointer-events-none" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
            </button>
        </form >
    </header>
}