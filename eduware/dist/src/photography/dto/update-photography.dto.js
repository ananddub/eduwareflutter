"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UpdatePhotographyDto = void 0;
const mapped_types_1 = require("@nestjs/mapped-types");
const create_photography_dto_1 = require("./create-photography.dto");
class UpdatePhotographyDto extends (0, mapped_types_1.PartialType)(create_photography_dto_1.CreatePhotographyDto) {
}
exports.UpdatePhotographyDto = UpdatePhotographyDto;
//# sourceMappingURL=update-photography.dto.js.map