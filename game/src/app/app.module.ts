import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { CookieService } from "ngx-cookie-service";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { WorldComponent } from "./components/world/world.component";
import { HttpClientModule } from "@angular/common/http";
import { NavbarComponent } from "./components/navbar/navbar.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { CreateComponent } from "./components/create/create.component";
import { ExploreComponent } from "./components/explore/explore.component";
import { CharacterComponent } from './components/character/character.component';
import { SanitizePipe } from './utils/pipes/sanitize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorldComponent,
    NavbarComponent,
    CreateComponent,
    ExploreComponent,
    CharacterComponent,
    SanitizePipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule {}
