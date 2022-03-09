// import logo from './logo.svg';
import React from 'react';
import './App.css';

import { AuthProvider } from './cores/useAuth';
import RouterConfig from './_config/route';

function App() {
  return (
    <AuthProvider>
      <RouterConfig/>
    </AuthProvider>
  );
}

export default App;
