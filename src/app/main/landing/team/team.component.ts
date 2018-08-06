import { Component, OnInit } from '@angular/core';
import { NguCarousel } from '@ngu/carousel';

@Component({
  selector: 'landing-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  public carouselOptions: NguCarousel;
  public testimonials = [
    {
      logo: '',
      photo: 'assets/images/avatars/profile.jpg',      
      title: 'John Doe',
      subtitle: 'CFO'
    },
    {
      logo: '',
      photo: 'assets/images/avatars/profile.jpg',      
      title: 'John Doe',
      subtitle: 'CEO'
    },
    {
      logo: '',
      photo: 'assets/images/avatars/profile.jpg',     
      title: 'Jhone Doe',
      subtitle: 'Product Manager'
    },
    {
      logo: '',
      photo: 'assets/images/avatars/profile.jpg',     
      title: 'Adam Smith',
      subtitle: 'Software Developer'
    }
  ];

  constructor() {}

  ngOnInit(): void {
    this.carouselOptions = {
      grid: { xs: 1, sm: 2, md: 3, lg: 3, all: 0 },
      slide: 2,
      speed: 400,
      interval: 4000,
      point: {
        visible: true
      },
      load: 2,
      touch: true,
      loop: true
    };
  }
}
