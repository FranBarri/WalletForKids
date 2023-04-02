import React, { useContext, useState } from 'react';
import egg from '../../images/big_dino.png';
import { Link, Navigate, useNavigate } from 'react-router-dom';

import { parentalRegisterProcess, registerProcess } from './ApiCall';
import { AuthContext } from './AuthAction';

export const ParentalRegister=()=> {
  const {user,dispatch,error}=useContext(AuthContext)
  const {registrated_user}=useContext(AuthContext)
  const [password, setPassword] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [birthdate, setBirthDate] = useState('');
  const [id_type, setIdType] = useState('');
  const [id_number, setIdNumber] = useState('');
  const [responseMessage, setResponseMessage]=useState('')
  const [response, setResponse]=useState('')
  const {navigate}=useNavigate()


  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleIdTypeChange = (event) => {
    setIdType(event.target.value);
  };
  const handleIdNumberChange = (event) => {
    setIdNumber(event.target.value);
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


  
  const handleSubmit = (event) => {
    event.preventDefault();
    parentalRegisterProcess({username,password,email,birthdate,id_number,id_type},dispatch)

 if( registrated_user){

   setTimeout(() => {
     navigate('/login/adultxs')
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
            <div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identificationType">
    Tipo de identificación
  </label>
  <select
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="identificationType"
    required='true'
  >
    <option value={id_type} onChange={handleIdTypeChange} disabled selected>
      Seleccione un tipo de identificación
    </option>
    <option value="DNI">DNI</option>
    <option value="CI">CI</option>
    <option value="passport">Pasaporte</option>
  </select>
</div>

<div className="mb-4">
  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="identificationNumber">
    Número de identificación
  </label>
  <input onChange={handleIdNumberChange} value={id_number}
    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
    id="identificationNumber"
    type="text"
    placeholder="Número de identificación"
    required='true'
  />
</div>
          </div>
      
          <div className="flex items-center ">
            <button
              className=" w-35 h-14 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
              onSubmit={()=>handleSubmit}
            >
              Registrarse

            </button>
             <button
              className="w-35 h-14 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
               <Link to='/register/niñxs'> 
              Tengo menos de 18 años
            </Link>
            </button>
          </div>
          {registrated_user? <p className='text-green'>Usuario registrado! {registrated_user}</p>:<p></p>}
        </form>
        <Link to={'/login/adultxs'} > <p className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
        Ya hiciste esto? Hace click acá. </p></Link>
</div>
</div>
)
}
