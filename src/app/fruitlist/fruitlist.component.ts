import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { SinglefruitComponent } from '../singlefruit/singlefruit.component';
import { FruitlistdataService } from '../fruitlistdata.service';

@Component({
  selector: 'app-fruitlist',
  standalone: true,
  imports: [CommonModule, SinglefruitComponent],
  templateUrl: './fruitlist.component.html',
  styleUrl: './fruitlist.component.scss'
})
export class FruitlistComponent {

  fruitlistdata = inject(FruitlistdataService);

  // howItWorks = "fine";

  fontColor = "yellow";      // hier wird die farbe gelb gesetzt
  fontColorGood = "green";    // hier wird die farbe rot gesetzt
  fontColorBad = "red";   // hier wird die farbe gruen gesetzt

  

  addComment(comment: string, index: number) {
    // console.log(comment);

    this.fruitlistdata.addCommentToFruit(comment, index)
  }

}   //funktion ist im fruitlist.component.ts

// nameLog(name: string) {
//   console.log(name);
// }


