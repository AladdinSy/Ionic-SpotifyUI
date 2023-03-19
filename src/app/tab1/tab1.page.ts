import { Component } from '@angular/core';
import recentlyPlayed from '../../assets/mockdata/recentlyPlayed.json';
import heavyRotation from '../../assets/mockdata/heavyRotation.json';
import jumpBackIn from '../../assets/mockdata/jumpBackIn.json';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  data = [
    {
      title: 'Recently played',
      albums: recentlyPlayed,
    },
    {
      title: 'Heavy rotation',
      albums: heavyRotation,
    },
    {
      title: 'Jump back in',
      albums: jumpBackIn,
    },
  ];

  opts = {
    spaceBetween: 20,
    slidesPerView: 2.4,
    slidesOffsetBefore: 20,
    freeMode: true,
    loop: true,
  };

  constructor(private router: Router) {}

  openAlbum(album) {
    const titleEscaped = encodeURIComponent(album.title);
    console.log('EncodedTitle: ' + titleEscaped);
    this.router.navigateByUrl(`/tabs/tab1/${titleEscaped}`);
  }

  dasherize(string) {
    // helper function for image names
    return string.replace(/[A-Z]/g, function (char, index) {
      return (index !== 0 ? '-' : '') + char.toLowerCase();
    });
  }
}
