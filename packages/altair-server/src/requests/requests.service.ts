import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateRequestDto } from './dto/create-request.dto';
import { UpdateRequestDto } from './dto/update-request.dto';
import { Request, RequestDocument } from './entities/request.entity';

@Injectable()
export class RequestsService {
  constructor(
    @InjectModel(Request.name) private RequestModel: Model<RequestDocument>,
  ) {}

  create(createRequestDto: CreateRequestDto) {
    if (!createRequestDto) {
      throw new Error('request collection data not provided!');
    }
    if (!createRequestDto.ownerId) {
      throw new Error('owner must be specified!');
    }

    const createdRequestCollection = new this.RequestModel(createRequestDto);
    return createdRequestCollection.save();
  }
  findAll() {
    return `This action returns all request`;
  }

  findOne(id: number) {
    return `This action returns a #${id} request`;
  }

  update(id: number, updateRequestDto: UpdateRequestDto) {
    return `This action updates a #${id} request`;
  }

  remove(id: number) {
    return `This action removes a #${id} request`;
  }
}
