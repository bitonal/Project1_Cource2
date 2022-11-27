import { Login } from './login';
import {Injectable}  from "@angular/core";
@Injectable({
    providedIn:'root'
})
export class LoginService
{
    public users:Login[]=[
        {
            email:"prasana@gmail.com",
            password:"prassu1234"
        },
        {
            email:"mounika@gmail.com",
            password:"mouni1234"
        },
        {
            email:"sandeep@gmail.com",
            password:"sandy1234"
        }
    ];
    getUsers():Login[]
    {
        return this.users;
    }
    
}