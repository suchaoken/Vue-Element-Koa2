const Koa = require('koa')
const bodyParser =require('koa-bodyparser')
const userRouter = require('./app/api/user.js')
const app = new Koa()
app.use(bodyParser())
app.use(userRouter.routes())
app.listen(3000)