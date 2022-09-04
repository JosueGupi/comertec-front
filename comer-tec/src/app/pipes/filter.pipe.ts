import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    const resultPedidos = [];
    for (const pedido of value) {
      if(pedido.Cliente.toLowerCase().indexOf(arg.toLowerCase()) > -1 || pedido.idPedido.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPedidos.push(pedido);
      };
    };
    return resultPedidos
  }

}
