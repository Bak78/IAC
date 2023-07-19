import { v4 } from "uuid";

export interface UserProperties {
    id: string;
    username: string;
    email: string;
    phoneNumber: string;
    password: string;
    isVerified: boolean;
}


export class User {
    props: UserProperties;

    constructor(props: UserProperties) {
        this.props = props;
    }

    static create(props:{
    username: string;
    email: string;
    phoneNumber: string;
    password: string;


    }){
        return new User({
            ...props,
            id: v4(),
            isVerified: false,
        })
    }

}