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
exports.FirebaseAuthGuard = void 0;
const common_1 = require("@nestjs/common");
const admin = require("firebase-admin");
const core_1 = require("@nestjs/core");
let FirebaseAuthGuard = class FirebaseAuthGuard {
    reflector;
    constructor(reflector) {
        this.reflector = reflector;
    }
    async canActivate(context) {
        const request = context.switchToHttp().getRequest();
        if (!request.headers.authorization) {
            throw new common_1.UnauthorizedException('No authorization token provided');
        }
        const token = request.headers.authorization.split(' ')[1];
        try {
            const decodedToken = await admin.auth().verifyIdToken(token);
            if (!Array.isArray(decodedToken.roles)) {
                decodedToken.roles = [];
            }
            const requiredRoles = this.reflector.get('roles', context.getHandler());
            if (requiredRoles) {
                return this.hasRequiredRole(decodedToken.roles, requiredRoles);
            }
            request.user = {
                uid: decodedToken.uid,
                email: decodedToken.email,
                picture: decodedToken.picture,
                emailVerified: decodedToken.email_verified,
            };
            return true;
        }
        catch (error) {
            throw new common_1.UnauthorizedException('Invalid token');
        }
    }
    hasRequiredRole(userRoles, requiredRoles) {
        return requiredRoles.some((role) => userRoles?.includes(role));
    }
};
exports.FirebaseAuthGuard = FirebaseAuthGuard;
exports.FirebaseAuthGuard = FirebaseAuthGuard = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [core_1.Reflector])
], FirebaseAuthGuard);
//# sourceMappingURL=firebase-auth.guard.js.map