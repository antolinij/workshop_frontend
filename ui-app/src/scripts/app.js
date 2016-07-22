function Operation(type, operation){
	this.type = type;
	this.operation = operation;

	/* mocks */
	var myMap = {
	    '13 de febrero' : {
	    	'article_1' : {
	    		'title' : 'Mochila montaña',
	        	'status' : 'aprobado',
	        	'price' : '100'	
	    	},
	    	'article_2' : {
	    		'title' : 'Bicicleta',
	        	'status' : 'cancelado',
	        	'price' : '87'	
	    	},
	    	'article_3' : {
	    		'title' : 'Remera deportiva',
	        	'status' : 'esperando un pago',
	        	'price' : '34'		
	    	},
	    	'article_4' : {
	    		'title' : 'Un Auto',
	        	'status' : 'aprobado',
	        	'price' : '631'		
	    	}
	    },
	    '15 de marzo' : {
	    	'article_1' : {
	    		'title' : 'Pelota de futbol',
	        	'status' : 'aprobado',
	        	'price' : '100'	
	    	},
	    	'article_2' : {
	    		'title' : 'Mac Book Pro',
	        	'status' : 'cancelado',
	        	'price' : '34287'	
	    	},
	    	'article_3' : {
	    		'title' : 'Mesa',
	        	'status' : 'esperando un pago',
	        	'price' : '44'		
	    	}
	    },
	    '19 de marzo' : {
	    	'article_1' : {
	    		'title' : 'Poster',
	        	'status' : 'aprobado',
	        	'price' : '20'	
    		}
    	}
	};

	var articles = document.getElementById('articles');

	articles.insertAdjacentHTML('beforeend', '<form id="operation">');

	for (var date in myMap) {
		
		articles.insertAdjacentHTML('beforeend', '<h2>'+ date +'</h2>');	

		for (key in myMap[date]){
			
			articles.insertAdjacentHTML('beforeend', '<section><article><div class="row"><div class="chbox"><label for="name"></label><input type="checkbox" id="name" /></div><div class="description"><h4>'+myMap[date][key]["title"]+'</div><div class="price">'+myMap[date][key]["price"]+'</div><div class="price">'+myMap[date][key]["status"]+'</h4></div></article></section>');
			
		}
	}
	articles.insertAdjacentHTML('beforeend', '</form>');

	var deleted = document.getElementById('deleted');
	var archived = document.getElementById('archived');
	var row_archived = document.getElementById('row_archived');

	deleted.addEventListener("click", makeAction);
	archived.addEventListener("click", makeAction);

	function makeAction() {
	    
	    var action = this.dataset.action; 
	    
	    var checkboxes = document.querySelectorAll("input[type=checkbox]");

		checkboxes.forEach(function (element, index, array) {
    	
    		if ( action == "deleted"){
				if (element.checked){
    				element.parentNode.parentNode.remove(element);
    			}
			}
			else{
				if (element.checked){
    				row_archived.appendChild(element.parentNode.parentNode);
    				element.checked = false;
    				console.log("un checkeado");
    			}
			}
		});
	}
};

Operation.prototype.execute = function () {
	console.log("metodo execute");
};

Operation.prototype.cancel = function () {
	console.log("metodo cancel");
};

Operation.prototype.refund = function () {
	console.log("metodo refund");
};

Operation.prototype.getType = function () {
	return this.type;
};

var op1 = new Operation("type1", "op1");

