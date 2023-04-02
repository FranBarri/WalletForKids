  const router= require('express').Router()
  const CryptoJs= require('crypto-js')
  const jwt=require('jsonwebtoken')
  const body_parser = require('body-parser');
  const path = require('path');
  const database = require('../models/db_config')
  const { validateEmail } = require('./validateEmail');
  const {gmail}=require('./Gmail')
  const {sendEmail}=require('./Gmail')
  const ejs = require('ejs');

router.use(body_parser.json());

  // Register  

  router.post('/kidsRegistration', async (req, res) => {
    
    
    
    // Encrypt the password before saving the new user
 
    try {

      const today = new Date();
      const birthdate = new Date(req.body.birthdate);
      const age = today.getFullYear() - birthdate.getFullYear();
      const monthDiff = today.getMonth() - birthdate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
      }
  
      // Check that all inputs are compconsted
      if (!req.body.username || !req.body.password || !req.body.email || !req.body.birthdate) {
        return res.status(404).json({error: 'todos los campos son requeridos',data:null,status:404});
      }
      // Check that there are no existing users with the given username or email
      const existingUsername = await database.query('SELECT username FROM users where username=$1',[req.body.username.toLowerCase()]);
      const existingEmail = await database.query('SELECT email FROM users where email=$1',[req.body.email.toLowerCase()]);
      if (existingUsername.rowCount > 0 || existingEmail.rowCount > 0) {
        return res.status(401).json({message: 'Ya hay usuarios con estos datos',data:null,status:401});
      } 
      if(req.body.verificationCode!=='1234'){
        return res.status(401).json({message: 'El codigo de validacion es incorrecto',data:null,status:401});
      }
      console.log(req.body.verificationCode)

      // Email and password validation
      if(!validateEmail(req.body.email.toLowerCase())){
          return res.status(401).json({message:'Inserte un email valido',data:null,status:401});
      }
      if(req.body.password.length < 8){
          return res.status(401).json({message:'Lo sentimos la contraseña debe tener al menos 8 caracteres',data:null,status:401});
      }
      // Age validation
      if (isNaN(age) || age >= 18) {
        return res.status(401).json({message:'Lo sentimos, debes menos de 18 años para registrarte',data:null,status:401});
      }
      // Encrypt the password before saving the new user
      const secret = process.env.PASSWORD_SECRET; //secret key
      const encryptedPassword = CryptoJs.AES.encrypt(req.body.password, secret).toString();
      // Create a new user
      const newUser = await database.query(
        'INSERT INTO users (username, email, password, birthdate) VALUES ($1, $2, $3, $4)',[req.body.username.toLowerCase(), req.body.email.toLowerCase(), encryptedPassword, req.body.birthdate]
      )
     
        res.status(200).json({ message: 'Usuario creado con exito !',data:newUser.rows,status:200});
      console.log(`User created: ${req.body.username}`);
    } catch (err) {
      // Handle any errors that occur while saving the user
      console.log(err);
      res.status(500).json({error: 'An error occurred: ' + err});
    }
  });


