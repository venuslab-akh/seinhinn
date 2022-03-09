import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom'

import Layout from '../components/Layout';
import ProtectedRoute from './PrivateRoute';

import Product from '../pages/Product';
import Dashboard from '../pages/Dashboard';
import Login from '../pages/Login';

export default function RouterConfig() {
    return (
        <Router>
          <Routes>
            <Route path="/" element={
              <Layout />
            }>
              <Route index element={
                <ProtectedRoute>
                  <Dashboard />
                </ProtectedRoute>
              }></Route>
              <Route path="/product" element={
                <ProtectedRoute>
                  <Product />
                </ProtectedRoute>
              }></Route>
            </Route>
            <Route path="/login" element={ <Login/> }/> 
          </Routes>
        </Router>
    )
}