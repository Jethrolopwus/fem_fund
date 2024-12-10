import React from 'react';
import './App.css'
import "../connection"
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import Home from './Components/Home';
import Root from './Root';
import Contribution from './pages/Contribution';
import Admin from './pages/Admin';
import Destribution from './pages/Destribution';


class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    console.error("Error Boundary Caught an Error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong.</h1>;
    }
    return this.props.children;
  }
}


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>}>
        <Route index  element={<Home/>}/>
        <Route path='/contribution' element={<Contribution/>}/>
        <Route path='/status' element={<Admin/>}/>
        <Route path='/destribute' element={<Destribution/>}/>


      </Route>
    )
  )
 

  return (
    <>
  <ErrorBoundary>
    <RouterProvider router={router} />
  </ErrorBoundary>
    </>
  )
}

export default App
