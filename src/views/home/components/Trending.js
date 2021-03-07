import React, {useEffect, useState } from 'react';
import { Card, CardImg, CardImgOverlay, Col, Row, Button } from 'reactstrap';
import { IoAddCircle } from 'react-icons/io5'
import {getTrendingByTimeWindow } from '../../../infrastructure/services/api/trending';
import './style.css'

const TrendingCard = ({ item }) => {
    return <Col md="2" xs="6" >
        <Card inverse>
            <CardImg src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt="Card image cap" />
            <CardImgOverlay>
                <IoAddCircle size="36" style={{ marginTop: -30, marginLeft: 96 }} />
            </CardImgOverlay>
        </Card>
        <h6 className="text-black">{item.original_title || item.title}</h6>
        <p>{new Date(item.release_date).toLocaleDateString()}</p>
    </Col>;
}

const Trending =() =>{
const [timeWindow,setTimeWindow]=useState('day');
const [trending,setTrending]=useState([]);

const fetchTrending=async(time)=>{
try{
const results=await getTrendingByTimeWindow(time);
setTrending(results)
}
catch(e){

}
}

useEffect(()=>{
fetchTrending(timeWindow)
},[timeWindow])
    
    return (
        <div className="flex-1" >
            <div className="clearfix mt-5 mb-2">
                <h4 className="float-left">Trending</h4>
                <Button color="primary" size="sm" onClick={()=>setTimeWindow('day')}>Today</Button>{' '}
                <Button color="secondary" size="sm" onClick={()=>setTimeWindow('week')}>This week</Button>
            </div>
            <Row className="flex-nowrap flex-row trending flex-1" >
                {
                    trending.map((trendingItem) => <TrendingCard item={trendingItem} key={trendingItem.id}/>)
                }
            </Row>
        </div>
    )
 
}


export default Trending;


