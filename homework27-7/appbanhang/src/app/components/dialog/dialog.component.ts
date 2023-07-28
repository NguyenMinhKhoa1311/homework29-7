import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialog, MatDialogRef } from '@angular/material/dialog';
import { Item } from 'src/app/models/item.model';


@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  itemFormGroups!: FormGroup;
  ngOnInit(): void {
    this.itemFormGroups = new FormGroup({
      name: new FormControl<string>('', [Validators.required]),
      description: new FormControl<string>('', [Validators.required]),
      price: new FormControl<number>(0, [Validators.required]),
      imgSrc: new FormControl<string>('', [Validators.required]),
    });
  }


  addItem() {
    let item: Item = {
      ...this.itemFormGroups.value,
    };
    item.id = Math.floor(Math.random() * 1000);
    console.log(item);
    this.dialogRef.close( item);

  }
  constructor(
    public dialogRef: MatDialogRef<DialogComponent>,

  ) {}
  closeDialog(){
    this.dialogRef.close();
  }


}
