
import { IsNotEmpty, IsString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types';

//DTO to validate input data from request from client
export class RequestExampleDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string
}

//DTO to response only the necessary output data to client
export class ResponseExampleDto {
    readonly id: number;
    readonly name: string;

    constructor(dto) {
        this.id = dto.id;
        this.name = dto.name
    }
}

//DTO to update any attribute that has been created before
export class UpdateExampleDto extends PartialType(RequestExampleDto) { }

//Others DTOs should be created to another scenarios