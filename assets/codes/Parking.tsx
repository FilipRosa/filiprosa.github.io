export enum UserRole {
    STUDENT = 'student',
    EMPLOYEE = 'employee',
    VISITOR = 'visitor'
}


export interface User {
    id: string;
    email: string;
    role: UserRole;
    ssoEnabled: boolean;
}


export interface ParkingSpot {
    id: string;
    spotNumber: string;
    isEmployeeOnly: boolean;
    isOccupied: boolean;
    location: {
        lat: number;
        lng: number;
    };
}


export interface Reservation {
    id: string;
    userId: string;
    spotId: string;
    startTime: Date;
    endTime: Date;
    status: 'active' | 'cancelled' | 'completed';
}