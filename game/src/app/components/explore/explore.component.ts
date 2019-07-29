import { Component, OnInit } from "@angular/core";
import { expand } from "src/assets/animations/animations";

@Component({
  selector: "app-explore",
  templateUrl: "./explore.component.html",
  styleUrls: ["./explore.component.scss"],
  animations: [expand]
})
export class ExploreComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}
