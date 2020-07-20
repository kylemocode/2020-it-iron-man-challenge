interface CodingDevice {
    status: string;
    coding: () => void;
    broken: () => void;
}

export class Notebook {
    status: string = 'normal';
    coding() {
        console.log('coding');
    }

    broken() {
        this.status = 'broken';
    }
}

export class Macbook extends Notebook implements CodingDevice {
    name: string = 'Macbook Pro';

    constructor() {
        super();
        console.log(this.name);
    }

    coding() {
        console.log(`coding using ${this.name}`);
    }
}

export class Pc implements CodingDevice {
    status: string = 'normal';
    name: string = 'PC';

    constructor() {
        console.log(this.name);
    }

    coding() {
        console.log(`coding using ${this.name}`);
    }

    broken() {
        this.status = 'broken';
    }
}

export class Person{
    name: string = '';
}

class KyleMo extends Person {
    name = 'Kyle Mo';
    private age: number = 23;
    private readonly codingDevice: CodingDevice;

    constructor(codingDevice: CodingDevice) {
        super();
        this.codingDevice = codingDevice;
    }
    // 一堆興趣
    read() { console.log('read') }
    watchMovie() { console.log('watchMovie') }
    coding() {
        this.codingDevice.coding();
    }
    // 還有很多...
}

let codingDevice: CodingDevice;
let kyle: KyleMo;

codingDevice = new Pc();

kyle = new KyleMo(codingDevice);
kyle.coding();