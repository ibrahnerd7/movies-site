import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Col, Container, Input, Row, Button } from 'reactstrap';
import { sendResetEmail } from '../../infrastructure/services/firebase/auth'

const ForgotPassword = () => {
    const [email, setEmail] = useState();
    const [error, setError] = useState();

    const history = useHistory()

    const resetPassword = async (e) => {
        e.preventDefault()
        await sendResetEmail(email);
    }

    return (
        <Container >
            <Row style={{ marginTop: 64, marginBottom: 64, backgroundColor: "white" }} >
                <Col className="d-none d-md-block">
                    <img src={`https://images.unsplash.com/photo-1606603696914-a0f46d934b9c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&h=600`} alt="movie poster" />
                </Col>
                <Col className="d-flex flex-column justify-content-between p-4">
                    <h3>Sign In</h3>
                    <label>Email address</label>
                    <Input
                        placeholder="Email address"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />

                    <Button className="mt-2" color="primary" size="lg" block onClick={resetPassword}>Reset Password</Button>
                    <a href="/signup">Don't have an account?</a>
                </Col>
            </Row>
        </Container>
    )
}

export default ForgotPassword;