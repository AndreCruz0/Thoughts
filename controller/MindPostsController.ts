import { MindPosts } from '../models/MindPosts'
import { Request, Response } from 'express'
import bcrypt from 'bcrypt'


export class MindPostsController  {

    static MindPostRender(req :Request , res : Response){
        res.render('mindpost/create')
    }
    static async MindPost(req: Request, res: Response) {
  const title = req.body.title
  const UserId = (req.session as any).userId


  if (!UserId) {
    req.flash('message', 'Você precisa estar logado para postar!')
    return res.redirect('/auth/login')
  }

  try {
    await MindPosts.create({
      title,
      UserId 
    })

    req.flash('message', 'Pensamento criado com sucesso!')
    res.redirect('/')
  } catch (err) {
    console.log(err)
  }
   
}

}