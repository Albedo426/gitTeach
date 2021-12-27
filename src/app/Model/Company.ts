import { BaseExportClass } from "../Bases/BaseExportClass";

export class Company extends BaseExportClass{
    companyName!:string;
    companyUserEmail!:string;
    companyUserPassword!:string;
    companyMembershipDate!:Date;
    constructor(){
        super();
        this.companyName="";
        this.companyUserEmail="";
        this.companyUserPassword="";
        this.companyMembershipDate=new Date;
    }
}