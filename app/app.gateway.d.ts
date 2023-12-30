import { OnGatewayConnection, OnGatewayDisconnect } from '@nestjs/websockets';
export declare class AppGateway implements OnGatewayConnection, OnGatewayDisconnect {
    handleConnection(client: any, ...args: any[]): any;
    handleDisconnect(client: any): any;
}
