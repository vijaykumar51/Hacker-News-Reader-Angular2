import { Component } from "@angular/core";

@Component({
    selector: "hnr-app",
    template: `
        <header-component></header-component>
        <router-outlet></router-outlet>
    `,
    styleUrls: ["./app.component.css"]
})
export class AppComponent{
    constructor(){
        console.log("App Component initialized");
    }
}