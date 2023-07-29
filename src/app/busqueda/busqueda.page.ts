import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BooksService } from '../services/books.service';
import { BookDto } from '../models/books.model';
import { ModalController } from '@ionic/angular';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';

@Component({
  selector: 'app-busqueda',
  templateUrl: 'busqueda.page.html',
  styleUrls: ['busqueda.page.scss']
})
export class busquedaPage implements OnInit {

  private formBuild = inject(FormBuilder);
  private service = inject(BooksService);
  private modalCtrl = inject(ModalController);

  formSearch!: FormGroup;
  books: BookDto[] = [];
  book!: BookDto;

  constructor() {}

  ngOnInit(): void {
    this.service.subject$.subscribe( books => {
      this.books = books;
    })
    this.setForm();
  }

  ionViewWillLeave() {
    this.book = {} as BookDto;
  }

  setForm() {
    this.formSearch = this.formBuild.group({
      title: ['', Validators.required]
    })
  }

  searchBook() {
    const title: string = this.formSearch.controls['title'].value;
    const book = this.books.find(book => book.Titulo === title);

    if (!this.formSearch.valid) {
      this.showModal('El campo titulo debe estar lleno para realizar una busqueda!');
      return;
    }

    if (!book) {
      this.showModal('El libro que buscas no se encuentra en esta libreria!')
    }

    this.service.findOneBook(title).subscribe(book => {
      this.book = book;
    });
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
