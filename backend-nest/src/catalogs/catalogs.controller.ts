import { Controller, Get } from '@nestjs/common';
import { CatalogsService } from './catalogs.service';

@Controller('catalogs')
export class CatalogsController {
  constructor(private catalogsService: CatalogsService) {}

  @Get('countries')
  getCountries() { return this.catalogsService.findAllCountries(); }

  @Get('currencies')
  getCurrencies() { return this.catalogsService.findAllCurrencies(); }

  @Get('units')
  getUnits() { return this.catalogsService.findAllUnits(); }

  @Get('service-types')
  getServiceTypes() { return this.catalogsService.findAllServiceTypes(); }

  @Get('ports')
  getPorts() { return this.catalogsService.findAllPorts(); }

  @Get('order-states')
  getOrderStates() { return this.catalogsService.findAllOrderStates(); }
}
