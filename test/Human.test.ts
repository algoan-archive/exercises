import { Human, DevelopmentState } from '../src/Human';
import * as assert from 'assert';
import * as co from 'co';

describe('Tests for exercises', () => {

  it('should not work if the code is written synchronously', () => {
    let human = new Human();
    human.growFromChildToTeen();
    assert.equal(DevelopmentState.Child, human.developmentState);
  })

  it('should work if the code is written asynchronously, with callbacks', (done) => {
    let human = new Human();
    human.growFromChildToTeen(() => {
      assert.equal(DevelopmentState.Teenager, human.developmentState);
      done();
    });
  })

  it('should work if the code is written asynchronously, with promises', () => {
    let human = new Human();
    return human.growFromChildToTeen().then(() => {
      assert.equal(DevelopmentState.Teenager, human.developmentState);
    });
  })

  it('should work if the code is written asynchronously, with Co', () => {
    let human = new Human();
    co(function*(){
      yield human.growFromChildToTeen();
      assert.equal(DevelopmentState.Teenager, human.developmentState);

    })
  })

});
