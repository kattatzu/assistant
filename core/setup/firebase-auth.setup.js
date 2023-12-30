"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.setupFirebaseAuth = void 0;
const firebase_admin_1 = require("firebase-admin");
const serviceAccount = require('../../../data/firebase-adminsdk.json');
const setupFirebaseAuth = () => {
    firebase_admin_1.default.initializeApp({
        credential: firebase_admin_1.default.credential.cert(serviceAccount),
    });
};
exports.setupFirebaseAuth = setupFirebaseAuth;
//# sourceMappingURL=firebase-auth.setup.js.map