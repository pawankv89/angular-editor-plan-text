import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.scss']
})
export class MessageComponent implements OnInit {
  title = 'angular-editor-plan-text';
  cars = [
    { value: "BMW Hyundai", name: "BMW Hyundai" },
    { value: "Kia Tata", name: "Kia Tata" },
    { value: "Volkswagen Ford", name: "Volkswagen Ford" },
    { value: "Renault Audi", name: "Renault Audi" },
    { value: "Mercedes Benz Skoda", name: "Mercedes Benz Skoda" },
  ];
  
  selected = [];
  //selected = [{ value: 3, name: "Volkswagen Ford" }];

  formGroup = this.fGroup.group({
    insertField: [null],
    textArea: ['']
  });

  constructor(private fGroup: FormBuilder){ }

  ngOnInit(): void {
    //throw new Error('Method not implemented.');
  }

  insertDataFieldSelect(insertdatafield: any) {
    console.log("insertdatafield, ", insertdatafield)
  }
  
  clearInsertDataField(){

  }

 buttonClickMe(){
    console.log("buttonClickMe")
  }

 
  textareaSelectByButtonClick() {
    console.log("textareaSelectByButtonClick")
    const textarea : any = document.getElementById('textArea');
    const selectionArea = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    console.log("textarea, ", selectionArea);
  }

  buttonClick1() {
    console.log("buttonClick")
    const textarea : any = document.getElementById('textArea');
    const selectionArea = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    console.log("textarea, ", selectionArea);
  }

  buttonClick() {
    console.log("buttonClick")
    const textarea : any = document.getElementById('textArea');
    const selectionArea = textarea.value.substring(textarea.selectionStart, textarea.selectionEnd);
    console.log("textarea, ", selectionArea);

    this.insertAtCaret(textarea, ' << inserted text! >> ');
  }

  insertAtCaret(document: any, myValue: any){

    if (document.selection) {
      //For browsers like Internet Explorer
      document.focus();
     const sel = document.selection.createRange();
      sel.text = myValue;
      document.focus();
      console.log("document, ", document);
    } else if (document.selectionStart || document.selectionStart == '0') {
      //For browsers like Firefox and Webkit based
      var startPos = document.selectionStart;
      var endPos = document.selectionEnd;
      var scrollTop = document.scrollTop;
      document.value = document.value.substring(0, startPos) + myValue + document.value.substring(endPos, document.value.length);
      document.focus();
      document.selectionStart = startPos + myValue.length;
      document.selectionEnd = startPos + myValue.length;
      document.scrollTop = scrollTop;
  } else {
    document.value += myValue;
    document.focus();
  }
  }

    getCaretPosition(event: any) {
    console.log(event)
    const textarea : any = document.getElementById('textArea');
    const position = textarea.section;
    console.log('position ', position);
    return position;

    // var ctlTextArea = document.getElementById('textArea');
    // const position = ctlTextArea?.section;
    // return position;
}

//   getCaretPosition(event: any) {
//     console.log(event)
//     // const start = event.target.selectionStart;
//     // const end = event.target.selectionEnd;
//     // console.log(event.target.value.substr(start, end - start))

//     // var ctlTextArea = document.getElementById('textArea');
//     // const position = ctlTextArea?.section;
//     // return position;
// }

//  insertAtCaret(areaId: any, text: any) {
//   var txtarea = document.getElementById(areaId);
//   var strPos = 0;
//   var br = ((txtarea.selectionStart || txtarea.selectionStart == '0') ?
//             "ff" : (document.selection ? "ie" : false));
//   if (br == "ie") {
//     txtarea.focus();
//     var range = document.selection.createRange();
//     range.moveStart('character', -txtarea.value.length);
//     strPos = range.text.length;
//   } else if (br == "ff") strPos = txtarea.selectionStart;

//   var front = (txtarea.value).substring(0, strPos);
//   var back = (txtarea.value).substring(strPos, txtarea.value.length);
//   txtarea.value = front + text + back;
//   strPos = strPos + text.length;
//   if (br == "ie") {
//     txtarea.focus();
//     var range = document.selection.createRange();
//     range.moveStart('character', -txtarea.value.length);
//     range.moveStart('character', strPos);
//     range.moveEnd('character', 0);
//     range.select();
//   } else if (br == "ff") {
//     txtarea.selectionStart = strPos;
//     txtarea.selectionEnd = strPos;
//     txtarea.focus();
//   }
// }

// insertAtCaret1(element: any, text: any) {
//   if (document.selection) {
//     element.focus();
//     var sel = document.selection.createRange();
//     sel.text = text;
//     element.focus();
//   } else if (element.selectionStart || element.selectionStart === 0) {
//     var startPos = element.selectionStart;
//     var endPos = element.selectionEnd;
//     var scrollTop = element.scrollTop;
//     element.value = element.value.substring(0, startPos) +
//       text + element.value.substring(endPos, element.value.length);
//     element.focus();
//     element.selectionStart = startPos + text.length;
//     element.selectionEnd = startPos + text.length;
//     element.scrollTop = scrollTop;
//   } else {
//     element.value += text;
//     element.focus();
//   }
// }

}
