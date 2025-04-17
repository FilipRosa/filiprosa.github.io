import { User, UserRole } from '../types/parking';


export class AuthService {
    async loginWithSSO(credentials: { username: string; password: string }): Promise<User> {
        // Integration with VSB-TUO SSO 
        try {
            // Call SSO authentication endpoint
            return {
                id: 'user_id',
                email: credentials.username,
                role: UserRole.STUDENT,
                ssoEnabled: true
            };
        } catch (error) {
            throw new Error('SSO authentication failed');
        }
    }


    async loginWithOneTimeCode(email: string): Promise<string> {
        // Generate and send one-time code
        const code = Math.random().toString(36).substring(2, 8);
        // Send email with code
        return code;
    }


    async verifyOneTimeCode(email: string, code: string): Promise<User> {
        // Verify the code
        return {
            id: 'visitor_id',
            email: email,
            role: UserRole.VISITOR,
            ssoEnabled: false
        };
    }
}