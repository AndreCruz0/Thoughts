import  express from 'express'
import {conn} from './db/conn'
import {engine} from 'express-handlebars'
import './models/Users'
import AuthRoutes from './routes/AuthRoutes'
import session from 'express-session';
import "./models/MindPosts"
import flash from 'express-flash'
import MindPostRoutes from './routes/MindPostRoutes'
import HomeRoute from './routes/HomeRoute'
const FileStore = require('session-file-store')(session);
const app = express()

app.engine('handlebars' , engine() ) 
app.set('view engine' , 'handlebars')
app.use(express.static('public'))
app.use(
    express.urlencoded({
        extended : true
    })
)
app.use(express.json())

//session middleware

app.use(
    session({
        name : 'session',
        secret : 'nosso_secret',
        resave : false ,
        saveUninitialized : false , 
        store : new FileStore({
            logFn : function(){} ,
            path : require('path').join(require('os').tmpdir(), 'sessions')
        }),
        cookie : {
            secure : false,
            maxAge : 3600000,
            expires : new Date(Date.now() + 3600000),
            httpOnly : true
        }

    })
)

// flash messages

app.use(flash())


app.use('/' , HomeRoute)

// set session to res
app.use((req,res,next)=> {
    if((req.session as any).userId){
        console.log('Session userId:', (req.session as any).userId);
       res.locals.session = (req.session as any);
    }
    next()
}) 

app.use('/mindpost' , MindPostRoutes)
app.use('/auth' , AuthRoutes)
conn.sync().
then(()=> {
    app.listen(3001)
})
.catch((err)=>  console.log(err))