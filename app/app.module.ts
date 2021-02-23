import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './src/header/header.component';
import { LoginComponent } from './src/login/login.component';
import { RegisterComponent } from './src/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDividerModule} from '@angular/material/divider';
import { FooterComponent } from './src/footer/footer.component';
import { ComapnyservicesComponent } from './src/comapnyservices/comapnyservices.component';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    ComapnyservicesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDividerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
