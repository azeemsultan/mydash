import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { register } from '../actions/userAction';
import { Grid, Typography } from '@material-ui/core';
import img1 from './work.jpg'
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
        <Grid container>
            <Grid item md={1}>
               
            </Grid>
            <Grid item md={7}>
            <Typography  variant="h1" style={{color: "#5e7bdb",marginTop:'20px'}}>Welcome to XsSupport</Typography>
            <img src= {img1} style={{maxHeight:'400px',maxWidth:'700px'}}/>
            <Typography  variant="h4" style={{color: "#5e7bdb",marginTop:'40px'}}>
               Register to be a part of our team.</Typography>
               <Typography  variant="h4" style={{color: "#5e7bdb",marginTop:'40px'}}>
               Lorem ipsum gypsom hehe</Typography>
               <Typography  variant="h4" style={{color: "#5e7bdb",marginTop:'40px'}}>
               XsSupport is a platform where you can become the king of acting.</Typography>
            </Grid>
            <Grid item md={4}>
        <div className="form" style={{marginTop:'20px'}}>
            <form onSubmit={submitHandler}>
            <ul className="form-container">
                <li>
                <Typography  variant="h3" style={{color: "#5e7bdb", marginTop:'30px'}}>Create your Account</Typography>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>Error...</div>}
                </li>
                <li> 
                    <label htmlFor="email">
                    <Typography  variant="h4" style={{color: "#5e7bdb", marginTop:'10px'}}>First Name</Typography>
                    </label>
                    <input style={{marginTop:'10px',border:'0.1rem #ffffff',height:'30px', marginTop:'10px'}} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>

                    </input>
                </li>
                <li> 
                    <label htmlFor="email">
                    <Typography  variant="h4" style={{color: "#5e7bdb", marginTop:'10px'}}>Last Name</Typography>
                    </label>
                    <input style={{marginTop:'10px',border:'0.1rem #ffffff',height:'30px', marginTop:'10px'}} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="email">
                    <Typography  variant="h4" style={{color: "#5e7bdb", marginTop:'10px'}}>Email</Typography>
                    </label>
                    <input style={{marginTop:'10px',border:'0.1rem #ffffff',height:'30px'}} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="password">
                    <Typography  variant="h4" style={{color: "#5e7bdb", marginTop:'10px'}}>Password</Typography>
                    </label>
                    <input style={{marginTop:'10px',border:'0.1rem #ffffff',height:'30px', marginTop:'10px'}} type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="password">
                    <Typography  variant="h4" style={{color: "#5e7bdb", marginTop:'10px'}}>Confirm Password</Typography>
                    </label>
                    <input style={{marginTop:'10px',border:'0.1rem #ffffff',height:'30px', marginTop:'10px'}} type="password" name="password" id="password" onChange={(e)=> setRePassword(e.target.value)}>

                    </input>
                    <li> 
                    <label htmlFor="email">
                    <Typography  variant="h4" style={{color: "#5e7bdb", marginTop:'10px'}}>Contact No</Typography>
                    </label>
                    <input style={{marginTop:'10px',border:'0.1rem #ffffff',height:'30px', marginTop:'10px'}} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>

                    </input>
                </li>
                </li>
                <li>
                <button style={{marginTop:'20px',backgroundColor:'#4a95f7',color:'#ffffff',fontSize:'20px',marginBottom:'10px'}} type="submit" className="button-primary">Register now</button>
                </li>
                <li>
                  <h4>Already have an Account?</h4> <Link to="/signin"><h3 style={{color:'blue'}}> Sign in </h3></Link>
                </li>
             
            </ul>
            </form>
        </div>
        </Grid>
        </Grid>
    )
    
}

export default RegisterScreen;