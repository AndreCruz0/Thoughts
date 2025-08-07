import { Request , Response } from "express"
import { Users } from '../models/Users'
import bcrypt from 'bcrypt'

export class AuthController {
  static registerUserRender(req: Request, res: Response) {
    res.render('auth/register')
  }


  static async registerUser(req: Request, res: Response) {
    const { name, email, password, checkpassword } = req.body

    // Validação de senha
    if (password !== checkpassword) {
      req.flash('message', 'As senhas não conferem, tente novamente!')
      res.redirect('auth/register')
      return
    }
    
    // Verifica se já existe email
    const checkIfUserExists = await Users.findOne({ where: { email: email } })

    if (checkIfUserExists) {
      req.flash('message', 'O email já está em uso!')
      res.redirect('auth/register')
      return
    }

    // Criptografa senha
    const salt = bcrypt.genSaltSync(10)
    const hashedPassword = bcrypt.hashSync(password, salt)
    
    try {
      // Cria usuário
      const newUser: any = await Users.create({
        name,
        email,
        password: hashedPassword,
      });

      // Inicializa sessão (usando cast rápido pra ignorar TS)
       (req.session as any).userId = newUser.id

      req.flash('message', 'Cadastro realizado com sucesso!')

      req.session.save(() => {
        res.redirect('/')
      })
    } catch (error) {
      console.log(error)
    }

    
  }

    static logoutUser(req: Request, res: Response) {
   
      req.session.destroy((err)=>{
        if(err){
          console.log(err);
          return res.redirect('/')
          
        }
        res.clearCookie('session')
        res.redirect('/') 
      })

  }
    static loginUserRender(req: Request, res: Response) {
   
      res.render('auth/login')

  }
    static  async loginUser(req: Request, res: Response) {
       const { email , password} = req.body

     const checkUser = await   Users.findOne({where : {email : email}})
        if(!checkUser){
         req.flash('message' , 'Email Ou senha invalidos')
         return res.render('auth/login')

        }
         const teste =   await bcrypt.compare(password , (checkUser as any).password)
         if (teste) {
        (req.session as any).userId = (checkUser as any).id
                req.flash('message', 'Logado com sucesso!')
                req.session.save(() => res.redirect('/'))

        }else{
        req.flash('message', 'Email Ou Senha invalidos')
       res.redirect('auth/login')
}
  }
  
}