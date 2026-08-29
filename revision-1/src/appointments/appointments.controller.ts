import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { AppointmentsService } from './appointments.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';
import { FuturedatePipe } from './pipes/future-date.pipe';

@Controller('appointments')
export class AppointmentsController {
  constructor(private readonly appiontmentService: AppointmentsService) {}

  @Post()
  create(@Body(FuturedatePipe) createAppointmentDto: CreateAppointmentDto) {
    return this.appiontmentService.create(createAppointmentDto);
  }

  @Get()
  findAll() {
    return this.appiontmentService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.appiontmentService.findOne(id);
  }
}
