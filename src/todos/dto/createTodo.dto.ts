import { ApiModelProperty } from '@nestjs/swagger';

export class CreateTodoDto {
    @ApiModelProperty()
    readonly _id: string;

    @ApiModelProperty()
    readonly text: string;

    @ApiModelProperty()
    readonly complete: boolean;
}
export class UpdateTodoDto{
    @ApiModelProperty()
    readonly _id: string;

    @ApiModelProperty()
    readonly text: string;

    @ApiModelProperty()
    readonly complete: boolean;
}