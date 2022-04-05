import { Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.css']
})
export class GeneratePasswordComponent implements OnInit {
  @Input() useOnlyLetters : string = '';
  @Input() letterTitle : string = '';
  
  constructor() { }

  ngOnInit(): void {
  }
  

  

}
