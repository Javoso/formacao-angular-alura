import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public title:string ="AluraPic";
  public srcImage:string = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSYa8x7s071YT7HUCgpnOxOmksZClmg9p3ypA&usqp=CAU';
  public altImage:string = 'Pinguin';
}
