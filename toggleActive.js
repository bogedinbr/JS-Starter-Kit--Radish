/*
This function changes classes to enable visibility switch of elements on a page.
Parameters:
    containerID:    The ID of the container to switch the contents of.
    newActiveID:    The ID of the element that should become visible.
    allowSame:      True if the same element can be made active that already was, false if toggling the current active should result in NONE being active.
    
Returns:
    True if something is now active.
    False if there is now no active element (only happens if allowSame is false)
*/

function toggleActive(containerID, newActiveID, allowSame = false){
    var oldActive = document.querySelector("#"+containerID+">.active");
    var newActive = document.getElementById(newActiveID);
    
    if (oldActive){
        oldActive.classList.remove("active");
        oldActive.classList.add("inactive");
    }
    
    if (oldActive != newActive || allowSame){
        newActive.classList.remove("inactive");
        newActive.classList.add("active");
        return true;   // Requested ID is now active (regardless whether it was before)
    }
    return false;    // Current active was made inactive
}