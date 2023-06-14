import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandlers'
import { UserRoutes } from './app/modules/user/user.route'
const app: Application = express()

//parser

app.use(express.json())
app.use(express.urlencoded({ extended: true }))

//application routes
app.use('/api/v1/users', UserRoutes)

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled promise rejection'))
// })

// global error
app.use(globalErrorHandler)

export default app
