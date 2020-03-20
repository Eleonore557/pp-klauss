class DragonBall
{
  private _character: DBHeroe;
    constructor ()
    {
        this._character = DBHeroe.SANGOKU;
    }
    isMoved(){
      console.log('Kamé Hamé Ha!')
    }    

}

enum DBHeroe
    {
      SANGOKU = 'SANGOKU',
      BEJITA = 'BEJITA',
      BEERUS = 'BEERUS',
      KAMESENNIN = 'KAMESENNIN'
    }

export = DBHeroe;

