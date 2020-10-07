import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-rating-list',
  templateUrl: './rating-list.component.html',
  styleUrls: ['./rating-list.component.scss']
})
export class RatingListComponent implements OnInit {
  stars = [1,2,3,4,5]
  selectedStar = 0

  constructor(private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  changeRate(value: number) {
    this.selectedStar = value
    this.showMessage('Gracias por tu calificación: '+ value + ' estrella(s)')
  }

  showMessage(message: string) {
    this._snackBar.open(message, null, {
      duration: 2000,
      horizontalPosition: "end",
      verticalPosition: "top"
    });
  }

}
