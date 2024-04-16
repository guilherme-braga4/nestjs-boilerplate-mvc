import { IsNumber, Min } from 'class-validator';

export class PaginationDto {
    @IsNumber()
    @Min(1)
    readonly page: number = 1;

    @IsNumber()
    @Min(1)
    readonly pageSize: number = 10;

    @IsNumber()
    @Min(0)
    readonly limit: number = 0;
}

