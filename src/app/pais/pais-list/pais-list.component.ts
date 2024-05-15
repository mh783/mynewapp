import { Component, OnInit } from '@angular/core';
import { PaisService } from '../pais.service';
import { PaisDetail } from '../pais-detail';

@Component({
  selector: 'app-pais-list',
  templateUrl: './pais-list.component.html',
  styleUrls: ['./pais-list.component.css']
})
export class PaisListComponent implements OnInit {

  paises: Array<PaisDetail> = [];
  selectedPais!: PaisDetail;
  selected: boolean = false;

  constructor(private paisService: PaisService) { }

  getPaises(){
    this.paisService.getPaises().subscribe((paises)=>{
      this.paises = paises;
    })
  }

  selectAuthor(pais: PaisDetail){
    this.selectedPais = pais;
    this.selected = true;
  }

  ngOnInit() {
    this.getPaises();
  }

}
