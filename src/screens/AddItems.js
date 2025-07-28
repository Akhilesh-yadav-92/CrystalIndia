import { StyleSheet, Text, View,Image } from 'react-native'
import React from 'react'
import CustomHeader from '../components/reusable/CustomHeader'
import CustomAutocomplete from '../components/reusable/CustomAutoComplete'
import { horizontalScale } from '../assets/scaling/scaling'
import { Layout,Card } from '@ui-kitten/components'
const AddItems = ({navigation}) => {
  return (
    <Layout level='3' style={{flex:1}}>
        <CustomHeader title="Add Items" onBackPress={()=>navigation.goBack()}/>

            <View style={{margin:horizontalScale(5)}}>
     <CustomAutocomplete
                      data={[{name:'exc',code:43}]}
                      label="Choose Item"
                      placeholder="select"
                      onSelect={(data) => {
                        // if (gridData.length > 0) {
                        //   gridData[index]['Visit']['code'] = data['code'];
                        // }
                        console.log(data)
                      }}
                   />
                   </View>

                <Layout level='1' style={{ margin:horizontalScale(10), borderRadius:horizontalScale(5) ,flexDirection:'row',justifyContent:'space-between'}}>
      {/* Image Section */}
      <View style={{width:horizontalScale(100),padding:horizontalScale(5)}} >
      <Image
        source={{ uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSLXCRO7hk_xPhDtUz3RyX6SmI-0jy5JNEXg&s" }}
        style={{
          width: '100%',
          height: 180,
          borderRadius: 10,
       
        }}
        resizeMode="contain"
      />
      </View>

      <View style={{flex:1,padding:horizontalScale(10)}}>

      {/* Details Section */}
      <View style={{ paddingHorizontal: 4 }}>
        <Text category="h6" style={{ marginBottom: 4 ,fontWeight:'bold'}}>
          {'Item Name'}
        </Text>
        <Text appearance="hint" style={{ marginBottom: 8 }}>
          {`Item Description`}
        </Text>
        <Text category="s1" status="primary">
          ₹ {`Item Price`}
        </Text>
      </View>

      </View>
    </Layout>
            
      
    </Layout>
  )
}

export default AddItems

const styles = StyleSheet.create({})