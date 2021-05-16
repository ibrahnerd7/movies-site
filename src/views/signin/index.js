import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { Col, Container, Input, Row, Button, Alert } from 'reactstrap';
import { loginUser } from '../../infrastructure/services/firebase/auth'
const SignIn = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const history = useHistory()

    const signInUser = async (e) => {
        setIsSubmitting(true);
        e.preventDefault()
        setError('')
        let user = await loginUser("mountain@gmail.com", "@Safaricom2019");
        if (!user.uid) {
            setError(user.message)
        } else {
            setShowSuccessMessage(true);
            history.push("/")
          
        }
        console.log(user)
       setIsSubmitting(false);
    }

    return (
        <Container >
            <Row style={{ marginTop: 64, marginBottom: 64, backgroundColor: "white" }} >
                <Col className="d-none d-md-block">
                    <img src={`https://images.pexels.com/photos/1983037/pexels-photo-1983037.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=250`} alt="movie poster" />
                </Col>
                <Col className="d-flex flex-column justify-content-between p-2">
                    {error && <Alert color="danger">{error.toString()}</Alert>}
                    {showSuccessMessage && <Alert color="success">Success</Alert>}
                    <h3>Sign In</h3>
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
                        onChange={(event) => setPassword(event.target.value)}
                    />
                    <Button disabled={isSubmitting} className="mt-2" color="primary" size="lg" block onClick={signInUser}>{isSubmitting?"Signing in ..." :"Sign In"}</Button>
                    <Row className="justify-content-between">
                        <a href="/signup">Don't have an account?</a>
                        <a href="/signup">Forgot password</a>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SignIn;