import { useContext } from "react"
import { getTimeAgoString } from "../../utils/time-utils"
import { IssueIcon } from "../Icons/issue-icon"
import { CommentIcon } from "../Icons/comment-icon"
import { Context } from "../Context/context";

import { Label } from "./label";
import { IssueContent } from "./issue-content";


export const IssueCard = ({ id, title, body, html_url, created_at, user, labels, comments, number, avatar_url }) => {
    const { selected, setSelected } = useContext(Context);

    return <div key={id} className="w-full flex flex-col md:flex md:flex-row my-2 md:my-4 lx:m-4 bg-gray-100 rounded-md hover:bg-slate-200 shadow animate-fadein dark:bg-gray-800 p-2">
        <div className="py-2 text-green-600 cursor-pointer" onClick={() => selected === id ? setSelected("") : setSelected(id)}>
            <IssueIcon />
        </div>
        <div className="px-2 w-full">
            <div className="flex justify-between">
                <div className="flex gap-2">
                    <a className="flex-auto text-lg font-semibold text-gray-900 " href={html_url} target="_blank">
                        {title}
                    </a>
                    {!!labels.length &&
                        <div className="flex flex-wrap">
                            {labels.map((label, index) => <Label key={index} {...label} />)}
                        </div>
                    }
                </div>
                <a href={html_url} target="_blank" className="flex w-10 gap-2 text-sm ml-2"><CommentIcon />
                    {comments}
                </a>
            </div>
            {selected === id &&
                <IssueContent body={body} created_at={created_at} {...user} />
            }
            <p className="text-sm">{`#${number} created ${getTimeAgoString(new Date(created_at))} by`} <a href={user.html_url} target="_blank" className="font-medium">{user.login}</a></p>
        </div>
    </div>
}