import React from 'react'
import { Col, Row } from 'reactstrap'
import './style.css'

const Footer = () => {
    return (
        <Col style={{ backgroundColor: "midnightblue", color: "white" }} >
            <Row style={{ padding: 32, paddingTop: 64 }}>
                <Logo />
                <Basics />
                <GetInvolved />
                <Community />
                <Legal />
            </Row>
        </Col>
    )
}

const Logo = () => {
    return <Col>
        <img src="https://www.themoviedb.org/assets/2/v4/logos/v2/blue_square_2-d537fb228cf3ded904ef09b136fe3fec72548ebc1fea3fbbd1ad9e36364db38b.svg" alt="logo" style={{ height: 76 }} />
    </Col>
}

const Basics = () => {
    return <Col>
        <h5>THE BASICS</h5>
        <p><a href="https://www.themoviedb.org/about">About TMDB</a></p>
        <p><a href="https://www.themoviedb.org/about/staying-in-touch">Contact Us</a></p>
        <p><a href="https://www.themoviedb.org/talk">Support Forums</a></p>
        <p><a href="https://www.themoviedb.org/documentation/api">API</a></p>
        <p><a href="https://status.themoviedb.org/">System Status</a></p>
    </Col>
}

const GetInvolved = () => {
    return <Col>
        <h5>GET INVOLVED</h5>
        <p><a href="https://www.themoviedb.org/bible">Contribution Bible</a></p>
        <p><a href="https://www.themoviedb.org/apps">3rd Party Applications</a></p>
        <p><a href="https://www.themoviedb.org/movie/new">Add New Movie</a></p>
        <p><a href="https://www.themoviedb.org/tv/new">Add New TV Show</a></p>
    </Col>
}

const Community = () => {
    return <Col>
        <h5>Community</h5>
        <p><a href="https://www.themoviedb.org/documentation/community/guidelines">Guidelines</a></p>
        <p><a href="https://www.themoviedb.org/discuss">Discussions</a></p>
        <p><a href="https://www.themoviedb.org/leaderboard">Leaderboard</a></p>
        <p><a href="https://twitter.com/themoviedb">Twitter</a></p>
    </Col>
}

const Legal = () => {
    return <Col>
        <h5>Legal</h5>
        <p><a href="https://www.themoviedb.org/terms-of-use">Terms of use</a></p>
        <p><a href="https://www.themoviedb.org/documentation/api/terms-of-use">API Terms of Use</a></p>
        <p><a href="https://www.themoviedb.org/privacy-policy">Privacy Policy</a></p>
    </Col>
}

export default Footer