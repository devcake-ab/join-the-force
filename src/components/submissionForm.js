import React, { useState } from 'react'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Col from 'react-bootstrap/Col'

export default function SubmissionForm() {

    const [form, setFormState] = useState({
        name: '',
        email: '',
        country: '',
        city: '',
        phoneNumber: '',
        availabillity: '',
        tasks: ''
    })

    const updateField = e => {
        const elementName = e.target.name
        // If true then its an answer being filled
        setFormState({
            ...form,
            [e.target.name]: e.target.value
        })
        console.log(form)
    };

    const onSubmit = async (e) => {
        e.preventDefault()
        console.log(form)
    }

    return (
        <Form onSubmit={(e) => onSubmit(e)}>
            <Form.Group as={Col} controlId="formBasicEmail">
                <Form.Label><h2>Enter information below</h2></Form.Label>

                {/* Name */}
                <FormRow
                    label="Name"
                    name="name"
                    placeholder="Full name"
                    value={form.name}
                    onChange={updateField}
                />

                {/* Email */}
                <FormRow
                    label="Email"
                    name="email"
                    placeholder="email"
                    value={form.email}
                    onChange={updateField}
                />

                {/* Country */}
                <FormRow
                    label="Country"
                    name="country"
                    placeholder="Country"
                    value={form.country}
                    onChange={updateField}
                />

                {/* City */}
                <FormRow
                    label="City"
                    name="city"
                    placeholder="City"
                    value={form.city}
                    onChange={updateField}
                />

                {/* Phone Number */}
                <FormRow
                    label="Phone Number"
                    name="phoneNumber"
                    placeholder="Phone Number"
                    value={form.phoneNumber}
                    onChange={updateField}
                    inputType="number"
                />

                {/* Describe availabillity */}
                <Form.Group controlId="exampleForm.ControlTextareaAvailabillity">
                    <Form.Label>At what times you are available?</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="4"
                        name="availabillity"
                        placeholder="Example: I work mon-fri 08.00 - 16.00 however if needed I'll be there!"
                        value={form.availabillity}
                        onChange={(e) => updateField(e)}

                    />
                </Form.Group>

                {/* Preferred tasks */}
                <Form.Group controlId="exampleForm.ControlTextAreaTasks">
                    <Form.Label>Preferred tasks if any</Form.Label>
                    <Form.Control
                        as="textarea"
                        rows="4"
                        name="tasks"
                        placeholder="Example: Help test new patients.."
                        value={form.tasks}
                        onChange={(e) => updateField(e)}

                    />
                </Form.Group>

                {/* Submit  */}
                <Button variant="primary" type="submit"> Submit </Button>

            </Form.Group>
        </Form>
    )
}

//key, name, type, placeholder, value, onchange, inputType
const FormRow = (props) => {
    return (
        <Form.Group controlId="formName">
            <Form.Label>{props.label}</Form.Label>
            <Form.Control
                name={props.name}
                type={props.inputType ? props.inputType : "text"}
                placeholder={props.placeholder}
                value={props.value}
                onChange={e => props.onChange(e)} />
        </Form.Group >
    )
}