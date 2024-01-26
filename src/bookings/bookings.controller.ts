import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  UseGuards,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { AuthGuard } from 'src/auth/auth.guard';
import { AuthUser } from 'src/auth/auth-user.decorator';
import { User } from 'src/users/users.entity';
import { BookingGuard } from './booking-creator.guard';
import { UpdateBookingDto } from './dto/update-booking.dto';

@Controller('bookings')
@UseGuards(AuthGuard)
export class BookingsController {
  constructor(private readonly bookingsService: BookingsService) {}

  @Post()
  async create(
    @Body() createBookingDto: CreateBookingDto,
    @AuthUser() user: User,
  ) {
    return await this.bookingsService.create({
      ...createBookingDto,
      createdBy: user,
    });
  }

  @Get()
  async findAll() {
    return await this.bookingsService.findAll();
  }

  @Patch('/:id')
  @UseGuards(BookingGuard)
  async update(@Body() bookingDto: UpdateBookingDto, @Param('id') id: number) {
    return await this.bookingsService.update(id, bookingDto);
  }

  @Delete('/:id')
  @UseGuards(BookingGuard)
  async delete(@Param('id') id: number) {
    return await this.bookingsService.delete(id);
  }
}
