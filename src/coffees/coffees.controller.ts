import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query, Res } from '@nestjs/common';
import { CoffeesService } from './coffees.service';

@Controller('coffees')
export class CoffeesController {
    constructor(private readonly coffeesService: CoffeesService){
        
    }
    // @Get()
    // findAll(@Res() response){
    //     response.status(200).send('This action return coffees controller.');
    // }
    @Get()
    findAll(@Query() paginationQuery){
        // const {limit, offset} = paginationQuery;
        // return `This action return coffees controller.Limit: ${limit} and Offset: ${offset}`;
        return this.coffeesService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string){
        // return `this action return coffee #${id} `;
        return this.coffeesService.findOne(id);
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    creater(@Body("name") body){
        // return body;
        return this.coffeesService.create(body);
    }

    @Patch(':id')
    update(@Param('id') id:string, @Body() body){
        // return `This is update action, the coffee ID is #${id}`;
        return this.coffeesService.update(id,body);
    }

    @Delete(':id')
    remove(@Param('id') id:string){
        // return `This is remove action, the coffee id is #${id}`;
        return this.coffeesService.remove(id);
    }
}
