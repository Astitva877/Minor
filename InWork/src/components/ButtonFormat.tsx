import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';

interface Props {
  cardStyle: any;
  children?: any;
  onpress: any;
  edit?: boolean;
}
const ButtonFormat = (props: Props) => {
  return (
    <TouchableOpacity
      style={[styles.container, props.cardStyle]}
      onPress={props.onpress}
      disabled={props.edit}
      {...props}>
      {props.children}
    </TouchableOpacity>
  );
};

export default ButtonFormat;

const styles = StyleSheet.create({
  container: {
    color: 'white',
  },
});
