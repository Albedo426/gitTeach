import { Foots } from "../food-processors/Foots";


export class payFoot  {
    foot!:Foots;
    paid!:boolean;
    menstruation!:number;
    createDate:Date=new Date;
    constructor( foots:Foots,menstruation:number, paid:boolean,createDate?:Date){
        this.foot=foots;
        this.menstruation=menstruation;
        this.paid=paid;
        if(createDate){
            this.createDate=createDate;
        }
    }
}