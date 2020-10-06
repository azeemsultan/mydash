import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userAction';

function RegisterScreen (props) {
    
    const [name,setName]= useState('');
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const [repassword,setRePassword]= useState('');
    const userRegister= useSelector(state=> state.userRegister);
    const { loading, userInfo , error} = userRegister;
    const dispatch = useDispatch();

    useEffect(()=>{
    if(userInfo){
        props.history.push("/")
    }
        return() =>{
//
        };
    }, [userInfo])

    const submitHandler= (e) =>{
        e.preventDefault();
        dispatch(register( name,email,password));
    }

    return(
        <div className="form">
            <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                    <h3>
                       Create your Account
                    </h3>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>Error...</div>}
                </li>
                <li>
                    <label htmlFor="email">
                        Name
                    </label>
                    <input type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="email">
                        Email
                    </label>
                    <input type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="password">
                        Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="password">
                       Confirm Password
                    </label>
                    <input type="password" name="password" id="password" onChange={(e)=> setRePassword(e.target.value)}>

                    </input>
                </li>
                <li>
                <button type="submit" className="button-primary">Register now</button>
                </li>
                <li>
                   Already have an Account? <Link to="/signin">Sign in</Link>
                </li>
             
            </ul>
            </form>
        </div>

    )
    
}

export default RegisterScreen;