import { orderItemModel } from "./orderitem.model";
import { ProductModel } from "./product.model";
export interface CartModel{
    orderNo: number;
    userID: number;
    orderDate: string;
    orderStatus: Boolean;
    orderItems: orderItemModel[];
    allProducts: ProductModel[];
}