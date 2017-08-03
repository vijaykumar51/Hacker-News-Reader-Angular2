import { Component } from "@angular/core";

@Component({
    selector: "hnr-app",
    template: `
        <div class="app-container">
            <header-component></header-component>
            <router-outlet></router-outlet>
        </div>    
    `,
    styleUrls: ["./app.component.css"]
})
export class AppComponent{
    constructor(){
        console.log("App Component initialized");
    }
}