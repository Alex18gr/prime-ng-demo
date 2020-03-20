import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DialogModule } from 'primeng/dialog';
import { CalendarModule } from 'primeng/calendar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    InputTextModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CalendarModule
  ],
  exports: [
    InputTextModule,
    TableModule,
    ButtonModule,
    DialogModule,
    CalendarModule
  ]
})
export class PrimeModule { }
