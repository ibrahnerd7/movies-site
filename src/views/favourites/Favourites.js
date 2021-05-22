import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { Container } from 'reactstrap';
import { IoMdTrash } from 'react-icons/io'
import { requestFavourites } from '../../application/actions-creators/favourites';
import { UserContext } from '../../application/providers/UserProvider';
import { deleteFavourite } from '../../infrastructure/services/firebase/database';
import { toast } from 'react-toastify';


const FavouritesItem = ({ favourite, deleteFav }) => {
    return (
        <div className="card my-4 flex-row  border-0 rounded" style={{ backgroundColor: "#24282d" }}>
            <img className="rounded img-fluid " style={{ maxWidth: "15%", maxHeight: "40%" }} src={`https://www.themoviedb.org/t/p/w440_and_h660_face${favourite.poster_path}`} alt={favourite.title} />
            <div className="card-body">
                <h5 className="card-title text-white">{favourite.title}</h5>
                <p className="card-text text-white">{favourite.tagline}</p>
                <p className="card-text"><small className="text-muted">{new Date(favourite.release_date).toLocaleDateString()}</small></p>
            </div>
            <IoMdTrash style={{ cursor: "pointer" }} onClick={() => deleteFav()} className="my-auto" color="#dc3545" />
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

    const deleteFavouriteById = async (userId, id) => {
      const shouldDelete=  window.confirm('Do you want to delete the favourite')
      if(shouldDelete) {
          await deleteFavourite(userId, id);
          toast.success("Movie removed from favourites",{position:toast.POSITION.BOTTOM_RIGHT,hideProgressBar:true})
          if (user) {
            dispatch(requestFavourites(user.uid));
        }
        }
    }

    return (
        <Container fluid style={{ backgroundColor: "#24282d", paddingTop: 16, paddingBottom: 16 }}>
            <Container>
                <h1 className="mb-4 text-white">Favourites</h1>
                <div className="d-flex flex-column card-group">
                    {
                        favourites.map((favourite) => (
                            <FavouritesItem  key={favourite.id} favourite={favourite} deleteFav={() => deleteFavouriteById(user.uid, favourite.id)} />
                        ))
                    }
                </div>
            </Container>
        </Container>
    )
}

export default Favourites;