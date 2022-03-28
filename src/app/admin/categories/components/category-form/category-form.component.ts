import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { CategoriesService } from './../../../../core/services/categories.service'
import { Router, ActivatedRoute, Params } from '@angular/router';
import { AngularFireStorage } from '@angular/fire/storage';
import { finalize } from 'rxjs/operators';
import { MyValidators } from 'src/app/utils/validators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss']
})
export class CategoryFormComponent implements OnInit {

  form: FormGroup
  image$: Observable<string>
  categoryId: string

  constructor(
    private formBuilder: FormBuilder,
    private categoriesService: CategoriesService,
    private router: Router,
    private storage: AngularFireStorage,
    private activatedRoute: ActivatedRoute,
  ) {
    this.buildForm();
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe((params: Params) => {
      this.categoryId = params.id
      if (this.categoryId) {
        this.getCategory()
      }
    })
  }

  private buildForm() {
    this.form = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(4)], MyValidators.validateCategory(this.categoriesService)],
      image: ['', Validators.required]
    })
  }

  get nameField() {
    return this.form.get('name')
  }

  get imageField() {
    return this.form.get('image')
  }

  save() {
    if (this.form.valid) {
      this.createCategory()
    } else {
      this.form.markAllAsTouched()
    }
  }

  private createCategory() {
    const data = this.form.value
    this.categoriesService.createCategory(data)
    .subscribe(rta => {
      console.log(rta);
      this.router.navigate(['./admin/categories'])
    })
  }

  private getCategory() {
    const data = this.form.value
    this.categoriesService.getCategory(this.categoryId)
    .subscribe(data => {
      this.form.patchValue(data)
    })
  }

  uploadFile(event) {
    const image = event.target.files[0]
    const name = 'category.png'
    const ref = this.storage.ref(name)
    const task = this.storage.upload(name, image)

    task.snapshotChanges()
    .pipe(
      finalize(() => {
        const urlImage$ = ref.getDownloadURL()
        urlImage$.subscribe(url => {
          console.log(url);
          this.imageField.setValue(url)
        })
      })
    )
    .subscribe()
  }
}

