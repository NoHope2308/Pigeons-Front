import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { AuthModule } from './auth/auth.module';
import {MatButtonModule} from '@angular/material/button';
import { ComponentsModule } from './components/components.module';
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModule,
    AuthModule,
    ComponentsModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule

  ],
  exports:[
    AppComponent
  ],
  providers: [],
  bootstrap: [
    AppComponent,
  ],
  schemas: [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
