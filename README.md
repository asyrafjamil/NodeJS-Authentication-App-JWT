# Node.js Authentication and CRUD API
Node.js Authentication and CRUD API with Email Verification, Password Reset Using JWT, Passport.js and Nodemailer

## Requirements
1. Get MongoDB and connect to the database.
2. Install all the packages by entering command "npm install"
3. Enter "yarn init" and start the server by entering "yarn start"
4. You're good to go!

## Testing
Use <a href="https://www.getpostman.com" target="_blank">Postman</a> to test.<br/>
Postman Environment is provided at the repository. 

**Register and Login** <br/>
Create a POST request to /api/auth/register <br/>
Create a POST request to /api/auth/login

**Make sure to enter a valid email address so you can receive the verification email.**<br/>

**Login and Recover Password** <br/>
Create a POST request to /api/auth/recover to recover your password. An email will be sent to you.

**Reset Password and Login with new Password** <br/>
Click the link in the email to reset your password. 
Reset the password then attempt to login with your old password. This should fail. Login with your new password



