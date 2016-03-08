import React, {
  View,
  StyleSheet
} from 'react-native';
var ImagePickerManager = require('NativeModules').ImagePickerManager;
import PhotoView from './PhotoView.js';
import ButtonPicker from './ButtonPicker.js';

module.exports = React.createClass({
    getInitialState: function() {
        return {
            imgSource: null,
            unselected: true
        };
    },
    showImagePicker: function() {
        var options = {
            title: 'Select Photo',
            cancelButtonTitle: 'Cancel',
            takePhotoButtonTitle: 'Take Photo...',
            chooseFromLibraryButtonTitle: 'Choose from Library...',
            returnBase64Image: false,
            returnIsVertical: false
        };

        ImagePickerManager.showImagePicker(options, (response) => {
            var source = null;
            if(response.didCancel) {
                return;
            }
            else {
                source = {
                    uri: 'data:image/jpeg;base64,' + response.data, isStatic: true
                };
                this.setState({
                    imgSource: source,
                    unselected: false
                });
            }
        });
    },

    render: function() {
        return (
            <View style={styles.bucket}>
                {
                  this.state.unselected ? <ButtonPicker action={this.showImagePicker}/> : <PhotoView imgSource={this.state.imgSource} />
                }
            </View>
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
