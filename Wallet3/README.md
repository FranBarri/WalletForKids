¡Hola!

Aquí te dejo el archivo README para tu proyecto:

Proyecto de Wallet MultiFirma
Este proyecto de Wallet MultiFirma tiene como objetivo crear un sistema para limitar los gastos de los niños y requerir aprobación de los padres en ciertas transacciones.

Instalación
Para instalar las dependencias necesarias, puedes usar el siguiente comando:

Copy code
npm install
Uso
Generar una Wallet
El primer paso para correr este proyecto es generar una wallet en la red de Ethereum local. Para hacerlo, utiliza el siguiente comando:

arduino
Copy code
npx hardhat run scripts/Wallet.js --network hardhat
Este comando generará una wallet y mostrará su dirección. Además, generará un archivo con su clave privada.

Crear una Wallet a partir de la dirección anterior
Una vez que se ha generado la wallet, se puede crear una wallet a partir de su dirección. Para hacerlo, usa el siguiente comando:

arduino
Copy code
npx hardhat run test/Wallet.js --network hardhat
Este comando creará una wallet a partir de la dirección de la wallet anteriormente creada. Esta wallet será la wallet del niño.

Correr las simulaciones
Una vez que se han generado las wallets, se pueden correr las simulaciones para limitar los gastos del niño y requerir la aprobación de los padres en ciertas transacciones.

Para correr la simulación del sistema multiSig, utiliza el siguiente comando:

bash
Copy code
npx hardhat run test/multiSigTest.js --network hardhat
Este comando correrá una simulación del sistema multiSig para las transacciones de los niños que requieren aprobación de los padres.

Para mostrar el balance de una cuenta, utiliza el siguiente comando:

bash
Copy code
npx hardhat run test/getBalance.js --network hardhat
Este comando mostrará el balance de una cuenta.

Para correr la simulación del sistema para limitar los gastos del niño, utiliza el siguiente comando:

bash
Copy code
npx hardhat run test/limitTest.js --network hardhat
Este comando correrá una simulación del sistema para limitar los gastos del niño.

Si por alguna razón, hay errores corriendo estos tests, intenta generando otra wallet con el primer comando y vuelva a probar los tests.
