import { Viewer } from "./components/Viewer/viewer"
import { Provider } from "./components/Context/provider"

export default function App() {

  return (
    <Provider>
      <Viewer />
    </Provider>
  )
}
