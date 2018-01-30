import {Component,Input} from "@angular/core"
import { Output } from "@angular/core";
import { EventEmitter } from "@angular/core";
@Component({
    selector:"user-quick-edit",
    templateUrl:"src/modules/app/_share/components/userQuickEdit.html"
})
export class UserQuickEdit{
 
 @Input() firstName:string;
 @Output() firstNameChange :EventEmitter<any> = new EventEmitter();
 
 public TextChange(el: any){
     this.firstNameChange.emit(this.firstName);
 }

}