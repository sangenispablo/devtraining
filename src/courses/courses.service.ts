import { Injectable } from '@nestjs/common';
import { Course } from './entities/course.entity';

@Injectable()
export class CoursesService {
  // esta propiedad es donde almanceno temporalmente los cursos
  private courses: Course[] = [
    {
      id: 1,
      name: 'Fundamentos de NestJS',
      description: 'El mejor curso de NestJS',
      tags: ['typescript', 'nodejs'],
    }
  ];

  // metodos que alteran courses
  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    return this.courses.find((course: Course) => course.id === Number(id));
  }
}
