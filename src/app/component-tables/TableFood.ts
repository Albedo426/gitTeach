import { BaseExportClass } from "../BaseExportClass";
import { payFood } from "../table-detail/payFood";
import { Table } from "./Table";

   
export class TabelFood extends BaseExportClass{
    table!:Table;
    food!:payFood[];
    companyId!:number;
}