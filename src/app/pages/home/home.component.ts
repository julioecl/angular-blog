import { Component } from '@angular/core';
import { BigCardComponent } from '../../components/big-card/big-card.component'
import { SmallCardComponent } from '../../components/small-card/small-card.component';
import { MenuBarComponent } from '../../components/menu-bar/menu-bar.component';
import { MenuTitleComponent } from '../../components/menu-title/menu-title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [BigCardComponent, SmallCardComponent, MenuBarComponent, MenuTitleComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
