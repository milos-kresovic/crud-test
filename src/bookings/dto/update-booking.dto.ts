import { IsDateString } from 'class-validator';
import { ParkingSpot } from 'src/parking-spot/parking-spot.entity';
import { User } from 'src/users/users.entity';

export class UpdateBookingDto {
  createdBy?: User;

  @IsDateString()
  startDateTime?: Date;

  @IsDateString()
  endDateTime?: Date;

  parkingSpot: ParkingSpot;
}
