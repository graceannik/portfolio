import React from 'react'
import './header.css'
import { Link } from "react-router-dom";

export default function Menu() {
  return (
        <nav className='nav'>
          <ul className='ul'>
              <li > 
                  <Link to="/projet1"  className='lien'>
                      Projet 1  
                  </Link>
              </li>

              <li> 
                  <Link to="/projet2"  className='lien'>
                      Projet 2  
                  </Link>
              </li>

              <li> 
                  <Link to="/contact"  className='lien'>
                      Contact 
                  </Link>
              </li>
          </ul>
        </nav>
  )
}
