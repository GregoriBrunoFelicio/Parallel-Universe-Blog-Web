import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login.routing.module';

@NgModule({
  declarations: [LoginComponent],
  imports: [
    BrowserModule,
    CommonModule,
    LoginRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
})
export class LoginModule {}
