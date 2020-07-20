export class Notebook {
    status: string = 'normal';
    coding() {
        console.log('coding');
    }

    broken() {
        this.status = 'broken';
    }
}

export class Macbook extends Notebook {
    name: string = 'Macbook Pro';

    constructor() {
        super();
        console.log(this.name);
    }

    coding() {
        console.log(`coding using ${this.name}`);
    }
}

export class Person{
    name: string = '';
}

class KyleMo extends Person {
    name = 'Kyle Mo';
    private age: number = 23;
    private readonly notebook: Notebook;

    constructor(notebook: Notebook) {
        super();
        this.notebook = notebook;
    }
    // 一堆興趣
    read() { console.log('read') }
    watchMovie() { console.log('watchMovie') }
    coding() {
        this.notebook.coding();
    }
    // 還有很多...
}

const notebook = new Macbook();

const kyle = new KyleMo(notebook);
kyle.coding();