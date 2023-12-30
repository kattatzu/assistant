import { FirebaseUser } from '../../core/auth/firebase-user';
export declare class User {
    id: string;
    name: string;
    email: string;
    picture?: string;
    static fromFirebaseAuth(user: FirebaseUser): User;
}
