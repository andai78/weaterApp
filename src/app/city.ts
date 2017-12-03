export class City {

    name:string;
    temperature:number;

    constructor(public _name:string, public _temp: number)
    {
        this.name = _name;
        this.temperature = _temp;
    }
}
