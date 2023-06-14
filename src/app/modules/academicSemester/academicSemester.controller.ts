import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catAsync from '../../../shared/catchAsync';
import { Request, Response, NextFunction } from 'express';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';

const createSemester: RequestHandler = catAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemester(
      academicSemesterData
    );
    next();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'academic Semester created successfully',
      data: result,
    });
  }
);

export const AcademicSemesterController = {
  createSemester,
};
