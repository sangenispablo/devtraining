import {
  Body,
  Controller, Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Patch,
  Post,
  Res
} from '@nestjs/common';

@Controller('courses')
export class CoursesController {
  @Get()
  findAll(@Res() response) {
    return response.status(HttpStatus.OK).send('Listado de Cursos');
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return `Curso #${id}`;
  }

  @Post()
  @HttpCode(HttpStatus.NO_CONTENT)
  create(@Body() body) {
    return body;
  }

  @Patch(':id')
  udpate(@Param('id') id: string, @Body() body) {
    return `Se actualizo el campo ${body.price} curso #${id}`;
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return `Se elimino el id #${id}`;
  }
}
