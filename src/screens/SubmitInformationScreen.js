import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'

import SubmissionForm from '../components/submissionForm'
import { firestore } from '../config/FBconfig'
import history from '../navigation/history'

export default function SubmitInformationPage() {
    const [hasSubmitted, setHasSubmitted] = useState(false)

    const handleOnSubmit = (submission) => {
        console.log(submission)
        // TODO: add creates a unique ID. Connect ID to a BankID sign
        firestore.collection("submissions").add(Object.assign({}, submission))
            .then(res => res.id)
            .then(documentId => {
                console.log("Här har vi ett ID.", documentId)
                setHasSubmitted(true)
            })
            .catch(err => console.log("Error adding document", err)) // TODO: Update UI
    }

    if (hasSubmitted) {
        return (
            <ThanksForSubmitting />
        )
    }
    return (
        // header
        // { hasSubmitted && <thanksForSubmitting /> }

        <SubmissionForm onSubmit={handleOnSubmit} />
        // footer
    )
}

const ThanksForSubmitting = () => {
    return (
        <div>
            <h2>Thank you for submitting</h2>
            <h4>Not all heroes wear capes</h4>
            <Button className="mr-3" variant="secondary" onClick={() => history.push('/home')}>Back to home</Button>
        </div>
    )
}