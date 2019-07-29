import { Component, OnInit } from "@angular/core";
import { PlayerService } from "src/app/services/player.service";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";
import { fade } from "src/assets/animations/animations";

@Component({
  selector: "app-world",
  templateUrl: "./world.component.html",
  styleUrls: ["./world.component.scss"],
  animations: [fade]
})
export class WorldComponent implements OnInit {
  public player;
  constructor(
    private cookie: CookieService,
    private service: PlayerService,
    private router: Router
  ) {
    this.service.deleteSaveFile();
  }

  ngOnInit() {
    if (this.service.loadSaveFile()) {
      this.router.navigate(["explore"]);
    } else {
      this.router.navigate(["create"]);
    }
  }
}
