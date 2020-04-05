import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Form from 'react-bootstrap/Form'

const Question = props => {
    const generateAnswers = answers => {
        return answers.map((item, index) => {
            return (
                // <Col key={index} lg="4" md="4" xs="12">
                //     <Row>
                //         <p style={{ color: '#333333' }}>{item}</p>
                //     </Row>
                // </Col>
                <Form.Group controlId={`answer-${item + index}`}>
                    <Form.Check key={index} className="mb-1" type="checkbox" label={item} />
                </Form.Group>
            )
        })
    }

    return (
        // <Container className="pt-5">
        //     <Row>
        //         <h2 style={{ fontWeight: 700 }}>{props.title}</h2>
        //     </Row>
        //     <Row>
        //         {generateAnswers(props.answers)}
        //     </Row>
        // </Container>
        <Form.Group className="mb-5">
            <Form.Label style={{ fontWeight: 700, color: "#363062" }}>{props.title}</Form.Label>
                {generateAnswers(props.answers)}            
        </Form.Group>
    )
}

export default Question
