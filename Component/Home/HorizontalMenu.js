import React, { PureComponent } from 'react'
import { View, FlatList, Text, TouchableOpacity } from 'react-native'
import FontAwesome, { Icons } from 'react-native-fontawesome';

const menuIconHome = [
    {
        "id": 350,
        "name": "Tivi",
        "alias": "tivi-man-hinh-lcd",
        "icon": "https://test.nguyenkimonline.com/images/companies/_1/NK_App40_Assets/icon_test.png",
        "subcats": "",
        "features_hash": ""
    },
    {
        "id": 423,
        "name": "Tủ lạnh",
        "alias": "tu-lanh",
        "icon": "https://test.nguyenkimonline.com/images/companies/_1/NK_App40_Assets/icon_test.png",
        "subcats": "",
        "features_hash": ""
    },
    {
        "id": 420,
        "name": "Máy lạnh",
        "alias": "may-lanh",
        "icon": "https://test.nguyenkimonline.com/images/companies/_1/NK_App40_Assets/icon_test.png",
        "subcats": "",
        "features_hash": ""
    },
    {
        "id": 421,
        "name": "Máy giặt",
        "alias": "may-giat",
        "icon": "https://test.nguyenkimonline.com/images/companies/_1/NK_App40_Assets/icon_test.png",
        "subcats": "",
        "features_hash": ""
    },
    {
        "id": 480,
        "name": "Điện thoại",
        "alias": "dien-thoai-di-dong",
        "icon": "https://test.nguyenkimonline.com/images/companies/_1/NK_App40_Assets/icon_test.png",
        "subcats": "",
        "features_hash": ""
    },
    {
        "id": 527,
        "name": "Máy Tính",
        "alias": "may-tinh-xach-tay",
        "icon": "https://test.nguyenkimonline.com/images/companies/_1/NK_App40_Assets/icon_test.png",
        "subcats": "",
        "features_hash": ""
    },
    {
        "id": 344,
        "name": "Gia dụng",
        "alias": "gia-dung",
        "icon": "https://test.nguyenkimonline.com/images/companies/_1/NK_App40_Assets/icon_test.png",
        "subcats": "",
        "features_hash": ""
    },
    {
        "id": 531,
        "name": "Máy in",
        "alias": "may-in-van-phong",
        "icon": "https://test.nguyenkimonline.com/images/companies/_1/NK_App40_Assets/icon_test.png",
        "subcats": "",
        "features_hash": ""
    },
    {
        "id": 3049,
        "name": "Sim số",
        "alias": "sim-so-dep.html",
        "icon": "https://test.nguyenkimonline.com/images/companies/_1/NK_App40_Assets/icon_test.png",
        "subcats": "",
        "features_hash": ""
    }
]



export default class HorizontalMenu extends PureComponent{
    _rendItem=({item})=>{
        return(
            <View>
            <TouchableOpacity>
                <View style={{ alignItems: 'center',padding : 7}}>
                    <Text style={{margin: 5, fontSize: 20}}>
                        <FontAwesome>{Icons.tv}</FontAwesome>
                    </Text>
                    <Text>{item.name}</Text>
                </View>
            </TouchableOpacity>
            </View>
        )
    }
    render(){
        return(
                <FlatList
                    horizontal
                    data={menuIconHome}
                    ItemSeparatorComponent={()=><View style={{backgroundColor: '#F0F1F5', flex : 1, width : 1}}></View>}
                    renderItem={this._rendItem}
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.alias}
                    style={{backgroundColor : 'white'}}
                />

        );
    }
}
