import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { CreateComponent } from "./components/create/create.component";
import { ExploreComponent } from "./components/explore/explore.component";
const routes: Routes = [
  { path: "create", component: CreateComponent },
  { path: "explore", component: ExploreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
