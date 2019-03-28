/*
This function provides a common place to handle unrecoverable errors, such as server communication errors. Just appends the message to the page. Use CSS to position it over the page. Or whatever you want.
Parameters:
    error:   A text string to display as the error message.
Dependencies:
    encodeData.js: Used to create the uri string for the email link.
*/
function onError(error){
    var errorShade = document.createElement('div');
    errorShade.classList.add('error-shade');
    
    var errorBox = document.createElement('div');
    errorBox.classList.add('error-box');
    errorBox.classList.add('block');
    
    var emailInfo = {
        subject: 'Problem on bogedinbr.com', 
        body: 'Hey Brian,\nI just encountered an error on your website.\n\nI was working with this page:\n"' + window.location.pathname + '"\n\nAnd I got this error message:\n' + error
    }
    
    var errorInstructions = document.createElement('p');
    errorInstructions.innerHTML = 'This page experienced a problem, try reloading.<br>\
    If the problem persists, please <a href="mailto:brian@bogedinbr.com?'+encodeData(emailInfo)+'">email Brian</a> the following error message.';
    
    var errorMsg = document.createElement('p');
    errorMsg.innerHTML = '<b>' + error + '</b>';
    
    errorBox.appendChild(errorInstructions);
    errorBox.appendChild(errorMsg);
    errorShade.appendChild(errorBox);
    document.body.appendChild(errorShade);
}