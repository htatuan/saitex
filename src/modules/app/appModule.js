System.register(["@angular/core", "@angular/forms", "@angular/platform-browser", "./defaultPage", "./userService", "./_share/components/userQuickEdit"], function (exports_1, context_1) {
    "use strict";
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __moduleName = context_1 && context_1.id;
    var core_1, forms_1, platform_browser_1, defaultPage_1, userService_1, userQuickEdit_1, AppModule;
    return {
        setters: [
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (forms_1_1) {
                forms_1 = forms_1_1;
            },
            function (platform_browser_1_1) {
                platform_browser_1 = platform_browser_1_1;
            },
            function (defaultPage_1_1) {
                defaultPage_1 = defaultPage_1_1;
            },
            function (userService_1_1) {
                userService_1 = userService_1_1;
            },
            function (userQuickEdit_1_1) {
                userQuickEdit_1 = userQuickEdit_1_1;
            }
        ],
        execute: function () {
            AppModule = /** @class */ (function () {
                function AppModule() {
                }
                AppModule = __decorate([
                    core_1.NgModule({
                        imports: [platform_browser_1.BrowserModule, forms_1.FormsModule],
                        declarations: [defaultPage_1.DefaultPage, userQuickEdit_1.UserQuickEdit],
                        providers: [userService_1.UserService],
                        bootstrap: [defaultPage_1.DefaultPage]
                    })
                ], AppModule);
                return AppModule;
            }());
            exports_1("AppModule", AppModule);
        }
    };
});
//# sourceMappingURL=appModule.js.map