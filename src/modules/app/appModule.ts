import { NgModule } from "@angular/core";
import{FormsModule} from "@angular/forms";
import {BrowserModule} from "@angular/platform-browser";
import {DefaultPage} from "./defaultPage";
import{UserService} from "./userService";
import{UserQuickEdit}from "./_share/components/userQuickEdit"
@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[DefaultPage,UserQuickEdit],
    providers:[UserService],
    bootstrap:[DefaultPage]
})
export class AppModule{

}