import { useContext } from "react"
import { Context } from "../Context/context";
import { IssueIcon } from "../Icons/issue-icon"
import { IssueCard } from "./issue-card"
import { Loader } from "../Loader/loader";



export const Results = () => {
    const { open, setOpen, loading, data, error } = useContext(Context);

    return < main className="w-full min-w-24 flex-col m-4 divide-y divide-gray-600 p-4 bg-slate-50 rounded-md shadow" >
        <h3 className="flex gap-2">
            <IssueIcon />  {!loading && !!data?.items?.length && <p>{data?.total_count} {open ? "Open" : "Closed"}</p>
            }
            <input className="ml-10" type="checkbox" onChange={() => setOpen(!open)} /> Show closed
        </h3>
        <section className="divide-y divide-gray-300">
            {loading && <Loader />}
            {!loading && !error &&  !!data?.items?.length && data?.items?.map((issue) =>
                <IssueCard {...issue} key={issue.id} />
            )}
            {!loading && error && <p className="p-4 text-center text-red-400">Error: {error}</p>}
        </section>
    </main>
}
