import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  photos = [
    { 
      srcImage: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png', 
      altImage: 'Angular'
    },
    { 
      srcImage: 'https://upload.wikimedia.org/wikipedia/commons/5/50/Angular-logo.png', 
      altImage: 'Angular'
    },
    { 
      srcImage: 'https://cdn.searchenginejournal.com/wp-content/uploads/2019/04/the-seo-guide-to-angular-1520x800.png', 
      altImage: 'Angular'
    }         
  ];  
}


