import { Test, TestingModule } from '@nestjs/testing';
import { TaiKhoansService } from './tai-khoans.service';

describe('TaiKhoansService', () => {
  let service: TaiKhoansService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TaiKhoansService],
    }).compile();

    service = module.get<TaiKhoansService>(TaiKhoansService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
