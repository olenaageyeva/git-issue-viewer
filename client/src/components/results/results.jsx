import { useContext } from "react"
import { Context } from "../Context/Context";
import { IssueIcon } from "../IssueIcom/issue-icon"
import { IssueCard } from "./issue-card"



export const Results = ({ data = {} }) => {
    const {open, setOpen} = useContext(Context);

    return < main className="w-full flex-col  p-8 m-4 divide-y divide-gray-600 p-4 bg-slate-50 rounded-md shadow" >
        <h3 className="flex gap-2 text-m font-semibold my-auto">
            <IssueIcon />  {data?.total_count} {open ? "Open" : "Closed"}
            <input className="ml-10" type="checkbox" onChange={() => setOpen(!open)} /> Show closed
        </h3>
        <section>
            {data?.items?.length && data?.items?.map((issue) =>
                <IssueCard {...issue} key={issue.id} />
            )}
        </section>
    </main>
}
