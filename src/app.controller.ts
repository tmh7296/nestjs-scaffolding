import { Controller, Get } from '@nestjs/common';
import { HealthCheckService, TypeOrmHealthIndicator, HealthCheck } from '@nestjs/terminus';

@Controller('healthcheck')
export class AppController {
  constructor (
    private health: HealthCheckService,
    private dbIndicator: TypeOrmHealthIndicator,
  ) {}

  @Get()
  @HealthCheck()
  check() {
    return this.health.check([
      () => this.dbIndicator.pingCheck('Database', { timeout: 3000 }),
    ]);
  }
}
