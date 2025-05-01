"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdmisionController = void 0;
const common_1 = require("@nestjs/common");
const admision_service_1 = require("./admision.service");
const create_admision_dto_1 = require("./dto/create-admision.dto");
const update_admision_dto_1 = require("./dto/update-admision.dto");
let AdmisionController = class AdmisionController {
    constructor(admisionService) {
        this.admisionService = admisionService;
    }
    create(createAdmisionDto) {
        return this.admisionService.create(createAdmisionDto);
    }
    async findAll(cl = 'X', session = '2024-2025', start = 0, end = 30, roll = -1) {
        return {
            status: 200,
            message: 'success',
            data: await this.admisionService.findAll({
                cl,
                start,
                end,
                roll,
                session,
            }),
        };
    }
    async findOne(id) {
        return {
            status: 200,
            message: 'success',
            data: await this.admisionService.findOne(id),
        };
    }
    update(id, updateAdmisionDto) {
        return this.admisionService.update(+id, updateAdmisionDto);
    }
    remove(id) {
        return this.admisionService.remove(+id);
    }
};
exports.AdmisionController = AdmisionController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_admision_dto_1.CreateAdmisionDto]),
    __metadata("design:returntype", void 0)
], AdmisionController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('class')),
    __param(1, (0, common_1.Query)('session')),
    __param(2, (0, common_1.Query)('start')),
    __param(3, (0, common_1.Query)('end')),
    __param(4, (0, common_1.Query)('roll')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String, Number, Number, Number]),
    __metadata("design:returntype", Promise)
], AdmisionController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], AdmisionController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_admision_dto_1.UpdateAdmisionDto]),
    __metadata("design:returntype", void 0)
], AdmisionController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", void 0)
], AdmisionController.prototype, "remove", null);
exports.AdmisionController = AdmisionController = __decorate([
    (0, common_1.Controller)('admision'),
    __metadata("design:paramtypes", [admision_service_1.AdmisionService])
], AdmisionController);
//# sourceMappingURL=admision.controller.js.map