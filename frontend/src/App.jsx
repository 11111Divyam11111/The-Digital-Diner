import { useState } from 'react'
import Signup from './components/signup';
import Login from './components/login';
import Home from './components/home';
import { Routes, Route } from 'react-router';

function App() {
    return (
        <>
            <Home />
            <Routes>
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
            </Routes>
        </>
    )
}

export default App;
