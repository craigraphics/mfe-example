import React, { Suspense, lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import TopNav from './components/TopNav';
import Container from './components/Container';

const Home = lazy(() => import('remote/Home'));
const Login = lazy(() => import('remote/Login'));

const App = () => (
  <main>
    <TopNav />
    <Container>
      <Suspense fallback={'loading...'}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </Suspense>
    </Container>
  </main>
);

export default App;
