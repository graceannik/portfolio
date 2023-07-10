import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import './commentaire.css'

function Commentaire(){

    const navigate = useNavigate()
    const [commantaires, setCommentaire] = useState([])
    const [state, setState] = useState( {
        nom: '',
        prenom: '',
        email: '',
        message: '',
    })

    function goToEdit(id) {
        navigate(`/ajouter-un-commentaire/${id}`, {state : {id}})
    }

    function deleteCommentaire(id){
        const restOfCommentaire = commantaires.filter(user => user.id !== id)
        setCommentaire(restOfCommentaire) 
    }

    function getCommenatire(){
        axios.get('http://localhost:3000/contact/')
             .then(res => setCommentaire(res.data.data))
             .catch(err => console.log('Error, err'))
    }

    useEffect(() => {
        getCommenatire()
    }, [])

    return(
        <>
            <h1>Liste des commentaires</h1>

            <table className='liste-des-commentaires'>
                <thead>
                    <tr>
                        <td>Nom</td>
                        <td>Prénom</td>
                        <td>Email</td>
                        <td>Message</td>
                    </tr>
                </thead>

                <tbody>
                    {commantaires && commantaires.map(commentaire => <tr key={commentaire.email}>
                        <td>{commentaire.nom}</td>
                        <td>{commentaire.prenom}</td>
                        <td>{commentaire.email}</td>
                        <td>{commentaire.message}</td>
                        <td><button className='editer' onClick={() => goToEdit(commentaire.email)}>Modifier ce commentaire</button> <button disabled={commantaires.length < 2} onClick={() => deleteCommentaire(commantaires.email)} className='supprimer'>Supprimer ce commantaire</button></td></tr>
                    )}
                </tbody>
                <button onClick={() => navigate('/ajouter-un-commentaire')} className='ajout-commentaire'>Ajouter un commentaire</button>
        
            </table>

            </>
    )

}

export default Commentaire
