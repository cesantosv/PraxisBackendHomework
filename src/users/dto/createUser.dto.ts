import { ApiModelProperty } from '@nestjs/swagger';

export class CreateUserDto {
    @ApiModelProperty()
    readonly _id: string;

    @ApiModelProperty()
    readonly username: string;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly notes: string;
}
export class UpdateUserDto {
    @ApiModelProperty()
    readonly _id: string;

    @ApiModelProperty()
    readonly username: string;

    @ApiModelProperty()
    readonly name: string;

    @ApiModelProperty()
    readonly notes: string;

}