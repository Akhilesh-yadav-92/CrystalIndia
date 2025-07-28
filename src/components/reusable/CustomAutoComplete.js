import React, { useCallback, useState, useEffect } from 'react';
import { Autocomplete, AutocompleteItem,Icon } from '@ui-kitten/components';
import { Text, View } from 'react-native';
import { useIsFocused } from '@react-navigation/native';
// import Colors,{darkColors,lightColors} from '../assets/conts/Colors';
// import { useSelector } from 'react-redux';
//only for name search
// const filterData = (data, query) => {
//   return data.filter(item => item.name.toLowerCase().includes(query.toLowerCase()));
// };

//search any type value
const filterData = (data, query) => {
  return data.filter(item => {
    return Object.values(item).some((val) =>
      String(val).toLowerCase().includes(String(query).toLowerCase())
    );
  
  
  });
};

const DownArrowIcon = (props) => (
  <Icon {...props} name="arrow-ios-downward-outline" />
);



// var localColors=Colors
const CustomAutocomplete = ({ data, placeholder, onSelect, label,disabled=false }) => {
  const [value, setValue] = useState('');
  const [filteredData, setFilteredData] = useState([]);


  const isFocused=useIsFocused()

//    const isDark = useSelector((state) => state.startorend.theme);
//                   localColors=lightColors  
//                   localColors=isDark.isDark?darkColors:lightColors
  // Update filteredData when data changes
  useEffect(() => {
    setFilteredData(data);
    setValue('')
    // if(data.length>0)
    // {
    //   setValue(data[0].name);
    // }
   
  }, [data,isFocused]);

  const handleSelect = useCallback(
    (index) => {
      setValue(filteredData[index].name);
      if (onSelect) {
        onSelect(filteredData[index],label);
      }
    },
    [filteredData, onSelect]
  );

  const handleChangeText = useCallback(
    (query) => {
      setValue(query);
      setFilteredData(filterData(data, query));
    },
    [data]
  );

  const renderOption = (item, index) => (
    <AutocompleteItem key={index}  title={item.name} />
  );

  return (
    <View style={{}}>
      <Autocomplete
        placeholder={placeholder || ''}
        // width="100%"
        
        disabled={disabled}
        style={{minWidth:'100%'}}
        value={value}
        label={()=><Text style={{color:'black',fontWeight:'700',fontSize:12}}>{label}</Text>}
        
        placement="inner top"
        onSelect={handleSelect}
        onChangeText={handleChangeText}
        accessoryRight={DownArrowIcon} // Add Down Arrow Icon
      >
        {filteredData.map(renderOption)}
      </Autocomplete>
    </View>
  );
};

export default CustomAutocomplete;
