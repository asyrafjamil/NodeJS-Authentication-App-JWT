# Node.js Authentication and CRUD API
Node.js Authentication and CRUD API with Email Verification, Password Reset Using JWT, Passport.js and Nodemailer

## Features
1. Register User
2. Login User
3. Reset Password

## Requirements
1. Get MongoDB and connect to the database.
2. Install all the packages by entering command "npm install"
3. Enter "yarn init" and start the server by entering "yarn start"
4. You're good to go!

## Edit these codes with your own value
1. Go to "index.js" under "utils" folder and go to line 12 and 13. Insert your Gmail credentials there.
2. Configure file '.env'

## Testing
Use <a href="https://www.getpostman.com" target="_blank">Postman</a> to test.<br/>
Postman Environment is provided at the repository. 

**Register and Login** <br/>
Create a POST request to /api/auth/register <br/>
![Register](https://github.com/asyrafjamil/NodeJS-Authentication-App-JWT/blob/master/Register%20User.png "Register")


Create a POST request to /api/auth/login
![Login](https://github.com/asyrafjamil/NodeJS-Authentication-App-JWT/blob/master/Login%20User.png "Login")

**Make sure to enter a valid email address so you can receive the verification email.**<br/>

**Login and Recover Password** <br/>
Create a POST request to /api/auth/recover to recover your password. An email will be sent to you.
![Recover](https://github.com/asyrafjamil/NodeJS-Authentication-App-JWT/blob/master/Reset%20Password.png "Reset")

**Reset Password and Login with new Password** <br/>
Click the link in the email to reset your password. 
Reset the password then attempt to login with your old password. This should fail. Login with your new password
![Reset](https://github.com/asyrafjamil/NodeJS-Authentication-App-JWT/blob/master/Change%20Password.png "Reset")

## Reference 

1. https://dev.to/dipakkr/implementing-authentication-in-nodejs-with-express-and-jwt-codelab-1-j5i
2. https://blog.usejournal.com/easiest-backend-authentication-using-express-mongodb-and-postman-86997c945f18
3. https://www.youtube.com/watch?v=kfw61IxDgW8&t=809s

