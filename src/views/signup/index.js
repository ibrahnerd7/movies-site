import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Col, Container, Input, Row, Button } from 'reactstrap';
import { registerUser } from '../../infrastructure/services/firebase/auth'

const SignUp = () => {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [error, setError] = useState();

    let history = useHistory();

    const signUpUser = async (e) => {
        e.preventDefault()
        let user = await registerUser(email, password);

        if (!user.uid) {
            setError(user.message)
        } else {

            /**
             * Store user in firebase  for favourites
             */

            history.push("/profile")
        }

    }


    return (
        <Container >
            <Row style={{ marginTop: 64, marginBottom: 64, backgroundColor: "white" }} >
                <Col className="d-none d-md-block">
                    <img src={`https://images.unsplash.com/photo-1512070750041-b9479c107194?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&h=600`} alt="movie poster" />
                </Col>
                <Col className="d-flex flex-column justify-content-between p-4">
                    <h3>Sign Up</h3>
                    <label>Email address</label>
                    <Input
                        placeholder="Email address"
                        type="email"
                        value={email}
                        onChange={(event) => setEmail(event.target.value)}
                    />
                    <label>Password</label>
                    <Input
                        placeholder="Password"
                        type="password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button className="mt-2" color="primary" size="lg" block onClick={signUpUser}>Create Account</Button>
                    <a href="/signin">Already have an account?</a>
                </Col>
            </Row>
        </Container>
    )
}

export default SignUp;