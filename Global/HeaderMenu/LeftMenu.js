import React, { Component } from 'react';
import {View, Text, FlatList, StyleSheet, TouchableOpacity} from 'react-native';
import ItemMenu from './ItemMenu';


const dataInp = [
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 480,
                "name": "Điện thoại",
                "alias": "dien-thoai-di-dong"
            },
            {
                "id": 528,
                "name": "Tablet",
                "alias": "may-tinh-bang"
            },
            {
                "id": 483,
                "name": "Phụ kiện",
                "alias": "phu-kien-dien-thoai"
            }
        ]
    },
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 350,
                "name": "Tivi",
                "alias": "tivi-man-hinh-lcd"
            },
            {
                "id": 2148,
                "name": "Loa",
                "alias": "amply-va-loa"
            },
            {
                "id": 352,
                "name": "Âm thanh",
                "alias": "dan-may-nghe-nhac"
            }
        ]
    },
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 423,
                "name": "Tủ lạnh",
                "alias": "tu-lanh"
            },
            {
                "id": 424,
                "name": "Tủ đông",
                "alias": "tu-dong"
            }
        ]
    },
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 420,
                "name": "Máy lạnh",
                "alias": "may-lanh"
            },
            {
                "id": 427,
                "name": "Máy lọc không khí",
                "alias": "may-loc-khong-khi"
            }
        ]
    },
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 421,
                "name": "Máy giặt",
                "alias": "may-giat"
            },
            {
                "id": 422,
                "name": "Máy sấy",
                "alias": "may-say-quan-ao"
            }
        ]
    },
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 344,
                "name": "Đồ gia dụng",
                "alias": "gia-dung"
            }
        ]
    },
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 527,
                "name": "Laptop",
                "alias": "may-tinh-xach-tay"
            },
            {
                "id": 529,
                "name": "PC",
                "alias": "may-tinh-de-ban"
            },
            {
                "id": 2896,
                "name": "Phụ kiện",
                "alias": "phu-kien-tin-hoc"
            }
        ]
    },
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 343,
                "name": "Máy ảnh",
                "alias": "may-anh-mirrorless"
            },
            {
                "id": 641,
                "name": "Máy Quay",
                "alias": "may-quay-phim"
            },
            {
                "id": 2894,
                "name": "Phụ kiện",
                "alias": "phu-kien-ky-thuat-so"
            }
        ]
    },
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 531,
                "name": "Máy in",
                "alias": "may-in-van-phong"
            },
            {
                "id": 2434,
                "name": "Thiết bị văn phòng",
                "alias": "thiet-bi-van-phong"
            }
        ]
    },
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 1080,
                "name": "Công cụ",
                "alias": "dien-co"
            },
            {
                "id": 1168,
                "name": "Bách hóa",
                "alias": "bach-hoa"
            },
            {
                "id": 347,
                "name": "Làm đẹp",
                "alias": "suc-khoe-va-lam-dep"
            }
        ]
    },
    {
        "icon": "https://png.icons8.com/office/24/000000/mobile-payment.png",
        "data": [
            {
                "id": 3049,
                "name": "Sim số - Thẻ cào - Thu hộ",
                "alias": "sim-so-dep.html"
            }
        ]
    }
]
export default class LeftMenu extends Component{
    render(){
        return(
            <View style={{flex : 1, padding : 5}}>
                <FlatList
                    ItemSeparatorComponent={()=><View style={styles.separator}/>}
                    data={dataInp}
                    renderItem={({item}) => <ItemMenu icon={item.icon} data={item.data}/>}
                    keyExtractor={() => Math.random().toString(36).substr(2, 9)}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    separator :{
        backgroundColor : 'black',
        width : 25
    }
})
