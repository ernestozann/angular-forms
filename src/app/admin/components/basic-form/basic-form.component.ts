import { Component, OnInit } from '@angular/core';
import { FormControl, Validators,FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-basic-form',
  templateUrl: './basic-form.component.html',
  styleUrls: ['./basic-form.component.scss']
})
export class BasicFormComponent implements OnInit {

  form: FormGroup

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

  constructor(
    private formBuilder: FormBuilder
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.nameField.valueChanges
    .subscribe(value => {
      console.log(value);
    })
  }

  getNameValue() {
    console.log(this.nameField.value);
  }

  save(event) {
    if (this.form.valid) {
      console.log(this.form.value);
    } else {
      this.form.markAllAsTouched();
    }
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', Validators.required],
      phone: [''],
      color: ['#000000'],
      date: [''],
      age: ['', Validators.required],
      category: [''],
      tag: [''],
      agree: ['', Validators.required],
      gender: ['', Validators.required],
      zone: [''],
    });
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
