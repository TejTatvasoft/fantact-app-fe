import './App.css';
import { Suspense } from 'react';
import Loader from 'react-loader-spinner';
import { Route, Switch, Redirect, BrowserRouter as Router } from 'react-router-dom';
import CustomRoutes from './CustomRoutes';
import { routes } from './util/constant';
import LoginView from './components/login';

function App() {
  return (
    <>
      <Router>
        <Suspense fallback={<div>
          <Loader
            type="Circles"
            alignItems="center"
            color="#00A273"
            height={100}
            width={100}
          />
        </div>}>
          <CustomRoutes />
        </Suspense>
      </Router>
    </>
  );
}

export default App;
