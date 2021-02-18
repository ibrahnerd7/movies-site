import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardImgOverlay, Col, Container, Row } from 'reactstrap';
import Slider from "react-slick";
import { IoAddCircle } from 'react-icons/io5'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { loadTrending } from '../../../application/actions/trending';
import { getAllTrending } from '../../../infrastructure/services/api/trending';
import './style.css'


const PopularCard = () => {
    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 6,
        slidesToScroll: 1
    };
    // const { error, trending, isLoading } = useSelector((state) => state.trending);
    // const dispatch = useDispatch();
    const [trending, setTrending] = useState([]);
    useEffect(() => {
        fetchTrending()
    }, [])

    const fetchTrending = async () => {
        try {
            const trendings = await getAllTrending();
            console.log("holla");
            setTrending(trendings);
        }
        catch (error) {

        }
    }

    return (
        <div >
            <div className="clearfix mt-5 mb-2">
                <h4 className="float-left">Trending</h4>
                <Link to='/' className="float-right text-uppercase">See all</Link>
            </div>
            <Row className="flex-nowrap flex-row trending" >
                {
                    trending.map((item) => (
                        <Col md="2" xs="6">
                            <Card inverse >
                                <CardImg src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt="Card image cap" />
                                <CardImgOverlay>
                                    <IoAddCircle size="36" style={{ marginTop: -30, marginLeft: 96 }} />
                                </CardImgOverlay>
                            </Card>
                            <h6 className="text-black">{item.original_title}</h6>
                            <p>Jan 3, 2019</p>
                            </Col>
                    ))
                }
               </Row>
        </div>
    )
}



export default PopularCard;