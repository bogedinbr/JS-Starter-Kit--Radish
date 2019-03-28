/*
This function helps handle common AJAX requests.
Parameters:
    callback:   A function to call when the response is returned from the server.
    target:     The server resource to which the request will be sent.
    data:       A javascript object that should be sent with the request. Must not contain sub-objects or arrays.
Dependencies:
    onError.js:    Used to show an message to the user for unrecoverable errors
    encodeData.js: Used to create the uri POST string from the data
*/
function ajax(callback, target, data){
    var request = new XMLHttpRequest();
    if (!request){
        onError('Unable to create AJAX request.');
        return
    }
    
    request.onreadystatechange = function(){
        if (request.readyState === XMLHttpRequest.DONE){
            if (request.status === 200){
                callback(request.responseText);
            } else {
                onError('Server responded with status code: ' + request.status);
            }
        }
    }
    
    request.open('POST', target);
    request.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    request.setRequestHeader('Cache-Control', 'no-cache');
    request.send(encodeData(data));
}