/**
 * Created by Asem Qaffaf
 * https://github.com/asemqaffaf
 *
 * description: this is a micro-service for posts and users 
 *
 */
const express = require('express') // express js
const cors = require('cors')
const app = express()
const port = 9002   // current port
app.use(cors())   ///middleware for network
app.use(express.json())  // middleware as well but this will make all responses with json type !
app.listen(port, () => console.log(`Connected at port ${port}`))
const userRouter = require('./routes/users')
app.use('/users/API',userRouter)     //      /users/API/
const postRouter = require('./routes/posts')
app.use('/posts/API',postRouter)     //      /posts/API/