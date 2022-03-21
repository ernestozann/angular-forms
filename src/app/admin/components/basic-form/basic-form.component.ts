import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form= new FormGroup({
    name: new FormControl('', [Validators.required, Validators.maxLength(10)]),
    email: new FormControl(''),
    phone: new FormControl(''),
    color: new FormControl('#000000'),
    date: new FormControl(''),
    age: new FormControl(''),
    category: new FormControl(''),
    tag: new FormControl(''),
    agree: new FormControl('false'),
    gender: new FormControl(''),
    zone: new FormControl(''),
  });

  // nameField = new FormControl('');
  // emailField = new FormControl('');
  // phoneField = new FormControl('');
  // colorField = new FormControl('#000000');
  // dateField = new FormControl('');
  // ageField = new FormControl('');

  // categoryField = new FormControl('');
  // tagField = new FormControl('');

  // agreeField = new FormControl(false);
  // genderField = new FormControl('');
  // zoneField = new FormControl('');

  constructor() { }

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    })
  }

  save(event) {
    console.log(this.form.value);

  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  get nameField() {
    return this.form.get('name')
  }

  get emailField() {
    return this.form.get('email')
  }

  get phoneField() {
    return this.form.get('phone')
  }

  get colorField() {
    return this.form.get('color')
  }

  get dateField() {
    return this.form.get('date')
  }

  get ageField() {
    return this.form.get('age')
  }

  get categoryField() {
    return this.form.get('category')
  }

  get tagField() {
    return this.form.get('tag')
  }

  get agreeField() {
    return this.form.get('agree')
  }

  get genderField() {
    return this.form.get('gender')
  }

  get zoneField() {
    return this.form.get('zone')
  }

  get isNameFieldValid() {
    return this.nameField.touched && this.nameField.valid;
  }

  get isNameFieldInvalid() {
    return this.nameField.touched && this.nameField.invalid;
  }

}
