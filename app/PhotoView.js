import React, {
  View,
  TextInput,
  Image,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
   render: function() {
       return (
           <View style={styles.bucket}>
                <View style={styles.topHalf}>
                    <Image source={this.props.imgSource} style={styles.image} />
                </View>
                <View style={styles.bottomHalf}>
                    <TextInput
                    style={styles.textArea}
                    multiline={true}
                    placeholder={"Add your photo title..."}
                    />
                </View>
           </View>
       );
   }
});

var styles = StyleSheet.create({
  bucket: {
      flex: 1,
      flexDirection: 'column'
  },
  topHalf: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'center'
  },
  bottomHalf: {
      flex: 1
  },
  image: {
      flex: 1
  },
  textArea: {
      backgroundColor: '#EEE',
      flex: 1,
      flexDirection: 'column',
      padding: 20,
      fontSize: 20
  }
});
