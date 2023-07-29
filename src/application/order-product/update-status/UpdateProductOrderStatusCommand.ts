import { IsString, IsUUID } from 'class-validator';

export default class UpdateProductOrderStatusCommand {
  @IsString()
  @IsUUID()
  orderId!: string;

  @IsString()
  status!: 'approved' | 'refused';
}
