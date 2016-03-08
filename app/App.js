import React, {
  StyleSheet,
  Text,
  View,
  NavigatorIOS,
  Navigator,
  TouchableOpacity
} from 'react-native';

import TourList from './TourList.js';
import MapView from './MapView.js';
import ImagePicker from './ImagePicker.js';
import PointView from './PointView.js';


var NavigationBarRouteMapper = {
  Title: function(route, navigator, index, navState) {
    return (
      <View style={styles.navButton}>
        <Text style={styles.navTitle}>{route.title}</Text>
      </View>
    );
  },

  LeftButton: function(route, navigator, index, navState) {
    if(index > 0) {
      return (
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => navigator.jumpBack()}>
          <Text style={styles.navText}>{navState.routeStack[index - 1].title}</Text>
        </TouchableOpacity>
      );
    }
    else {
      return null;
    }
  },

  RightButton: function(route, navigator, index, navState) {
    if(route.showNextRoute) {
      return (
        <TouchableOpacity
          style={styles.navButton}
          onPress={() => {route.showNextRoute()}}>
          <Text style={styles.navText}>{route.nextTitle}</Text>
        </TouchableOpacity>
      );
    }
    else {
      return null;
    }
  }
};

module.exports = React.createClass({
  getInitialState: function() {
    return {
      points: []
    };
  },

  onDataLoaded: function(loadedPoints) {
    this.setState({
      points: loadedPoints
    });
  },

  renderScene: function(route, navigator) {
    return (
      <route.component navigator={navigator} {...route.passProps} />
    )
  },

  render: function() {
    return (
      <Navigator
        ref="nav"
        initialRoute={{
          index: 0,
          title: 'List',
          nextTitle: 'Map',
          component: TourList,
          passProps: {
            onDataLoaded: this.onDataLoaded,
            points: this.state.points
          },
          showNextRoute: () => {
            this.refs.nav.push({
              index: 1,
              title: 'Map',
              nextTitle: 'Picker',
              component: MapView,
              showNextRoute: () => {
                this.refs.nav.push({
                  index: 2,
                  title: 'Picker',
                  nextTitle: 'Point',
                  component: ImagePicker,
                  showNextRoute: () => {
                    this.refs.nav.push({
                      index: 3,
                      title: 'Point',
                      component: PointView,
                      passProps: {
                        points: this.state.points
                      }
                    });
                  }
                });
              }
            });
          }
        }}
        navigationBar={
          <Navigator.NavigationBar
            routeMapper={NavigationBarRouteMapper}
            style={styles.navBar}
          />
        }
        renderScene={this.renderScene}
        style={styles.bucket}
      />
    );
  }
});

var styles = StyleSheet.create({
  bucket: {
      flex: 1,
      flexDirection: 'row'
  },
  navBar: {
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  navButton: {
    marginTop: 8,
    paddingRight: 20,
    paddingLeft: 20,
    flex: 1
  },
  navTitle: {
    fontSize: 20
  },
  navText: {
    fontSize: 20,
    color: '#00AAFF'
  }
});
