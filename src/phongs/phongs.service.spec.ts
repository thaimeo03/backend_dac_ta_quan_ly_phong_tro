import { Test, TestingModule } from '@nestjs/testing';
import { PhongsService } from './phongs.service';

describe('PhongsService', () => {
  let service: PhongsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PhongsService],
    }).compile();

    service = module.get<PhongsService>(PhongsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
