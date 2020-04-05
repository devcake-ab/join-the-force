import React, { } from 'react'
import Button from 'react-bootstrap/Button'
import NavbarCustom from '../components/NavbarCustom'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'

import { useSelector, useDispatch } from 'react-redux'

// Images
import Doctors from '../assets/images/doctors.svg'
import Info from '../assets/images/info.svg'
import Test from '../assets/images/test.svg'
import Data from '../assets/images/data.svg'

import history from '../navigation/history'

export default function HomeScreen() {
    const user = useSelector(state => state.user)
    const handleTakeTestOnClick = () => { history.push('/test') }
    const handleLearnMoreOnClick = () => { history.push('/learn-more') }

    return (
        <div>
            <NavbarCustom />
            <Container className="pt-5">
                <Row>
                    <Col>
                        <h1>Get cetrified as an ICE</h1>
                        <p>
                            Take the test and become a valuable asset for your community.
                            Let your government know that you are up to speed with health
                            precautions in case of a national crisis.
                        </p>
                    </Col>
                    <Col className="d-none d-sm-block">
                        <Image src={Doctors} fluid />
                    </Col>
                </Row>
                <Container>
                    <Row>
                        <Button className="mr-3" variant="secondary" onClick={handleLearnMoreOnClick}>learn more</Button>
                        <Button onClick={handleTakeTestOnClick}>take the test</Button>
                    </Row>
                </Container>
                <Container className="pt-5">
                    <Row>
                        <Col className="p-5" lg="4" md="6" xs="12">
                            <Image src={Info} />
                            <p className="pt-3">
                                Fill in your personal info. This is needed in order for you to be available.
                            </p>
                        </Col>
                        <Col className="p-5" lg="4" md="6" xs="12">
                            <Image src={Test} />
                            <p className="pt-3">
                                When you feel ready, Take the test.
                                You have unlimited attempts so don’t be afraid to give it a try.
                            </p>
                        </Col>
                        <Col className="p-5" lg="4" md="6" xs="12">
                            <Image src={Data} />
                            <p className="pt-3">
                                If you pass, your data will be securely stored and you may be contacted in a time of need.
                            </p>
                        </Col>
                    </Row>
                </Container>
            </Container>
        </div>
    )
}
