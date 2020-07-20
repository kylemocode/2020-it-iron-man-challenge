export class Person{
    name: string = '';
}

class KyleMo extends Person {
    name = 'Kyle Mo';
    private age: number = 23;
    // 一堆興趣
    read() { console.log('read') }
    watchMovie() { console.log('watchMovie') }
    coding() { console.log('coding') }
    // 還有很多...
}

const kyle = new KyleMo()
kyle.coding();