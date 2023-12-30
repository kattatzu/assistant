"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BusinessRole = exports.ManagementRole = exports.Roles = void 0;
const common_1 = require("@nestjs/common");
const roles_enum_1 = require("./roles.enum");
const Roles = (...roles) => (0, common_1.SetMetadata)('roles', roles);
exports.Roles = Roles;
const ManagementRole = () => (0, common_1.SetMetadata)('roles', [roles_enum_1.RolesEnum.Management]);
exports.ManagementRole = ManagementRole;
const BusinessRole = () => (0, common_1.SetMetadata)('roles', [roles_enum_1.RolesEnum.Business]);
exports.BusinessRole = BusinessRole;
//# sourceMappingURL=role.decorator.js.map