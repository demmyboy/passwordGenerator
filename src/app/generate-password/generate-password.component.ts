import { Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'app-generate-password',
  templateUrl: './generate-password.component.html',
  styleUrls: ['./generate-password.component.css']
})
export class GeneratePasswordComponent {
  @Output() onCheck: EventEmitter<boolean> = new EventEmitter();
  @Input() letterTitle : string = '';
  @Input() includes = false;
  
  change(){
    this.onCheck.emit(true)
  }

  
  

  

}
