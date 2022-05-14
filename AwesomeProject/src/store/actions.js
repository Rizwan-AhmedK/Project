import AsyncStorage from "@react-native-async-storage/async-storage";
import React, {useEffect, useState} from "react";

export const Init = () => {


  return async dispatch => {
    let token = await AsyncStorage.getItem('token');
    if (token !== null) {
      console.log('token fetched');
      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
  }
}


let email = "" ,pass="";
let status=false;

export const Login = (username, password) => {



  fetch("http://10.0.2.2:3000/login", {
    method : "post",
    headers:{
        'Content-Type': 'application/json' 
    },
    body:JSON.stringify({
        email: username,
        pass: password,
        
    })

})

.then(res=>res.json())
.then(async (data) => {
  // email = data.data.email;
  // pass = data.data.pass;
  console.log(data)
  status = data.success
  
}).catch(err => {
    console.log(err)
})


  return async dispatch => {
    
    let token = null;

    if (status) {
      token = username;
      // here we can use login api to get token and then store it
      await AsyncStorage.setItem('token', token);
      console.log('token stored');

      dispatch({
        type: 'LOGIN',
        payload: token,
      })
    }
    
  }
}


export const Logout = () => {
  return async dispatch => {
    await AsyncStorage.clear();
    dispatch({
      type: 'LOGOUT'
    })
  }
}