import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { AuthService } from 'src/app/home/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-user-details',
  templateUrl: './update-user-details.component.html',
  styleUrls: ['./update-user-details.component.css']
})
export class UpdateUserDetailsComponent implements OnInit {

  
constructor(private flashMessage: FlashMessagesService, private authService: AuthService ) { }

  ngOnInit() {
  }
  
  
  onChangeDetails(form: NgForm) {
    if (form.invalid) {
      return;
    }
    
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.

    var status: string = this.authService.changeDetails(form.value.fname,form.value.lname);

    
    this.flashMessage.show(status , { cssClass: 'alert', timeout: 2000 });
    form.resetForm();
}
}

