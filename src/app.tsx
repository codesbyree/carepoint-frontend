import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom"
import { LandingPage } from "./pages/public"
import { GADLayout } from "./features/gad/layout/gad-layout"
import {
  GADFormPage,
  GADInfoPage,
  GADResultPage,
  GADSavePage,
} from "./features/gad/pages"

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
          { index: true, element: <GADInfoPage /> },
          { path: "form", element: <GADFormPage /> },
          { path: "result", element: <GADResultPage /> },
          { path: "save-result", element: <GADSavePage /> },
        ],
      },
    ],
  },
])

export function App() {
  return <RouterProvider router={router} />
}

export default App
