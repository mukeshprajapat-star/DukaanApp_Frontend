import { Bar, CartItem, Line, Order, Pie, Product, ShippingInfo, Stats, User } from "./types"


export type CustomError={
    status:number,
    data:{
        message:string,
        success:boolean
    }
}
export type MessageResponse={
    success:boolean,
    message:string

}
export type AllUsersResponse={
    success:boolean,
    users:User[]

}



export type UserResponse={
    success:boolean,
    user:User

}

export type AllProductsResponse={
    success:boolean,
    products:Product[]

}

export type CategoryResponse={
    success:boolean,
    categories:string[]

}

export type SearchProductsResponse=AllProductsResponse & {
    totalPage:number
}

export type SearchProductsRequest= {
    price:number;
    page:number;
    category:string; 
    search:string;
    sort:string;
}

export type NewProductRequest={
    id:string,
    formData:FormData

}

export type ProductResponse={
    success:boolean,
    product:Product

}

export type UpdateProductRequest={
    productId:string,
    userId:string,
    formData:FormData

}

export type DeleteProductRequest={
    productId:string,
    userId:string,

}

export interface NewOrderRequest{
    shippingInfo:ShippingInfo;
    orderItems:CartItem[];
    subtotal:number;
    tax:number;
    shippingCharges:number;
    discount:number;
    total:number;
    user:string;
   


}

export type AllOrdersResponse={
    success:boolean,
    orders:Order[]

}

export type OrderDetailsResponse={
    success:boolean,
    order:Order

}

export type StatsResponse={
    success:boolean,
    stats:Stats

}

export type PieResponse={
    success:boolean,
    charts:Pie;

}
export type BarResponse={
    success:boolean,
    charts:Bar;

}

export type LineResponse={
    success:boolean,
    charts:Line;

}
export interface UpdateOrderRequest{
    userId:string;
    orderId:string;
   


}
export type deleteUserRequest={
    userId:string,
    adminUserId:string;

}