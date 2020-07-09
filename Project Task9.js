var gap = "yes";
var n = gap.length;
var yes = "registered early";
var no = "not registered";
if(n == 3){ console.log( `${yes}`);}
else 
{
    console.log(`${no}`);
}
var runnersAge = 40;
let raceNumber  = Math.floor(Math.random() * 1000);
if (runnersAge > 18 && n==3)
{
    raceNumber+=1000;
}
else{
    console.log(raceNumber = raceNumber);
}
if (runnersAge > 18 && n==3){
    console.log('Your race will start at 9:30am.' );
    console.log(`Your raceNumber is ${raceNumber}`);
}
else if (runnersAge > 18 && n!=3){
    console.log('“Late adults run at 11:00 am”');
    console.log(`Your raceNumber is ${raceNumber}`);

}
else if (runnersAge < 18) {
     console.log('You will race at 12:30pm');
}
else if (runnersAge = 18) {
    console.log('Go to the regi');
}
else {
    console.log('Go to the registration desk');
}


