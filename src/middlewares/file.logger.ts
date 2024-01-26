import { NextFunction, Request, Response } from 'express';
import {Inject, Injectable,NestMiddleware} from '@nestjs/common';
import { WINSTON_MODULE_PROVIDER } from 'nest-winston';
import { Logger } from 'winston';

@Injectable()
export class FileLoggerMiddleware implements NestMiddleware {
    constructor(@Inject(WINSTON_MODULE_PROVIDER) private readonly logger: Logger) {
    }

    public use(request: Request, response: Response, next: NextFunction): void {
        this.logger.log({
            level: 'info',
            message: `${request.ip} - [${request.method}] ${request.baseUrl + request.path} - ${response.statusCode}`
        })
        next()
    }
}