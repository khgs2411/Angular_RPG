import { Component, OnInit, HostListener } from "@angular/core";
import { expand, fade } from "src/assets/animations/animations";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore.component.scss"],
  animations: [expand, fade]
})
export class ExploreComponent implements OnInit {
  public view: boolean;
  public myElement: HTMLElement;
  public move: number;
  constructor() {}

  ngOnInit() {
    this.view = false;
    this.initiateLocalVariables();
  }

  initiateLocalVariables() {
    this.move = 90;
    setTimeout(() => {
      this.view = true;
      this.myElement = document.querySelector("#move");
    }, 1500);
  }

  @HostListener("document:keydown", ["$event"]) onKeydownHandler(
    event: KeyboardEvent,
    target: HTMLElement
  ) {
    switch (event.keyCode) {
      case 39:
        this.moveRight();
        return;
      case 37:
        this.moveLeft();
        return;
    }
  }

  moveRight() {
    if (this.move < 1750) {
      this.move += 20;
      document.getElementById("move").style.marginLeft = "" + this.move + "px";
      console.log(this.move);
      if (this.move >= 1360) {
        document.getElementById("view").scrollBy(25, 0);
      }
    }
  }
  moveLeft() {
    if (this.move > 100) {
      this.move += -20;
      document.getElementById("move").style.marginLeft = "" + this.move + "px";
      console.log(this.move);
      if (this.move <= 1360) {
        document.getElementById("view").scrollBy(-25, 0);
      }
    }
  }
}
