import React, { useEffect, useState } from 'react';
import { Card, CardImg, CardImgOverlay } from 'reactstrap';
import { IoAddCircle } from 'react-icons/io5'
import { useDispatch, useSelector } from 'react-redux';
import { loadTrending } from '../../../application/actions/trending';
import { getAllTrending } from '../../../infrastructure/services/api/trending';

const PopularCard = () => {
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
        <div>
            {
                trending.map((item) => (<div>
                    <Card inverse style={{ width: "12.5%", height: "12.5%" }}>
                        <CardImg src={`https://www.themoviedb.org/t/p/w440_and_h660_face${item.poster_path}`} alt="Card image cap" />
                        <CardImgOverlay>
                            <IoAddCircle size="36" style={{ marginTop: -30, marginLeft: 96 }} />
                        </CardImgOverlay>
                    </Card>
                    <h6 className="text-black">{item.original_title}</h6>
                    <p>Jan 3, 2019</p>
                </div>))
            }
        </div>

    )
}

export default PopularCard;