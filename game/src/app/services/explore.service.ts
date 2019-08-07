import { Injectable, OnInit } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class ExploreService implements OnInit {
  constructor() {}

  ngOnInit() {
    this.initiateLocalVariables();
  }

  initiateLocalVariables() {}
}
