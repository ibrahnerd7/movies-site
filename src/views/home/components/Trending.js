import React, { useEffect, useState} from 'react';
import { Card, CardImg, Col, Row, Button } from 'reactstrap';
import './style.css'
import {  useDispatch, useSelector } from 'react-redux';
import { requestTrendings } from '../../../application/actions-creators/trending';
import { useHistory } from 'react-router';

const TrendingCard = ({ item ,history}) => {
    return <Col md="2" xs="6" onClick={()=>history.push(`/movie/${item.id}`)} style={{cursor:"pointer"}}>
        <Card inverse>
            <CardImg src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt="Card image cap" />
        </Card>
        <h6 className="text-black">{item.original_title || item.title}</h6>
        <p>{new Date(item.release_date).toLocaleDateString()}</p>
    </Col>;
}

const Trending =()=> {
    const [activeTimeWindow, setActiveTimeWindow]=useState("day");
    const {trendings,loading}=useSelector(state=>state.trendings);

    const dispatch=useDispatch()
    const history=useHistory()
  
  
    useEffect(()=>{
    dispatch(requestTrendings(activeTimeWindow));
    },[activeTimeWindow, dispatch])


        return (
            <div className="flex-1" >
                <div className="clearfix mt-5 mb-2">
                    <h4 className="float-left">Trending</h4>
                    <Button color="primary" size="sm" onClick={() =>setActiveTimeWindow("day")}>Today</Button>{' '}
                    <Button color="secondary" size="sm" onClick={() => setActiveTimeWindow("week")}>This week</Button>
                </div>
                <Row className="flex-nowrap flex-row trending flex-1" >
                    {
                    trendings.map((trendingItem) => <TrendingCard item={trendingItem} key={trendingItem.id} history={history}/>)
                }
                </Row>
            </div>
        )
    

}

export default Trending;


