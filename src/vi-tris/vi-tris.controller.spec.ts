import { Test, TestingModule } from '@nestjs/testing';
import { ViTrisController } from './vi-tris.controller';

describe('ViTrisController', () => {
  let controller: ViTrisController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ViTrisController],
    }).compile();

    controller = module.get<ViTrisController>(ViTrisController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
