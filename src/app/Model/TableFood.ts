import { BaseExportClass } from "../Bases/BaseExportClass";
import { payFood } from "./payFood";
import { Table } from "./Table";

   
export class TabelFood extends BaseExportClass{//TabelFood => TableFood düzelt ismi
    table!:Table;
    food!:payFood[];
    companyId!:number;
}