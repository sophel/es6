var firstName = 'Michael';
var lastName = 'Jackson';
var year = 1958;
function getWholeName(){
	return firstName+' '+lastName;
}
console.log( 'this is exec rst from profile module.' );
export{ 
	firstName as fn,
	lastName as ln,
	year,
	getWholeName };

