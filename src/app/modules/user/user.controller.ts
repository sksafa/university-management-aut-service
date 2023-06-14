import { RequestHandler } from 'express';
import { UserService } from './user.service';
import catAsync from '../../../shared/catchAsync';
import { Request, Response, NextFunction } from 'express';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createUser: RequestHandler = catAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { user } = req.body;
    const result = await UserService.createUser(user);

    next();
    res.status(200).json({
      success: true,
      message: 'user created successfully',
      data: result,
    });
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'User Created Successfully',
      data: result,
    });
  }
);

export const UserController = {
  createUser,
};
