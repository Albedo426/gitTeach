import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { CategoriesProcessorsComponent } from './categories-processors/categories-processors.component';
import { CompanyGuard } from './company.guard';
import { ComponentTablesComponent } from './component-tables/component-tables.component';
import { FoodAddProcessorsComponent } from './food-add-processors/food-add-processors.component';
import { FoodProcessorsComponent } from './food-processors/food-processors.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { TableProcessorsComponent } from './table-processors/table-processors.component';
const routes: Routes = [
  {path:"tableDetail/:TableId",component:TableDetailComponent,canActivate:[CompanyGuard]},
  {path:"tableProcess",component:TableProcessorsComponent,canActivate:[CompanyGuard]},
  {path:"foodProcess",component:FoodProcessorsComponent,canActivate:[CompanyGuard]},
  {path:"tableDetail/foodAdd/:TableId",component:FoodAddProcessorsComponent,canActivate:[CompanyGuard]},
  {path:"Table",component:ComponentTablesComponent},
  {path:"categoriesProcess",component:CategoriesProcessorsComponent,canActivate:[CompanyGuard]},
  {path:"index",component:TableProcessorsComponent},
  {path:"blank",component:BlankPageComponent},
  {path:'',redirectTo:"blank",pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
