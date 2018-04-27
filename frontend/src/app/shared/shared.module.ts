import { NgModule } from '@angular/core';
import { SharedComponent } from './shared.component';
import { NavbarComponent } from './navbar/navbar.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import { SidenavComponent } from './sidenav/sidenav.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    SharedComponent,
    NavbarComponent,
    SidenavComponent
  ],
  imports: [
    MatToolbarModule,
    MatSidenavModule,
    CommonModule
  ],
  exports: [
    SharedComponent,
    NavbarComponent
  ],
  providers: [],
})
export class SharedModule { }
