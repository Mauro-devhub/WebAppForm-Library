import { Component, OnInit, inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { BookDto } from '../models/books.model';
import { BooksService } from '../services/books.service';
import { ModalController } from '@ionic/angular';
import { AlertModalComponent } from '../components/alert-modal/alert-modal.component';

@Component({
  selector: 'app-registro',
  templateUrl: 'registro.page.html',
  styleUrls: ['registro.page.scss']
})
export class registroPage implements OnInit {

  private service = inject(BooksService);
  private formBuild = inject(FormBuilder);
  private modalCtrl = inject(ModalController);
  formBooks!: FormGroup;

  inputActive: boolean = false;
  books: BookDto[] = [];

  constructor() {};

  ngOnInit(): void {
    this.setForm();
    this.setSubscription();
  };

  setSubscription() {
    this.service.subject$.subscribe((books: BookDto[]) => {
      this.books = books;
    });
  };

  setForm() {
    this.formBooks = this.formBuild.group({
      isbn: ['', Validators.required],
      titulo: ['', Validators.required],
      autor: ['', Validators.required],
      categoria: ['', Validators.required],
      editorial: ['', Validators.required],
      paginas: ['', Validators.required]
    });
  }; 

  async showObjectRegister() {
    const title = this.formBooks.controls['titulo'].value;
    const element = this.books.find(book => book.Titulo === title);

    if (!this.formBooks.valid) {
      this.showModal('todos los campos deben estar llenos para realizar un registro!');
      return;
    }

    if (element) {
     this.showModal('ESTE TITULO YA SE ENCUENTRA EN LA LIBRERIA, INGRESE UN TITULO DIFERENTE PARA PODER REGISTRAR SU LIBRO!');
    } else {
      this.service.createOneBook(this.formBooks.value).subscribe();
    }
  };

  async showModal(text: string) {
    const modal = await this.modalCtrl.create({
      component: AlertModalComponent,
      cssClass: 'modalNotifications',
      componentProps: { text: text }
    })
    modal.present();
  }
}