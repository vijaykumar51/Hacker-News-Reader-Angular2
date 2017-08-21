import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { HttpModule } from "@angular/http";

import { AppComponent } from "./app.component";
import {
	HeaderComponent, ItemComponent,
	NewsComponent, FooterComponent, UserComponent
} from "./components/component-collection";
import { ApiService } from "./services/api.service";

const feedRoutes = [{
	component: NewsComponent,
	path: ":page"
}];

const appRoutes: Routes = [
	{ path: "", redirectTo: "news/1", pathMatch: "full" },
	{ path: "news", children: feedRoutes, data: { feedType: "news" } },
	{ path: "show", children: feedRoutes, data: { feedType: "show" } },
	{ path: "ask", children: feedRoutes, data: { feedType: "ask" } },
	{ path: "jobs", children: feedRoutes, data: { feedType: "jobs" } },
	{ path: "user/:userId", component: UserComponent }
];

@NgModule({
	bootstrap: [AppComponent],
	declarations: [AppComponent, HeaderComponent, ItemComponent, NewsComponent,
		FooterComponent, UserComponent],
	imports: [BrowserModule, HttpModule, RouterModule.forRoot(appRoutes, { useHash: false })],
	providers: [ApiService],
})
export class AppModule {
}