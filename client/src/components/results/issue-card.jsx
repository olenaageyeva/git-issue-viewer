import { useContext } from "react"
import { getTimeAgoString } from "../../utils/time-utils"
import { IssueIcon } from "../Icons/issue-icon"
import { CommentIcon } from "../Icons/comment-icon"
import { Context } from "../Context/context";
import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'

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
                            {labels.map((label, index) => <span key={index} style={{ backgroundColor: "#" + label.color }} className="text-xs rounded-lg px-1 leading-4 py-0 h-4 whitespace-nowrap flex"> {label.name}</span>)}
                        </div>
                    }
                </div>
                <a href={html_url} target="_blank" className="flex w-10 gap-2 text-sm ml-2"><CommentIcon />
                    {comments}
                </a>
            </div>
            {selected === id &&
                <div className="flex">
                    <img src={user.avatar_url} class="shadow-lg rounded-full w-10 h-10 align-middle border-none m-2" />
                    <div className="overflow-auto" >
                        <p className="text-sm"><a href={user.html_url} target="_blank" className="font-medium">{user.login}</a> {`commented ${getTimeAgoString(new Date(created_at))}`} </p>
                        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={body} className="flex flex-col overflow-auto w-5/6" />
                    </div>
                </div>
            }
            <p className="text-sm">{`#${number} created ${getTimeAgoString(new Date(created_at))} by`} <a href={user.html_url} target="_blank" className="font-medium">{user.login}</a></p>
        </div>
    </div>
}