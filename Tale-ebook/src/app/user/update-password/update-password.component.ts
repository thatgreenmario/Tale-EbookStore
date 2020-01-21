import { Component, OnInit } from '@angular/core';
import { FlashMessagesService } from 'angular2-flash-messages';
import { format } from 'url';
import { AuthService } from 'src/app/home/auth.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-update-password',
  templateUrl: './update-password.component.html',
  styleUrls: ['./update-password.component.css']
})
export class UpdatePasswordComponent implements OnInit {

  constructor(private flashMessage: FlashMessagesService, private authService: AuthService ) { }

  ngOnInit() {
  }
  
  
  onChangePass(form: NgForm) {

    if (form.invalid) {
      return;
    }
    
    // 1st parameter is a flash message text
    // 2nd parameter is optional. You can pass object with options.

    var status: string = this.authService.changePassword(form.value.OldPassword,form.value.newPassword);

    this.flashMessage.show(status , { cssClass: 'alert', timeout: 2000 });
    form.resetForm();
}
}

