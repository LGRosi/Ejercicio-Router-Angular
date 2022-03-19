import { NgModule } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';



@NgModule({
  declarations: [],
  exports: [
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule
  ]
})
export class MaterialModule { }