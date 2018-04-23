import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form-template-driver',
  templateUrl: './form-template-driver.component.html',
  styleUrls: ['./form-template-driver.component.css']
})
export class FormTemplateDriverComponent implements OnInit {

  titulo: string = 'cadastro de curso';
  data: Date = new Date();
  curso: any = {
    nome: null,
    id: null
  };

  constructor() { }

  ngOnInit() {
  }

  onSubmit(Form) {
    console.log(Form.value);
  }
}
