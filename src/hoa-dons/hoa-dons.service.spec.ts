import { Test, TestingModule } from '@nestjs/testing';
import { HoaDonsService } from './hoa-dons.service';

describe('HoaDonsService', () => {
  let service: HoaDonsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [HoaDonsService],
    }).compile();

    service = module.get<HoaDonsService>(HoaDonsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
