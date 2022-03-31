import { Component, NgModule } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  includeLetters = false; 
  includeNumbers = false; 
  includeSymbols = false; 
  length = 0; 
  password = ''; 
  

  onChangeUseLetters(){

    this.includeLetters = !this.includeLetters; 
  }

  onChangeUseNumbers(){
    this.includeNumbers = !this.includeNumbers; 
  }

  onChangeUseSymbols(){
    this.includeSymbols = !this.includeSymbols; 
  }

  onChangeLength(value:string){
    const parsedValue = parseInt(value); 
    // to check if user enters a non number, it displays 0
    if(!isNaN(parsedValue)){
      this.length = parsedValue
    }

    if(parsedValue < 0  || parsedValue > 20){
    
      alert ("Number out of range")
    }

    
  }

  

  onButtonClick(){
    /* console.log("letter is " + this.includeLetters)
    console.log("Number is " + this.includeNumbers)
    console.log("symbol is " + this.includeSymbols)
    this.password = "Demmys";  */

    // generating Random password 
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!"#¤%&/()?@£$€';

    let validChars = '';
    if(this.includeLetters){
      validChars += letters;
    }
    if(this.includeNumbers){
      validChars += numbers;
    }
    if(this.includeSymbols){
      validChars += symbols;
    }
    let generatedPasword = ''; 
    for (let i = 0; i < this.length; i ++) {
      const index = Math.floor(Math.random()* validChars.length);
      generatedPasword += validChars[index]
    }
    this.password = generatedPasword;


    // console.log("valid chars are " + validChars)
    console.log("valid chars are " + generatedPasword)
  }

  resetPassword(){
    this.password = " "
  }

}

