import { NgModule } from '@angular/core';
import {  MatButtonModule, MatCheckboxModule, MatSelectModule, MatOptionModule } from '@angular/material';
import { MatInputModule } from '@angular/material';
import {MatFormFieldModule} from '@angular/material/form-field';
import { DashboardComponent } from './dashboard.component';
import {MatCardModule} from '@angular/material/card';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {DashboardService} from './dashboard.service';
import { HttpClientModule } from '@angular/common/http';
import {ListComponentComponent} from './list-component/list-component.component';
import {ListComponentService} from './list-component/list-component.service';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    DashboardComponent,
    ListComponentComponent
  ],
  imports: [
    MatFormFieldModule,
    MatButtonModule, 
    MatCheckboxModule, 
    MatTableModule,
    MatSelectModule, 
    MatOptionModule,
    MatCardModule,
    CommonModule,
    HttpClientModule,
    FormsModule,
    MatInputModule
  ],
  exports: [
    DashboardComponent,
    ListComponentComponent
  ],
  providers: [DashboardService,ListComponentService],
})
export class DashboardModule { }
