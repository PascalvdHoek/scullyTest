import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { pluck, filter, map } from 'rxjs/operators';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.Emulated

})
export class BlogComponent implements OnInit {

blogid = this.route.params.pipe(pluck('slug'))

  ngOnInit() {

    console.log(this.blogid)
    console.log(this.scully.available$)

    this.scully.available$.subscribe(a=> console.log(a))
    this.scully.available$.pipe(map(a=> console.log(a)))




    // //console.log()
    // let current = this.scully.getCurrent();
    // console.log(current);
    // current.subscribe(a => console.log(a), error => console.log(error));
    // //current.subscribe(a => console.log(a));


  }

  constructor(private router: Router, private route: ActivatedRoute, public scully : ScullyRoutesService) {

  }
}
