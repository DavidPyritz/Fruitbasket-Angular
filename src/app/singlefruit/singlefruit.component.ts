import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-singlefruit',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './singlefruit.component.html',
  styleUrl: './singlefruit.component.scss'
})
export class SinglefruitComponent {

  @Input() fruit = {
    name: "Apfel",
    img: "apple.png",
    description: "Äpfel sind aufgrund ihres hohen Wassergehalts kalorienarm und enthalten nur Spuren von Fett und Eiweiß, dafür aber rund zwei Prozent Ballaststoffe und etwa elf Prozent Kohlenhydrate. Äpfel enthalten auch viele Vitamine und Mineralstoffe und sind daher eine wichtige Quelle für uns - zum Beispiel für Vitamin C.",
    genus: "Kernobstgewächsen innerhalb der Familie der Rosengewächse",
    stars: 2.3,
    reviews: [{ name: "Kevin W.", text: "ist lecker" }, { name: "Arne P.", text: "nicht so meins" }],
  };


  inputData = "";                   //wenn man auf den roten pfeil klickt das es mit dem Typescript verbunden ist

  @Output('banana') fruitname = new EventEmitter<string>(); //kann entsprechend neu definiert werden

  sendInputData() {
    // this.fruitname.emit(this.fruit.name); //event wird emittet, wenn man auf Pfeil klickt bei Erdbeere z.B. wird in der Consolenleiste "Erdbeere" ausgegeben

    // console.log(this.inputData);

    // this.inputData = "Moin";  //wenn man jetzt auf den pfeil klickt neben dem inputfeld wird "Moin" ausgegeben

    this.fruitname.emit(this.inputData);

  }

}
