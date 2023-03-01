import React from 'react';
import ReactDOM from 'react-dom/client';

import { BrowserRouter, Routes, Route } from 'react-router-dom';

import ForStudent from './components/views/ForStudent';
import Home from './components/views/Home'
import Team from './components/views/Team';
import Contact from './components/views/Contact'
import Projects from './components/views/Projects';


const App = () =>
{
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/team/*" element={<Team/>}/>
                <Route path="/forstudent" element={<ForStudent/>}/>
                <Route path="/projects" element={<Projects/>}/>
                <Route path="/contact" element={<Contact/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default App;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);