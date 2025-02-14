import { Component } from '@angular/core';
import { VideoComponentComponent } from "../video-component/video-component.component";
import { WinOrLoseComponentComponent } from "../win-or-lose-component/win-or-lose-component.component";
import { SecondComponentComponent } from "../second-component/second-component.component";
import { ComponentElioComponent } from "../component-elio/component-elio.component";
import { ComponentDreamProductionsComponent } from "../component-dream-productions/component-dream-productions.component";
import { ComponentHoppersComponent } from "../component-hoppers/component-hoppers.component";
import { ComponentToyStoryComponent } from "../component-toy-story/component-toy-story.component";

@Component({
  selector: 'app-main-component',
  imports: [WinOrLoseComponentComponent, SecondComponentComponent, ComponentElioComponent, ComponentDreamProductionsComponent, ComponentHoppersComponent, ComponentToyStoryComponent],
  templateUrl: './main-component.component.html',
  styleUrl: './main-component.component.css'
})
export class MainComponentComponent {

}
