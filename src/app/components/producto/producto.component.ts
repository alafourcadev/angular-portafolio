import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ProductosService} from '../../services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styles: []
})
export class ProductoComponent {

  producto: any = undefined;
  code: string = undefined;


  constructor(private route: ActivatedRoute, private _ps: ProductosService) {
    route.params.subscribe(parametros => {


      _ps.cargar_producto(parametros ['id'])
        .subscribe(res => {
          this.code = parametros ['id'];
          this.producto = res;
        });

    });
  }


}
