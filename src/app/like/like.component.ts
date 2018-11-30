import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mamat-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.scss']
})
export class LikeComponent implements OnInit {

  isOn = false;
  back = "yellow";
  text = "black";
  testo = "CIAO";

  constructor() { }

  ngOnInit() {
  }

  change = () => {
    this.isOn = !this.isOn;
    if (this.isOn === true) {
      this.back = "yellow";
      this.text = "black";
      this.testo = "HELLO";
    } else {
      this.back = "black";
      this.text = "blue";
      this.testo = "CIAO";
    }
    console.log(this.isOn);
  }

}