// Login
  router.post('/loginKids', async (req, res) => {
      // Find the user with the given email 
      const user = await database.query('SELECT * FROM users WHERE username = $1', [req.body.username]);
    

      // Compare the passwords
      const secret = process.env.PASSWORD_SECRET; //secret key
      var bytes  = CryptoJs.AES.decrypt(user.rows[0].password, secret);
      console.log(user.rows[0].password)
      var decryptedPassword = bytes.toString(CryptoJs.enc.Utf8);
      if(req.body.password !== decryptedPassword){
          return res.status(401).json({ message: 'email o constraseña invalidos',data:null,status:401});
      }
      console.log(decryptedPassword)
      // Generate an access token for the user and sets the expiration time of the JWT code in 3 days.
      const accessToken = jwt.sign({
          id: user.rows[0].user_id,
      }, process.env.JWT_SECRET, { expiresIn: '3d' });
    
      // Return the user's public data and the access token
      const publicData = Object.assign({}, user.rows[0], { password: undefined });
      res.status(200).json({ user_data: publicData, token: accessToken });
      console.log(`User logged in: ${publicData.username}`)
    });
    
    module.exports = router;
    
    
  
    //register parents
    
  router.post('/parentsRegistration', async (req, res) => {
    
    
    // Encrypt the password before saving the new user
 
    try {

      const today = new Date();
      const birthdate = new Date(req.body.birthdate);
      const age = today.getFullYear() - birthdate.getFullYear();
      const monthDiff = today.getMonth() - birthdate.getMonth();
      if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthdate.getDate())) {
        age--;
      }
  
      // Check that all inputs are compconsted
      if (!req.body.username || !req.body.password || !req.body.email || !req.body.birthdate) {
        return res.status(404).json({error: 'todos los campos son requeridos',data:null,status:404});
      }
      // Check that there are no existing users with the given username or email
      const existingUsername = await database.query('SELECT username FROM parental_users where username=$1',[req.body.username.toLowerCase()]);
      const existingEmail = await database.query('SELECT email  FROM parental_users where email=$1',[req.body.email.toLowerCase()]);
      const existingUsername2 = await database.query('SELECT username FROM users where username=$1',[req.body.username.toLowerCase()]);
      const existingEmail2 = await database.query('SELECT email FROM users where email=$1',[req.body.email.toLowerCase()]);

      if (existingUsername.rowCount > 0 || existingEmail.rowCount > 0||existingEmail2.rowCount > 0||existingUsername2.rowCount > 0) {
        return res.status(401).json({message: 'Ya hay usuarios con estos datos',data:null,status:401});
      } 
      
      // Email and password validation
      if(!validateEmail(req.body.email.toLowerCase())){
          return res.status(401).json({message:'Inserte un email valido',data:null,status:401});
      }
      if(req.body.password.length < 8){
          return res.status(401).json({message:'Lo sentimos la contraseña debe tener al menos 8 caracteres',data:null,status:401});
      }
      // Age validation
      if (age < 18) {
        return res.status(401).json({message:'Lo sentimos, debes ser mayor de 18 años para registrarte',data:null,status:401});
      }
      
      // Encrypt the password before saving the new user
      let isAdult=true
      const secret = process.env.PASSWORD_SECRET; //secret key
      const encryptedPassword = CryptoJs.AES.encrypt(req.body.password, secret).toString();
      // Create a new user
      const newUser = await database.query(
        'INSERT INTO parental_users (username, email, password, birthdate, id_type, id_number) VALUES ($1, $2, $3, $4, $5, $6)',
        [req.body.username.toLowerCase(), req.body.email.toLowerCase(), encryptedPassword, req.body.birthdate, req.body.id_type, req.body.id_number]);
//  Save the new user to the database
//Generate access token 
const code = Math.floor(Math.random() * 9000) + 1000;

      ejs.renderFile(path.join(__dirname+"/Verification.ejs"), {
        username: req.body.username,
        code: code
      })
      .then(result => {
        
          sendEmail(req.body.email,`Bienvenido! verificate ${req.body.username.toUpperCase()}`,result ).
          then((res)=>{console.log(`New email welcome email sent! ${res}`)})
          .catch(err=>console.log(`Email could not be sent: ${err}`))
        }) 
        res.status(200).json({ message: 'Usuario creado con exito !',data:newUser.rows,status:200});
//         const wallet = await createWallet().then((wallet) => {
//           return wallet;
//         }); 
//         console.log(wallet.address)
// database.query('INSERT INTO wallets (user_id, wallet_address, wallet_private_key) VALUES ($1, $2, $3)', [newUser.rows[0].user_id, wallet.address, wallet.privateKey])

    } catch (err) {
      // Handle any errors that occur while saving  the user
      console.log(err);
      res.status(500).json({error: 'An error occurred: ' + err});
    }
  });

  // Login
  router.post('/parentalLogin', async (req, res) => {
    // Find the user with the given email 
    const user = await database.query('SELECT * FROM parentals_users WHERE username = $1', [req.body.username]);
  

    // Compare the passwords
    const secret = process.env.PASSWORD_SECRET; //secret key
    var bytes  = CryptoJs.AES.decrypt(user.rows[0].password, secret);
    console.log(user.rows[0].password)
    var decryptedPassword = bytes.toString(CryptoJs.enc.Utf8);
    if(req.body.password !== decryptedPassword){
        return res.status(401).json({ message: 'email o constraseña invalidos',data:null,status:401});
    }
    console.log(decryptedPassword)
    // Generate an access token for the user and sets the expiration time of the JWT code in 3 days.
    const accessToken = jwt.sign({
        id: user.rows[0].user_id,
    }, process.env.JWT_SECRET, { expiresIn: '3d' });
  
    // Return the user's public data and the access token
    const publicData = Object.assign({}, user.rows[0], { password: undefined });
    res.status(200).json({ user_data: publicData, token: accessToken });
    console.log(`User logged in: ${publicData.username}`)
  });
  
  module.exports = router;
  
  
