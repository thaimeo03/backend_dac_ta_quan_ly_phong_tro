import { Test, TestingModule } from '@nestjs/testing';
import { TaiKhoansController } from './tai-khoans.controller';

describe('TaiKhoansController', () => {
  let controller: TaiKhoansController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TaiKhoansController],
    }).compile();

    controller = module.get<TaiKhoansController>(TaiKhoansController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
