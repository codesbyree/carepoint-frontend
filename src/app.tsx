import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { LandingPage } from "./pages/public"
import { GADLayout } from "./features/gad/layout/gad-layout"
import { GADForm, GADResult, GADSave } from "./features/gad/components"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Outlet />,
    children: [
      { index: true, element: <LandingPage /> },
      {
        path: "screening/gad",
        element: <GADLayout />,
        children: [
          { path: "form", element: <GADForm /> },
          { path: "result", element: <GADResult /> },
          { path: "save-result", element: <GADSave /> },
        ],
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}

export default App
