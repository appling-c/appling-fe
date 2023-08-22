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
    modified_at : string; 
    name : Number;
    nickname : string;
    role : string; 
    status : string; 
}

export default interface productSearchInterface {
    category_id: string; 
    seller_id: string; 
    keyword: string;   
    page : 0|number; 
    size: 100 | number; 
    search: string;     // 검색어
    status: string;     // 상품상태(노출, 미노출)
}

export default interface sellerInfoInterface {
    company: string;
    address: string;
    
}

export default interface productDetailInterface {
    id :number;
    main_title: string;
    main_explanation: string;
    description: string;
    product_main_explanation : string;
    product_sub_explanation : string;
    purchase_inquiry : string;
    price: string;
    producer: string;
    main_image :string;
    origin_price : string;
    image1 : string;
    image2 : string;
    image3 :string;
    origin : string;
    seller: object;
    created_at : string;
    modified_at: string;
}