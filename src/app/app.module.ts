import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTablesComponent } from './component-tables/component-tables.component';
import { TableDetailComponent } from './table-detail/table-detail.component';
import { FoodProcessorsComponent } from './food-processors/food-processors.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatTabsModule} from '@angular/material/tabs';
import { CategoriesProcessorsComponent } from './categories-processors/categories-processors.component';
import { TableProcessorsComponent } from './table-processors/table-processors.component';
import { FormsModule }   from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FoodAddProcessorsComponent } from './food-add-processors/food-add-processors.component';
import {HttpClientModule} from '@angular/common/http';
import { TableService } from './Services/table.service';
import { CategoryService } from './Services/category.service';
import { FoodService } from './Services/food.service';
import { CompanyService } from './Services/company.service';
import { TableDetailService } from './Services/table-detail.service';
import { BlankPageComponent } from './blank-page/blank-page.component';
import { CompanyGuard } from './company.guard';
@NgModule({
  declarations: [
    AppComponent,
    ComponentTablesComponent,
    TableDetailComponent,
    FoodProcessorsComponent,
    CategoriesProcessorsComponent,
    TableProcessorsComponent,
    FoodAddProcessorsComponent,
    BlankPageComponent
  ],
  imports: [
    MatTabsModule,
    BrowserModule,FormsModule,ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [TableService,CategoryService,FoodService,CompanyService,TableDetailService,CompanyGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
