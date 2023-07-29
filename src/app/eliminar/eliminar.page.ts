import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { BookDto } from '../models/books.model';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-eliminar',
  templateUrl: 'eliminar.page.html',
  styleUrls: ['eliminar.page.scss']
})
export class eliminarPage {

  private formBuild = inject(FormBuilder);
  private service = inject(BooksService);
  private modalCtrl = inject(ModalController);

  formSearch!: FormGroup;
  books: BookDto[] = [];

  constructor() {}

  ngOnInit(): void {
    this.setForm();
    this.setSubscription();
  }

  setSubscription() {
    this.service.subject$.subscribe( books => {
      this.books = books;
    })
  }

  setForm() {
    this.formSearch = this.formBuild.group({
      title: ['', Validators.required]
    })
  }

  deleteBook() {
    const title: string = this.formSearch.controls['title'].value;
    const book = this.books.find(e => e.Titulo === title);

    if (!this.formSearch.valid) {
      this.showModal('El campo titulo debe estar lleno para buscar el libro que desea eliminar!');
      return;
    }

    if (!book) {
      this.showModal('El libro que desea eliminar no se encuentra en esta libreria!');
      return;
    }

    this.service.deleteOneBook(book.ID).subscribe(book => console.log(book));
    this.formSearch.reset();
  }

  async showModal(text: string) {
    const modal = await this.modalCtrl.create({
      component: AlertModalComponent,
      cssClass: 'modalNotifications',
      componentProps: { text: text }
    })
    modal.present();
  }
}
