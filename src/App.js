import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import { Layout } from './components/layout/Layout';
import { Home } from './pages/Home';
import { EventPage } from './pages/Event';
import { Login as LoginPage } from './pages/Login';
import { NotFound } from './pages/NotFound';
import { Login } from './components/login/Login';

export default function App() {
  const name = 'test';
  const [loggedin, setLoggedin] = useState(false);

  const onRegister = (e) => {
    e.preventDefault();
    setLoggedin(true);
  };

  const onLogout = (e) => {
    e.preventDefault();
    setLoggedin(false);
  };

  return (
    <Layout
      title="Viðburðasíðan"
      footer={
        <Login
          loggedin={loggedin}
          name={name}
          onRegister={onRegister}
          onLogout={onLogout}
        />
      }
    >
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<LoginPage />} />
        <Route exact path="/:id" element={<EventPage loggedin={loggedin} />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}
