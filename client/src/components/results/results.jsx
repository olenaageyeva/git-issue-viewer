import { useContext } from "react"
import { Context } from "../Context/context";
import { IssueIcon } from "../Icons/issue-icon"
import { IssueCard } from "./issue-card"
import { Loader } from "../Loader/loader";



export const Results = () => {
    const { open, setOpen, loading, data } = useContext(Context);

    return < main className="w-full flex-col  p-8 m-4 divide-y divide-gray-600 p-4 bg-slate-50 rounded-md shadow" >
        <h3 className="flex gap-2 text-m font-semibold my-auto">
            <IssueIcon />  {!loading && <p>{data?.total_count} {open ? "Open" : "Closed"}</p>
            }
            <input className="ml-10" type="checkbox" onChange={() => setOpen(!open)} /> Show closed
        </h3>
        <section>
            {loading && <Loader />}
            {!loading && !!data?.items?.length && data?.items?.map((issue) =>
                <IssueCard {...issue} key={issue.id} />
            )}
        </section>
    </main>
}
