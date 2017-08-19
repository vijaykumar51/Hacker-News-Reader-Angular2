import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import { AskComponent, HeaderComponent, ItemComponent, JobComponent,
	NewsComponent, ShowComponent, FooterComponent } from "./components/component-collection";
import { ApiService } from "./services/api.service";

const appRoutes: Routes = [
	{ path: "", redirectTo: "news", pathMatch: "full" },
	{ path: "news", component: NewsComponent },
	{ path: "show", component: ShowComponent },
	{ path: "ask", component: AskComponent },
	{ path: "jobs", component: JobComponent }
];

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent, HeaderComponent, ItemComponent, NewsComponent,
		FooterComponent, ShowComponent, AskComponent, JobComponent],
	imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: true })],
	providers: [ApiService],
})
export class AppModule {
	constructor() {
		console.log("App module initialized");
	}
}