import { Component } from '@angular/core';

@Component({
  selector: 'app-event-binding',
  imports: [],
  templateUrl: './event-binding.component.html',
  styleUrl: './event-binding.component.css'
})
export class EventBindingComponent {
  texto: boolean = false;
  alertar(){
    alert("HOJE TÁ GELADO QUE SÓ JESUS, PÕE O CASACO")
  }

  exibirTexto(){
    return this.texto = !this.texto;
  }
}
