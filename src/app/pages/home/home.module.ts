import { NgModule } from '@angular/core';
import { CommonModule, KeyValuePipe } from '@angular/common';
import { HomeComponent } from './home.component';
import { ListaCafeComponent } from '../../shared/lista-cafe/lista-cafe.component';
import { provideHttpClient } from '@angular/common/http';

@NgModule({
  declarations: [ HomeComponent],
  imports: [
    CommonModule,
    ListaCafeComponent,
    KeyValuePipe,
  ],
  providers: [ provideHttpClient() ],
  exports: [ HomeComponent ]
})
export class HomeModule { }
