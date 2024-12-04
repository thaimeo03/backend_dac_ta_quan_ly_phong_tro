import { Test, TestingModule } from '@nestjs/testing';
import { DonsService } from './dons.service';

describe('DonsService', () => {
  let service: DonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [DonsService],
    }).compile();

    service = module.get<DonsService>(DonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
