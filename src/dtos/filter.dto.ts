import { IsString } from "class-validator";

export class FilterDto {
    @IsString()
    readonly filterName: string;

    @IsString()
    readonly filterValue: string;
}