import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { ApiService } from "../services/api.service";
import { NewsFeed } from "../models/model-collection";

@Component({
	selector: "news-component",
	styleUrls: ["./news.component.css"],
	templateUrl: "./news.component.html",
})
export class NewsComponent implements OnInit {

	public newsList: NewsFeed[] = [];

	constructor(private apiService: ApiService) { }

	public ngOnInit() {
		this.apiService.newsHttpRequest(1).subscribe(response => {
			console.log(response);
			this.newsList = response;
		});
	}

}