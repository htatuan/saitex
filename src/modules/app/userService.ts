import{IUserService} from "./iuserService"
import { Injectable } from "@angular/core";
@Injectable()
export class UserService implements IUserService
{
    public getUsers():Array<any>
    {
        return [
            {
                userName:"TuanHoang",
                lastName:"Hoang",
                firstName:"Tuan"
            },
            {
                userName:"TuanHoang",
                lastName:"Hoang1",
                firstName:"Tuan1"
            },
            {
                userName:"TuanHoang",
                lastName:"Hoang2",
                firstName:"Tuan2"
            }
        ];
    }
}