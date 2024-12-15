import React from 'react';
import './App.css';
import '../connection';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from 'react-router-dom';
import Home from './Components/Home';
import Root from './Root';
import Contribution from './pages/Contribution';
import Admin from './pages/Admin';
import Destribution from './pages/Destribution';
import { ThemeProvider } from './context/theme';
import EventListener from './pages/EventListener';
import GetContribution from './pages/GetContributions';


interface ErrorBoundaryProps {
  children: React.ReactNode;
}

interface ErrorBoundaryState {
  hasError: boolean;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any, errorInfo: any) {
    console.error('Error Boundary Caught an Error:', error, errorInfo);
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
      <Route path="/" element={<Root />}>
        <Route index element={<Home />} />
        <Route path="/contribution" element={<Contribution />} />
        <Route path="/status" element={<Admin />} />
        <Route path="/destribute" element={<Destribution />} />
        <Route path="/event" element={<EventListener />} />
        <Route path="/getdistribute" element={<GetContribution />} />



      </Route>
    )
  );

  return (
    <>
      <ThemeProvider>
        <ErrorBoundary>
          <RouterProvider router={router} />
        </ErrorBoundary>
      </ThemeProvider>
    </>
  );
}

export default App;
