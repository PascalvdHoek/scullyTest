import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {ActivatedRoute, Router, ROUTES} from '@angular/router';
import { ScullyRoutesService } from '@scullyio/ng-lib';
import { pluck, filter, map } from 'rxjs/operators';
import {combineLatest} from 'rxjs';

declare var ng: any;

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css'],
  preserveWhitespaces: true,
  encapsulation: ViewEncapsulation.None

})
export class BlogComponent implements OnInit {

blogid = this.route.params.pipe(pluck('slug'))
routes = this.scully.available$;

// testBlog = combineLatest(this.blogid, this.routes)
// huidigeBlog= this.testBlog.pipe(map(a=> {var test = a[0] ;a[1].find(a=> {a.route.includes('design-blog'); console.log(a.route)})}))
  
currentBlog =  this.scully.available$.pipe(map(a=> a.find(a=> a.route.includes('design-blog'))))

  ngOnInit() {
    this.routes.subscribe(a=> console.log(a))
    
  }

  constructor(private router: Router, private route: ActivatedRoute, public scully : ScullyRoutesService) {

  }
}
