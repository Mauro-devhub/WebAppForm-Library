import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss']
})
export class registroPage implements OnInit{

  inputActive: boolean = false;
  formBooks!: FormGroup;
  formBuild: FormBuilder = new FormBuilder();

  constructor() {}

  ngOnInit(): void {
    this.setForm();
  }

  setForm() {
    this.formBooks = this.formBuild.group({
      isbn: ['', Validators.required],
      title: ['', Validators.required],
      autor: ['', Validators.required],
      category: ['', Validators.required],
      editorial: ['', Validators.required],
      pages: ['', Validators.required]
    })

    const obj = this.formBooks.controls;

    Object.keys(obj);
  }

  showObjectRegister() {
    console.log(this.formBooks.value);
  }
}