import { ChangeDetectorRef, Component, ElementRef, OnInit, ViewChild, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DialogComponent } from '../dialog/dialog.component';
import { MatDialog } from '@angular/material/dialog'; // Import MatDialog
import { Item } from 'src/app/models/item.model';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  
})
export class HeaderComponent implements OnInit  {
  @Output() newItemEvent = new EventEmitter<Item>();
    constructor() {}
    
    itemFormGroups!: FormGroup;
    ngOnInit(): void {
      this.itemFormGroups = new FormGroup({
        name: new FormControl<string>('', [Validators.required]),
        description: new FormControl<string>('', [Validators.required]),
        price: new FormControl<number>(0, [Validators.required]),
        imgSrc: new FormControl<string>('', [Validators.required]),
      });
    }

    @ViewChild('appDialog', { static: true })
    dialog!: ElementRef<HTMLDialogElement>;
    cdr = inject(ChangeDetectorRef);
    item!:Item
    itemList: Item[]=[]
  openDialog() {
    this.dialog.nativeElement.showModal();
    this.cdr.detectChanges();
  }
  closeDialog() {
    this.dialog.nativeElement.close();
    this.cdr.detectChanges();
  }

  addProduct(value: Item) {
    this.dialog.nativeElement.close();
    this.newItemEvent.emit(value);
    console.log(value);
  }

  logItems(){
    console.log();
  }




}
