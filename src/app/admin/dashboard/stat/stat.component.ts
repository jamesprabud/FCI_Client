import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-stat',
  templateUrl: './stat.component.html',
  styleUrls: ['./stat.component.scss']
})
export class StatComponent implements OnInit {
  @Input() bgClass: string = '';
  @Input() icon: string = '';
  @Input() count: number = 0;
  @Input() label: string = '';
  @Input() data: number = 0;
  constructor() {}

  ngOnInit() {}
}
