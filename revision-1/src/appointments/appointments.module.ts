import { Module } from '@nestjs/common';
import { AppointmentsController } from './appointments.controller';
import { AppointmentsService } from './appointments.service';
import { DoctorsService } from 'src/doctors/doctors.service';
import { PatientsService } from 'src/patients/patients.service';

@Module({
  controllers: [AppointmentsController],
  providers: [AppointmentsService],
  imports: [DoctorsService, PatientsService],
})
export class AppointmentsModule {}
