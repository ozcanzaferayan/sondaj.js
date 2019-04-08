Array.prototype.sondajla = function(samplingCount) {
  var randomizedArray = this.slice(); 
  var tempSelected, indexOfSelected;
    for (i = this.length - 1; i >= 0; i--) {
      indexOfSelected = Math.floor((i + 1) * Math.random());
        tempSelected = randomizedArray[indexOfSelected];
        randomizedArray[indexOfSelected] = randomizedArray[i];
        randomizedArray[i] = tempSelected;
      console.log(randomizedArray);
    }
    return randomizedArray.slice(0, samplingCount);
};
