import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css'],
})
export class MainComponent implements OnInit {
  text: FormControl = new FormControl('', [Validators.required]);

  subText: FormControl = new FormControl('', [Validators.required]);

  inputText: string;

  inputSubText: string;

  found: boolean;

  indexArray: number[] = [];

  onSubmit() {
    if (!this.inputText.length || !this.inputSubText.length) {
      return;
    }

    this.indexArray = [];
    const mainText = this.inputText.toLowerCase();
    const searchText = this.inputSubText.toLowerCase();

    const searchTerms = searchText.split(',');
    for (const term of searchTerms) {
      let position = mainText.indexOf(`${term.trim()}`);
      if (position !== -1) {
        this.found = true;
      }

      while (position !== -1) {
        this.indexArray.push(position);
        position = mainText.indexOf(`${term.trim()}`, position + 1);
      }
    }

    return this.indexArray;
  }

  constructor() {}

  ngOnInit(): void {}
}
