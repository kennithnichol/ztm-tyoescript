import { Company } from "./Company";
import { User } from "./User";

export class Map {
	private googleMap: google.maps.Map;

	constructor(divId: string) {
		this.googleMap = new google.maps.Map(document.getElementById(divId), {
			zoom: 2,
			center: {
				lat: 0,
				lng: 0
			}
		})
	}

	addUserMarker(user: User) {
		new google.maps.Marker({
			map: this.googleMap,
			position: user.location
		});
	}

	addCompanyMarker(company: Company) {
		new google.maps.Marker({
			map: this.googleMap,
			position: company.location
		})
	}
}