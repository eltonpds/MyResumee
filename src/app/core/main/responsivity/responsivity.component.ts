import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-responsivity',
  templateUrl: './responsivity.component.html',
  styleUrls: ['./responsivity.component.css']
})
export class ResponsivityComponent implements OnInit {

  constructor(private route: Router) { }

  ngOnInit() {
    this.route.navigate(['/responsividade']);
  }

}
