import {Component, OnInit} from '@angular/core';
import { Cafe } from '../../models/Cafe.model';
import { CafeService } from '../../services/cafe.service';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-lista-cafe',
  standalone: true,
  templateUrl: './lista-cafe.component.html',
  styleUrl: './lista-cafe.component.scss',
})
export class ListaCafeComponent implements OnInit {
  cafes : Cafe[] = [];
  constructor(private cafeService: CafeService) {}

  ngOnInit() {
    this.obtenerCafes();
  }

  obtenerCafes() {
    this.cafeService.obtenerCafe().subscribe(cafes => {
      this.cafes = cafes;
      console.log("CAFES:", cafes);
    });
  }

}
