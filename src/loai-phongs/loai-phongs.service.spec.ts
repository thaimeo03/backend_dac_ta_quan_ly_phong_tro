import { Test, TestingModule } from '@nestjs/testing';
import { LoaiPhongsService } from './loai-phongs.service';

describe('LoaiPhongsService', () => {
  let service: LoaiPhongsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LoaiPhongsService],
    }).compile();

    service = module.get<LoaiPhongsService>(LoaiPhongsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
