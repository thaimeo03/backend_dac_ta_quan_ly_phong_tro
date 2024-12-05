import { Test, TestingModule } from '@nestjs/testing';
import { ViTrisService } from './vi-tris.service';

describe('ViTrisService', () => {
  let service: ViTrisService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViTrisService],
    }).compile();

    service = module.get<ViTrisService>(ViTrisService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
