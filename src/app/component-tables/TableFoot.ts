import { Category } from "../food-processors/Category";
import { Foots } from "../food-processors/Foots";
import { Table } from "./Table";

export class TabelFoot{
    id!:Number;
    table!:Table;
    foot!:Foots;
    paid!:boolean;
    menstruation!:number;
    createDate!:Date;
    companyId!:number;
}