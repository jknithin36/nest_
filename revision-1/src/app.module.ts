import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PatientsModule } from './patients/patients.module';
import { DoctorsModule } from './doctors/doctors.module';
import { AppointmentsModule } from './appointments/appointments.module';
import { DoctorsService } from './doctors/doctors.service';

@Module({
  imports: [PatientsModule, DoctorsModule, AppointmentsModule],
  controllers: [AppController],
  providers: [AppService],
  exports: [DoctorsService],
})
export class AppModule {}
