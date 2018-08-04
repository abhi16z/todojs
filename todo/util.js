export default class util {

    static createItemElement(task) {
        let itemContainer = document.createElement('div');
        itemContainer.setAttribute('class', 'itemContainer');
        itemContainer.setAttribute('id', task.id);

        if(task.isCompleted){
            itemContainer.style.opacity=0.2;
            itemContainer.style.textDecoration = 'line-through';
        }

        itemContainer.innerHTML =
            `
        <div class='checkboxContainer'>
            <input type='checkbox' onclick='app.onCheckboxSelect()'>
          </div>

          <div class='itemDescription' onclick='app.onCompleteTask()'>
             ${task.description}
          </div>

          <div class='displayButtonContainer'>
            <button class='deleteButton' onclick='app.onRemoveTask()'> X </button>
          </div>

        `;
        return itemContainer;
    }

    static taskDescriptionValidator(input) {
        let length = input.replace(/ /g, '').length
        if (length > 0 && length <= 120)
            return true
        return false;
    }


    static shallowCopy(source){
        let shallowCopied = Object.assign || this.copy;

        return shallowCopied({}, source);

    }
    
    copy(target) {
        for (var i = 1; i < arguments.length; i++) {
            var source = arguments[i];
            for (var key in source) {
                if (Object.prototype.hasOwnProperty.call(source, key)) {
                    target[key] = source[key];
                }
            }
        }
        return target;
    };
}


/*

static createItemElement(item){
        let itemContainer=document.createElement('div');
        itemContainer.setAttribute('class', 'itemContainer');

        let checkboxContainer=document.createElement('div');
        let checkBoxEl= document.createElement('input');
        checkBoxEl.setAttribute('type', 'checkbox');
        checkboxContainer.appendChild(checkBoxEl);

        let itemDescription=document.createElement('div');
        let description = document.createTextNode(item.description);
        itemDescription.appendChild(description);

        let displayButtonContainer=document.createElement('div');

        let deleteButton=document.createElement('button');
        deleteButton.setAttribute('class','deleteButton');
        let deleteText = document.createTextNode('X');
        deleteButton.appendChild(deleteText);

        let completeButton=document.createElement('button');
        completeButton.setAttribute('class','completeButton');
        completeButton.innerHTML='&#10004;';

        displayButtonContainer.appendChild(deleteButton);
        displayButtonContainer.appendChild(completeButton);

        itemContainer.appendChild(checkboxContainer);
        itemContainer.appendChild(itemDescription);
        itemContainer.appendChild(displayButtonContainer);

        return itemContainer;

    }


     itemContainer.innerHTML=
        `
        <div class='checkboxContainer'>
            <input type='checkbox' onclick='app.onCheckboxSelect()'>
          </div>

          <div class='itemDescription'>
             ${description}
          </div>

          <div class='displayButtonContainer'>
            <button class='deleteButton' onclick='app.onRemoveItem()'> X </button>
            <button class='completeButton'> &#10004;</button>
          </div>

        `


    */