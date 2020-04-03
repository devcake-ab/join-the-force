import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'


export default function SubmissionForm() {

    const [form, setFormState] = useState({
        name: '',
    })

    const updateField = e => {
        const elementName = e.target.name
        // If true then its an answer being filled
        setFormState({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
        // if (elementName.includes('answerbox')) {
        //     const idx = elementName.slice(elementName.length - 1, elementName.length)
        //     const formAnswers = [...form.answers]
        //     formAnswers[idx] = e.target.value
        //     setFormState({
        //         ...form,
        //         answers: formAnswers
        //     })
        // } else {

        // }
    };

    const onSubmit = async (e) => {
        e.preventDefault()
    }

    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label>Form</Form.Label>
                {/* Name */}

                <Form.Group as={Row} controlId="formBasicEmail">

                    <Form.Label> Name: </Form.Label>
                    <Form.Control
                        name={`name`}
                        key={`fullName`}
                        type="text"
                        placeholder={`Enter full name`}
                        value={form.name}
                        onChange={e => updateField(e)} />
                </Form.Group>



                {/* Submit  */}
                <Button variant="primary" type="submit"> Submit </Button>

            </Form.Group>
        </Form>
    )
}
