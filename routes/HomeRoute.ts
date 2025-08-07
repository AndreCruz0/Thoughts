import { MindPosts } from '../models/MindPosts'
import { Users } from '../models/Users'
import express from 'express'
import { Op } from 'sequelize'

const router = express.Router()

router.get('/', async (req, res) => {
    const searchTerm = req.query.search || ''
    const order = req.query.order || 'new'

    const where = searchTerm 
        ? { title: { [Op.like]: `%${searchTerm}%` } }
        : {}

    const posts = await MindPosts.findAll({ 
        include: Users,
        raw: true,
        nest: true,
        where,
        order: [['createdAt', order === 'new' ? 'DESC' : 'ASC']]
    })

    const MindPostsQty = posts.length

    req.session.save(() => {
        res.render('home', {
            search: searchTerm,
            posts,
            MindPostsQty,
            session: req.session, // 🔹 Agora a view tem acesso à sessão
            messages: req.flash ? req.flash() : {}
        })
    })
})


export default router
