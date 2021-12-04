import { Category } from "../food-processors/Category";
import { Foots } from "../food-processors/Foots";
import { payFoot } from "../table-detail/payFoot";
import { Table } from "./Table";

export class TabelFoot{
    id!:number;
    table!:Table;
    foot!:payFoot[];
    companyId!:number;
}