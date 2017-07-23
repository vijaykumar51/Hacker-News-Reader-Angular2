import { Component } from "@angular/core";

@Component({
    selector: 'hnr-app',
    template: `
        <h1>This is App component</h1>
    `
})
export class AppComponent{
    constructor(){
        console.log("App Component initialized");
    }
}