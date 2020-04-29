import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-show',
  templateUrl: './show.component.html',
  styleUrls: ['./show.component.css']
})
export class ShowComponent implements OnInit {

  constructor(private route : ActivatedRoute) { }
  total : string;

  ngOnInit() {
    this.total = this.route.snapshot.paramMap.get('total');
  }

}