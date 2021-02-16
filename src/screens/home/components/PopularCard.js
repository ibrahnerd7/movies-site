import React from 'react';
import { Card, CardImg, CardImgOverlay } from 'reactstrap';
import { IoAddCircle } from 'react-icons/io5'

const PopularCard = () => {
    return (
        <div>
            <Card inverse style={{ width: "12.5%", height: "12.5%" }}>
                <CardImg src="https://www.themoviedb.org/t/p/w440_and_h660_face/wRbjVBdDo5qHAEOVYoMWpM58FSA.jpg" alt="Card image cap" />
                <CardImgOverlay>
                    <IoAddCircle size="36" style={{ marginTop: -30, marginLeft: 96 }} />
                </CardImgOverlay>
            </Card>
            <h6 className="text-black">Riverdale</h6>
            <p>Jan 3, 2019</p>
        </div>
    )
}

export default PopularCard;