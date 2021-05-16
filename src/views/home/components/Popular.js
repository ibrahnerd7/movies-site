import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import { Row ,Card, CardImg,Col} from 'reactstrap';
import { requestPopular } from '../../../application/actions-creators/popular';
import './style.css'


const PopularCard = ({item,history}) => {

    return  <Col md="2" xs="6" onClick={()=>history.push(`/movie/${item.id}`)} style={{cursor:"pointer"}}>
        <Card inverse style={{border:"none",borderRadius:16}} >
            <CardImg style={{borderRadius:16}} src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt="Card image cap" />
        </Card>
        <h6 className="text-white">{item.original_title || item.title}</h6>
        <p className="text-white">{new Date(item.release_date).toLocaleDateString()}</p>
    </Col>;
}

const Popular = () => {
  const [activePopularType, setActivePopularType]=useState("movie");
  const {popular,loading}=useSelector(state=>state.populars);
  const dispatch=useDispatch()
  const history=useHistory()


  useEffect(()=>{
  dispatch(requestPopular(activePopularType));
  },[activePopularType, dispatch])

    return (
        <div>
            <Row className="mt-5 ml-1">
                <h3 className="text-white">Popular</h3>
                <Row  className="m-1">
                        <p onClick={() =>setActivePopularType("movie")} style={{cursor:"pointer", borderWidth:1, borderColor:"#25a2b8", borderStyle:"solid",width:100, textAlign:"center", borderRadius:50,marginRight:8}} className="text-white">Streaming</p>
                        <p  onClick={() => setActivePopularType("tv")} style={{cursor:"pointer",borderWidth:1, borderColor:"#25a2b8", borderStyle:"solid",width:100, textAlign:"center", borderRadius:50,marginLeft:8}} className="text-white">On Tv</p>
                        </Row>
            </Row>
            <Row className="flex-nowrap flex-row trending flex-1" >
                    {
                    popular.map((popularItem) => <PopularCard item={popularItem} key={popularItem.id} history={history}/>)
                }
                </Row>
        </div>
    )
}

export default Popular;