import { getTimeAgoString } from "../../utils/time-utils"
import { IssueIcon } from "../Icons/issue-icon"
import { CommentIcon } from "../Icons/comment-icon"

export const IssueCard = ({ id, title, html_url, created_at, user, labels, comments, number }) => <div key={id} className="flex-col md:flex  md:flex-row my-2 md:my-4 lx:m-4 bg-gray-100 rounded-md hover:bg-slate-200 shadow animate-fadein dark:bg-gray-800 p-2">
    <div className="py-2">
        <IssueIcon />
    </div>
    <div className="flex-auto px-2">
        <div className="flex justify-between">
            <div className="flex gap-2">
                <a className="flex-auto text-lg font-semibold text-gray-900 " href={html_url} target="_blank">
                    {title}
                </a>
                {!!labels.length && labels.map((label, index) => <span key={index} style={{ backgroundColor: "#" + label.color }} className="text-xs rounded-lg px-1 leading-4 py-0 h-4 whitespace-nowrap flex"> {label.name}</span>)}
            </div>
            <a href={html_url} target="_blank" className="flex gap-2"><CommentIcon />
                {comments}
            </a>
        </div>
        <p className="text-sm">{`#${number} created ${getTimeAgoString(new Date(created_at))} by`} <a href={user.url} target="_blank" className="font-medium">{user.login}</a></p>
    </div>
</div>