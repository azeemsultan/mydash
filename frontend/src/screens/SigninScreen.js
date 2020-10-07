import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { detailsService } from '../actions/serviceprovideraction';
import { Button, Grid, Paper, Typography } from '@material-ui/core';
import { signin } from '../actions/userAction';
import img1 from './work.jpg'
function SignInScreen (props) {
 
    const [email,setEmail]= useState('');
    const [password,setPassword]= useState('');
    const userSignin= useSelector(state=> state.userSignin);
    const { loading, userInfo , error} = userSignin;
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
        dispatch(signin(email,password));
    }

    return(
        <Grid container> 
        <Grid item md={1}>

        </Grid>
        <Grid item md={6} xs={12} style={{marginTop:'50px'}}>
        <Typography  variant="h1" style={{color: "#5e7bdb"}}>Welcome to XsSupport</Typography>
        <Typography  variant="h4" style={{color: "#5e7bdb",marginTop:'40px'}}>
                A world where ease is at your hands</Typography>
                  <img src= {img1} style={{maxHeight:'400px',maxWidth:'700px'}}/>
          
         <Typography  variant="h4" style={{color: "#5e7bdb",marginTop:'40px'}}>
               Register to be a part of our team.</Typography>
        </Grid>
        <Grid item md={4} xs={12}  style={{marginTop:'50px'}}>
        <div className="form"  >
            <form onSubmit={submitHandler}>
            <ul className="form-container" >
                <li>
                <Typography  variant="h3" style={{color: "#5e7bdb",marginTop:'20px',textAlign:'center',marginRight:'10px'}}>Sign In</Typography>
                </li>
                <li>
                    {loading && <div>Loading...</div>}
                    {error && <div>Error...</div>}
                </li>
                <li>
                    <label htmlFor="email">
                    <Typography  variant="h4" style={{color: "#5e7bdb"}}>Email</Typography>
                    </label>
                    <input style={{marginTop:'10px',border:'0.1rem #ffffff',height:'30px'}} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>

                    </input>
                </li>
                <li>
                    <label htmlFor="password" style={{marginTop:'10px'}}>
                    <Typography  variant="h4" style={{color: "#5e7bdb"}}>Password</Typography>
                    </label>
                    <input style={{marginTop:'10px',border:'0.1rem #ffffff',height:'30px'}} type="password" name="password" id="password" onChange={(e)=> setPassword(e.target.value)}>

                    </input>
                </li>
                <li>
                <button style={{marginTop:'20px',backgroundColor:'#4a95f7'}} type="submit" className="button-primary"> <Typography  variant="h5" style={{textAlign:'center',color: "white",fontWeight:'bold'}}>Sign in</Typography> </button>
                </li>
                <li style={{marginTop:'20px'}}>
                    Dont have an account yet?
                </li>
                <Link to="/register" className="button"style={{marginTop:'10px',backgroundColor:'#4a95f7',marginBottom:'10px'}} > <Typography  variant="h5" style={{textAlign:'center',color: "white",fontWeight:'bold'}}>Create your account now!</Typography></Link>
                <p> Terms and conditions... </p>
            </ul>
            </form>
        </div>
        </Grid>
        </Grid>
    )
    
}

export default SignInScreen;