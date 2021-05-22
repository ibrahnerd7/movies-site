import React, { useEffect } from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Button, Col, Container } from 'reactstrap';
import { IoMdTrash } from 'react-icons/io'
import { requestFavourites } from '../../application/actions-creators/favourites';
import { UserContext } from '../../application/providers/UserProvider';


const FavouritesItem = ({ favourite }) => {
    return (
        <div class="card my-4 flex-row  border-0 rounded" style={{backgroundColor:"#24282d"}}>
            <img  className="rounded img-fluid " style={{maxWidth:"15%",maxHeight:"40%"}} src={`https://www.themoviedb.org/t/p/w440_and_h660_face${favourite.poster_path}`} alt={favourite.title} />
            <div class="card-body">
                <h5 class="card-title text-white">{favourite.title}</h5>
                <p class="card-text text-white">{favourite.tagline}</p>
                <p class="card-text"><small class="text-muted">{new Date(favourite.release_date).toLocaleDateString()}</small></p>
            </div>
          <IoMdTrash   className="my-auto" color="#dc3545"/> 
        </div>
    )
}

const Favourites = () => {
    const dispatch = useDispatch()
    const user = useContext(UserContext);
    const { favourites, loading } = useSelector(state => state.favourites);

    useEffect(() => {
        if (user) {
            dispatch(requestFavourites(user.uid));
        }
    }, [dispatch, user])

    return (
        <Container fluid style={{backgroundColor:"#24282d",paddingTop:16, paddingBottom:16}}>
            <Container>
            <h1 className="mb-4 text-white">Favourites</h1>
            <div class="d-flex flex-column card-group">
                {
                    favourites.map((favourite) => (
                        <FavouritesItem key={favourite.id} favourite={favourite} />
                    ))
                }
            </div>
            </Container>
        </Container>
    )
}

export default Favourites;