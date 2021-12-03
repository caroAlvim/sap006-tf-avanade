/* eslint-disable no-useless-concat */
require('dotenv').config();

const subscriptionKey = 'd49f3175dda14a61ac18dd08f5bb95ce';
const endpoint = 'https://demo-demo-talent.cognitiveservices.azure.com/' + '/face/v1.0/detect';

const axios = require('axios').default;

const credentialAzure = async (img) => {
  await axios({
    method: 'post',
    url: endpoint,
    params: {
      detectionModel: 'detection_03',
      returnFaceId: false,
      returnFaceAttributes: 'mask',
    },
    data: {
      url: img,
    },
    headers: { 'Ocp-Apim-Subscription-Key': subscriptionKey },
  });
};

export default credentialAzure;
