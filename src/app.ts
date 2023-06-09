import express, { Application, Request, Response } from 'express'
import usersRouter from './app/modules/user/users.route'
const app: Application = express()

//parser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', usersRouter)

app.get('/', (req: Request, res: Response) => {
  res.send('working successfully')
})

export default app
