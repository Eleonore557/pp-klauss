import DBHeroe from './DragonBall';
import Pony from './Pony';

console.log("\n--- STEP #1 ---");

const pony: Pony = new Pony(1);

console.log(`\nPony ` + pony.id + ` is singing -->
Dou-double poney, j’fais izi money
D’où tu m’connais ? Parle moi en billets violets
Dou-double poney, j’fais izi money \n `)

pony.isMoved()

const goku: DBHeroe =  DBHeroe.SANGOKU

console.log('\n' +  goku + ` is singing -->
CHA-LA HEAD CHA-LA
Nani ga okite mo kibun wa heno-heno kappa
CHA-LA HEAD CHA-LA
Mune ga pachi-pachi suru hodo
Sawagu Genki-Dama --Sparking ! \n` )


