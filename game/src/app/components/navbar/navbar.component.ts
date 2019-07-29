import { Component, OnInit, Input } from "@angular/core";
import { navbarToggle, fade, expand } from "src/assets/animations/animations";
import { Router } from "@angular/router";
import { PlayerService } from "src/app/services/player.service";
@Component({
  selector: "app-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.scss"],
  animations: [navbarToggle, fade, expand]
})
export class NavbarComponent implements OnInit {
  @Input() public player;

  public isOpen: boolean;
  private delete: boolean;
  constructor(private router: Router, private service: PlayerService) {}

  ngOnInit() {
    this.initializeValues();
  }

  initializeValues() {
    this.isOpen = false;
    this.delete = false;
  }

  toggle() {
    this.isOpen = !this.isOpen;
    console.log(this.isOpen);
  }

  deleteCharacter() {
    this.delete = false;
    this.isOpen = !this.isOpen;
    this.service.deleteSaveFile();
    this.router.navigate(["create"]);
  }
}
