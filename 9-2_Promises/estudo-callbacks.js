// Callbacks

const userLeft = false;
const userWatchingCatMeme = false;

function watchTutorialCallback(callback, errorCallback) {
  if (userLeft) {
    errorCallback({ name: 'User Left', message: ':(' })
  } else if (userWatchingCatMeme) {
    errorCallback({ name: 'User watching cat meme', message: 'WebDevSimplified < cat' })
  } else {
    callback('Thumbs up and subscribe')
  }
}

function onSuccess(message) {
  console.log('Success: ' + message);
}

function onError(error) {
  console.log(error.name + ' ' + error.message);
}

watchTutorialCallback(onSuccess, onError);
