class Computer {
    constructor(name, ram, processor, typeSystem, videoCard, memory) {
        this.name = name;
        this.ram = ram;
        this.processor = processor;
        this.typeSystem = typeSystem;
        this.videoCard = videoCard;
        this.memory = memory;

        function playGame() {

            if (ram < 16){
                throw new Eror('You cant play game');
            }
        }
        playGame();
    }

    info () {
        console.log(this.name, this.ram, this.processor, this.typeSystem, this.videoCard, this.memory);
    }

    onOf () {
        console.log('This computer is ON')
    }
}

let lenovo = new Computer('Lenovo:',16, 'Intel Core i5', '64 Bit',
    'Nvidia GeForce GTX', '1Trb');

lenovo.info();
lenovo.onOf();


class noteBook extends Computer{
    constructor(name, ram, processor, typeSystem, videoCard, memory, weight, inches, drive){
        super(name, ram, processor, typeSystem, videoCard, memory);
        this.weight = weight;
        this.inches = inches;
        this.drive = drive;
    }

    info() {
        console.log(this.name, this.ram, this.processor, this.typeSystem,
            this.videoCard, this.memory, this.weight, this.inches, this.drive);
    }

    carryToSchool () {
        console.log('Ohh, no no, this is really hard(')
    }
}

let aser = new noteBook('Aser:','8Gb', 'Intel Core i8', '32 Bit', 'Nvidia GeForce',
    '500gb', 3, 15, true);

aser.info();
aser.onOf();
aser.carryToSchool();

class ultraBook extends noteBook{
    constructor(name, ram, processor, typeSystem, videoCard, memory, weight, inches, drive){
        super(name, ram, processor, typeSystem, videoCard, memory, weight, inches, drive);
        
        function Weig() {
            
            if (weight > 2){
                throw new Eror('Weight biggest than 2 kg');
            }
        }
        Weig();
    }
    
    info() {
        console.log(this.name, this.ram, this.processor, this.typeSystem,
            this.videoCard, this.memory, this.weight, this.inches, this.drive);
    }

    onOf() {
        console.log('But this ultraBook is OFF')
    }

    carryToSchool() {
        console.log('Yjapii, it eazy')
    }
}

let asus = new ultraBook('Asus:','12Gb', 'Intel Core i3', '64 Bit', 'GeForce',
    '250gb', 2, 15, true);

asus.info();
asus.onOf();
asus.carryToSchool();

class superComputer extends Computer{
    constructor(name, ram, processor, typeSystem, videoCard, memory, weight, drive){
        super(name, ram, processor, typeSystem, videoCard, memory);
        this.weight = weight;
        this.drive = drive;

        function Parameters() {
            if (ram < 32 || processor !== 'Intel Core i8') {
                throw new Eror('This isnt a supercomuter');
            }
        }
        Parameters();
    }
    
    info() {
        console.log(this.name, this.ram, this.processor, this.typeSystem,
            this.videoCard, this.memory, this.weight, this.drive);
    }

    carryToSchool() {
        console.log('Nope you can\'t do this')
    }
}

let HP = new superComputer('HP:', 32, 'Intel Core i8',
    '64 Bit', 'Nvidia GeForce 8000', '16Trb', 10,
    false);

HP.info();
HP.onOf();
HP.carryToSchool();