import React from 'react'

import SubmissionForm from '../components/submissionForm'
import { firestore } from '../config/FBconfig'

export default function SubmitInformationPage() {

    const handleOnSubmit = (submission) => {
        console.log(submission)
        // TODO: add creates a unique ID. Connect ID to a BankID sign
        firestore.collection("submissions").add( Object.assign({}, submission) )
        .then(res => res.id)
        .then(documentId => console.log("Här har vi ett ID.", documentId))
        .catch(err => console.log("Error adding document", err)) // TODO: Update UI
    }

    return (
        // header
        <SubmissionForm onSubmit={handleOnSubmit} />
        // footer
    )
}
