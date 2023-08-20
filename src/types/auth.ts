export default interface Token {
    access_token : string;
    refresh_token : string;
}

export default interface MemberLogin {
    email : string;
    password : string;
}


export default interface userInfoInterface {
    created_at: string; 
    email : string; 
    member_id : string;
    modified_at : Number; 
    name : Number;
    nickname : string;
    role : string; 
    status : string; 
}
