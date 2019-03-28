/*
This system gets a list of all nodes with the class repeater-container and clones them to create templates. Call repeat() with the two parameters to replace the contents of the container with as many copies of its child as there are items in the provided array.
Parameters:
    id:     The ID of the repeater-container to be updated with data.
    data:   A javascript array to repeat the template with. Sub-objects or arrays are currently not handled, may cause unexpected results.
*/
repeat = (function(){
var containers = document.getElementsByClassName('repeater-container');
var repeaters = {};

for (var i=0; i<containers.length; i++){
    var containerTemplate = containers[i].cloneNode(true);
    var nodeTemplate = containerTemplate.removeChild(containerTemplate.firstElementChild);
    
    repeaters[containers[i].id] = {
        containerNode: containers[i],
        containerTemplate: containerTemplate,
        nodeTemplate: nodeTemplate
    }
}

return function repeat(id, data){
    var newContainer = repeaters[id].containerTemplate.cloneNode(true);
    for (var i=0; i<data.length; i++){
        var currentNode = repeaters[id].nodeTemplate.cloneNode(true);
        currentNode.id = id+data[i].id;
        delete data[i].id;
        for (currentKey in data[i]){
            currentNode.querySelector('.template-'+ currentKey).innerHTML = data[i][currentKey];
        }
        newContainer.appendChild(currentNode);
    }
    repeaters[id].containerNode.parentNode.replaceChild(newContainer, repeaters[id].containerNode);
    repeaters[id].containerNode = newContainer;
}
})();