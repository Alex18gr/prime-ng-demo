import { Component, OnInit, ElementRef, ViewChild, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @ViewChild('sidebar', {static: false}) sidebarElement: ElementRef;
  @ViewChild('overlay', {static: false}) overlayElement: ElementRef;
  
  sidebarCollpsed: boolean = true;

  constructor(private renderer: Renderer2) { }

  ngOnInit(): void {
  }

  collapseSidebar() {
    console.log(this.sidebarElement.nativeElement.classList[0])
    if (this.sidebarElement.nativeElement.classList.contains('active')) {
      this.renderer.removeClass(this.sidebarElement.nativeElement, 'active');
      this.sidebarCollpsed = true;
    } else {
      this.renderer.addClass(this.sidebarElement.nativeElement, 'active');
      this.sidebarCollpsed = false;
    }
  }
}
