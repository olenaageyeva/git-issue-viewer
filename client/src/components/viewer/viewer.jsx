import { Results } from "../Results/results"
import { Search } from "../Search/search"


export const Viewer = () =>
    <div className="bg-white w-full p-8 h-fit divide-y divide-gray-100 mx-auto min-w-800" data-testid="viewer">
        <Search />
        <Results />
    </div>


