import { Component, OnInit, Input } from '@angular/core';

import { PeopleService } from '../../services/people.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  @Input() list = [
    {
      firstName :'',
      lastName: '',
      age: 0 
    }
  ]

  constructor(){}
 
  ngOnInit(): void {
    
  }

}
