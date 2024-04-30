
import { IsNotEmpty, IsString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types';

//DTO to validate input data from request from client
export class RequestExampleDto {
    /**
     * The name of examploe
     * @example 'Guilherme'
    */
    @IsString()
    @IsNotEmpty()
    readonly name: string
}

//DTO to response only the necessary output data to client
export class ResponseExampleDto {
    //Declare all input properties to use as a dumb input object
    readonly id: number;
    readonly name: string;

    constructor(dto) {
        // Assign only the real important attributes to use as a output shape object
        this.id = dto.id;
        this.name = dto.name
    }
}

export class PaginatedResponseExampleDto {
    readonly data: ResponseExampleDto[];
    readonly page: number;
    readonly pageSize: number;
    readonly totalPages: number;
    readonly totalData: number;
}

//DTO to update any attribute that has been created before
export class UpdateExampleDto extends PartialType(RequestExampleDto) { }

//Others DTOs should be created to another scenarios