
export enum DevelopmentState {
    Child = 1,
    Teenager,
    Adult,
    Retired
};

export default class Human {

  private developmentState: DevelopmentState = DevelopmentState.Child;

  growFromChildToTeen(cb?: (err: any, res: any) => void) {
    if (cb) {
      
    } else {

    }
  }

};
