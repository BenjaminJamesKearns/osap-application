import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NavigationBoxComponent } from './navigation-box/navigation-box.component';
import { FormOneComponent } from './form-one/form-one.component';

const appRoutes: Routes = [
  { path: '', component: NavigationBoxComponent },
  { path: 'form', component: FormOneComponent },
];

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true }
    )
  ],
  declarations: [ AppComponent, HelloComponent, HeaderComponent, FooterComponent, NavigationBoxComponent, FormOneComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
