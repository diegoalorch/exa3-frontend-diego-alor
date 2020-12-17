import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { VentasComponent } from './components/ventas/ventas.component';
import { FooterComponent } from './components/template/footer/footer.component';
import { MenuComponent } from './components/template/menu/menu.component';
import { ListarComponent } from './components/roles/listar/listar.component';
import { UpdateComponent } from './components/roles/update/update.component';
import { RolService } from './services/rol.service';
import { AuthService } from './services/auth.service';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './interceptores/interceptor.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { InterceptorErrorService } from './interceptores/interceptor.service.spec';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    VentasComponent,
    FooterComponent,
    MenuComponent,
    ListarComponent,
    UpdateComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [RolService,AuthService,
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi:true
    },
    {
      provide:HTTP_INTERCEPTORS,
      useClass: InterceptorErrorService,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
