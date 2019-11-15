/**
 * Created by Asem Qaffaf
 * https://github.com/asemqaffaf
 *
 * description: this is a  micro service for posts and services
 *
 *  200 OK
 *  201 successfully create an object
    202 Accepted
    204 No Content
    400 Bad Request
    404 Not Found

 */
const express = require('express')
const router = express.Router()
const userDB = require('./../models/UsersDatabase')
router.use(express.json())

router.get('/data', async (request, response) => {

    try {
        const users = await userDB.find()
        response.json(users)
    }
    catch (error) {
        response.status(500).json({ message: error.message })
    }
})
async function verifyCreateAccount(email) {
    const users = await userDB.find()
    let verified = true
    users.forEach(item => {
        if (item.email === email) {
            verified = false
        }
    })
    return verified
}
router.post('/new', async (request, response) => {
    verifyAccount()
    let { name, email, password } = request.body
    if (await verifyCreateAccount(email)) {
        const user = new userDB({
            name,
            email,
            password
        })
        try {
            const newUser = await user.save()
            response.status(201).json(newUser)
        }
        catch (error) {
            response.status(400).json({ message: error.message })
        }
    }
    else {
        response.status(400).json({ message: 'Bad Request' })
    }
})
async function verifyAccount(user) {
    const users = await userDB.find()
    let p = new Promise((resolve, reject) => {
        users.forEach(usr => {
            if (usr.email === user.email && usr.password === user.password) {
                resolve(usr._id)
            }
        })
        reject('no user found')
    })
    return p
}

router.get('/auth', async (request, response) => {
    await verifyAccount(request.query)
        .then((userId) => response.status(202).json({userID : userId}))
        .catch((error) => response.status(400).json({message : error}))
})
module.exports = router