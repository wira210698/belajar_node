const {EventEmitter} = require('events') // TODO 1
 
const birthdayEventListener = (name) => {
    console.log(`Happy birthday ${name}!`);
}
const panjangumurEventListener = (name) => {
    console.log(`Semoga ${name} panjang umur!`);
}
const sehatSelaluEventListener = (name) => {
    console.log(`dan ${name} Sehat selalu`);
}
   
const myEmitter = new EventEmitter(); // TODO 2
   
myEmitter.on('birthday', birthdayEventListener);// TODO 3
myEmitter.on('panjangumur', panjangumurEventListener);// TODO 3
myEmitter.on('sehatSelalu', sehatSelaluEventListener);// TODO 3

myEmitter.emit('birthday','Putra');
myEmitter.emit('panjangumur','Putra');
myEmitter.emit('sehatSelalu','Putra');
  // TODO 4