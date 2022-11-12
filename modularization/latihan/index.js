const tiger = require('./tiger') // TODO 3
const wolf = require('./wolf')// TODO 4
 
const fighting = (tiger, wolf) => {
  if(tiger.strength > wolf.strength) {
    tiger.growl();
    return;
  }
 
  if(wolf.strength > tiger.strength) {
    wolf.howl();
    return;
  }
 
  console.log('Tiger and Wolf have same strength');
}
 
const animal1 = new tiger();
const animal2 = new wolf();
 
fighting(animal1, animal2);