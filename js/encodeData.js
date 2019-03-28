/*
This function encodes a 1-dimensional data object as a valid uri string. Recommend removing if statement for production code.
Parameters:
    data:       A javascript object that should be sent with the request. Must not contain sub-objects or arrays.
*/
function encodeData(data){
    var dataArray = [];
    for (key in data){
        if (typeof data[key] === 'object') {
            // This error should be considered DEBUG only. 
            // Do not send bad data and you will never need to report it to the user.
            console.error('Data input object for AJAX request contained an object property.');
            return;
        }
        dataArray.push(key + '=' + encodeURIComponent(data[key]));
    }
    return dataArray.join('&');
}