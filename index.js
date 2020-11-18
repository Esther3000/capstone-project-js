    var i = 0;
    function incrementValue() {
        i++;
        document.getElementById('inc').value = i;
    }
const output = document.querySelector('.output');
const add = document.querySelector('.cart-button');

if(window.localStorage.getItem("cart") == undefined){
     var cart = [];
     window.localStorage.setItem("cart", JSON.stringify(cart));
}

var cartEX = window.localStorage.getItem("cart");
var cart = JSON.parse(cartEX);


class item{
	constructor(name){
		this.createItem(name);
	}
    createItem(name){
    	var itemBox = document.createElement('div');
        itemBox.classList.add('item');

    	var input = document.createElement('input');
    	input.type = "text";
    	input.disabled = true;
    	input.value = name;
    	input.classList.add('item_input');

    	var checked = document.createElement('button');
    	checked.classList.add('checked');
    	checked.innerHTML = "&#10003;";
    	checked.addEventListener('click', () => this.checked(input, name));

    	var edit = document.createElement('button');
    	edit.classList.add('edit');
    	edit.innerHTML = "&#128393;";
    	edit.addEventListener('click', () => this.edit(input, name));

    	var remove = document.createElement('button');
    	remove.classList.add('remove');
    	remove.innerHTML = "&#128465;";
    	remove.addEventListener('click', () => this.remove(itemBox, name));

    	container.appendChild(itemBox);

        itemBox.appendChild(input);
        itemBox.appendChild(edit);
        itemBox.appendChild(checked);
        itemBox.appendChild(remove);

    }

    checked(input, name){
        if(input.disabled == true){
           input.style.opacity = 0.4;
        }
    	else{
            input.style.opacity = 1;
        }
    }

    edit(input, name){
        if(input.disabled == true){
            input.disabled = !input.disabled;
        }
    	else{
            input.disabled = !input.disabled;
            let indexof = cart.indexOf(name);
            cart[indexof] = input.value;
            window.localStorage.setItem("cart", JSON.stringify(cart));
        }
    }

    remove(itemBox, name){
        itemBox.parentNode.removeChild(itemBox);
        let index = cart.indexOf(name);
        cart.splice(index, 1);
        window.localStorage.setItem("cart", JSON.stringify(cart));
    }
}

add.addEventListener('click', confirm);

window.addEventListener('keydown', (e) => {
	if(e.which == 13){
		confirm();
	}
})

function confirm(){
	if(inputValue.value != ""){
		new item(inputValue.value);
        cart.push(inputValue.value);
        window.localStorage.setItem("cart", JSON.stringify(cart));
		inputValue.value = "";
	}else{
		alert('No task has been added');
	}
}


for (var i = 0 ; i < cart.length ; i++){
    new item(cart[i]);
}