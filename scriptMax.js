/*function maxStatus() {
    var illNess = Math.floor((Math.random() * 4) + 1);

    if (illNess === 1) {
        return "Max har vinterkräksjukan och kommer till skolan om 7 dagar";
    } //end if-sats
    else if (illNess === 2) {
        return "Max har fotbollsfeber och kommer till skolan om 1 dag.";
    } else if (illNess === 3) {
        return "Max är förkyld och kommer till skolan om 3 dagar.";
    } else {
        return "Max är frisk och kommer till skolan.";
    }
} //end func

console.log(maxStatus());
*/

function bankWithdrawl() {
    var pin = 1234;
    var tries = 3;
    var banksaldo = 123456;
    var userInput = prompt("Ange din pinkod:");

    userInput = Number(userInput);

    if (userInput != pin) {
        while (pin != userInput && tries > 1) {

            userInput = prompt("Pinkod fel. Ange din Pinkod: ");
            tries--;
        }
        console.log("Du är spärrad");
    } //end if
    else { console.log(banksaldo); }



} //end func

bankWithdrawl();

console.log("ÄNDRINGAAAAAAAAAR");

HIHIHIHIHIHIHIHHIOAWWAOIFAÖOWIFwioöfnaoöwfnwa