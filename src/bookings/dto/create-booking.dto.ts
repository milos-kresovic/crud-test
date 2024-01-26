import { IsDateString, IsNotEmpty } from 'class-validator';
import { ParkingSpot } from 'src/parking-spot/parking-spot.entity';
import { User } from 'src/users/users.entity';

export class CreateBookingDto {
  createdBy?: User;

  @IsNotEmpty()
  @IsDateString()
  startDateTime: Date;

  @IsNotEmpty()
  @IsDateString()
  endDateTime: Date;

  @IsNotEmpty()
  parkingSpot: ParkingSpot;
}
