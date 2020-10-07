import React, { useEffect, useState } from 'react';
import {Link} from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { listServiceproviders, saveService,deleteService } from '../actions/serviceprovideraction';
import { Typography } from '@material-ui/core';

function ServiceAdd (props) {
    const [modalVisible, setModalVisible] = useState(false);
    const [id,setId] = useState('');
    const [image,setImage]= useState('');
    const [category,setCategory]= useState('');
    const [countInStock,setCount]= useState('');
    const [description,setDescription]= useState('');
    const [name,setName]= useState('');
    const [price,setPrice]= useState('');

    const serviceProviderList = useSelector(state=> state.serviceProviderList);
    const {serviceproviders,loading,error} = serviceProviderList;


    const serviceSave = useSelector((state) => state.serviceSave);
    const {
      loading: loadingSave,
      success: successSave,
      error: errorSave,
    } = serviceSave;

    const serviceDelete = useSelector((state) => state.serviceDelete);
    const {
      loading: loadingDelete,
      success: successDelete,
      error: errorDelete,
    } = serviceDelete;


    const dispatch = useDispatch();

    useEffect(()=>{
        if(successSave){
            setModalVisible(false)
        }
      dispatch(listServiceproviders());
        return() =>{
//
        };
    },[successSave, successDelete] )

    const openModal = (serviceprovider) =>{
        setModalVisible(true);
        setId(serviceprovider._id);
        setName(serviceprovider.name);
        setImage(serviceprovider.image);
        setPrice(serviceprovider.price);
        setCategory(serviceprovider.category);
        setDescription(serviceprovider.description);
        setCount(serviceprovider.countInStock);

    }
    const submitHandler= (e) =>{

        e.preventDefault();

        dispatch(saveService({_id:id,
            name,
            price,
            description
            ,category,
            image,
            countInStock})
        );
    };
    const deleteHandler= (serviceprovider) =>{
        dispatch(deleteService(serviceprovider._id))
    }

    return  ( <div className="content content-margined">
            <div className="serviceproviders-header">
            <h3 style={{marginLeft:'20px'}}>
                 Add Service Provider
              </h3>
              <button style={{backgroundColor:'#6fc784',marginLeft:'20px',height:'35px',borderRadius:'55px',color:'white',width:'150px',marginBottom:'30px',border:'0.1rem #6fc784'}}  onClick={()=>openModal({})}>Create Product</button>
              </div>

     {modalVisible && (
      <div className="form">
      <form onSubmit={submitHandler}>
      <ul className="form-container" >
          <li>
              Create Service Provider
          </li>
          <li>
              {loadingSave && <div>Loading...</div>}
              {errorSave && <div>{errorSave}...</div>}
          </li>
         
          <li>
              <label htmlFor="name">
                  Name
              </label>
              <input  type="text " name="name" id="name" value={name} onChange={(e) => setName(e.target.value)}>

              </input>
          </li>
          <li>
              <label htmlFor="image">
                Image
              </label>
              <input type="text " name="image" id="image" value={image} onChange={(e) => setImage(e.target.value)}>

              </input>
          </li>
          <li>
              <label htmlFor="category">
                  Category
              </label>
              <input type="text " name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>

              </input>
          </li>
  
          <li>
              <label htmlFor="countinstock">
                  Count In Stock
              </label>
              <input type="text " name="countinstock" id="countinstock" value={countInStock} onChange={(e) => setCount(e.target.value)}>

              </input>
          </li>
          <li>
          <label htmlFor="description">Description</label>
                <textarea
                  name="description"
                  value={description}
                  id="description"
                  onChange={(e) => setDescription(e.target.value)}
                ></textarea>
                </li>
          <li>
              <label htmlFor="price">
                  Price
              </label>
              <input type="text" name="price" id="price" value={price} onChange={(e)=> setPrice(e.target.value)}>

              </input>
          </li>
          <li>

          <button style={{backgroundColor:'#4a95f7',color:'white',fontSize:'20px',marginTop:'10px',marginBottom:'10px'}} type="submit" className="button primary">
                  {id ? 'Update' : 'Create'}
                </button>
          </li>

          <li>
              <button style={{backgroundColor:'#4a95f7',color:'white',fontSize:'20px'}}
                  type="button"
                  onClick={() => setModalVisible(false)}
                  className="button secondary"
                >
                  Back
                </button>
          </li>
      </ul>
      </form>
      </div>
     )}
           
            <div className="serviceproviders-list" style={{marginLeft:'20px'}}>
              <table>
                  <thead>
                      <tr>
                      <th>
                          ID
                      </th>
                      <th>
                          Name
                      </th>
                      <th>
                          Price
                      </th>
                      <th>
                          Category
                      </th>
                      <th>
                          Action
                      </th>
                      </tr>
                  </thead>
                  <tbody >
                      {serviceproviders.map(serviceprovider=>( <tr >          
                      <td>
                              {serviceprovider._id}
                          </td>
                      <td>
                      {serviceprovider.name}
                      </td>
                      <td>
                    {serviceprovider.price}
                      </td>
                      <td>
                      {serviceprovider.name}
                      </td>
                      <td>
                      <button  style={{marginLeft:'5px',backgroundColor:'#2f809c',height:'35px',marginTop:'5px',borderRadius:'55px',width:'50px',border:'1rem #6fc784',color:"white"}} onClick={()=> openModal(serviceprovider)}>Edit</button>
                      <button  style={{backgroundColor:'#ad3d3d',marginLeft:'5px',height:'35px',borderRadius:'55px',border:'1rem #6fc784',color:'white'}} onClick={()=> deleteHandler(serviceprovider)}>Delete</button>
                      </td>
                   
                      </tr>))}
                
                  </tbody>
             
                  </table>  
            </div>
            
     

        </div>

    )
      
 
    
}

export default ServiceAdd;