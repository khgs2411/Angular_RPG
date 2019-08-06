import { Component, OnInit, HostListener } from "@angular/core";
import { expand, fade } from "src/assets/animations/animations";
import { ThrowStmt } from "@angular/compiler";

@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  // templateUrl: "./index.html",
  styleUrls: ["./explore.component.scss"],
  animations: [expand, fade]
})
export class ExploreComponent implements OnInit {
  public view: boolean;
  public move: number;
  public defeated: boolean;
  constructor() {}

  ngOnInit() {
    this.view = false;
    this.initiateLocalVariables();
  }

  initiateLocalVariables() {
    this.move = 0;
    this.defeated = false;
    setTimeout(() => {
      this.view = true;
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
      if (this.move >= 800) {
        document.getElementById("view").scrollBy(25, 0);
      }
    }
    this.collision();
  }
  moveLeft() {
    if (this.move > 0) {
      this.move += -20;
      document.getElementById("move").style.marginLeft = "" + this.move + "px";
      if (this.move <= 1200) {
        document.getElementById("view").scrollBy(-25, 0);
      }
    }
    this.collision();
  }

  collision() {
    if (document.getElementById("testMonster")) {
      let mLoc = document.getElementById("testMonster").offsetLeft;
      let pLoc = document.getElementById("move").offsetLeft;
      console.log(mLoc, pLoc);
      if (pLoc + 60 >= mLoc) {
        console.log("Combat");
        this.defeated = true;
      }
    }
  }
}
