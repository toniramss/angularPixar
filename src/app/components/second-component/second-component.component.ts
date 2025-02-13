import { Component } from '@angular/core';
import { Component3RightComponent } from "../component3-right/component3-right.component";
import { Component3LeftComponent } from "../component3-left/component3-left.component";

@Component({
  selector: 'app-second-component',
  imports: [Component3RightComponent, Component3LeftComponent],
  templateUrl: './second-component.component.html',
  styleUrl: './second-component.component.css'
})
export class SecondComponentComponent {

}
