
import {NgModule} from "@angular/core"
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {AppModule} from "./modules/app/appModule";
platformBrowserDynamic().bootstrapModule(AppModule);
console.log("Main file was bootstraped");