import { BaseExportClass } from "../BaseExportClass";
import { payFoot } from "../table-detail/payFoot";
import { Table } from "./Table";

   
export class TabelFoot extends BaseExportClass{
    table!:Table;
    foot!:payFoot[];
    companyId!:number;
}