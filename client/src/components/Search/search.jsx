import { useContext } from "react"
import { Context } from "../Context/Context";
import { Logo } from "../Logo/logo"

export const Search = ({ handleSearch }) => {
    const {user, setUser, repo, setRepo} = useContext(Context);

    return <header className="flex flex-row justify-beetween min-w-max item-start space-x-4 p-4">
        <Logo />
        <p className="my-auto">Github Issues Viewer </p>
        <form onSubmit={(e) => { e.preventDefault(); handleSearch() }} className="flex gap-4" >

            <input className="text-sm  text-gray-900 placeholder-gray-400 rounded-md pl-5 ring-1 ring-gray-200 shadow-sm " type="text" placeholder="Enter user..." value={user} onChange={(e) => setUser(e.target.value)} />
            <input className="text-sm  text-gray-900 placeholder-gray-400 rounded-md pl-10 ring-1 ring-gray-200 shadow-sm " type="text" placeholder="Enter repo..." value={repo} onChange={(e) => setRepo(e.target.value)} />            
            <button type="submit" className="ring-1 ring-gray-200 rounded-md px-3">
                <svg width="20" height="20" fill="currentColor" className="mt-1 text-gray-400 pointer-events-none group-focus-within:text-blue-500" aria-hidden="true">
                    <path fillRule="evenodd" clipRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" />
                </svg>
            </button>
        </form >
    </header>
}