import ReactMarkdown from 'react-markdown'
import rehypeRaw from 'rehype-raw'
import { getTimeAgoString } from "../../utils/time-utils"


export const IssueContent = ({ body, created_at, avatar_url, html_url, login }) => <div className="flex p-4">
    <img src={avatar_url} className="shadow-lg rounded-full w-10 h-10 align-middle border-none m-2" />
    <div className="flex flex-col overflow-auto" >
        <p className="text-sm"><a href={html_url} target="_blank" className="font-medium">{login}</a> {`commented ${getTimeAgoString(new Date(created_at))}`} </p>
        <ReactMarkdown rehypePlugins={[rehypeRaw]} children={body} className="flex flex-col overflow-auto w-5/6" />
    </div>
</div>