import { Injectable } from '@angular/core';
import { Collegue } from '../models/Collegue';
import { collegueMock } from '../mock/collegues.mock';
import { listeMatricules } from '../mock/matricules.mock';

@Injectable({
  providedIn: 'root'
})

export class DataService {

  rechercherParNom(nom: string): string[] {
    return listeMatricules;
  }

  recupererCollegueCourant(): Collegue {
    return collegueMock;
  }

  constructor() { }
}
