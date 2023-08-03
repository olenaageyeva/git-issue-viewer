import { getTimeAgoString } from "../../utils/time-utils"
import { IssueIcon } from "../IssueIcom/issue-icon"
import { CommentIcon } from "../commentIcon/comment-icon"

export const IssueCard = ({ id, title, html_url, created_at, user, labels, comments, number }) => <div key={id} className="flex-col md:flex  md:flex-row my-2 md:my-4 lx:m-4 bg-gray-100 rounded-md hover:bg-slate-200 shadow animate-fadein dark:bg-gray-800">
    <div className="w-fit align-top py-4 px-2">
        <IssueIcon />
    </div>
    <div className="flex-auto px-4 py-2">
        <div className="flex justify-between">
            <div className="flex gap-2">
                <a className="flex-auto text-lg font-semibold text-gray-900 " href={html_url}>
                    {title}
                </a>
                <span className="bg-purple-200 text-xs rounded-lg px-1 leading-6 py-0"> {labels[0]?.name || ""}</span>
            </div>
            <span className="flex gap-2"><CommentIcon />{comments}</span>
        </div>
        <p className="text-sm ">{`#${number} created ${getTimeAgoString(new Date(created_at))} by ${user.login}`}</p>
    </div>
</div>