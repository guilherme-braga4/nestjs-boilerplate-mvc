
import { IsNotEmpty, IsString } from 'class-validator'
import { PartialType } from '@nestjs/mapped-types';

export class RequestExampleDto {
    @IsString()
    @IsNotEmpty()
    readonly name: string
}

export class ResponseExampleDto {
    readonly id: number;
    readonly name: string;

    constructor(dto) {
        this.id = dto.id;
        this.name = dto.name
    }
}

export class UpdateExampleDto extends PartialType(RequestExampleDto) { }