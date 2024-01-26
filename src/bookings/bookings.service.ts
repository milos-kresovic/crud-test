import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './booking.entity';
import { Repository } from 'typeorm';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingsRepo: Repository<Booking>,
  ) {}

  async findAll() {
    return await this.bookingsRepo.find({ relations: ['parkingSpot'] });
  }

  async findOneById(id: number) {
    return await this.bookingsRepo.findOne({
      where: { id },
      relations: ['createdBy'],
    });
  }

  async create(bookingDto: CreateBookingDto) {
    const booking = this.bookingsRepo.create(bookingDto);
    const result = await this.bookingsRepo
      .createQueryBuilder()
      .insert()
      .into(Booking)
      .values(booking)
      .returning('*')
      .execute();

    return result.raw[0];
  }

  async update(id: number, bookingDto: UpdateBookingDto) {
    const result = await this.bookingsRepo
      .createQueryBuilder()
      .innerJoinAndSelect('Booking.parkingSpot', 'parkingSpot')
      .update(Booking)
      .set({ ...bookingDto })
      .where({ id })
      .returning('*')
      .execute();

    return result.raw[0];
  }

  async delete(id: number) {
    const result = await this.bookingsRepo.createQueryBuilder().softDelete().where({ id }).returning('*').execute();

    return result.raw[0];
  }
}
