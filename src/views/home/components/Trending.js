import React, { Component} from 'react';
import { Card, CardImg, CardImgOverlay, Col, Row, Button } from 'reactstrap';
import { IoAddCircle } from 'react-icons/io5'
import './style.css'
import { connect } from 'react-redux';
import { requestTrendings } from '../../../application/actions-creators/trending';

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

class Trending extends Component {
componentDidMount(){
    this.props.fetchTrendings()
}

    render() {
        return (
            <div className="flex-1" >
                <div className="clearfix mt-5 mb-2">
                    <h4 className="float-left">Trending</h4>
                    <Button color="primary" size="sm" onClick={() =>this.props.fetchTrendings()}>Today</Button>{' '}
                    <Button color="secondary" size="sm" onClick={() => console.log(">..")}>This week</Button>
                </div>
                <Row className="flex-nowrap flex-row trending flex-1" >
                    {
                    this.props.trendings.map((trendingItem) => <TrendingCard item={trendingItem} key={trendingItem.id} />)
                }
                </Row>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        trendings: state.trendings.trendings
    }
}


const mapDispatchToProps = (dispatch) => {
    return{
        fetchTrendings:()=>dispatch(requestTrendings())
    }
}


export default connect(mapStateToProps,mapDispatchToProps)(Trending);


