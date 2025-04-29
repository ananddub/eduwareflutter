"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PhotographyModule = void 0;
const common_1 = require("@nestjs/common");
const photography_service_1 = require("./photography.service");
const photography_controller_1 = require("./photography.controller");
const platform_express_1 = require("@nestjs/platform-express");
const drizzle_module_1 = require("../drizzles/drizzle.module");
platform_express_1.MulterModule.register({
    dest: './uploads',
    limits: { fileSize: 1024 * 1024 * 100 },
});
let PhotographyModule = class PhotographyModule {
};
exports.PhotographyModule = PhotographyModule;
exports.PhotographyModule = PhotographyModule = __decorate([
    (0, common_1.Module)({
        controllers: [photography_controller_1.PhotographyController],
        providers: [photography_service_1.PhotographyService, drizzle_module_1.DRIZZLE_CONNECTION],
    })
], PhotographyModule);
//# sourceMappingURL=photography.module.js.map