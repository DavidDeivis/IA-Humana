import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { AppProvider } from './AppContext.jsx';
import End from './components/end'

// import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider
} from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "IA-Humana/",
    element: (
      <>
        <App />
      </>
    ),
  },
  {
    path: "IA-Humana/end",
    element: 
      <>
	    <End />
      </>,
  },
  {
    path: "*",
    element: 
      <>
      <h1 style={{color: "#fff"}}>No existe nada aquí :(</h1>
      </>,
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render(
    <AppProvider>
      <RouterProvider router={router} />
    </AppProvider>
)