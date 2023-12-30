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
Object.defineProperty(exports, "__esModule", { value: true });
exports.Business = void 0;
const swagger_1 = require("@nestjs/swagger");
class Business {
    id;
    name;
    email;
    static fromRegisterRequest(request) {
        const model = new Business();
        model.name = request.name;
        model.email = request.email;
        return model;
    }
    static fromUpdateRequest(request) {
        const model = new Business();
        model.name = request.name;
        model.email = request.email;
        return model;
    }
}
exports.Business = Business;
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Id único de la empresa',
        example: '6abbdd24-fdc3-48ce-ad34-b99c735ced12',
    }),
    __metadata("design:type", String)
], Business.prototype, "id", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({ description: 'Nombre de la empresa', example: 'Acme' }),
    __metadata("design:type", String)
], Business.prototype, "name", void 0);
__decorate([
    (0, swagger_1.ApiProperty)({
        description: 'Email de contacto de la empresa',
        example: 'admin@acme.com',
    }),
    __metadata("design:type", String)
], Business.prototype, "email", void 0);
//# sourceMappingURL=business.js.map