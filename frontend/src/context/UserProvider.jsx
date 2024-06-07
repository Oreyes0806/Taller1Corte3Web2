import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';
import Cookies from 'js-cookie';
import { jwtDecode } from "jwt-decode";
import { UserContext } from './UserContext';

export const UserProvider = ({children}) => {
  const [user, setUser] = useState();
  const urlApi = import.meta.env.VITE_API_URL;
  const navigate = useNavigate();
  const registrarUsuario = async (values) => {
    try {
      const { name, lastname, telefono, email, birthday, password } = values;
      const { data } = await axios.post(`${urlApi}/users/register`, { name, lastname, telefono, email, birthday, password }, { withCredentials: true });
      setUser(data);
      Swal.fire({
        title: 'success',
        text: 'Logueado correctamente',
        icon: 'success'
      })
      navigate('/');
    } catch ({ response }) {
      Swal.fire({
        title: 'Error',
        text: response.data.message,
        icon: 'error'
      });
    }
  };

  const iniciarSesion = async (values) => {
    try {
      const { email, password } = values;
      const { data } = await axios.post(`${urlApi}/users/login`, { email, password }, { withCredentials: true });
      setUser(data);
      navigate('/');
      Swal.fire({
        title: 'success',
        text: 'Logueado correctamente',
        icon: 'success'
      })
    } catch ({ response }) {
      Swal.fire({
        title: 'Error',
        text: response.data.message,
        icon: 'error'
      });
    }
  };

  const cerrarSesion = async () => {
    const { data } = await axios.post(`${urlApi}/users/logout`, {}, { withCredentials: true });
    if (data) {
      setUser(null)
      navigate('/')
    };
  };
  
    const InfoTotalUser = async()=>{
      try {
        const {data} = await axios.post(`${urlApi}/users/infoUser`,{token:Cookies.get('token')},{withCredentials:true})
        return data
      } catch ({response}) {
        console.log(response.data.message)
        Swal.fire({
          title:'Error!',
          text:response.data.message,
          icon:'error'
        })
      }
    }
useEffect(() => {
  const token = Cookies.get('token');
  if (token) {
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; 
      
      if (decoded.exp < currentTime) {
        console.error('Token Expirado');
        logout()
      } else {
        setUser({ ...decoded});
      }
    } catch (error) {
      console.error('Error al decodificar', error);
    }
  }
}, []);
  return (
    <UserContext.Provider value={{iniciarSesion, registrarUsuario, cerrarSesion, user, InfoTotalUser}}>
        {children}
    </UserContext.Provider>
  )
}
