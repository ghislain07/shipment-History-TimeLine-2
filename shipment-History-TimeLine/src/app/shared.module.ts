import { NgModule } from '@angular/core';
import { ClarityModule } from '@clr/angular';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  exports: [ClarityModule, CommonModule, FormsModule, ReactiveFormsModule],
})
export class SharedModule {}
