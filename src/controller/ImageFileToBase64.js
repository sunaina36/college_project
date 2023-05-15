const imageToBase64 = require('image-to-base64');
let convertToBase64 = function(file){
    imageToBase64(file)
    .then(
        (response) => {
            console.log(response);
        }
    )
    .catch(
        (error) => {
            console.log(error);
        }
    )
};

module.exports=convertToBase64;