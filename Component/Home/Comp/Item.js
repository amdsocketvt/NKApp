import React, { Component } from "react";
import { ScrollView, View} from "react-native";
import ItemFooter from "./ItemFooter";
export default class Item extends Component {
    // constructor(props) {
    //     super(props);
    //     // this.state = {
    //     //     data: this.props.data
    //     // }
    // }
    _onPress = () => {
        console.log("abc");
    };
    render() {
        return (
          
                 <View>
                   <ScrollView        
                    scrollEnabled={true}
                    horizontal={true}
                    showsHorizontalScrollIndicator={false}
                    style={{
                        flex:1,
                        flexDirection:'row'
                    }}
                    >
                {/* <FlatList
                    data={this.props.data}
                    keyExtractor={() => 'CON' + Math.random().toString(36).substr(2, 9)}
                    renderItem={({ item }) => 
                        <ItemFooter data={item} />
                    }
                    horizontal
                    showsHorizontalScrollIndicator={false}
                />  */}
                {this.props.data.map(it =>   <ItemFooter key={'C' + Math.random().toString(36).substr(2, 9)} data={it} />)}    

                </ScrollView>   
            </View>
           
 
           
        );
    }
}
