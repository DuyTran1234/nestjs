import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model, Types } from "mongoose";
import { CreateUserDto } from "../dto/createUserDto";
import { User, UserDocument } from "../schemas/user.schema";
import * as bcrypt from 'bcrypt';

@Injectable()
export class UsersService {
    constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}

    async createUser(createUserDto: CreateUserDto): Promise<string> {
        const checkUser = await this.findOneByUsername(createUserDto?.username);
        if(checkUser !== null) {
            throw new HttpException(`user exists!: ${checkUser.username}`, HttpStatus.BAD_REQUEST);
        }
        try {
            const rs = await new this.userModel(createUserDto).save();
            return "create user successfully!";
        } catch (error) {
            throw new HttpException('create user failed', HttpStatus.BAD_REQUEST);
        }
    }

    async getAllUser(): Promise<User[]> {
        return this.userModel.find().exec();
    }

    async findOneUser(createUserDto: CreateUserDto): Promise<User> {
        try {
            const user = await this.userModel.findOne(createUserDto);
            return user;
        }
        catch(error) {
            throw new HttpException('error found user', HttpStatus.BAD_REQUEST);
        }
    }
    async findOneByUsername(username: string): Promise<User> {
        try {
            return await this.userModel.findOne({
                "username": username,
            })
        }
        catch(error) {
            throw new HttpException('error found user', HttpStatus.BAD_REQUEST);
        }
    }
    async findOneById(stringId: string): Promise<any> {
        const id = new Types.ObjectId(stringId);
        try {
            const rs = await this.userModel.findOne({
                _id: id,
            });
            const newResult = rs.toObject() as any;
            const {password, ...user} = newResult;
            return user;
        }
        catch(error) {
            throw new HttpException('(service) error found user by id', HttpStatus.BAD_REQUEST);
        }
    }

    async getHashPassword(password: string): Promise<string> {
        try {
            const salt = 9;
            const hash = await bcrypt.hash(password, salt);
            return hash;
        } catch (error) {
            throw new HttpException("hash password failed!", HttpStatus.BAD_REQUEST);
        }
    }
    async comparePasswordHash(password, hash): Promise<boolean> {
        try {
            const result = await bcrypt.compare(password, hash);
            return result;
        } catch (error) {
            throw new HttpException("compare password failed!", HttpStatus.BAD_REQUEST);
        }
    }
}