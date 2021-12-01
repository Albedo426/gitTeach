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

@NgModule({
  declarations: [
    AppComponent,
    ComponentTablesComponent,
    TableDetailComponent,
    FoodProcessorsComponent,
    CategoriesProcessorsComponent
  ],
  imports: [
    MatTabsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
