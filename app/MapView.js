import React , {
  View,
  WebView,
  StyleSheet
} from 'react-native';

module.exports = React.createClass({
    render: function() {
      var WEBVIEW_REF = 'webview';
      var mapUrl = 'http://skitterm.github.io/react-native-demo/';
        return (
            <WebView
                ref={WEBVIEW_REF}
                source={{uri:mapUrl}}
                style={styles.bucket}
                javaScriptEnabled={true}
            />
        );
    }
});

var styles = StyleSheet.create({
  bucket: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 64
  }
});
