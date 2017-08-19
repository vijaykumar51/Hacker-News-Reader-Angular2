import { Component, OnInit } from "@angular/core";
import { Http } from "@angular/http";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../services/api.service";
import { NewsFeed } from "../../models/model-collection";

@Component({
	selector: "news-component",
	styleUrls: ["./news.component.css"],
	templateUrl: "./news.component.html",
})
export class NewsComponent implements OnInit {
	public pageNumber: number;

	public newsList: NewsFeed[] = [];

	constructor(private apiService: ApiService, private route: ActivatedRoute) {
		this.route.params.subscribe(params => {
			this.pageNumber = params["page"];
		});
	}

	public ngOnInit() {
		this.apiService.newsHttpRequest(this.pageNumber).subscribe(response => {
			console.log(response);
			this.newsList = response;
		});
	}

}