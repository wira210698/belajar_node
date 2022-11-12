class wolf {
    constructor(){
        this.strength =  Math.floor(Math.random() *100);
    }
    howl(){
        console.log('ouuuuu');
    }
}
module.exports = wolf;