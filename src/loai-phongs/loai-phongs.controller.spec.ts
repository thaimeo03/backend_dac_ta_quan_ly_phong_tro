import { Test, TestingModule } from '@nestjs/testing';
import { LoaiPhongsController } from './loai-phongs.controller';

describe('LoaiPhongsController', () => {
  let controller: LoaiPhongsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [LoaiPhongsController],
    }).compile();

    controller = module.get<LoaiPhongsController>(LoaiPhongsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
