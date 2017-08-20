import { Component } from "@angular/core";

@Component({
	selector: "hnr-app",
	styleUrls: ["./app.component.css"],
	template: `
        <div class="app-container">
            <header-component></header-component>
            <router-outlet></router-outlet>
			<footer-component></footer-component>
        </div>
    `
})
export class AppComponent {
}