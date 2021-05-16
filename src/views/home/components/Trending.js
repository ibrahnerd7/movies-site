import React, { useEffect, useState} from 'react';
import { Card, CardImg, Col, Row, Button } from 'reactstrap';
import './style.css'
import {  useDispatch, useSelector } from 'react-redux';
import { requestTrendings } from '../../../application/actions-creators/trending';
import { useHistory } from 'react-router';

const TrendingCard = ({ item ,history}) => {
    return <Col md="2" xs="6" onClick={()=>history.push(`/movie/${item.id}`)} style={{cursor:"pointer"}}>
        <Card inverse style={{border:"none",borderRadius:16}}>
            <CardImg style={{borderRadius:16}} src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt="Card image cap" />
        </Card>
        <h6 className="text-white">{item.original_title || item.title}</h6>
        <p className="text-white">{new Date(item.release_date).toLocaleDateString()}</p>
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
            <div >
                <Row className="mt-5 ml-1">
                    <h4 className="text-white ">Trending</h4>
                    <Row  className="m-1">
                        <p onClick={() =>setActiveTimeWindow("day")} style={{cursor:"pointer", borderWidth:1, borderColor:"#25a2b8", borderStyle:"solid",width:100, textAlign:"center", borderRadius:50,marginRight:8}} className="text-white">Today</p>
                        <p  onClick={() => setActiveTimeWindow("week")} style={{cursor:"pointer",borderWidth:1, borderColor:"#25a2b8", borderStyle:"solid",width:100, textAlign:"center", borderRadius:50,marginLeft:8}} className="text-white">This week</p>
                        </Row>
  
                </Row>
                <Row className="flex-nowrap flex-row trending flex-1" >
                    {
                    trendings.map((trendingItem) => <TrendingCard item={trendingItem} key={trendingItem.id} history={history}/>)
                }
                </Row>
            </div>
        )
    

}

export default Trending;


