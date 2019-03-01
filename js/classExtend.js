function Animal(type,name){
  this.type = type;
  this.name = name;
}
Animal.prototype = {
  say(){
    console.log( 'this is an anima' );
  }
};
let cat = new Animal( 'cat','mimi' );
cat.say();
console.log( cat.say === Animal.prototype.say );
console.log( cat );


