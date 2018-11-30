import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.scss']
})
export class TitleComponent implements OnInit {

  title = "CIAO";
  title2 = "Mamat";
  nome = "Mattia";
  counter = 0;
  isOff = true;
  color = "red";
  size = "100px";
  greet = () => {
    return "ciao" + this.nome;
  }

  increment = () => {
    this.counter++;
    this.isOff = !this.isOff;
    console.log(this.counter);

  }

  constructor() { }

  ngOnInit() {
    console.log("Title component pronto!");

    // setInterval(this.increment, 10000);
  }

}
