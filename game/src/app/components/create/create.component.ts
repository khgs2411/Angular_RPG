import { Component, OnInit } from "@angular/core";
import { fade, expand } from "src/assets/animations/animations";
import { PlayerService } from "src/app/services/player.service";
import { ExploreService } from "src/app/services/explore.service";
import { Character } from "src/app/interfaces/character";
import { Router } from "@angular/router";
import { CookieService } from "ngx-cookie-service";

@Component({
  selector: "app-create",
  templateUrl: "./create.component.html",
  styleUrls: ["./create.component.scss"],
  animations: [fade, expand]
})
export class CreateComponent implements OnInit {
  public phase: string;
  public player: Character;
  public isOpen: boolean;
  constructor(
    private service: PlayerService,
    private router: Router,
    private cookie: CookieService
  ) {}

  devParams() {
    this.player.name = "";
    this.player.title = "Adventurer";
  }

  ngOnInit() {
    this.initiateLocalVariables();
  }

  initiateLocalVariables() {
    this.phase = "create";
    this.player = this.service.initiateCharacter();
    this.devParams();
  }

  changePhase(val: string) {
    this.phase = val;
    return this.phase;
  }

  createCharacter(val: object): void {
    if (this.player.name != "") {
      this.changePhase("done");
      this.embark();
      this.player = this.service.createCharacter(val);
    } else {
      alert("Please choose a Character name");
    }
  }

  embark() {
    setTimeout(() => {
      this.changePhase("finish");
      setTimeout(() => {
        this.router.navigate(["explore"]);
      }, 1000);
    }, 2000);
  }
}
