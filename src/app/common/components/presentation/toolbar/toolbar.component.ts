import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})
export class ToolbarComponent implements OnInit {
  @Input() private title: string;

  constructor() { }

  ngOnInit() {
  }

  goHome(event) {
    console.log('Clicked home: ' + event);
  }
}
