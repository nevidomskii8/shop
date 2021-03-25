import React from 'react'
import { AuthContext } from './context/AuthContext';
import { Provider } from 'react-redux'
import { Routes } from './Routes';
import createStore from './redux/createStore';
import { useAuth } from './hoocks/useAuth'


const store = createStore()

function App() {
  const { token, login, logout, userId, ready } = useAuth();
  const isAuthenticated = !!token

  return (
    <Provider store={store}>
      <AuthContext.Provider value={ { token, login, logout, userId, ready, isAuthenticated }}>
        <Routes />
      </AuthContext.Provider>
    </Provider>
  );
}

export default App;
