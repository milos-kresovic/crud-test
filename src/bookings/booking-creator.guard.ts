import {
  CanActivate,
  ExecutionContext,
  HttpException,
  Injectable,
} from '@nestjs/common';
import { BookingsService } from './bookings.service';
import { User } from 'src/users/users.entity';
import { UserRole } from 'src/users/user-role.enum';

@Injectable()
export class BookingGuard implements CanActivate {
  constructor(private bookingsService: BookingsService) {}

  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();

    const { user, params }: { user: User; params: { id: number } } = request;

    if (!user || !params) {
      return false;
    }

    if (user.role === UserRole.ADMIN) {
      return true;
    }

    const bookingId = params.id;
    const userId = user.id;

    const booking = await this.bookingsService.findOneById(bookingId);

    if (!booking) {
      throw new HttpException('Booking not found', 404); // consider 204
    }

    if (booking.createdBy.id !== userId) {
      return false;
    }

    return true;
  }
}
