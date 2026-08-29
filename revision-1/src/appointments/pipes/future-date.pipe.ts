import { BadRequestException, Injectable, PipeTransform } from '@nestjs/common';
import { CreateAppointmentDto } from '../dto/create-appointment.dto';

@Injectable()
export class FuturedatePipe implements PipeTransform {
  transform(value: CreateAppointmentDto) {
    const appiontmentDate = new Date(value.date);
    const now = new Date();

    if (appiontmentDate < now) {
      throw new BadRequestException(`Appiontment date maust be in future`);
    }

    return value;
  }
}
