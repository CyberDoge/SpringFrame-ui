import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user-view',
  templateUrl: './user-view.component.html',
  styleUrls: ['./user-view.component.css']
})
export class UserViewComponent implements OnInit {
  public user: User;
  constructor(private userService: UserService,
    private route: ActivatedRoute) {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.user = new User(1, 'asd');
    /*this.userService.getUser(id).subscribe(function (value: User) {
      this.user = value;
    });*/
  }

  ngOnInit() {
  }

}
