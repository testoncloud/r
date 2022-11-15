import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminmoduleRoutingModule } from './adminmodule-routing.module';
import { AdminlayoutComponent } from './adminlayout/adminlayout.component';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
@NgModule({
  declarations: [
    AdminlayoutComponent
  ],
  imports: [
    CommonModule,
    AdminmoduleRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    Ng2SearchPipeModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule
  ]
})
export class AdminmoduleModule { }
