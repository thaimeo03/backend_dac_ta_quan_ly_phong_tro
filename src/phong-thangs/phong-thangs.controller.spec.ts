import { Test, TestingModule } from '@nestjs/testing';
import { PhongThangsController } from './phong-thangs.controller';

describe('PhongThangsController', () => {
  let controller: PhongThangsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhongThangsController],
    }).compile();

    controller = module.get<PhongThangsController>(PhongThangsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
