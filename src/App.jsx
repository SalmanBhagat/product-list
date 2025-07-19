import { RouterProvider } from "react-router-dom"
import rounting from './router/Routing'

function App() {
  return (
    <div>
        <RouterProvider router={rounting}/>
    </div>
  )
}

export default App