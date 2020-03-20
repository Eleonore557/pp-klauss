import Toy from './Toy';

export default class Pony extends Toy {
  private static _nb: number = 1;
  public id: number;
  
  constructor(id: number) {
    super();
    this.id = id
  }
  isMoved(){
    console.log('Huuuuuuhu!')
  }
 
}

