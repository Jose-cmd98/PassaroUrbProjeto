import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service'
import {Oferta} from '../shared/oferta.model'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  //Provider imported by OfertasService from ofertas.service.ts made by me
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {
  //declarando variavel service e criando a variavel como sendo um atributo do objeto


  public ofertas!: Oferta []
                                      //inferindo o tipo de acordo com o ts OfertasService
  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {
    //this acessando o metodo get.ofertas

    // this.ofertas = this.OfertasService.getOfertas()

    this.OfertasService.getOfertas2()
      .then(( ofertas: Oferta[] ) => {
        this.ofertas = ofertas
      })

  }

}
