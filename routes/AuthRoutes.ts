import express from 'express'
import { AuthController } from '../controller/AuthController'
const router = express.Router()

router.get('/register' , AuthController.registerUserRender )
router.post('/register' , AuthController.registerUser )
router.get('/logout' , AuthController.logoutUser)
router.get('/login' , AuthController.loginUserRender)
router.post('/login' , AuthController.loginUser)


export default router