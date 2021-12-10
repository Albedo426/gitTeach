import { Component, Inject, Input, OnInit } from "@angular/core";
import { BaseExportClass } from "./BaseExportClass";
import { Category } from "./food-processors/Category";
@Component({
    template: ''
  })
export abstract  class BaseProcessComponent<T extends BaseExportClass> implements OnInit {
    ngOnInit(): void {
      
    }
   
    @Input() removeIds:Array<number>=new Array();
  //for remove

    //for insert
    //for update
    @Input() updateModel!:T
    @Input() insertModel!:T
    //for insert
    //for update
    selectedCategory!: Category;//selected category

    constructor(@Inject(MyValueToken) insertType:T){
      this.updateModel=insertType
      this.insertModel=insertType
    }
    //remove
    changeStackRemove(id:number){
        this.changeStackRemoveAddlist(id)
    }
    changeStackRemoveAddlist(id:number){
        if(this.removeIds.includes(id)){
          this.removeAtArray(id);
        }else{
          this.removeIds.push(id);
        }
    }
    private removeAtArray(mytext:number){
        for( var i = 0; i < this.removeIds.length; i++){ 
          if ( this.removeIds[i] === mytext) { 
            this.removeIds.splice(i, 1); 
          }
        }
    }
    //remove
    abstract add():void;
    abstract remove():void;
    abstract changeUpdateData(id:number):void;
    abstract updateData(id:T):void;
}
function MyValueToken(MyValueToken: any) {
    throw new Error("Function not implemented.");
}
