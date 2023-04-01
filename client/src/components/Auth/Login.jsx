import React, { useState } from 'react';
import Account from '../../images/img.png';
import dino from '../../images/dino.png';
export const Login = () => {
  const [password, setPassword] = useState('');

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission
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
              required
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
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Ingresar
            </button>
          </div>
        </form>
        <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800" href="#">
          ¿No tienes una cuenta? Regístrate.
        </a>
      </div>
    </div>
  );
};
