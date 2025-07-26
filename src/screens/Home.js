import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  StyleSheet,
  Alert,
} from 'react-native';
import { colors } from '../constants';
import CustomHeader from '../components/reusable/CustomHeader';
import { Layout,Card } from '@ui-kitten/components';
// Dynamic columns
const itemColumns = ['Item1', 'Item2', 'Item3', 'Item4', 'Item5'];

// Sample data
const initialData = [
  {
    SrNo: 1,
    PartyName: 'Party A',
    Items: { Item1: '10', Item2: '20', Item3: '15', Item4: '5', Item5: '12' },
  },
  {
    SrNo: 2,
    PartyName: 'Party B',
    Items: { Item1: '12', Item2: '22', Item3: '11', Item4: '4', Item5: '18' },
  },
  {
    SrNo: 3,
    PartyName: 'Party C',
    Items: { Item1: '14', Item2: '28', Item3: '17', Item4: '6', Item5: '10' },
  },
  {
    SrNo: 1,
    PartyName: 'Party A',
    Items: { Item1: '10', Item2: '20', Item3: '15', Item4: '5', Item5: '12' },
  },
  {
    SrNo: 2,
    PartyName: 'Party B',
    Items: { Item1: '12', Item2: '22', Item3: '11', Item4: '4', Item5: '18' },
  },
  {
    SrNo: 3,
    PartyName: 'Party C',
    Items: { Item1: '14', Item2: '28', Item3: '17', Item4: '6', Item5: '10' },
  },
  {
    SrNo: 1,
    PartyName: 'Party A',
    Items: { Item1: '10', Item2: '20', Item3: '15', Item4: '5', Item5: '12' },
  },
  {
    SrNo: 2,
    PartyName: 'Party B',
    Items: { Item1: '12', Item2: '22', Item3: '11', Item4: '4', Item5: '18' },
  },
  {
    SrNo: 3,
    PartyName: 'Party C',
    Items: { Item1: '14', Item2: '28', Item3: '17', Item4: '6', Item5: '10' },
  },
];

const COLUMN_WIDTH = 100;

const Home = ({navigation}) => {
  const [tableData, setTableData] = useState(initialData);
  const [editableRow, setEditableRow] = useState(null); // store row index

  const handleEdit = (index) => {
    setEditableRow(index);
  };

  const handleChange = (rowIndex, key, value) => {
    const updatedData = [...tableData];
    updatedData[rowIndex].Items[key] = value;
    setTableData(updatedData);
  };

  return (
    <Layout level='1' style={styles.container}>
      <CustomHeader
        title='Home'
        onBackPress={() => navigation.goBack()}
        onRightPress={() => console.log('Settings clicked')}
      />
{/* <View style={{flex:1,padding:8}}>
    <View style={{alignSelf:'center'}}>
        <Text>Order</Text>
    </View>

    <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View>
        <Text>Date</Text>
    </View>
    <View>
        <Text>43543543</Text>
    </View>
    </View>



 <View style={{flexDirection:'row',justifyContent:'space-between'}}>
    <View>
        <Text>Date</Text>
    </View>
    <View>
        <Text>Add Party</Text>
    </View>
    </View>


</View> */}

 <Card
        style={{
          borderRadius: 12,
          padding: 16,
          elevation: 4,
        }}
      >
        {/* Title */}
        <Text category="h6" style={{ alignSelf: 'center', marginBottom: 12 }}>
          Order
        </Text>

        {/* Row 1 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginBottom: 8,
          }}
        >
          <Text category="label">Date</Text>
          <Text category="s1">43543543</Text>
        </View>

        {/* Row 2 */}
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text category="label">Party</Text>
          <Text category="s1">Add Party</Text>
        </View>
      </Card>

<View style={{flex:3}}>
    
    <ScrollView horizontal>
        <View>
          {/* Header */}
          <View style={styles.row}>
            <View style={[styles.cell, styles.headerCell]}>
              <Text style={styles.headerText}>SrNo</Text>
            </View>
            <View style={[styles.cell, styles.headerCell]}>
              <Text style={styles.headerText}>Party Name</Text>
            </View>
            <View style={[styles.cell, styles.headerCell]}>
              <Text style={styles.headerText}>Edit</Text>
            </View>
            {itemColumns.map((col, index) => (
              <View key={index} style={[styles.cell, styles.headerCell]}>
                <Text style={styles.headerText}>{col}</Text>
              </View>
            ))}
          </View>

          {/* Body */}
          <ScrollView 
        //   style={{ maxHeight: 400 }}
          >
            
            {tableData.map((row, rowIndex) => (
              <View key={rowIndex} style={styles.row}>
                <View style={[styles.cell,{justifyContent:'center'}]}>
                  <Text  style={[styles.fontStyle,{alignSelf:'center'}]}>{row.SrNo}</Text>
                </View>
                <View style={[styles.cell,{justifyContent:'center'}]}>
                  <Text style={[styles.fontStyle,{alignSelf:'center'}]}>{row.PartyName}</Text>
                </View>
                <View style={styles.cell}>
                  <TouchableOpacity
                    onPress={() => handleEdit(rowIndex)}
                    style={styles.editBtn}
                  >
                    <Text style={styles.editText}>Edit</Text>
                  </TouchableOpacity>
                </View>

                {itemColumns.map((key, colIndex) => (
                  <View key={colIndex} style={styles.cell}>
                    <TextInput
                      value={row.Items[key]}
                      editable={editableRow === rowIndex}
                      onChangeText={(val) => handleChange(rowIndex, key, val)}
                      style={[
                        styles.input,
                        editableRow === rowIndex ? styles.inputEditable : styles.inputReadonly,
                      ]}
                      keyboardType="numeric"
                    />
                  </View>
                ))}
              </View>
            ))}
          </ScrollView>
        </View>
      </ScrollView>

</View>

      
    </Layout>
  );
};

// Styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    // marginTop: 50,
    // padding: 10,
    backgroundColor: '#f0f0f0',
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    width: COLUMN_WIDTH,
    borderWidth: 0.5,
    borderColor: '#ccc',
    padding: 8,
    backgroundColor: '#fff',
  },
  headerCell: {
    // backgroundColor: '#007AFF',
    backgroundColor:colors.dark_theme
  },
  headerText: {
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
  },
  editBtn: {
    backgroundColor: colors.light_bgBtn,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderRadius: 4,
    height:40,
    justifyContent:'center',
    alignItems:'center'

  },
  editText: {
    color: '#fff',
    textAlign: 'center',
  },
  input: {
    height: 40,
    fontSize: 12,
    paddingTop:8,   
    borderRadius:4     // smaller font size
  
    
  },
  inputEditable: {
    backgroundColor: '#fff',
    borderColor: '#007AFF',
    borderWidth: 1,
  },
  inputReadonly: {
    backgroundColor: '#eee',
  },
  fontStyle:colors.light_textColor,
});

export default Home;
