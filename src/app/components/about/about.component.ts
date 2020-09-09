import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  constructor(private elementRef: ElementRef) { }

  ngOnInit(): void {
    document.body.classList.add('imagenDeFondo');
  }


}
