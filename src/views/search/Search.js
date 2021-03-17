import React from 'react'
import {
    Container, Button, CardImg, CardTitle, CardText, Card,
    CardSubtitle, CardBody
} from 'reactstrap';

const Search = ({ }) => {
    return (
        <Container >
            <main className="mt-4">
                <Card className={"flex-1 flex-row"}>
                    <img width="9%" height="116" src="https://www.themoviedb.org/t/p/w94_and_h141_bestv2/qAe4MS10QyDRYpUjVr5KxQtIq7V.jpg" alt="Card image cap" />
                    <CardBody>
                        <h6>Mysterious Doctor Satan, The</h6>
                        <CardText>CRAZED WITH THE LUST TO KILL! A power-mad maniac unleashes a lightning attack on an unsuspecting nation...And finds the Copperhead thirsting for revenge! A mad scientist named Dr. Satan plots to steal key pieces of technology to enable him to build an</CardText>
                    </CardBody>
                </Card>
            </main>
        </Container>
    )
}

export default Search