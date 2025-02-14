import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  @Output() scrollTo = new EventEmitter<string>();

  scrollToSection(sectionId: string) {
    this.scrollTo.emit(sectionId);
  }

}
