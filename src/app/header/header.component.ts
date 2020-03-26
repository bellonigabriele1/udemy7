import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {

  @Output() activeSectionEvent = new EventEmitter<string>();
  activeSection: string;

  onRecipes() {
    console.log('onRecipes()');
    this.activeSection = 'recipes';
    this.activeSectionEvent.emit(this.activeSection);
  }

  onShoppingList() {
    console.log('onShoppingList()');
  }

}
