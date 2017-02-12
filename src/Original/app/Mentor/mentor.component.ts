import { Component } from '@angular/core';

export class Mentors{
  photo : any;
  name : string;
  deg : string;
  twitter : string;
  in : string;
  github : string;
  link : string;
}


const MENTORS : Mentors[]= [
  {photo :'https://cdn-photos.bloc.io/mentor_data_photos/square/233/me.jpeg?1480089710',
name : "Abraham Alvarez", deg :  "Web Development", twitter : "",
in : "", github : "", link : ""},
  {photo :'https://cdn-photos.bloc.io/mentor_data_photos/square/201/aa1.JPG?1437422758',
name : "Amber Aultman", deg :  "ux/ui design", twitter : "https://twitter.com/amberaultman",
in : "https://www.linkedin.com/in/amberaultman", github : "https://github.com/amberaultman", link : "http://amberaultman.com" },
{photo :'https://cdn-photos.bloc.io/mentor_data_photos/square/8/ryan_balfanz_panel.jpg?1380742629',
name : "Ryan Balfanz", deg :  "Software Development", twitter : "https://twitter.com/RyanBalfanz",
in : "https://www.linkedin.com/in/ryanbalfanz", github : "https://github.com/RyanBalfanz", link : "https://ryanbalfanz.com/"},
{photo :'https://cdn-photos.bloc.io/mentor_data_photos/square/5/timothy-head-shot-1000.jpg?1450732613',
name : "Timothy Barnes", deg :  "Web Development", twitter : "https://twitter.com/barnes7td",
in : "", github : "https://github.com/barnes7td", link : "" },
{photo :'https://cdn-photos.bloc.io/mentor_data_photos/square/84/Screen_Shot_2015-07-20_at_11.35.05_PM.png?1443678437',
name : "Shannon Bertucci", deg :  "Software Development", twitter : "https://twitter.com/shshshano",
in : "", github : "https://github.com/shannonio", link : "http://www.shannon.io" },
{photo :'https://cdn-photos.bloc.io/mentor_data_photos/square/219/BA9A6047_k.jpg?1476327253',
name : "Kinsey Ann Durham", deg :  "Web Development", twitter : "https://twitter.com/KinseyAnnDurham",
in : "https://www.linkedin.com/in/kinseyanndurham", github : "https://github.com/durhamka", link : "http://www.kinseyanndurham.com" },
{photo :'https://cdn-photos.bloc.io/mentor_data_photos/square/72/bobbilee.jpg?1400437180',
name : "Kinsey Ann Durham", deg :  "Software Development", twitter : "https://twitter.com/bobbilee19",
in : "", github : "https://github.com/bobbilee19", link : "http://www.bobbileehartman.com" },
{photo :'https://cdn-photos.bloc.io/mentor_data_photos/square/72/bobbilee.jpg?1400437180',
name : "Kinsey Ann Durham", deg :  "Software Development", twitter : "https://twitter.com/bobbilee19",
in : "", github : "https://github.com/bobbilee19", link : "http://www.bobbileehartman.com" },
{photo :'https://cdn-photos.bloc.io/mentor_data_photos/square/219/BA9A6047_k.jpg?1476327253',
name : "Kinsey Ann Durham", deg :  "Software Development", twitter : "https://twitter.com/bobbilee19",
in : "", github : "https://github.com/bobbilee19", link : "http://www.bobbileehartman.com" }
]


@Component({
    selector : 'mentor',
    templateUrl : 'mentor.component.html',
    styleUrls : ['mentor.component.css']  
})
export class MentorComponent{
      mentors = MENTORS;
      selectedMentor : Mentors;
            onSelect(mentor: Mentors): void {
  this.selectedMentor = mentor;
}
}