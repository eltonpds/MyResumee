import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-single-page-app',
  templateUrl: './single-page-app.component.html',
  styleUrls: ['./single-page-app.component.css']
})
export class SinglePageAppComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    this.route.navigate(['/spa']);
  }

}
