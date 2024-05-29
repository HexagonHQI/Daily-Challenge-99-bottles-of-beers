function getBottles() {
    return parseInt(prompt("Enter a number to start counting down bottles:"));
  }
  
  function getBottleString(numBottles) {
    return `${numBottles} bottle${numBottles === 1 ? '' : 's'} of beer`;
  }
  
  function getTakeDownString(takeDown) {
    return `Take ${takeDown} down, pass ${takeDown === 1 ? 'it' : 'them'} around`;
  }
  
  function bottlesOfBeer() {
    let numBottles = getBottles();
    let takeDown = 1;
  
    while (numBottles > 0) {
      console.log(`${getBottleString(numBottles)} on the wall`);
      console.log(getBottleString(numBottles));
      console.log(getTakeDownString(takeDown));
      numBottles -= takeDown;
      takeDown++;
      if (numBottles > 0) {
        console.log(`${getBottleString(numBottles)} on the wall`);
      } else {
        console.log(`no bottle${numBottles === 1 ? '' : 's'} of beer on the wall`);
      }
      console.log();
    }
  }
  
  bottlesOfBeer();