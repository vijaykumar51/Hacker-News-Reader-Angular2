import { Component } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ApiService } from "../../services/api.service";

@Component({
	selector: "user",
	styleUrls: ["./user.component.css"],
	templateUrl: "./user.component.html"
})
export class UserComponent {
	private userId: string;
	private userInfo;
	constructor(private route: ActivatedRoute, private apiService: ApiService){
		this.userId = this.route.snapshot.params["userId"];
	}

	ngOnInit(){
		//Get user info here
		this.apiService.getUserInfo(this.userId).subscribe((response) => {
			this.userInfo = response;
			console.log(this.userInfo);
		})
	}
}