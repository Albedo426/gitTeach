import { BaseExportClass } from "./BaseExportClass";
import { Category } from "./food-processors/Category";

export class BaseProcessor<T extends BaseExportClass>{
  //for remove
  removIds:Array<number>=new Array();
  //for remove

  //for insert
  //for update
    updateModel!:T
    insertModel!:T
  //for insert
  //for update
    constructor(insertType:T){
      this.updateModel=insertType
      this.insertModel=insertType
    }
    
    //remove process
    changeStackRemove(id:number){
        if(this.removIds.includes(id)){
          this.removeAtArray(id);
        }else{
          this.removIds.push(id);
        }
    }
    private removeAtArray(mytext:number){
        for( var i = 0; i < this.removIds.length; i++){ 
          if ( this.removIds[i] === mytext) { 
            this.removIds.splice(i, 1); 
          }
        }
    }
    removeToArray(mydatas:T[],mytext:any){
      for( var i = 0; i <mydatas.length; i++){ 
        if ( mydatas[i].id === mytext) { 
            mydatas.splice(i, 1); 
        }
      }
    }
    //remove process

    //update process
    changeUpdateData(id:number,mydatas:BaseExportClass[]){
      this.updateModel = mydatas.filter(it => it.id == id)[0] as T;
      this.updateData(this.updateModel,mydatas);
    }
    private updateData(category:T ,mydatas:BaseExportClass[]){
      const objIndex = mydatas.findIndex((x => x.id == category.id));
      mydatas[objIndex]=this.updateModel;
    }
    //update process
}