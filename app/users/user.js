"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.User = void 0;
class User {
    id;
    name;
    email;
    picture;
    static fromFirebaseAuth(user) {
        const model = new User();
        model.id = user.uid;
        model.email = user.email;
        model.name = '';
        model.picture = user.picture;
        return model;
    }
}
exports.User = User;
//# sourceMappingURL=user.js.map