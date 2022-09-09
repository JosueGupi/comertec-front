import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter',
})
export class FilterPipe implements PipeTransform {
  transform(value: any, arg: any): any {
    const resultPedidos = [];
    for (const pedido of value) {
      if (pedido.Cliente != undefined && pedido.idPedido != undefined) {
        //filtro para historial
        if (
          pedido.Cliente.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          pedido.idPedido.toLowerCase().indexOf(arg.toLowerCase()) > -1
        ) {
          resultPedidos.push(pedido);
        }
      }

      if (
        pedido.Alimento != undefined &&
        pedido.NombreTiempo != undefined &&
        pedido.Tipo != undefined
      ) {
        //filtro para catálogo
        if (
          pedido.Alimento.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          pedido.NombreTiempo.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          //pedido.Precio.toLowerCase().indexOf(arg.toLowerCase()) > -1 ||
          pedido.Tipo.toLowerCase().indexOf(arg.toLowerCase()) > -1
        ) {
          resultPedidos.push(pedido);
        }
      }
    }
    return resultPedidos;
  }
}
