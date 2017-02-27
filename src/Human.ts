
export enum DevelopmentState {
  Child = 1,
  Teenager,
  Adult,
  Retired
};

export class Human {

  public developmentState: DevelopmentState = DevelopmentState.Child;

  // Grow from child to teenager
  growFromChildToTeen(cb?: (err: any, result?: any) => void) {
    var self = this;

    let executor = (resolve: (value?: any) => void, reject: (reason?: any) => void) => {
      setTimeout(function () {
        if (self.developmentState === DevelopmentState.Child) {
          self.developmentState = DevelopmentState.Teenager;
          resolve(self.developmentState);
        } else {
          reject(new Error('This human is not in the right state'));
        }
      }, 100);
    };

    if (cb) {
      executor((value?: any) => {
        cb(null, value);
      }, (reason?: any) => {
        cb(reason);
      });
      return null;
    } else {
      return new Promise<DevelopmentState>(executor);
    }
  }

};

export default Human;
