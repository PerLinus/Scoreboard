import { ScoreBoardModule } from './score-board.module';

describe('ScoreBoardModule', () => {
  let scoreBoardModule: ScoreBoardModule;

  beforeEach(() => {
    scoreBoardModule = new ScoreBoardModule();
  });

  it('should create an instance', () => {
    expect(scoreBoardModule).toBeTruthy();
  });
});
