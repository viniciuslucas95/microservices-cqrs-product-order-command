import { IsDate, IsString, IsUUID } from 'class-validator';
import { Type } from 'class-transformer';

import CommandQueryBase from '../../shared/CommandQueryBase';

export default class OrderProductCommand extends CommandQueryBase {
  @IsString()
  @IsUUID()
  productId!: string;

  @IsString()
  @IsUUID()
  userId!: string;

  @IsDate()
  @Type(() => Date)
  date!: Date;
}
