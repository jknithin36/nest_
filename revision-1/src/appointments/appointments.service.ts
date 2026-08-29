import { Injectable, NotFoundException } from '@nestjs/common';
import { Appointment } from './entities/appiontment.entity';
import { PatientsService } from 'src/patients/patients.service';
import { DoctorsService } from 'src/doctors/doctors.service';
import { CreateAppointmentDto } from './dto/create-appointment.dto';

@Injectable()
export class AppointmentsService {
  private appointments: Appointment[] = [];
  constructor(
    private readonly patientService: PatientsService,
    private readonly doctorService: DoctorsService,
  ) {}

  create(data: CreateAppointmentDto) {
    this.patientService.findOne(data.patientId);
    this.doctorService.findOne(data.doctorId);

    const appiontment: Appointment = {
      id: crypto.randomUUID(),
      ...data,
      status: 'scheduled',
    };

    this.appointments.push(appiontment);
    return appiontment;
  }

  findAll() {
    return this.appointments;
  }

  findOne(id: string) {
    const appointment = this.appointments.find((a) => a.id === id);

    if (!appointment) {
      throw new NotFoundException(`Appointment ${id} not found`);
    }
    return appointment;
  }
}
