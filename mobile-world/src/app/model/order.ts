export class Order{
    orderId : number;
    orderMobileLogourl : string;
    orderMobileBrand : string;
	orderMobileModel : string;
	orderMobileImageurl : string;
	orderMobilePrice : number;
	orderDate : any;
	userEmail : string;
    username : string;
    constructor(orderId : number,
        orderMobileLogourl : string,
        orderMobileBrand : string,
        orderMobileModel : string,
        orderMobileImageurl : string,
        orderMobilePrice : number,
        orderDate : any,
        userEmail : string,
        username : string){
            
    this.orderId = orderId;
    this.orderMobileLogourl = orderMobileLogourl;
    this.orderMobileBrand = orderMobileBrand;
	this.orderMobileModel = orderMobileModel;
	this.orderMobileImageurl = orderMobileImageurl;
	this.orderMobilePrice = orderMobilePrice;
	this.orderDate = orderDate;
	this.userEmail = userEmail;
    this.username = username;
    }
}