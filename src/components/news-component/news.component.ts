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
	public feedType: string;
	public currentPageNumber: number;
	public nextPageNumber: number;
	public feedStartNumber: number = 1;
	public newsList: NewsFeed[] = [];
	private feedSize: number = 30;

	constructor(private apiService: ApiService, private route: ActivatedRoute) {
		this.currentPageNumber = +this.route.snapshot.params["page"];
		this.feedType = this.route.snapshot.data["feedType"];
	}

	public ngOnInit() {
		this.fetchNextFeed(this.currentPageNumber);
	}

	public fetchNextFeed(pageNumber) {
		this.apiService.getFeeds(this.feedType, pageNumber).subscribe(response => {
			console.log(response);
			this.newsList = response;
			this.currentPageNumber = pageNumber;
			this.feedStartNumber = (this.currentPageNumber - 1) * this.feedSize + 1;
			this.nextPageNumber = this.currentPageNumber + 1;
		});
	}

}