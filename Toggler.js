import { useState } from 'react'
import  './toggler.css'

export default function Toggler({titre, children, visible}) {
    const [etatVisible, setEtatVisible] = useState(visible)

    const toggle = () => {
        setEtatVisible(!etatVisible);
    }

    return <>
        <div onClick={toggle} className='title'>
            {titre}
        </div>
        {etatVisible &&
            <div className='contenu'>
                {children}
            </div>
        }

    </>
}
