import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Button, Row, ButtonGroup, Card, CardImg,Col} from 'reactstrap';
import './style.css'


const PopularCard = ({ item }) => {
    return <Col md="2" xs="6" >
        <Card inverse>
            <CardImg src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt="Card image cap" />
        </Card>
        <h6 className="text-black">{item.original_title || item.title}</h6>
        <p>{new Date(item.release_date).toLocaleDateString()}</p>
    </Col>;
}

const Popular = () => {
  const {popular,loading}=useSelector(state=>state.populars)
    return (
        <div>
            <Row>
                <h3>What's popular</h3>
                <ButtonGroup size="sm">
                    <Button color="primary" style={{ marginRight: 2 }} size="sm">Streaming</Button>
                    <Button color="secondary" size="sm">On Tv</Button>
                </ButtonGroup>
            </Row>
        </div>
    )
}

export default Popular;