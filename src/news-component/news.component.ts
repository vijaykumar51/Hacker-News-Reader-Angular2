import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { ApiService } from "../services/api.service";

@Component({
	selector: "news-component",
	template: `
        <h1>This is news Component</h1>
    `
})
export class NewsComponent implements OnInit {

	public newsList;

	constructor(private apiService: ApiService) { }

	public ngOnInit() {
		this.apiService.newsHttpRequest(1).subscribe(response => {
			console.log(response);
			this.newsList = response;
		});
	}

	public newPublicFunc(){
		var a = 4;
	}

	private abc() {
		console.log("hello");
	}


}