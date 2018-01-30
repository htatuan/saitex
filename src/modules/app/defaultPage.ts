
import {Component} from "@angular/core";
import{IUserService} from "./iuserService"
import { UserService } from "./userService";
@Component({
    selector:"default-page",
    
    templateUrl:"src/modules/app/defaultPage.html"
    
})
export class DefaultPage{

    public users:Array<any>;
    public selectedUser:Array<any>;
    constructor(userService :UserService) {
        //let userService : IUserService=new UserService();
        this.users=userService.getUsers();
    }
    public onEditClicked(user: any)
    {
        this.selectedUser=user;
    }
    // public onFirstNameChanged(value:any)
    // {
    //     console.log(value);
    // }
}