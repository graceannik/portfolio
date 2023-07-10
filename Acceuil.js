import React from 'react'
import Info from './Info'
import Toggler from './Toggler'
import './acceuil.css'

export default function Acceuil() {
  return (
    <div>

        <div className="banner">
          <h2>GRACE ANNICK DJUSSI</h2>
          <p>Graphic Artist - Web Designer - Illustrator</p>
        </div>

        <div className="information wrapper">

            <Toggler titre="A propos" visible>
                <p className='presentation'> 
            
                Je suis actuellement étudiant en programmation informatique à La Cité à Ottawa,
                 avec une date prévue d'obtention du diplôme en septembre 2023. J'ai également obtenu un 
                 baccalauréat scientifique en 2019 à l'I.P.B TATIE à Douala. Mes compétences informatiques
                  comprennent Android Studio, Visual Studio, React, Node.js, et plus encore. Je suis très 
                  ponctuel, respectueux et j'ai une grande facilité d'apprentissage. J'ai de l'expérience de 
                  travail en tant que plongeuse, caissière, aide en cuisine et dans le service à la clientèle.
                </p>
            </Toggler>

            <Toggler titre="Mes études" >
                
            <div className='div' >
                <Info text="Programmation Informatique (2022 - )" className = {Info.text}/>
                    La Cité, Ottawa (Ontario) <br />
                    Date prévue d'obtention du diplôme : Septembre 2023                 
            </div>

            <div className='div'>
                <Info text="Baccalauréat Scientifique (2019)" />
                    I.P.B TATIE, Douala (Littoral) <br />
                    (Une année complétée)
            </div>

            </Toggler>
   
            <Toggler titre="Compétences">
            <div className='div' >
                <Info text="Compétences informatique " />
                Android Studio, Visual Studio, VS Community, React, 
                Node Js, XCode, java sql, Apache, Inteligi, Azure, WORD, PowerPoint, MongoDB
            </div>

            <div className='div' >
                <Info text="Compétences personnelles " />
                Très ponctuelle et respectueuse, vous pouvez me faire confiance <br />
                Très grande facilité d'apprentissage que ce soit pour les technologies, outils spécialisées ou dans l'apprentissage scolaire <br />
                Ouverture à la critique et capacité d'adaptation
            </div>

            </Toggler>

            <Toggler titre="Expérience de travail ">

            <div className='div' >
                <Info text="Plongeuse (2023 - en cours) " />
                <h3> Nickels, Gatineau (Québec) </h3>
                        Entretien de la vaisselle et de la cuisine <br />
                        Aide à la cuisine <br />
                        Préparer les sauces pour les repas  <br />
                        Nettoyage des ustensiles de cuisine <br />
            </div>

            <div className='div' >
                <Info text="Caissière et aide en cuisine (2022- 2023) " />
                <h3> Compass Group, Ottawa (Ontario)</h3> 
                        Service à la caisse <br />
                        Aide à la cuisine <br />
                        Préparer des salades ainsi que des sandwichs <br /> 
                        Nettoyage des ustensiles de cuisine <br />
                        Nettoyage de la cuisine <br />
            </div>

            <div className='div' >
                <Info text="Service à la clientèle (2022) " />
                <h3> Tactick Personnel de promotion, Ottawa (Québec) </h3> 
                   
                         Approche des clients <br />
                        Arranger les vêtements <br />
                        Accompagner le client lors de ses essayages <br />
                        Expliquer au client la composition des vêtements. <br />
            </div>  
                        
            </Toggler>
        </div>

    </div>
  )
}
