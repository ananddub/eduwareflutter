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
exports.AdmisionService = void 0;
const common_1 = require("@nestjs/common");
const constant_1 = require("../constant");
const schema_1 = require("../db/schema");
const drizzle_orm_1 = require("drizzle-orm");
let AdmisionService = class AdmisionService {
    constructor(db) {
        this.db = db;
    }
    create(createAdmisionDto) {
        return 'This action adds a new admision';
    }
    findAll({ cl = 'X', start = 0, end = 30, roll = -1, session = '2024-2025', }) {
        return this.db
            .select()
            .from(schema_1.tblAdmission)
            .where((0, drizzle_orm_1.and)((0, drizzle_orm_1.eq)(schema_1.tblAdmission.class, cl), (0, drizzle_orm_1.eq)(schema_1.tblAdmission.session, session), (0, drizzle_orm_1.gte)(schema_1.tblAdmission.roll, roll)))
            .limit(end - start)
            .offset(start);
    }
    findOne(id) {
        return this.db
            .select()
            .from(schema_1.tblAdmission)
            .where((0, drizzle_orm_1.eq)(schema_1.tblAdmission.admno, id));
    }
    update(id, updateAdmisionDto) {
        return `This action updates a #${id} admision`;
    }
    remove(id) {
        return `This action removes a #${id} admision`;
    }
};
exports.AdmisionService = AdmisionService;
exports.AdmisionService = AdmisionService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)(constant_1.DRIZZLE_CLIENT)),
    __metadata("design:paramtypes", [Object])
], AdmisionService);
//# sourceMappingURL=admision.service.js.map