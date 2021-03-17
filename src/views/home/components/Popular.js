import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, Row, ButtonGroup, Card, CardImg,Col} from 'reactstrap';
import { requestPopular } from '../../../application/actions-creators/popular';
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
  const [activePopularType, setActivePopularType]=useState("movie");
  const {popular,loading}=useSelector(state=>state.populars);
  const dispatch=useDispatch()

  useEffect(()=>{
  dispatch(requestPopular(activePopularType));
  },[activePopularType])

    return (
        <div>
            <Row>
                <h3>What's popular</h3>
                <ButtonGroup size="sm">
                    <Button color="primary" style={{ marginRight: 2 }} size="sm" onClick={()=>setActivePopularType("movie")}>Streaming</Button>
                    <Button color="secondary" size="sm" onClick={()=>setActivePopularType("tv")}>On Tv</Button>
                </ButtonGroup>
            </Row>
            <Row className="flex-nowrap flex-row trending flex-1" >
                    {
                    popular.map((popularItem) => <PopularCard item={popularItem} key={popularItem.id} />)
                }
                </Row>
        </div>
    )
}

export default Popular;