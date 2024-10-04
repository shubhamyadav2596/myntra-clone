import { StrictMode } from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import App from './routes/App.jsx'
import Bag from './routes/Bag.jsx'
import Home from './routes/Home.jsx'
import "bootstrap/dist/css/bootstrap.min.css"
import './index.css'
import { Provider } from 'react-redux'
import myntraStore from './store/index.js'


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Home /> /*, loader: postLoader */ },
      { path: "/bag", element: <Bag /> /*, action: createPostAction */ }
    ]
  },
]);    


createRoot(document.getElementById('root')).render(
  <StrictMode>
<Provider store={myntraStore}>
<RouterProvider router={router} />
</Provider>
  </StrictMode>
)
