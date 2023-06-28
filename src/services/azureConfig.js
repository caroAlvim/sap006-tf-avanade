/* eslint-disable no-useless-concat */
require('dotenv').config();

const subscriptionKey = 'process.env.KEY_SECURE';
const endpoint = 'process.env.ENDPOINT';

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
