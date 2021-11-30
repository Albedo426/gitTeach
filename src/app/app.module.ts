import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentTablesComponent } from './component-tables/component-tables.component';
import { TableDetailComponent } from './table-detail/table-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentTablesComponent,
    TableDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
