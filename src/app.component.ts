import { Component } from "@angular/core";
import { ViewEncapsulation } from "@angular/core";

@Component({
    selector: 'hnr-app',
    template: `
        <h1>This is App component</h1>
    `,
    styleUrls: ["./app.component.css"],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent{
    constructor(){
        console.log("App Component initialized");
    }
}