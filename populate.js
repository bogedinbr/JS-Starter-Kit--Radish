/*
This function populates data from an object into an HTML container. The names in the data should match class names in the html to be populated. Those classnames should be prepended with the ID of the container and a dash.
Use the else statement to check your data for accuracy or if something isn't working right.
Parameters:
    id:     The ID of the container for all the elements to be updated with data.
    data:   A javascript object to populate with. Sub-objects or arrays are currently not handled, may cause unexpected results.
*/
function populate(id, data){
    var container = document.getElementById(id);
    for (currentKey in data){
        if (container.querySelector('.'+ id +'-'+ currentKey) !== null){
            container.querySelector('.'+ id +'-'+ currentKey).innerHTML = data[currentKey];
        } else {
            // Debug sanity check
            // console.log(currentKey + ' has no element to populate.')
        }
    }
}