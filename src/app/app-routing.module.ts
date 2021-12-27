import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { CategoriesProcessorsComponent } from './categories-processors/categories-processors.component';
import { ComponentTablesComponent } from './component-tables/component-tables.component';
import { FoodAddProcessorsComponent } from './food-add-processors/food-add-processors.component';
import { FoodProcessorsComponent } from './food-processors/food-processors.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { TableProcessorsComponent } from './table-processors/table-processors.component';
const routes: Routes = [
  {path:"tableDetail/:TableId",component:TableDetailComponent},
  {path:"tableProcess",component:TableProcessorsComponent},
  {path:"foodProcess",component:FoodProcessorsComponent},
  {path:"tableDetail/foodAdd/:TableId",component:FoodAddProcessorsComponent},
  {path:"Table",component:ComponentTablesComponent},
  {path:"categoriesProcess",component:CategoriesProcessorsComponent},
  {path:"index",component:TableProcessorsComponent},
  {path:'',redirectTo:"index",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
