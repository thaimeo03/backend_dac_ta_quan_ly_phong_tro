import { Test, TestingModule } from '@nestjs/testing';
import { PhongThangsService } from './phong-thangs.service';

describe('PhongThangsService', () => {
  let service: PhongThangsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhongThangsService],
    }).compile();

    service = module.get<PhongThangsService>(PhongThangsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
