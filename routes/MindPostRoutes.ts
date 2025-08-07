import express from 'express'
import { MindPostsController } from '../controller/MindPostsController'

const router = express.Router()

router.get('/create' , MindPostsController.MindPostRender)
router.post('/create' , MindPostsController.MindPost)


export default router