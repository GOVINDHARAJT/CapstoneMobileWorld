export class Cart{
    cartId : number;
    cartMobileLogourl : string;
    cartMobileBrand : string;
	cartMobileModel : string;
	cartMobileImageurl : string;
	cartMobilePrice : number;
	cartDate : any;
	userEmail : string;
    username : string;
    constructor(cartId : number,
        cartMobileLogourl : string,
        cartMobileBrand : string,
        cartMobileModel : string,
        cartMobileImageurl : string,
        cartMobilePrice : number,
        cartDate : any,
        userEmail : string,
        username : string){
            
    this.cartId = cartId;
    this.cartMobileLogourl = cartMobileLogourl;
    this.cartMobileBrand = cartMobileBrand;
	this.cartMobileModel = cartMobileModel;
	this.cartMobileImageurl = cartMobileImageurl;
	this.cartMobilePrice = cartMobilePrice;
	this.cartDate = cartDate;
	this.userEmail = userEmail;
    this.username = username;
    }
}