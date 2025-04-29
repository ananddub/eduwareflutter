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
exports.PhotographyController = void 0;
const common_1 = require("@nestjs/common");
const photography_service_1 = require("./photography.service");
const create_photography_dto_1 = require("./dto/create-photography.dto");
const update_photography_dto_1 = require("./dto/update-photography.dto");
const platform_express_1 = require("@nestjs/platform-express");
const multer_1 = require("multer");
const path_1 = require("path");
const http_1 = require("http");
let PhotographyController = class PhotographyController {
    constructor(photographyService) {
        this.photographyService = photographyService;
    }
    async create(files, createPhotographyDto) {
        return {
            status: http_1.STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.create(createPhotographyDto, files[0]),
        };
    }
    async findAll(start, end) {
        if (end == 0)
            end = 30;
        return {
            status: http_1.STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.findAll(start, end),
        };
    }
    async findOne(id) {
        return {
            status: http_1.STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.findOne(id),
        };
    }
    async update(id, updatePhotographyDto, files) {
        return {
            status: http_1.STATUS_CODES.OK,
            message: 'success',
            data: this.photographyService.update(id, updatePhotographyDto, files[0]),
        };
    }
    async remove(id) {
        return {
            status: http_1.STATUS_CODES.OK,
            message: 'success',
            data: await this.photographyService.remove(id),
        };
    }
    async getEvents() {
        console.log('getEvents');
        return await this.photographyService.observeEvents();
    }
};
exports.PhotographyController = PhotographyController;
__decorate([
    (0, common_1.Post)(),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('file', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
            },
        }),
        limits: {
            fileSize: 100 * 1024 * 1024,
        },
        fileFilter: (req, file, cb) => {
            if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
                return cb(new Error('Only image files are allowed!'), false);
            }
            cb(null, true);
        },
    })),
    __param(0, (0, common_1.UploadedFiles)()),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Array, create_photography_dto_1.CreatePhotographyDto]),
    __metadata("design:returntype", Promise)
], PhotographyController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __param(0, (0, common_1.Query)('start')),
    __param(1, (0, common_1.Query)('end')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], PhotographyController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('find/:id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhotographyController.prototype, "findOne", null);
__decorate([
    (0, common_1.Patch)(':id'),
    (0, common_1.UseInterceptors)((0, platform_express_1.FilesInterceptor)('file', 10, {
        storage: (0, multer_1.diskStorage)({
            destination: './uploads',
            filename: (req, file, callback) => {
                const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
                const ext = (0, path_1.extname)(file.originalname);
                callback(null, `${file.fieldname}-${uniqueSuffix}${ext}`);
            },
        }),
        limits: {
            fileSize: 100 * 1024 * 1024,
        },
        fileFilter: (req, file, cb) => {
            if (!file.mimetype.match(/\/(jpg|jpeg|png)$/)) {
                return cb(new Error('Only image files are allowed!'), false);
            }
            cb(null, true);
        },
    })),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)()),
    __param(2, (0, common_1.UploadedFiles)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, update_photography_dto_1.UpdatePhotographyDto, Array]),
    __metadata("design:returntype", Promise)
], PhotographyController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], PhotographyController.prototype, "remove", null);
__decorate([
    (0, common_1.Sse)('stream'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PhotographyController.prototype, "getEvents", null);
exports.PhotographyController = PhotographyController = __decorate([
    (0, common_1.Controller)('photo'),
    __metadata("design:paramtypes", [photography_service_1.PhotographyService])
], PhotographyController);
//# sourceMappingURL=photography.controller.js.map