import { Component, OnInit, Input } from '@angular/core';
import { Collegue } from '../models/Collegue';

@Component({
  selector: 'app-collegue',
  templateUrl: './collegue.component.html',
  styleUrls: ['./collegue.component.css']
})
export class CollegueComponent implements OnInit {

  constructor() {}

  @Input() col: Collegue;

  modifier: boolean;

  creerCollegue(){
    console.log('Créer un nouveau collègue');
  }

  modifierCollegue(){
    console.log('Modification du collègue');
    this.modifier = true;
  }

  ngOnInit() {
  }

}
