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
exports.PhotographyService = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../constant");
const schema_1 = require("../db/schema");
const drizzle_orm_1 = require("drizzle-orm");
const rxjs_1 = require("rxjs");
const common_2 = require("@nestjs/common");
let PhotographyService = class PhotographyService {
    constructor(db) {
        this.db = db;
        this.eventSubject = new rxjs_1.Subject();
    }
    observeEvents() {
        return this.eventSubject.asObservable();
    }
    async create(createPhotographyDto, file) {
        try {
            if (!file) {
                throw new common_2.HttpException('File is required.', common_2.HttpStatus.BAD_REQUEST);
            }
            const { admno } = createPhotographyDto;
            if (!admno) {
                throw new common_2.HttpException('Admission number (admno) is required.', common_2.HttpStatus.BAD_REQUEST);
            }
            const newPhotography = await this.db.insert(schema_1.tbl_photo).values({
                admno: createPhotographyDto.admno,
                name: file.fieldname,
                url: file.path,
                size: file.size,
                type: file.mimetype,
            });
            this.eventSubject.next({
                action: 'created',
                data: newPhotography,
            });
            return {
                message: 'Photography created successfully.',
                data: newPhotography,
            };
        }
        catch (error) {
            throw new common_2.HttpException(error.message || 'Failed to create photography.', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findAll(start = 0, end = 30) {
        try {
            const photos = await this.db
                .select()
                .from(schema_1.tbl_photo)
                .limit(end - start)
                .offset(start);
            return photos;
        }
        catch (error) {
            throw new common_2.HttpException('Failed to fetch photography records.', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async findOne(id) {
        try {
            if (!id) {
                throw new common_2.HttpException('ID parameter is required.', common_2.HttpStatus.BAD_REQUEST);
            }
            const photo = await this.db
                .select()
                .from(schema_1.tbl_photo)
                .where((0, drizzle_orm_1.eq)(schema_1.tbl_photo.admno, id));
            if (!photo || photo.length === 0) {
                throw new common_2.HttpException('Photography not found.', common_2.HttpStatus.NOT_FOUND);
            }
            return { data: photo };
        }
        catch (error) {
            throw new common_2.HttpException(error.message || 'Failed to fetch photography.', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async update(id, updatePhotographyDto, file) {
        try {
            if (!id) {
                throw new common_2.HttpException('ID parameter is required.', common_2.HttpStatus.BAD_REQUEST);
            }
            if (!file) {
                throw new common_2.HttpException('File is required.', common_2.HttpStatus.BAD_REQUEST);
            }
            const updatedPhotography = await this.db
                .update(schema_1.tbl_photo)
                .set({
                name: file.fieldname,
                url: file.path,
                size: file.size,
                type: file.mimetype,
            })
                .where((0, drizzle_orm_1.eq)(schema_1.tbl_photo.admno, id));
            if (!updatedPhotography) {
                throw new common_2.HttpException('Photography not found or update failed.', common_2.HttpStatus.NOT_FOUND);
            }
            this.eventSubject.next({
                action: 'updated',
                data: updatedPhotography,
            });
            return {
                message: 'Photography updated successfully.',
                data: updatedPhotography,
            };
        }
        catch (error) {
            throw new common_2.HttpException(error.message || 'Failed to update photography.', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
    async remove(id) {
        try {
            if (!id) {
                throw new common_2.HttpException('ID parameter is required.', common_2.HttpStatus.BAD_REQUEST);
            }
            const deletedPhotography = await this.db
                .delete(schema_1.tbl_photo)
                .where((0, drizzle_orm_1.eq)(schema_1.tbl_photo.admno, id));
            if (!deletedPhotography) {
                throw new common_2.HttpException('Photography not found or deletion failed.', common_2.HttpStatus.NOT_FOUND);
            }
            this.eventSubject.next({
                action: 'deleted',
                data: { admno: id },
            });
            return {
                message: 'Photography deleted successfully.',
            };
        }
        catch (error) {
            throw new common_2.HttpException(error.message || 'Failed to delete photography.', common_2.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.PhotographyService = PhotographyService;
exports.PhotographyService = PhotographyService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.DRIZZLE_CLIENT)),
    __metadata("design:paramtypes", [Object])
], PhotographyService);
//# sourceMappingURL=photography.service.js.map