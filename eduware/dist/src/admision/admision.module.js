"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisionModule = void 0;
const common_1 = require("@nestjs/common");
const admision_service_1 = require("./admision.service");
const admision_controller_1 = require("./admision.controller");
const drizzle_module_1 = require("../drizzles/drizzle.module");
let AdmisionModule = class AdmisionModule {
};
exports.AdmisionModule = AdmisionModule;
exports.AdmisionModule = AdmisionModule = __decorate([
    (0, common_1.Module)({
        controllers: [admision_controller_1.AdmisionController],
        providers: [admision_service_1.AdmisionService, drizzle_module_1.DRIZZLE_CONNECTION],
    })
], AdmisionModule);
//# sourceMappingURL=admision.module.js.map