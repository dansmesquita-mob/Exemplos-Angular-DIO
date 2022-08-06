import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appMarcaTexto]'
})
export class MarcaTextoDirective implements OnInit {

@Input() cordeFundo: string = "yellow";
@Input() cordoTexto: string = "white";


constructor(private elemento: ElementRef) { }

ngOnInit(){
  this.mudarFundo();

}

private mudarFundo(cor: string ="yellow"){
  this.elemento.nativeElement.style.backgroundColor = this.cordeFundo || cor;
  this.elemento.nativeElement.style.color = this.cordoTexto;
  this.elemento.nativeElement.style.fontWeight = 'bold';


}

}

