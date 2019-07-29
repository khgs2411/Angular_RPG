import { Component, OnInit } from "@angular/core";
import { PlayerService } from "src/app/services/player.service";
import { Router } from "@angular/router";
import { fade } from "src/assets/animations/animations";

@Component({
  selector: "app-world",
  templateUrl: "./world.component.html",
  styleUrls: ["./world.component.scss"],
  animations: [fade]
})
export class WorldComponent implements OnInit {
  constructor(private service: PlayerService, private router: Router) {}

  get player() {
    return this.service.player;
  }

  ngOnInit() {
    // this.service.deleteSaveFile();
    if (this.service.loadSaveFile()) {
      this.router.navigate(["explore"]);
    } else {
      this.router.navigate(["create"]);
    }
  }
}
