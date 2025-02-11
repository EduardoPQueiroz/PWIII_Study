import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Vai Corinthians meu mano!!!!';

  somar(n1: number, n2: number) : Number{
    return n1 + n2;
}

}



