import { Category } from './Category';

export class Foots {
    id!: number;
    name!: string;
    price!: number;
    companyId!:number;
    category!: Category;
    toString():string{
        return  "id: "+this.id+"/n"+"name: "+this.name+"/n"+"price: "+this.price+"/n"+"CompanyId: "+this.companyId+"/n"+"Category: "+this.category.name+"/n";
    }
    
    
}