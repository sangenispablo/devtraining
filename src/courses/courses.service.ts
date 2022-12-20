import { Injectable, NotFoundException } from '@nestjs/common';
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
    },
  ];

  // metodos que alteran this.courses
  findAll() {
    return this.courses;
  }

  findOne(id: string) {
    const course = this.courses.find(
      (course: Course) => course.id === Number(id),
    );

    if (!course) {
      throw new NotFoundException(`El id ${id} no existe`);
    }
    return course;
  }

  create(createCourseDto: any) {
    this.courses.push(createCourseDto);
  }

  update(id: string, updateCourseDto: any) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    this.courses[indexCourse] = updateCourseDto;
  }

  remove(id: string) {
    const indexCourse = this.courses.findIndex(
      (course) => course.id === Number(id),
    );
    if (indexCourse >= 0) {
      this.courses.splice(indexCourse, 1);
    }
  }
}
