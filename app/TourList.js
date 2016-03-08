import React, {
  ListView,
  View,
  Image,
  Text,
  TextInput,
  TouchableHighlight,
  StyleSheet
} from 'react-native';

var FS_URL = 'https://services.arcgis.com/nzS0F0zdNLvs7nc8/arcgis/rest/services/MTBENCHMARK2DATA2/FeatureServer/0/query?f=json&where=1%3D1&returnGeometry=true&spatialRel=esriSpatialRelIntersects&outFields=*&outSR=102100&resultOffset=0&resultRecordCount=2000';

module.exports = React.createClass({
  getInitialState: function() {
     return {
         dataSource: new ListView.DataSource({
             rowHasChanged: (row1, row2) => row1 !== row2
         }),
         totalPoints: [],
         loaded: false
     };
 },

 componentDidMount: function() {
     this.fetchData();
 },

 fetchData: function() {
   var points = [];
     fetch(FS_URL)
     .then(function(response) {
         var responseData = JSON.parse(response._bodyInit);

         for(var i = 0; i < responseData.features.length; i++) {
             var feature = responseData.features[i];
             var attributes = feature.attributes;

             var pointObj = {
                 title: attributes.Name,
                 snippet: attributes.Description.replace(/<.*?>/g, ''),
                 thumbnail: attributes.Thumbnail,
                 largePicture: attributes.Picture
             };
             points.push(pointObj);
         }

         this.setState({
             dataSource: this.state.dataSource.cloneWithRows(points),
             loaded: true,
             totalPoints: points
         });
         this.props.onDataLoaded(points);
     }.bind(this))
     .catch((err) => {
         console.log(err);
     })
     .done();
 },

 onTextChanged: function(text) {
   var list = [];
   // if there are two or more letters, filter.
   if(text.length > 1) {
     list = this.state.totalPoints.filter(function(value) {
       return value.title.indexOf(text) !== -1;
     });
     this.setState({
       dataSource: this.state.dataSource.cloneWithRows(list),
       loaded: true,
       totalPoints: this.state.totalPoints
     });
   }
   else if(text.length === 0) {
     // if the filter is cleared, show all of the results again.
     this.setState({
       dataSource: this.state.dataSource.cloneWithRows(this.state.totalPoints),
       loaded: true,
       totalPoints: this.state.totalPoints
     });
   }
 },

 renderRow: function(rowData, sectionId, rowId) {
     return (
         <TouchableHighlight>
             <View style={styles.container}>
                 <Image style={styles.listImage} source={{uri: rowData.thumbnail}}/>
                 <View style={styles.listText}>
                     <Text style={styles.title}>{rowData.title}</Text>
                     <Text>{rowData.snippet}</Text>
                 </View>
             </View>
         </TouchableHighlight>
     );
 },


  render: function() {
    return (
        <View style={styles.bucket}>
          <TextInput onChangeText={this.onTextChanged} style={styles.searchBox} placeholder="Search..." />
          <ListView
            automaticallyAdjustContentInsets={false}
            style={styles.listView}
            dataSource={this.state.dataSource}
            renderRow={this.renderRow}
          />
        </View>
    );
  }
});

var styles = StyleSheet.create({
  bucket: {
      flex: 1,
      flexDirection: 'column'
  },
  container: {
      flexDirection: 'row',
      alignItems: 'center'
  },
  listView: {
    flex: 1
  },
  searchBox: {
    height: 50,
    marginTop: 64,
    paddingLeft: 20,
    paddingRight: 20,
    paddingTop: 5,
    paddingBottom: 5,
    borderWidth: 2,
    borderColor: '#DDD'
  },
  listImage: {
      width: 90,
      height: 90
  },
  listText: {
      flex: 1,
      paddingLeft: 15
  },
  title: {
      fontSize: 20
  }
});
