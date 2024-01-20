import RNFetchBlob from 'rn-fetch-blob';
import { Alert } from 'react-native';

export const checkPermission = async filename => {
  try {
    Alert.alert('Vous pouvez télécharger ce fichier', 'Write Any Text Here', [
      {
        text: 'Cancel',
        style: 'cancel',
      },
      { text: 'OK', onPress: () => downloadFile(filename) },
    ]);
  } catch (err) {
    // Handle permission-related exceptions
  }
};

export const downloadFile = filename => {
  // Get today's date to add the time suffix in filename
  let date = new Date();
  // File URL which we want to download
  let FILE_URL = filename;
  // Function to get extension of the file url
  let file_ext = getFileExtension(FILE_URL);

  // config: To get a response by passing the downloading-related options
  // fs: Root directory path to download
  const { config, fs } = RNFetchBlob;
  let RootDir = fs.dirs.PictureDir;
  let options = {
    fileCache: true,
    addAndroidDownloads: {
      path:
        RootDir +
        '/file_' +
        Math.floor(date.getTime() + date.getSeconds() / 2) +
        '.' +
        file_ext,
      description: 'downloading file...',
      notification: true,
      // useDownloadManager works with Android only
      useDownloadManager: true,
    },
  };
  config(options)
    .fetch('GET', FILE_URL)
    .then(res => {
      // Alert after successful downloading
      Alert.alert(
        'Toutes nos félicitations',
        'Le téléchargement a été fait avec succès',
        [{ text: 'OK', onPress: () => {} }]
      );
    });
};

export const getFileExtension = fileUrl => {
  // To get the file extension
  const matches = /[.]/.exec(fileUrl);
  return matches ? matches.pop() : '';
};
