import { Viewer } from "./components/viewer/viewer"
import { Provider } from "./components/Context/Provider"

export default function App() {

  return (
    <Provider>
      <Viewer />
    </Provider>
  )
}
