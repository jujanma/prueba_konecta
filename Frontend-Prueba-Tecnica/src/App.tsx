import React from "react";
import { Toaster } from "react-hot-toast"
import { AuthProvider } from "./Context/Auth/AuthContext"
import { RouterProvider } from "react-router-dom"
import routerList from "./Routes/Routes"

function App() {

  return (
    <AuthProvider>
      <RouterProvider router={routerList} />
      <Toaster position="top-right" reverseOrder={false} />
    </AuthProvider>
  )
}

export default App
