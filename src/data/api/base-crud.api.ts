import { Request, Response } from './common.dto';

export abstract class BaseCrud<T> {
  protected abstract getMany(data: Request<any>): Promise<Response<T[]>>;

  protected abstract create(data: Request<any>): Promise<T>;

  protected abstract update(data: Request<any>): Promise<T>;

  protected abstract delete(data: Request<any>): Promise<T>;
}
