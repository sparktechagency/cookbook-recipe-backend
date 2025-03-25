import { JwtPayload } from 'jsonwebtoken';
import IGenericErrorMessage from './error';

export type IGenericErrorResponse = {
  statusCode: number;
  message: string;
  errorMessages: IGenericErrorMessage[];
};
type UploadedFile = {
  filename: string;
  path: string;
};
export type RequestData = {
  files?: {
    [key: string]: Express.Multer.File[];  
  };
  body?: {
    [key: string]: any;  
  };
  user: {
    authId: string;
    userId: string;
    role: string;
  };
  params?: {
    id: string;
  };
  query?: {
    [key: string]: string | string[];
  };
};

export type CustomRequest = {
  files?: {
    thumbnail?: UploadedFile[];
    video_thumbnail?: UploadedFile[];
    video?: UploadedFile[];
    image?: UploadedFile[];
  };
  params: {
    id: string;
  };
  user: JwtPayload;
} & Request;
