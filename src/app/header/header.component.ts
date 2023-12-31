import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit{
  
  @Output() sideNavToggle = new EventEmitter<boolean>()
  sideNavStatus = true;
  
  ngOnInit(): void {
    
  }

  menuBtnClick(){
    this.sideNavStatus = !this.sideNavStatus;
    this.sideNavToggle.emit(this.sideNavStatus);
  }

}
