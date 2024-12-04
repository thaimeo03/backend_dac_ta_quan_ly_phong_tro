import { Test, TestingModule } from '@nestjs/testing';
import { DonsController } from './dons.controller';

describe('DonsController', () => {
  let controller: DonsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [DonsController],
    }).compile();

    controller = module.get<DonsController>(DonsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
