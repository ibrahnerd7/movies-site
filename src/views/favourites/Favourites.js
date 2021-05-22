import React, { useEffect} from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Row, Card, CardImg, CardBody, CardTitle, CardSubtitle, Col, Container, CardGroup } from 'reactstrap';
import { requestFavourites } from '../../application/actions-creators/favourites';
import { UserContext } from '../../application/providers/UserProvider';

const FavouritesItem=({showItem})=>{
    return(
        <Col md="2" xs="6">
        <Card className="mt-2">
            <CardImg top src={`https://www.themoviedb.org/t/p/w440_and_h660_face${showItem.poster_path}`} alt="Card image cap" />
            <CardBody>
                <CardTitle tag="h6" className="text-nowrap text-truncate" style={{width:"100%"}}>{showItem.name}</CardTitle>
                <CardSubtitle tag="p" className="mb-2 text-muted">{new Date(showItem.release_date).toLocaleDateString()}</CardSubtitle>
            </CardBody>
        </Card>
        </Col>
    )
}

const Favourites = () => {
    const dispatch = useDispatch()
    const user=useContext(UserContext);
    const {favourites,loading}=useSelector(state=>state.favourites);

    useEffect(() => {
        if(user){
            dispatch(requestFavourites(user.uid));
        }
    }, [dispatch, user])

    return (
        <Container>
            <h1 className="mt-4 mb-4">Favourites</h1>
            <Row className="flex-row">
            <CardGroup>
                {
                    favourites.map((show) => (
                     <FavouritesItem key={show.id} showItem={show} />
                    ))
                }
                </CardGroup>
            </Row>
        </Container>
    )
}

export default Favourites;