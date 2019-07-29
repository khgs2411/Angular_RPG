import { Component, OnInit } from "@angular/core";
import { toggle, fade } from "src/assets/animations/animations";
import { expand } from "dist/game/assets/animations/animations";

@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  animations: [toggle, fade, expand]
})
export class NavbarComponent implements OnInit {
  public isOpen: boolean;
  constructor() {}

  ngOnInit() {
    this.isOpen = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }
}
