import { Component, OnInit } from "@angular/core";
import { fade } from "src/assets/animations/animations";
import { PlayerService } from "src/app/services/player.service";
import { ExploreService } from "src/app/services/explore.service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
  animations: [fade]
})
export class CreateComponent implements OnInit {
  private create: string;
  public player;

  constructor(
    private service: PlayerService,
    private explore: ExploreService
  ) {}

  ngOnInit() {
    this.create = "start";
  }

  createScreen(): boolean {
    switch (this.create) {
      case "start":
        return true;
      case "creating":
        return false;
      case "done":
        return false;
    }
  }

  createCharacter(val): void {
    this.service.createCharacter(val);
    this.player = this.service.character;
  }
}
