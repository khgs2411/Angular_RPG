import { Component, OnInit } from "@angular/core";
import { expand, fade } from "src/assets/animations/animations";

@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore.component.scss"],
  animations: [expand, fade]
})
export class ExploreComponent implements OnInit {
  public view: boolean;
  constructor() {
    this.view = false;
  }

  ngOnInit() {
    this.initiateLocalVariables();
  }

  initiateLocalVariables() {
    setTimeout(() => {
      this.view = true;
    }, 1500);
  }
}
