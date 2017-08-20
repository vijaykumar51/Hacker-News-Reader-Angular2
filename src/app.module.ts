import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import {
	AskComponent, HeaderComponent, ItemComponent, JobComponent,
	NewsComponent, ShowComponent, FooterComponent
} from "./components/component-collection";
import { ApiService } from "./services/api.service";

const feedRoutes = [{
	component: NewsComponent,
	path: ":page"
}];

const appRoutes: Routes = [
	{ path: "", redirectTo: "news/1", pathMatch: "full" },
	{ path: "news", children: feedRoutes, data: { feedType: "news" } },
	{ path: "show", component: ShowComponent },
	{ path: "ask", component: AskComponent },
	{ path: "jobs", component: JobComponent }
];

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent, HeaderComponent, ItemComponent, NewsComponent,
		FooterComponent, ShowComponent, AskComponent, JobComponent],
	imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: false })],
	providers: [ApiService],
})
export class AppModule {
}