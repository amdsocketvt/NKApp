import React, { Component } from "react";
import { Text,FlatList, View,StyleSheet} from "react-native";
import ItemProductView from "./ItemProductView";
export default class ListProductView extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            data: [
                {
                    "images": "https://test.nguyenkimonline.com/images/thumbnails/250/250/product/508/10035017-IPHONE-X-256GB-SILVER-01_lczk-de.jpg",
                    "brand": "Apple",
                    "text_promotion": "Giảm 500.000đ MasterCard",
                    "product_id": 62069,
                    "description": "<p>Màn hình: OLED 5.8 inch (3D Touch)</p>\r\n<p>Vi xử lý: A11 Bionic 64 bit</p>\r\n<p>Bộ nhớ trong: 64 GB</p>\r\n<p>RAM: 3 GB</p>\r\n<p>Camera chính: Dual 12MP</p>\r\n<p>Hệ điều hành: iOS 11</p>",
                    "product_code": "000000000010035377-CHI",
                    "amount": 166,
                    "weight": 1,
                    "list_price": 29990000,
                    "price": 29990000,
                    "product_name": "IPHONE X 64GB SILVER",
                    "shortname": "Điện thoại",
                    "model": "",
                    "tag_image": null,
                    "categories": [
                        340,
                        480,
                        485,
                        1000,
                        3069
                    ],
                    "nk_tragop_0": 1,
                    "length": 0,
                    "width": 0,
                    "height": 0,
                    "nk_is_shock_price": "N",
                    "tag_image_online": "https://test.nguyenkimonline.com/images/companies/_1/Data_Price/Pic_Tags/tap-tragop0dong.png"
                },
                {
                    "images": "https://test.nguyenkimonline.com/images/thumbnails/250/250/product/508/10035017-IPHONE-X-256GB-SILVER-01_lczk-de.jpg",
                    "brand": "Apple",
                    "text_promotion": "Giảm 500.000đ MasterCard",
                    "product_id": 62069,
                    "description": "<p>Màn hình: OLED 5.8 inch (3D Touch)</p>\r\n<p>Vi xử lý: A11 Bionic 64 bit</p>\r\n<p>Bộ nhớ trong: 64 GB</p>\r\n<p>RAM: 3 GB</p>\r\n<p>Camera chính: Dual 12MP</p>\r\n<p>Hệ điều hành: iOS 11</p>",
                    "product_code": "000000000010035377-CHI",
                    "amount": 166,
                    "weight": 1,
                    "list_price": 29990000,
                    "price": 29990000,
                    "product_name": "IPHONE X 64GB SILVER",
                    "shortname": "Điện thoại",
                    "model": "",
                    "tag_image": null,
                    "categories": [
                        340,
                        480,
                        485,
                        1000,
                        3069
                    ],
                    "nk_tragop_0": 1,
                    "length": 0,
                    "width": 0,
                    "height": 0,
                    "nk_is_shock_price": "N",
                    "tag_image_online": "https://test.nguyenkimonline.com/images/companies/_1/Data_Price/Pic_Tags/tap-tragop0dong.png"
                },
                {
                    "images": "https://test.nguyenkimonline.com/images/thumbnails/250/250/product/507/10035017-IPHONE-X-256GB-SILVER-01_slh6-gi.jpg",
                    "brand": "Apple",
                    "text_promotion": "Giảm 500.000đ MasterCard",
                    "product_id": 59283,
                    "description": "<p>Màn hình: OLED 5.8 inch (3D Touch)</p>\r\n<p>Vi xử lý: A11 Bionic 64 bit</p>\r\n<p>Bộ nhớ trong: 256 GB</p>\r\n<p>RAM: 3 GB</p>\r\n<p>Camera chính: Dual 12MP</p>\r\n<p>Hệ điều hành: iOS 11</p>",
                    "product_code": "000000000010035017-BO",
                    "amount": 161,
                    "weight": 0,
                    "list_price": 34790000,
                    "price": 1,
                    "product_name": "IPHONE X 256GB SILVER",
                    "shortname": "iPhone X - 256GB - 5.8\"",
                    "model": "",
                    "tag_image": null,
                    "categories": [
                        340,
                        480,
                        485,
                        1000,
                        3069,
                        3139
                    ],
                    "nk_tragop_0": 0,
                    "length": 0,
                    "width": 0,
                    "height": 0,
                    "nk_is_shock_price": "O",
                    "tag_image_online": "https://test.nguyenkimonline.com/images/companies/_1/Data_Price/Pic_Tags/tap-tragop0dong.png"
                },
                {
                    "images": "https://test.nguyenkimonline.com/images/thumbnails/250/250/product/507/10035017-IPHONE-X-256GB-SILVER-01_slh6-gi.jpg",
                    "brand": "Apple",
                    "text_promotion": "Giảm 500.000đ MasterCard",
                    "product_id": 59283,
                    "description": "<p>Màn hình: OLED 5.8 inch (3D Touch)</p>\r\n<p>Vi xử lý: A11 Bionic 64 bit</p>\r\n<p>Bộ nhớ trong: 256 GB</p>\r\n<p>RAM: 3 GB</p>\r\n<p>Camera chính: Dual 12MP</p>\r\n<p>Hệ điều hành: iOS 11</p>",
                    "product_code": "000000000010035017-BO",
                    "amount": 161,
                    "weight": 0,
                    "list_price": 34790000,
                    "price": 34790000,
                    "product_name": "IPHONE X 256GB SILVER",
                    "shortname": "iPhone X - 256GB - 5.8\"",
                    "model": "",
                    "tag_image": null,
                    "categories": [
                        340,
                        480,
                        485,
                        1000,
                        3069,
                        3139
                    ],
                    "nk_tragop_0": 0,
                    "length": 0,
                    "width": 0,
                    "height": 0,
                    "nk_is_shock_price": "O",
                    "tag_image_online": "https://test.nguyenkimonline.com/images/companies/_1/Data_Price/Pic_Tags/tap-tragop0dong.png"
                },
                {
                    "images": "https://test.nguyenkimonline.com/images/thumbnails/250/250/product/508/10034790-IPHONE-8-PLUS-256GB-SILVER-01.jpg",
                    "brand": "Apple",
                    "text_promotion": "Giảm 500.000đ MasterCard",
                    "product_id": 59273,
                    "description": "<p>Màn hình: IPS 5.5 inch</p>\r\n<p>Bộ nhớ trong: 256 GB</p>\r\n<p>RAM: 3 GB</p>\r\n<p>Camera chính: Dual 12 MP</p>\r\n<p>Vi xử lý: Apple A11 Bionic</p>\r\n<p>Hệ điều hành: iOS 11</p>",
                    "product_code": "000000000010034790-BO",
                    "amount": 12,
                    "weight": 0.202,
                    "list_price": 28790000,
                    "price": 28790000,
                    "product_name": "IPHONE 8 PLUS 256GB SILVER",
                    "shortname": "iPhone 8 Plus 256GB - 5.5\"",
                    "model": "",
                    "tag_image": null,
                    "categories": [
                        340,
                        480,
                        485,
                        1000,
                        3067
                    ],
                    "nk_tragop_0": 1,
                    "length": 158,
                    "width": 78,
                    "height": 8,
                    "nk_is_shock_price": "N",
                    "tag_image_online": "https://test.nguyenkimonline.com/images/companies/_1/Data_Price/Pic_Tags/tap-tragop0dong.png"
                },
                {
                    "images": "https://test.nguyenkimonline.com/images/thumbnails/250/250/product/508/10034790-IPHONE-8-PLUS-256GB-SILVER-01.jpg",
                    "brand": "Apple",
                    "text_promotion": "Giảm 500.000đ MasterCard",
                    "product_id": 59273,
                    "description": "<p>Màn hình: IPS 5.5 inch</p>\r\n<p>Bộ nhớ trong: 256 GB</p>\r\n<p>RAM: 3 GB</p>\r\n<p>Camera chính: Dual 12 MP</p>\r\n<p>Vi xử lý: Apple A11 Bionic</p>\r\n<p>Hệ điều hành: iOS 11</p>",
                    "product_code": "000000000010034790-BO",
                    "amount": 12,
                    "weight": 0.202,
                    "list_price": 28790000,
                    "price": 28790000,
                    "product_name": "IPHONE 8 PLUS 256GB SILVER",
                    "shortname": "iPhone 8 Plus 256GB - 5.5\"",
                    "model": "",
                    "tag_image": null,
                    "categories": [
                        340,
                        480,
                        485,
                        1000,
                        3067
                    ],
                    "nk_tragop_0": 1,
                    "length": 158,
                    "width": 78,
                    "height": 8,
                    "nk_is_shock_price": "N",
                    "tag_image_online": "https://test.nguyenkimonline.com/images/companies/_1/Data_Price/Pic_Tags/tap-tragop0dong.png"
                },
                {
                    "images": "https://test.nguyenkimonline.com/images/thumbnails/250/250/product/508/10034788-IPHONE-8-PLUS-256GB-GOLD-01.jpg",
                    "brand": "Apple",
                    "text_promotion": "",
                    "product_id": 59269,
                    "description": "<p>Màn hình: IPS 5.5 inch</p>\r\n<p>Bộ nhớ trong: 64 GB</p>\r\n<p>RAM: 3 GB</p>\r\n<p>Camera chính:Dual 12 MP</p>\r\n<p>Vi xử lý: Apple A11 Bionic</p>\r\n<p>Hệ điều hành: iOS 11</p>",
                    "product_code": "000000000010034785-BO",
                    "amount": 0,
                    "weight": 0.202,
                    "list_price": 23990000,
                    "price": 23990000,
                    "product_name": "IPHONE 8 PLUS 64GB GOLD",
                    "shortname": "iPhone 8 Plus 64GB - 5.5\"",
                    "model": "",
                    "tag_image": null,
                    "categories": [
                        340,
                        480,
                        485,
                        1000,
                        3067
                    ],
                    "nk_tragop_0": 1,
                    "length": 158,
                    "width": 78,
                    "height": 8,
                    "nk_is_shock_price": "N",
                    "tag_image_online": "https://test.nguyenkimonline.com/images/companies/_1/Data_Price/Pic_Tags/tap-tragop0dong.png"
                },
                {
                    "images": "https://test.nguyenkimonline.com/images/thumbnails/250/250/product/508/10034788-IPHONE-8-PLUS-256GB-GOLD-01.jpg",
                    "brand": "Apple",
                    "text_promotion": "",
                    "product_id": 59269,
                    "description": "<p>Màn hình: IPS 5.5 inch</p>\r\n<p>Bộ nhớ trong: 64 GB</p>\r\n<p>RAM: 3 GB</p>\r\n<p>Camera chính:Dual 12 MP</p>\r\n<p>Vi xử lý: Apple A11 Bionic</p>\r\n<p>Hệ điều hành: iOS 11</p>",
                    "product_code": "000000000010034785-BO",
                    "amount": 0,
                    "weight": 0.202,
                    "list_price": 23990000,
                    "price": 23990000,
                    "product_name": "IPHONE 8 PLUS 64GB GOLD",
                    "shortname": "iPhone 8 Plus 64GB - 5.5\"",
                    "model": "",
                    "tag_image": null,
                    "categories": [
                        340,
                        480,
                        485,
                        1000,
                        3067
                    ],
                    "nk_tragop_0": 1,
                    "length": 158,
                    "width": 78,
                    "height": 8,
                    "nk_is_shock_price": "N",
                    "tag_image_online": "https://test.nguyenkimonline.com/images/companies/_1/Data_Price/Pic_Tags/tap-tragop0dong.png"
                }
            ]
      };
      }
    _onPress = () => {
        console.log("abc");
    };
    render() {
        return (
            <View>
               <Text style={stylesListProductView.TextCategory} >NHỮNG SẢN PHẨM ĐÃ XEM</Text>
                <FlatList
                    data={this.state.data}
                    keyExtractor={() => 'CON' + Math.random().toString(36).substr(2, 9)}
                    renderItem={({ item }) => 
                        <ItemProductView data={item} DataColumn={2}   />
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    
                /> 
            </View>
           
        );
    }
}

const stylesListProductView = StyleSheet.create({
    TextCategory: {
        color: "black",
        fontWeight: "bold",
        fontSize: 14,
        margin: 5,
      }
});
