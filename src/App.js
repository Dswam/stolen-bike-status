
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import Searchbike from './Components/Searchbike';
import Login from './Components/Login';
import Signup from './Components/Signup';
import Contact from './Components/Contact';
import Error from './Components/Error';
import { useGlobalContext } from './Components/Context';
import Home from './Components/Home';
import React from 'react';
const LazyAbout=React.lazy(()=>import('./Components/Searchbike'))

function App() {
  const data=useGlobalContext();
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}>
        <Route path='/searchbike' element={<React.Suspense fallback='Loading...'><LazyAbout /></React.Suspense>} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='*' element={<Error />} />
        </Route>
      </Routes>

    </BrowserRouter>
  );
}

export default App;
