import React, {useEffect} from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { useFormik } from 'formik'
import './contact.css'
import validations from '../validations/validations'

export default function Contact() {

    const navigate = useNavigate()
    const {id} = useParams()

    const initialValues = {
        nom: '',
        prenom: '',
        email: '',
        message: '',
    }

    const formik = useFormik({
        initialValues,
        validationSchema:validations,
        onSubmit: submit
    })

    const { handleSubmit, values, setValues, handleChange, errors, setErrors } = formik

    useEffect(() => {
        function getContact() {
            axios.get (`http://localhost:3000/contact/${id}`)
                 .then(res => setValues(res.data.data))
                 .catch(err => console.log('Erreur', err))
        }
        if (id) getContact()
    }, [id])

    // Verifier si un champ a une erreur pour l'afficher
    function fieldHasError(field) {
        if (errors[field] && errors[field] !== '') return true
        return false
    }

    function submit(values) {
        if (id) {
            axios.put(`http://localhost:3000/contact/${id}`, values)
                .then(res => navigate('/ajouter-un-commentaire', { state: { id } }))
                .catch(err => {
                    // Mettre a jour l'objet des erreurs avec les erreurs du backend
                    let errors = {}
                    if (err.response && err.response.data && err.response.data.errors && Array.isArray(err.response.data.errors)) {
                        err.response.data.errors.forEach(error => {
                            errors = { ...errors, ...error }
                        })
                    }
                    setErrors(errors)
                    console.log('Echec de la modification', err)
                })

        } else {
           axios.post(`http://localhost:3000/contact/`, values)
                .then(res => navigate('/ajouter-un-commentaire', { state: { id: res.data.id } }))
                .catch(err => {
                    // Mettre a jour l'objet des erreurs avec les erreurs du backend (si cela existait)
                    let errors = {}
                    if (err.response && err.response.data && err.response.data.errors && Array.isArray(err.response.data.errors)) {
                        err.response.data.errors.forEach(error => {
                            errors = { ...errors, ...error }
                        })
                    }
                    setErrors(errors)
                    console.log('Vous n\'avez pas pu ajoutez votre message')
                })
        }
    }

    return ( <>
        <h2 className='contacter'> {id ? 'Modifier votre message' : ' CONTACTEZ MOI'}</h2>

        <form className='form' onSubmit={handleSubmit}>   

            <div>
                <label className='label'>
                    <p className='paragraphe'>Nom : </p>  
                    <input  type="text" placeholder="Nom" className={`input ${fieldHasError('nom') && "is-invalid"}`} value={values.nom} onChange={handleChange} name='nom' id='nom'/> 
                    <div className={`validate ${fieldHasError('nom') ? "invalid-feedback" : "valid-feedback"}`}>{errors.nom}</div>
                </label>
            </div>      

            <div>
                <label className='label'>
                    <p className='paragraphe'>Prenom :</p> 
                    <input type="text" placeholder="Prenom" className={`input ${fieldHasError('prenom') && "is-invalid"}`} value={values.prenom} onChange={handleChange} name='prenom' id='prenom'/> 
                    <div className={`validate ${fieldHasError('prenom') ? "invalid-feedback" : "valid-feedback"}`}>{errors.prenom}</div>
                </label>
            </div>    
            
            <div>
                <label className='label'>
                    <p className='paragraphe'>Adresse courriel :</p> 
                    <input type="text" placeholder="Adresse email" className={`input ${fieldHasError('email') && "is-invalid"}`} value={values.email} onChange={handleChange} name='email' id='email'/> 
                    <div className={`validate ${fieldHasError('email') ? "invalid-feedback" : "valid-feedback"}`}>{errors.email}</div>
                </label>
            </div>    
            
            <div>
                <label className='label'>
                    <p className='paragraphe'>Message :</p> 
                    <textarea rows="10" cols="80" maxlength="200" placeholder="Que voulez vous me dire ?" className={`input ${fieldHasError('message') && "is-invalid"}`} value={values.message} onChange={handleChange} name='message' id='message'/> 
                    <div className={`validate ${fieldHasError('message') ? "invalid-feedback" : "valid-feedback"}`}>{errors.message}</div>
                </label>
            </div>     
            <button type="submit"  className='envoyer'> {id ? 'MODIFIER' : 'SOUMETTRE'} </button> 
        </form>   
    </>
  )
}
