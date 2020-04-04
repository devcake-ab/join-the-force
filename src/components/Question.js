import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const Question = props => {
    const generateAnswers = answers => {
        return answers.map((item, index) => {
            return (
                <Col key={index} lg="4" md="4" xs="12">
                    <Row>
                        <p style={{ color: '#333333' }}>{item}</p>
                    </Row>
                </Col>
            )
        })
    }

    return (
        <Container className="pt-5">
            <Row>
                <h2 style={{ fontWeight: 700 }}>{props.title}</h2>
            </Row>
            <Row>
                {generateAnswers(props.answers)}
            </Row>
        </Container>
    )
}

export default Question
