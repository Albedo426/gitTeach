import { Foots } from "../food-processors/Foots";


export class payFoot  {
    foot!:Foots;
    paid!:boolean;
    total!:number;
    createDate:Date=new Date;
    constructor( foots:Foots,total:number, paid:boolean,createDate?:Date){
        this.foot=foots;
        this.total=total;
        this.paid=paid;
        if(createDate){
            this.createDate=createDate;
        }
    }
}