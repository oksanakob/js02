let teslaX = {};
teslaX['model'] = 'X'; // Not recommended
teslaX.make = 'Tesla'; // Recommended
teslaX.price = 250000;
teslaX.beep = beep;

function beep() {
    document.write(this.make + ' ' 
      + this.model + ' beep-beep<br>');
}

let teslaS = {
    model: 'S',
    make: 'Tesla',
    price: '100000',
    beep: beep
};

teslaX.beep();
teslaS.beep();
