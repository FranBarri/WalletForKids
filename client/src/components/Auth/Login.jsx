import React, { useContext, useState } from 'react';
import dino from '../../images/dino.png';
import { Link, Navigate, redirect, useNavigate } from 'react-router-dom';
import { loginProcess } from './ApiCall';
import { AuthContext } from './AuthAction';

export const Login = () => {
  const [password, setPassword] = useState('');
  const [dispatched, setDispatched] = useState(false);
  const [username, setUsername] = useState('');
  const [sessionMessage, setSessionMessage] = useState('')
  const [sessionStatus, setSessionStatus] = useState('')
  const {dispatch}=useContext(AuthContext)
  const {user,error}=useContext(AuthContext)
  const navigate=useNavigate()
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
      loginProcess({username,password},dispatch)
      .then((response) => {
        setDispatched(true)
        setTimeout(() => {
          setDispatched(false)
        }, (2000));
        user?setTimeout(() => {
          navigate('/')

        }, 400):<></>
      })
    

       .catch((error) => {
          console.error('Error:', error);
      
        })
  };

  return (
    <div>
      <div className="px-14 flex">
        <div className="mx-auto text-center py-6">
          <div className="rounded-full bg-slate-200 w-32 h-32">
            <img src={dino} className="mx-auto items-center pt-10" alt="account" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-xs text-center mx-auto">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              type="text"
              placeholder="Usuario"
              required="true"
              onChange={handleUsernameChange}
              value={username}
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
              Contraseña
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
              minLength="8"
              required
              value={password}
              onChange={handlePasswordChange}
            />
            {password.length < 8 && (
              <p className="text-red-500 text-xs italic">La contraseña no debe tener menos de 8 caracteres</p>
            )}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-[#8DBF81] hover:text-white hover:font-weight:600  text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onSubmit={handleSubmit}
            >
              Ingresar
            </button>
            <Link to={'parent-register'}><button
              className="bg-blue-500 hover:bg-[#c084fc] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Soy Adulto
            </button></Link>
          </div>
          {
            user?<p className="text-green-500 text-xs italic">Bienvenido! {user.username}.</p>:<></>
          }
          {!user && dispatched && <p className="text-red-500 text-xs italic">{error}</p>}
        </form>
        
        <Link to='/register' className="inline-block margin-bottom:30px  align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" >
          ¿No tienes una cuenta? Regístrate.
        </Link>
      </div>
    </div>
  );
};
