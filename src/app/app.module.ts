import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IdolGroupComponent } from './idol-group/idol-group.component';
import { ShowGroupComponent } from './IdolGroup/show-group/show-group.component';
import { AddEditGroupComponent } from './IdolGroup/add-edit-group/add-edit-group.component';
import { IdolCardComponent } from './idol-card/idol-card.component';
import { ShowCardComponent } from './IdolCard/show-card/show-card.component';
import { AddEditCardComponent } from './IdolCard/add-edit-card/add-edit-card.component';
import { SharedService } from './shared.service';

import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    IdolGroupComponent,
    ShowGroupComponent,
    AddEditGroupComponent,
    IdolCardComponent,
    ShowCardComponent,
    AddEditCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
