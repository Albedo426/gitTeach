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
@NgModule({
  declarations: [
    AppComponent,
    ComponentTablesComponent,
    TableDetailComponent,
    FoodProcessorsComponent,
    CategoriesProcessorsComponent,
    TableProcessorsComponent,
    FoodAddProcessorsComponent
  ],
  imports: [
    MatTabsModule,
    BrowserModule,FormsModule,ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
