import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CustomHeader from '../components/reusable/CustomHeader'
import CustomAutocomplete from '../components/reusable/CustomAutoComplete'
import { Layout,Button } from '@ui-kitten/components'
import { horizontalScale, verticalScale } from '../assets/scaling/scaling'
import CustomButton from '../components/reusable/CustomButton'
import { colors } from '../constants'
const AddCustomer = ({navigation}) => {
  return (
    <Layout level='2' style={{flex:1}}>


        <CustomHeader title="Customer" onBackPress={()=>{navigation.goBack()}}/>
      <View style={{width:horizontalScale(150),alignSelf:'flex-end',marginTop:verticalScale(5)}}>
                    
                      <CustomButton
        title="New Customer"
        onPress={() => alert('Button Pressed')}
        backgroundColor={colors.light_bgBtn}
        textColor="#fff"
      />
                   </View>
     <View style={{margin:horizontalScale(5)}}>
     <CustomAutocomplete
                      data={[{name:'exc',code:43}]}
                      label="Select Customer"
                      placeholder="select"
                      onSelect={(data) => {
                        // if (gridData.length > 0) {
                        //   gridData[index]['Visit']['code'] = data['code'];
                        // }
                        console.log(data)
                      }}
                   />
                   </View>


                   <View style={{position:'absolute',bottom:10,left:80,right:80}}>
                    
                      <CustomButton
        title="Add Customer"
        onPress={() => alert('Button Pressed')}
        backgroundColor={colors.light_bgBtn}
        textColor="#fff"
      />
                   </View>
    </Layout>
  )
}

export default AddCustomer

const styles = StyleSheet.create({})