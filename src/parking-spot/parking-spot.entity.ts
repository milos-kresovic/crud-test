import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ParkingSpot {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;
}
