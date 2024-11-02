import {Component, OnInit} from '@angular/core';
import { Cafe } from '../../models/Cafe.model';
import { CafeService } from '../../services/cafe.service';

@Component({
  selector: 'app-lista-cafe',
  standalone: true,
  templateUrl: './lista-cafe.component.html',
  styleUrl: './lista-cafe.component.scss',
})
export class ListaCafeComponent implements OnInit {
  cafes : Cafe[] = [];
  cafeTotalTipos: { [key: string]: number } = {};
  paresCafe: any;
  constructor(private cafeService: CafeService) {}

  ngOnInit() {
    this.obtenerCafes();
  }

  obtenerCafes() {
    this.cafeService.obtenerCafe().subscribe(cafes => {
      this.cafes = cafes;
      this.calcularTotalTiposCafe()
      console.log("CAFES:", cafes);
    });
  }

  calcularTotalTiposCafe() {
    this.cafeTotalTipos = this.cafes.reduce((counts: { [key: string]: number }, cafe: Cafe) => {
      counts[cafe.tipo] = (counts[cafe.tipo] || 0) + 1;
      return counts;
    }, {});

    // Create an array of key-value pairs
    this.paresCafe = Object.keys(this.cafeTotalTipos).map(key => ({
      key,
      value: this.cafeTotalTipos[key]
    }));
  }

}
