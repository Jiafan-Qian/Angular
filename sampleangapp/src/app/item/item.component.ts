import { Component, OnInit } from '@angular/core';
import {Item} from '../item';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  items : Item[] = [{name: 'Pen', val:12},{name: 'Pencil', val:12},{name: 'Eraser', val:12}];
  selectedValue:string = 'Pen';

  title = "propertyBinding";
  imgUrl = "/assets/download.jpg";
  constructor() { }

  ngOnInit(): void {
  }

}
