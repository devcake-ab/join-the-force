import React from 'react'
import NavbarCustom from '../components/NavbarCustom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { generateQuestions } from '../models/questionFunctions'

// Images
import Computer from '../assets/images/computer.svg'

// Data
import JSONData from '../data/questions.json'

const TestScreen = () => {
    return (
        <div>
            <NavbarCustom />
            <Container className="pt-5 pb-5">
                <Row className="mb-5">
                    <Col>
                        <h1>Get started with your application</h1>
                        <p>
                            Fill in your contact information. This will be used in a time of need to reach you. Your data will only get stored upon passing the online exam.
                            <br />
                            You can opt-out whenever you want to.
                        </p>
                        <p>
                            Good luck!
                        </p>
                    </Col>
                    <Col className="d-none d-sm-block">
                        <Image src={Computer} fluid />
                    </Col>
                </Row>
                <Form>
                    {generateQuestions(JSONData)}
                    <Button variant="primary" type="submit">
                        Submit
                    </Button>
                </Form>
            </Container>
        </div>
    )
}

export default TestScreen
