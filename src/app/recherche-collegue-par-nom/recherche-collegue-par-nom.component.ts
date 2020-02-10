import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';


@Component({
  selector: 'app-recherche-collegue-par-nom',
  templateUrl: './recherche-collegue-par-nom.component.html',
  styleUrls: ['./recherche-collegue-par-nom.component.css']
})

export class RechercheCollegueParNomComponent implements OnInit {

  resultatMatricules: string[];
  private dataService: DataService;

  rechercher(nom: string) {
    this.resultatMatricules = this.dataService.rechercherParNom(nom);
  }

  constructor(dataService: DataService) {
    this.dataService = dataService;
  }

  ngOnInit() {
  }

}
