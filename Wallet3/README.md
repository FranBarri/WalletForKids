Este proyecto es un ejemplo simple de cómo se puede usar un contrato inteligente de Ethereum para limitar los gastos de los niños y requerir la aprobación de los padres para transacciones mayores a cierto límite.

## Requerimientos

- Node.js 14.x o superior
- Hardhat (instalado globalmente)

## Instalación

1. Clonar este repositorio: `git clone https://github.com/example/kids-allowance.git`
2. Instalar dependencias: `npm install`

## Uso

1. Generar una wallet en la red local de Ethereum: `npx hardhat run scripts/Wallet.js --network hardhat`. Esto generará una nueva wallet y su private key, que se almacenará en un archivo en la carpeta `accounts`.
2. Crear una wallet de ejemplo para un niño: `npx hardhat run test/Wallet.js --network hardhat`. Esto creará una wallet usando la dirección generada en el paso anterior.
3. Ejecutar simulaciones de prueba:
   - Sistema de multi-firma para transacciones de niños: `npx hardhat run test/multiSigTest.js --network hardhat`
   - Ver balance de una cuenta: `npx hardhat run test/getBalance.js --network hardhat`
   - Sistema de limitación de gastos de niños: `npx hardhat run test/limitTest.js --network hardhat`

Si encuentra errores al ejecutar las pruebas, intente generando una nueva wallet con el primer comando y vuelva a intentar.
