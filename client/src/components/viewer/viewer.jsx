import { Results } from "../Results/results"
import { Search } from "../Search/search"


export const Viewer = () =>
    <div className="bg-white w-full p-8 h-fit flex-col divide-y divide-gray-100 mx-auto" data-testid="viewer">
        <Search />
        <Results />
    </div>


