import { Component, OnInit } from '@angular/core';
import { Cofee } from 'src/app/core/interface/cofee.interface';
import { CofeeService } from 'src/app/core/services/cofee.service';

@Component({
  selector: 'app-cofee-list',
  templateUrl: './cofee-list.component.html',
  styleUrls: ['./cofee-list.component.css']
})
export class CofeeListComponent implements OnInit{

  coofes: Cofee[] = [];
  typeBlend: any [] = [];
  typeOrigin: any [] = [];

  constructor( private cofeeService: CofeeService) {}
  
  ngOnInit(): void {
    this.cofeeService.getCofees().subscribe( (response) => {
      this.coofes = response;
      this.typeBlend = this.coofes.filter( element => element.tipo === 'Blend');
      this.typeOrigin = this.coofes.filter( element => element.tipo === 'Café de Origen');
    });
  }


}