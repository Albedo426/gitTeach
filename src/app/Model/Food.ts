import { BaseExportClass } from '../Bases/BaseExportClass';
import { Category } from './Category';

export class Food extends BaseExportClass {
  
    name!: string;
    price!: number;
    companyId!:number;
    category!: Category;
    override toString():string{
        return  "id: "+this.id+"/n"+"name: "+this.name+"/n"+"price: "+this.price+"/n"+"CompanyId: "+this.companyId+"/n"+"Category: "+this.category.name+"/n";
    }
    
    
}