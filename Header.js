import React from 'react'
import './header.css'
import { Routes, Route, Link } from "react-router-dom";
import Acceuil from './Acceuil';
import Projet1 from './Projet1';
import Projet2 from './Projet2';
import Contact from './Contact';
import Commentaire from './commentaire';
import NotFound from './NotFound'
import Menu from './Menu'
export default function Header() {
  
    return ( <>
         <header className='nav'>
            <div className="ul">
                <Link to="/" className='portfolio'>
                    <h1 > Grace Portofolio </h1>
                </Link>
                
                <Menu />
            </div>
        </header>

        <Routes>
          <Route path="/" element={<Acceuil />} />
          <Route path="/projet1" element={<Projet1 />} />
          <Route path="/projet2" element={<Projet2 />} />
          <Route>
            <Route path="/ajouter-un-commentaire/:id?" element={<Contact />} />
            {['/', '/contact'].map(path => <Route path={path} key={path} element={<Commentaire />} />)}
          </Route>
         <Route path="*" element={<NotFound />} />
        </Routes>

    </> )
}
