import { CreateBusinessDto } from './dtos/create-business.dto';
import { UpdateBusinessDto } from './dtos/update-business.dto';
export declare class Business {
    id: string;
    name: string;
    email: string;
    static fromRegisterRequest(request: CreateBusinessDto): Business;
    static fromUpdateRequest(request: UpdateBusinessDto): Business;
}
