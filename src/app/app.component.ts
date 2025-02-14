import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { FooterComponent } from "./components/footer/footer.component";
import { VideoComponentComponent } from "./components/video-component/video-component.component";
import { MainComponentComponent } from "./components/main-component/main-component.component";

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, FooterComponent, VideoComponentComponent, MainComponentComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angularPixar';
}
