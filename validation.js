import * as Yup from 'yup'

const nomRegex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/

const validations = Yup.object().shape( {
    nom: Yup.string()
        .min(5, 'Un nom de 5 caractère minimun svp')
        .max(20, 'Le nom ne doit pas depasser 20 characteres')
        .required('Le nom est obligatoire').matches(nomRegex),

    prenom: Yup.string()
        .min(5, 'Le prenom doit avoir au moins 5 characteres')
        .max(20, 'Le prenom ne doit pas depasser 20 characteres')
        .required('Prenom requis').matches(nomRegex),

    email: Yup.string()
        .min(0, 'Email invalide')
        .max(50, 'Email invalide')
        .required('Email obligatoire pour pouvoir vous répondre'),

    message: Yup.string()
        .min(5, 'le message ne peut contenir qu\'entre 5 et 500 caratère')
        .max(500, 'le message ne peut contenir qu\'entre 5 et 500 caratère')
        .required('Dites quelque chose pour m\'aider à m\'améliorer'),


})

export default validations
