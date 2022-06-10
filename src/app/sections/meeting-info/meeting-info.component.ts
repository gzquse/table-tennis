import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-meeting-info',
  templateUrl: './meeting-info.component.html',
  styleUrls: ['./meeting-info.component.css']
})
export class MeetingInfoComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  public getDirectionsToMaggie() : void {
    this.getDirectionsToCoordinates("33.5990214", "-101.8862281");
  }

  private getDirectionsToCoordinates(lat: string, lon: string) : void {
    // If it's an iPhone..
    if( (navigator.platform.indexOf("iPhone") != -1) 
        || (navigator.platform.indexOf("iPod") != -1)
        || (navigator.platform.indexOf("iPad") != -1))
         window.open("maps://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=" + lat + "," + lon);
    else
         window.open("https://www.google.com/maps/dir/?api=1&travelmode=driving&layer=traffic&destination=" + lat + "," + lon);
  }

}
