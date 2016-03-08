import React, {
  View,
  Image,
  Text,
  WebView,
  StyleSheet
} from 'react-native';
var Swiper = require('react-native-swiper');

module.exports = React.createClass({
    key: 0,

    getInitialState: function() {
        return {
            index: 0
        };
    },

    componentDidMount: function(){
      this.setState({
          index: 5
      });
    },

    getKey: function() {
      return ++this.key;
    },

    render: function() {
      var WEBVIEW_REF_TWO = 'webviewTwo';
        if ( this.props.id ) {
            this.state.index = parseInt(this.props.id);
        }

        return (
            <View style={styles.ptView}>
                <Swiper
                    ref="swiper"
                    height={400}
                    style={styles.ptSwipe}
                    index={this.state.index}
                    showsPagination={false}
                    removeClippedSubviews={true}>

                    {this.props.points.map(point =>
                      <View key={this.getKey()} style={styles.bucket}>
                        <View style={styles.ptTopHalf}>
                            <Image
                            source={{uri: point.largePicture}}
                            style={styles.image}
                            />
                        </View>
                         <View style={styles.ptMiddleQuarter}>
                            <Text style={styles.title}>{point.title}</Text>
                            <Text>{point.snippet}</Text>
                        </View>
                    </View>
                    )}
                </Swiper>
                <View style={styles.ptMap}>
                    <WebView
                        ref={WEBVIEW_REF_TWO}
                        source={{uri:"http://skitterm.github.io/react-native-demo/"}}
                        style={styles.webViewTwo}
                        javaScriptEnabled={true}
                    />
                </View>
            </View>
        );
    }
});

var styles = StyleSheet.create({
  bucket: {
      flex: 1,
      flexDirection: 'column',
      marginTop: 64
  },
  ptView: {
      flex: 1,
      flexDirection: 'column'
  },
  ptSwipe: {
      flex: 2
  },
  ptMap: {
      flex: 2
  },
  ptTopHalf: {
      flex: 3
  },
  ptMiddleQuarter: {
      flex: 1,
      padding: 20
  },
  image: {
      flex: 1
  },
  title: {
      fontSize: 20
  },
  webViewTwo: {
     flex: 1
  }
});
