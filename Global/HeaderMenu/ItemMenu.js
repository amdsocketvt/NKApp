import React, { PureComponent } from 'react';
import {View, Text, Image, FlatList, Platform, StyleSheet, TouchableOpacity} from 'react-native'

export default class ItemMenu extends PureComponent{

    _renderItem = ({item}) =>{
      return(
        <TouchableOpacity>
          <Text style={styles.itemInList}>{item.name}</Text>
        </TouchableOpacity>
      )
    }
    render(){
        return(
            <View style={{flexDirection:'row', padding : 5, justifyContent:'center'}}>
                <Image source={{uri : this.props.icon}} style={{width: 24, height : 24}}/>
                <FlatList
                    style={styles.listItemHorizontal}
                    ItemSeparatorComponent={()=><Text> - </Text>}
                    horizontal
                    data={this.props.data}
                    renderItem={this._renderItem}
                    keyExtractor={(item)=>item.alias}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    separator :{
        backgroundColor : 'black'
    },
    listItemHorizontal : {
        paddingTop : 5,
        paddingBottom : 5,
        marginLeft : 10,
        borderBottomColor:'#F0F1F5',
        borderBottomWidth : 1
    },
    itemInList:{
        color:'#3561E1'
    }
})
