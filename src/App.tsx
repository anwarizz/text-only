import {createBrowserRouter, Outlet, RouterProvider} from 'react-router-dom'
import Home from './pages/Home'
import Write from './pages/Write'
import Layout from './templates/Layout'
import Read from './pages/Read'
import About from './pages/About'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
        <Layout>
          <Outlet />
        </Layout>
      ),
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: '/write',
          element: <Write />
        }, 
        {
          path: '/read/:identity',
          element: <Read />
        },
        {
          path: '/about',
          element: <About />
        }
      ]
    }

  ])



  return (
    <>
      {/* <Header /> */}
      <RouterProvider router={router} />
    </>
  )
}

export default App
