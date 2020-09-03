import React,{ useState, useEffect } from 'react';
import {Link} from 'react-router-dom';
import axios from 'axios';
import {useSelector, useDispatch} from 'react-redux';
import { listServiceproviders} from '../actions/serviceprovideraction'
function HomeScreen (props) {

    
    const serviceproviderList = useSelector(state => state.serviceproviderList);
    const { serviceproviders, loading, error } = serviceproviderList;
    const dispatch = useDispatch();


    useEffect(()=>{
       dispatch(listServiceproviders());

        return()=>{

        };
    }, [])

    return loading ? <div>Loading...</div>:
    error? <div> error </div>:
    (
        <ul className="serviceproviders">
        {
            serviceproviders.map(serviceprovider=>

            <li key={serviceprovider._id}> 
            <div className="serviceprovider">
            <Link to={'/serviceprovider/' + serviceprovider._id}>
            <img className="serviceprovider-image" src={serviceprovider.image} alt="serviceprovider"></img>
                </Link> 
            <div className="name">
                <Link to={'/serviceprovider/' + serviceprovider._id}>
                    {serviceprovider.name}
                </Link>
            </div>
            <div className="category">{serviceprovider.category}</div>
            <div className="rate">{serviceprovider.rate}$</div>
            <div className="rating">{serviceprovider.rating} Stars (10 reviews) </div>
            </div>    
            </li>)
        }
        </ul>
    )
}

export default HomeScreen;