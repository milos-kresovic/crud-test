import { ParkingSpot } from 'src/parking-spot/parking-spot.entity';
import { User } from 'src/users/users.entity';
import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User)
  createdBy: User;

  @Column()
  startDateTime: Date;

  @Column()
  endDateTime: Date;

  @ManyToOne(() => ParkingSpot)
  parkingSpot: ParkingSpot;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;

  @DeleteDateColumn()
  deletedAt: Date;
}
