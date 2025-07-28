import React, { useState } from 'react';
import {
  View,
  
  TextInput,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { Layout, Text, Card, Divider } from '@ui-kitten/components';
import CustomHeader from '../components/reusable/CustomHeader';
import { initialOrderData } from '../data/order';
import { routes } from '../constants';
// const initialData = [
//   { id: 1, name: 'A', items: {  }, editing: false },
//   { id: 2, name: 'B', items: { }, editing: false },
//   { id: 3, name: 'C', items: { }, editing: false },
//    { id: 4, name: 'D', items: { }, editing: false },
//     { id: 5, name: 'E', items: { }, editing: false },
//      { id: 6, name: 'F', items: { }, editing: false },
// ];


export default function Home({navigation}) {
  const [data, setData] = useState(initialOrderData);
  const [orderInputs, setOrderInputs] = useState({});

  // Get all item keys dynamically
  const allItemKeys = Array.from(
    new Set(data.flatMap(customer => Object.keys(customer.items)))
  ).sort((a, b) =>
    parseInt(a.replace('item', '')) - parseInt(b.replace('item', ''))
  );

  const toggleEdit = (index) => {
    const newData = [...data];
    newData[index].editing = !newData[index].editing;

    if (newData[index].editing) {
      allItemKeys.forEach(key => {
        if (!(key in newData[index].items)) {
          newData[index].items[key] = '';
        }
      });
    }

    setData(newData);
  };

  const handleQuantityChange = (index, key, value) => {
    const newData = [...data];
    newData[index].items[key] = value;
    setData(newData);
  };

  const handleOrderInputChange = (id, value) => {
    setOrderInputs(prev => ({ ...prev, [id]: value }));
  };

  const handleAddOrderColumn = () => {
    const newData = [...data];

    // Determine next available item key
    const maxItemNum = Math.max(
      0,
      ...allItemKeys.map(k => parseInt(k.replace('item', '')) || 0)
    );
    const newItemKey = `item${maxItemNum + 1}`;

    // Add the new item value (from input) to each customer
    newData.forEach(customer => {
      const orderValue = orderInputs[customer.id];
      if (orderValue && orderValue.trim() !== '') {
        customer.items[newItemKey] = orderValue;
      } else {
        customer.items[newItemKey] = '';
      }
    });

    // Clear inputs
    setOrderInputs({});
    setData(newData);
  };

  return (
    <ScrollView>
      {/* Order Input Table */}
      <CustomHeader title="Order"/>
<View style={{padding:8}}>

 {/* <View style={{ flexDirection: 'row', justifyContent:'flex-end' }}>
       
        <Text category='s1' appearance='hint' style={{ textDecorationLine: 'underline' }}>
          clear
        </Text>
      </View> */}

      {/* Salesman and Date Row */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginVertical: 5 }}>
        <Text category='s1' style={{ fontWeight: 'bold'}}>
          Salesman: <Text category='s2'>Excellent Softwares</Text>
        </Text>

        <Text category='s1' style={{ fontWeight: 'bold' }}>
          Date: <Text category='s2'>{new Date().toLocaleDateString()}</Text>
        </Text>
      </View>

      {/* Catalogue and Add Customer Buttons */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
        <Card style={{ width: '45%' }}
        onPress={()=>navigation.navigate(routes.ADD_ITEMS)}
        >
          <Text category='s1' style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Catalogue
          </Text>
        </Card>
        <Card style={{ width: '45%' }}
        
        onPress={()=>{
          navigation.navigate(routes.ADD_CUSTOMER)
        }}
        >
          <Text category='s1' style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Add Customer
          </Text>
        </Card>
      </View>

     

      {/* Items and Quantity Section */}
      <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 5 }}>
           <Card style={{ width: '33%' }}>
          <Text category='s2' style={{ textAlign: 'center', fontWeight: 'bold' }}>
            Number of Customer
          </Text>
          <Text category='s2' style={{ textAlign: 'center' }}>34</Text>
        </Card>
        <Card style={{ width: '33%' }}>
          <Text category='s2' style={{ fontWeight: 'bold' }}>No of Items</Text>
          <Text category='s2' style={{ textAlign: 'center' }}>34</Text>
        </Card>

        <Card style={{ width: '33%' }}>
          <Text category='s2' style={{ fontWeight: 'bold' }}>No of Quantity</Text>
          <Text category='s2' style={{ textAlign: 'center' }}>55</Text>
        </Card>
      </View>


</View>



      <ScrollView horizontal>
        <View style={{ borderWidth: 1, margin: 10 }}>
    
          <View style={{ flexDirection: 'row', backgroundColor: '#f0f0f0' }}>
            <Cell text="Sr.No" bold />
            <Cell text="Customer" bold />
            <Cell text="Order" bold />
          </View>

      
          {data.map((customer, index) => (
            <View key={customer.id} style={{ flexDirection: 'row' }}>
              <Cell text={String(index + 1)} />
              <Cell text={customer.name} />
              <Cell>
                <TextInput
                  value={orderInputs[customer.id] ?? ''}
                  onChangeText={(text) => handleOrderInputChange(customer.id, text)}
                  keyboardType="numeric"
                  style={{
                    borderWidth: 1,
                    width: 60,
                    height: 30,
                    textAlign: 'center',
                  }}
                />
              </Cell>
            </View>
          ))}

          {/* OK Button Row */}

          <View style={{ flexDirection: 'row' }}>
            <View style={{ width: 160 }} /> {/* Empty space under first 2 columns */}
            <View style={{ alignItems: 'center', justifyContent: 'center', padding: 6 }}>
              <TouchableOpacity onPress={handleAddOrderColumn}>
                <Text style={{ color: 'green', fontWeight: 'bold' }}>OK</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ScrollView>

      {/* Main Table */}
      <ScrollView horizontal>
        <View style={{ borderWidth: 1, margin: 10 }}>
          <View style={{ flexDirection: 'row', backgroundColor: '#eee' }}>
            <Cell text="Sr.No" bold />
            <Cell text="Customer" bold />
            <Cell text="Edit" bold />
            {allItemKeys.map(key => (
              <Cell key={key} text={key.replace('item', 'Item ')} bold />
            ))}
          </View>

          {data.map((customer, index) => (
            <View key={customer.id} style={{ flexDirection: 'row' }}>
              <Cell text={String(index + 1)} />
              <Cell text={customer.name} />
              <Cell>
                <TouchableOpacity onPress={() => toggleEdit(index)}>
                  <Text style={{ color: 'blue' }}>
                    {customer.editing ? 'Update' : 'Edit'}
                  </Text>
                </TouchableOpacity>
              </Cell>

              {allItemKeys.map((key) => {
                const value = customer.items[key] ?? '';
                return (
                  <Cell key={key}>
                    {customer.editing ? (
                      <TextInput
                        style={{
                          borderWidth: 1,
                          width: 50,
                          height: 30,
                          textAlign: 'center',
                          padding: 2,
                        }}
                        value={value}
                        keyboardType="numeric"
                        onChangeText={(text) =>
                          handleQuantityChange(index, key, text)
                        }
                      />
                    ) : (
                      <Text>{value}</Text>
                    )}
                  </Cell>
                );
              })}
            </View>
          ))}
        </View>
      </ScrollView>
    </ScrollView>
  );
}

const Cell = ({ text = '', bold = false, children }) => (
  <View
    style={{
      borderWidth: 1,
      padding: 6,
      minWidth: 80,
      justifyContent: 'center',
      alignItems: 'center',
    }}
  >
    {children || (
      <Text style={{ fontWeight: bold ? 'bold' : 'normal' ,fontSize:12}}>{text}</Text>
    )}
  </View>
);
