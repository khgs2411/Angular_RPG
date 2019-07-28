import { Component, OnInit } from "@angular/core";
import { PlayerService } from "src/app/services/player.service";
import { ExploreService } from "src/app/services/explore.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-world",
  templateUrl: "./world.component.html",
  styleUrls: ["./world.component.scss"]
})
export class WorldComponent implements OnInit {
  public player;
  constructor(
    private service: PlayerService,
    private explore: ExploreService,
    private router: Router
  ) {}

  ngOnInit() {
    this.router.navigate(["create"]);
  }
}
