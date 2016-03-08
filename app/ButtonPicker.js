import React, {
  View,
  TouchableHighlight,
  Text,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
   render: function() {
       return (
           <View style={styles.centerContainer}>
            <TouchableHighlight style={styles.button} onPress={this.props.action}>
                <View>
                    <Text style={styles.buttonText}>Add Photo</Text>
                </View>
            </TouchableHighlight>
           </View>
       );
   }
});

var styles = StyleSheet.create({
  centerContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  button: {
      backgroundColor: '#5566AA',
      paddingLeft: 40,
      paddingTop: 20,
      paddingRight: 40,
      paddingBottom: 20,
      borderRadius: 5
  },
  buttonText: {
      fontSize: 20,
      color: 'white'
  }
});
