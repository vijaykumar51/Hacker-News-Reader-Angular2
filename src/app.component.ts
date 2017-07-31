import { Component } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";



@Component({
    selector: "hnr-app",
    template: `
        <h1>This is App component</h1>
        Hello user
        <router-outlet></router-outlet>
    `,
    styleUrls: ["./app.component.css"]
})
export class AppComponent{
    constructor(){
        console.log("App Component initialized");
    }
}