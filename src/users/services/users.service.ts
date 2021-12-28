import { Body, HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";
import { CreateUserDto } from "../dto/createUserDto";
import { User, UserDocument } from "../schemas/user.schema";

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
            const user = this.userModel.findOne(createUserDto);
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
}