import { Injectable, NotFoundException } from '@nestjs/common';
import { Patient } from './entities/patient.entity';
import { CreatePatientDto } from './dto/create-patient-dto';
import { UpdatePatientDto } from './dto/update-patient.dto';

@Injectable()
export class PatientsService {
  private patients: Patient[] = [];

  create(data: CreatePatientDto) {
    const patient: Patient = {
      id: crypto.randomUUID(),
      ...data,
    };

    this.patients.push(patient);
    return patient;
  }
  // get
  findAll() {
    return this.patients;
  }
  // find one

  findOne(id: string) {
    const patient = this.patients.find((p) => p.id === id);
    if (!patient) {
      throw new NotFoundException(`Patient ${id} not Found`);
    }
    return patient;
  }
  // update
  update(id: string, data: UpdatePatientDto) {
    const patient = this.findOne(id);
    Object.assign(patient, data);
    return patient;
  }

  // delete

  remove(id: string) {
    const patient = this.findOne(id);
    this.patients = this.patients.filter((p) => p.id !== patient.id);
    return { deleted: true, id };
  }
}
