import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  public sections: Subsection[] = [
    /*
    new Subsection("Welcome!", `
      Welcome to the Lubbock Table Tennis Club! We're a free club that meets three times a week. 
    `),
    */
    new Subsection("Skill Levels", `
      We welcome all skill levels! Our members range in experience and level from 1800+ players to beginners.
      Don't have a paddle or ping pong balls? Don't sweat it! Another member would be happy to lend you their
      second paddle until you feel comfortable enough to buy your own. Don't let that stop you from coming out!
    `),
    new Subsection("Club Equipment", `
      We have four beautiful tables and members who are always ready to play!
    `),
    new Subsection("Meeting Location", `
      We meet three times a week at <a target="_blank" rel="noopener noreferrer" href="https://ci.lubbock.tx.us/departments/parks-recreation/recreation/maggie-trejo-supercenter">Maggie Trejo Supercenter</a>
      (see <a href="#meeting-info">Meeting Info</a> above for days and times). Maggie Trejo is a city-owned community recreation center. They provide us with
      a large, high-ceilinged, gymnasium-like space to setup our tables.
    `),
  ]

  constructor() { }

  ngOnInit(): void {
  }

}

class Subsection {
  public header: string = "";
  public body: string = "";

  constructor(header: string, body: string) {
    this.header = header;
    this.body = body;
  }
}
