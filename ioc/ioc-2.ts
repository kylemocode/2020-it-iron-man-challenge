export class Notebook {
    status: string = 'normal';
    coding() {
        console.log('coding');
    }

    broken() {
        this.status = 'broken';
    }
}

export class AsusNotebook extends Notebook {
    name: string = 'AsusNotebook';

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
    // 一堆興趣
    read() { console.log('read') }
    watchMovie() { console.log('watchMovie') }
    coding() {
        const notebook = new AsusNotebook();
        notebook.coding();
    }
    // 還有很多...
}

const kyle = new KyleMo()
kyle.coding();