import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AskComponent, HeaderComponent, JobComponent, NewsComponent, ShowComponent } from "./component-collection";
import { ApiService } from "./services/api.service";

const appRoutes: Routes = [
	{ path: "", redirectTo: "news", pathMatch: "full" },
	{ path: "news", component: NewsComponent },
	{ path: "show", component: ShowComponent },
	{ path: "ask", component: AskComponent },
	{ path: "jobs", component: JobComponent }
]

@NgModule({
	imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: true })],
	declarations: [AppComponent, HeaderComponent, NewsComponent, ShowComponent, AskComponent, JobComponent],
	providers: [ApiService],
	bootstrap: [AppComponent]
})
export class AppModule {
	constructor() {
		console.log("App module initialized");
	}
}