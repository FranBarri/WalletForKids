const fs = require('fs').promises;
const path = require('path');
const nodemailer=require('nodemailer')
const ejs=require('ejs')
const {google} = require('googleapis');
const OAuth2 = google.auth.OAuth2;


const client_id="617752355277-umjd6spv67gusj2gl4re7fdamnb8ree3.apps.googleusercontent.com"
const client_secret="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"
const redirect_uri="https://developers.google.com/oauthplayground/"
const refresh_token="1//04os67GEqymtqCgYIARAAGAQSNwF-L9Irgb79T7L2eU-P0Ugtfmcfy2vIeRxPeMcIVkArMa-Xu7nQ7ip95XMjH1YYyIMrpUwqHcg"
const user='pixelpirates123@gmail.com'
const oauthClient=new OAuth2(client_id,client_secret,redirect_uri)
oauthClient.setCredentials({refresh_token:refresh_token})
const accessToken= oauthClient.getAccessToken()
.then((token)=>{
  return token
  
}
)

.catch((err)=>{
  console.log(err)
  
console.log('token')
})
const sendEmail=async(receiver,subject,body)=>{
  try{

    const transport=nodemailer.createTransport({
    service:'gmail',
    auth: {
      type: "OAuth2",
      user: user, 
      clientId: client_id,
      clientSecret: client_secret,
      refreshToken: refresh_token,
      accessToken: accessToken
 },
 
 tls: {
  rejectUnauthorized: false
}

  })
  const mailOptions={
    from:'pixelpirates@gmail.com',
    to:receiver,
    subject:subject,
    generateTextFromHTML: true,
    html:body,

  }
  const result=await transport.sendMail(mailOptions)
  return result
}
catch(err){
  return err
}
}



module.exports={sendEmail}