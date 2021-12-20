import { Food } from "../food-processors/Food";


export class payFood  {
    food!:Food;
    paid!:boolean;
    total!:number;
    createDate:Date=new Date;
    constructor( food:Food,total:number, paid:boolean,createDate?:Date){
        this.food=food;
        this.total=total;
        this.paid=paid;
        if(createDate){
            this.createDate=createDate;
        }
    }
}