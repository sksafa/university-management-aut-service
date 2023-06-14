import express, { Application } from 'express';
import globalErrorHandler from './app/middlewares/globalErrorHandlers';
import routes from './app/routes';
const app: Application = express();

//parser

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//application routes
// app.use('/api/v1/users', UserRoutes);
// app.use('/api/v1/academic-semester', AcademicSemesterRoutes);

app.use('/api/v1/', routes);

// app.get('/', async (req: Request, res: Response, next: NextFunction) => {
//   Promise.reject(new Error('Unhandled promise rejection'))
// })

// global error
app.use(globalErrorHandler);

export default app;
