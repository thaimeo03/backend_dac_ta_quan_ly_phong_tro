import { Test, TestingModule } from '@nestjs/testing';
import { PhongsController } from './phongs.controller';

describe('PhongsController', () => {
  let controller: PhongsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PhongsController],
    }).compile();

    controller = module.get<PhongsController>(PhongsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
