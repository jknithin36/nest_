import { Injectable, NotFoundException } from '@nestjs/common';
import { Doctor } from './entities/doctor.entity';
import { CreateDoctorDto } from './dto/create-doctor.dto';
import { UpdateDoctorDto } from './dto/update-doctor.dto';

@Injectable()
export class DoctorsService {
  doctors: Doctor[] = [];
  create(data: CreateDoctorDto) {
    const doctor = {
      id: crypto.randomUUID(),
      ...data,
    };

    this.doctors.push(doctor);

    return doctor;
  }
  findAll() {
    return this.doctors;
  }
  findOne(id: string) {
    const doctor = this.doctors.find((p) => p.id === id);
    if (!doctor) {
      throw new NotFoundException(`doctor with ${id} not found`);
    }
    return doctor;
  }
  update(id: string, data: UpdateDoctorDto) {
    const doctor = this.findOne(id);
    Object.assign(doctor, data);
    return doctor;
  }
  remove(id: string) {
    const doctor = this.findOne(id);
    this.doctors = this.doctors.filter((d) => d.id !== doctor.id);
    return { deleted: true, id };
  }
}

// create, findAll, findOne (throws NotFoundException), update, remove
