import { Component, Input } from "@angular/core";
import { NewsFeed } from "../../models/model-collection";

@Component({
	selector: "item",
	styleUrls: ["./item.component.css"],
	templateUrl: "./item.component.html"
})
export class ItemComponent {
	@Input("input") public news: NewsFeed;

}