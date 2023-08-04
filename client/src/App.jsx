import { Viewer } from "./components/Viewer/viewer"
import { Provider } from "./components/Context/provider"

export default function App() {

  return (    
    <Provider>     
      <div data-testid='app'>
      <Viewer/>
      </div>
    </Provider>
  )
}
