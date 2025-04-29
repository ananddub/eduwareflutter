"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdateAdmisionDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_admision_dto_1 = require("./create-admision.dto");
class UpdateAdmisionDto extends (0, mapped_types_1.PartialType)(create_admision_dto_1.CreateAdmisionDto) {
}
exports.UpdateAdmisionDto = UpdateAdmisionDto;
//# sourceMappingURL=update-admision.dto.js.map