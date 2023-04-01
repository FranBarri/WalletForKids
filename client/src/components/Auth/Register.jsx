import React, { useContext, useState } from 'react';
import egg from '../../images/dinoEgg.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { registerProcess } from './ApiCall';
import { AuthContext } from './AuthAction';

export const Register=()=> {
  const {user,dispatch,error}=useContext(AuthContext)
  const {registrated_user}=useContext(AuthContext)
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [birthdate, setBirthDate] = useState('');
  const [responseMessage, setResponseMessage]=useState('')
  const [response, setResponse]=useState('')
  const {navigate}=useNavigate()


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleBirthDateChange = (event) => {
    setBirthDate(event.target.value);
  };

  const handleVerificationCodeChange = (event) => {
    setVerificationCode(event.target.value);
  };
 
  const handleSubmit = (event) => {
    event.preventDefault();
    registerProcess({username,password,email,birthdate,verificationCode:verificationCode},dispatch)

 if( registrated_user){

   setTimeout(() => {
     navigate('/login')
    }, 1200)
  } 
   

  
}

  return (
    <div className='container mx-auto'>
      <div className="px- flex">
        <div className="mx-auto text-center py-6">
          <div className="rounded-full bg-slate-200 w-32 h-32">
            <img src={egg} className="mx-auto items-center pt-10" alt="account" />
          </div>
        </div>
      </div>
      <div className="w-full max-w-xs text-center mx-auto">
        <form className="bg-white shadow-md rounded px-12 pt-6 pb-8 mb-4" onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
              Usuario
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="username"
              value={username}
              onChange={handleUsernameChange}
              type="text"
              placeholder="Usuario"
              required='true'
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="XXXX@XXXX.COM">
              Email
            </label>
            <input
              
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              value={email}
              type="email"
              placeholder="sfafasfsa@safsafas.com"
              required='true'
              onChange={(e)=>handleEmailChange(e)}
            />
          </div>
          <div className="mb-6">
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
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">fecha de nacimiento</label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline 2px black "
              id="birthdate"
              type="date"
              value={birthdate}
              onChange={handleBirthDateChange}
              placeholder="MM/DD/YYYY"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2 ">codigo de verificación</label>
            <input  maxLength={'4'} value={verificationCode}  onChange={handleVerificationCodeChange} className=" shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline 2px black "title='Ingresa el codigo enviado a tu adulto responsable!'  id="code" type="phone" placeholder="codigo" required />
          </div>

          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onSubmit={()=>handleSubmit}
            >
              Registrarse

            </button>
             <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
               <Link to='registro-adultos'> 
              Registro Adulto
            </Link>
            </button>
          </div>
          {registrated_user? <p className='text-green'>Usuario registrado! {registrated_user}</p>:<p></p>}
        </form>
        <Link > <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Ya hiciste esto? Hace click acá. </p></Link>
</div>
</div>
)
}
