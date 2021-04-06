/**
 * --------------------------------------------------------------------------
 * Swapform (v1.0): swapform.js
 * Licensed under MIT (https://github.com/runthis/swapform/blob/main/LICENSE)
 * --------------------------------------------------------------------------
 */

class FormControl {
	#blacklist = ['file', 'color', 'range'];
	#labelclass = '.sf-label';
	#labelactive = '.sf-label-active';
	#labelfilled = '.sf-label-filled';
	
	constructor() {
		this.#default();
		this.#event();
	}
	
	#default() {
		for( let element of this.#elements() ) {
			
			this.#create(element);
			
			if( !this.#empty(element) ) {
				if( !this.#class(this.#prev(element)).contains(this.#labelactive.substr(1)) ) {
					this.#planimate(this.#prev(element), function(element, control){
						control.#blur(control.#next(element), control);
					});
				}
			}
			
			if( element.className.indexOf('sf-textarea') != -1 && element.className.indexOf('-fixed') == -1 ) {
				this.#rows(element);
			}
		}
	}
	
	
	#event() {
		for( let element of this.#elements() ) {
			element.addEventListener('focus', () => {
				this.#focus(element, this);
			});
			
			element.addEventListener('blur', () => {
				this.#blur(element, this);
			});
			
			if( element.className.indexOf('sf-textarea') != -1 && element.className.indexOf('-fixed') == -1 ) {
				element.addEventListener('input', (event) => {
					this.#rows(element);
				});
			}
		}
	}
	
	#focus(element, control) {
		
		if( !control.#empty(element) ) {
			control.#swap(control.#prev(element), 'description');
		}
		
		control.#class(control.#prev(element)).remove(control.#labelfilled.substr(1));
		if( !control.#class(control.#prev(element)).contains(control.#labelactive.substr(1)) ) {
			control.#class(control.#prev(element)).add(control.#labelactive.substr(1));
			control.#swap(control.#prev(element), 'description');
		}
		
		control.#borders(element);
	}
	
	#blur(element, control) {
		if( !control.#empty(element) ) {
			control.#class(control.#prev(element)).add(control.#labelfilled.substr(1));
			if( !control.#class(control.#prev(element)).contains(control.#labelactive.substr(1)) ) {
				control.#class(control.#prev(element)).add(control.#labelactive.substr(1));
			}
			
			if( !control.#data(control.#prev(element)).filled ) {
				control.#swap(control.#prev(element), 'originaltext');
			} else {
				control.#swap(control.#prev(element), 'filled');
			}
			
			control.#borders(element);
			
		} else {
			
			if( element.type != 'date' ) {
				control.#class(control.#prev(element)).remove(control.#labelactive.substr(1));
				control.#next(control.#next(element).firstElementChild).classList.remove('sf-label-no-border-top');
			}
			
			control.#swap(control.#prev(element), 'originaltext');
		}
	}
	
	#swap(element, type) {
		if( !this.#data(element).originaltext ) {
			this.#data(element).originaltext = element.innerHTML;
		}
		
		if( this.#data(element)[type] ) {
			element.innerHTML = this.#data(element)[type];
		}
	}
	
	#elements() {
		let list = [];
		for( let element of this.#query() ) {
			if( this.#blacklist.indexOf(element.nextElementSibling.type) == -1 ) {
				list.push(element.nextElementSibling);
			} else {
				this.#class(element).remove(this.#labelclass.substr(1));
			}
		}
		return list;
	}
	
	#query() {
		return document.querySelectorAll('[class^="'+this.#labelclass.substr(1)+'"]');
	}
	
	#filled(element) {
		if( this.#data(element).description ) {
			let old = element.innerHTML;
			element.innerHTML = this.#data(element).description;
			this.#data(element).description = old;
		}
	}
	
	#planimate(element, callback) {
		element.style.transition = 'none';
		callback(element, this)
		element.style.transition = '';
	}
	
	#data(element) {
		return element.dataset;
	}
	
	#class(element) {
		return element.classList;
	}
	
	#prev(element) {
		return element.previousElementSibling;
	}
	
	#next(element) {
		return element.nextElementSibling;
	}
	
	#empty(element) {
		
		if( element.value !== undefined ) {
			return element.value.length == 0;
		} else if( element.innerText !== undefined ) {
			return element.innerText.trim().length == 0;
		}
		
		return false;
	}
	
	#widths(element, width) {
		
		if( this.#class(element).contains('sf-label-sm') || this.#class(element).contains('sf-label-filled') ||  !this.#empty(this.#next(element))  ) {
			return width;
		}
		return (width * .75);
	}
	
	#create(element) {
		let div = () => {
			return document.createElement('div');
		};
		
		let container = div();
		let left = div();
		let middle = div();
		let right = div();
		
		
		container.className = 'sf-form-slot';
		left.className = 'sf-form-slot-left';
		middle.className = 'sf-form-slot-middle';
		right.className = 'sf-form-slot-right';
		
		
		container.appendChild(left);
		container.appendChild(middle);
		container.appendChild(right);
		
		element.after(container);
	}
	
	#rows(element) {
		if( element.style.height && element.style.height != '32px' ) {
			element.style.height = '32px';
		}
		
		if( element.scrollHeight != element.clientHeight ) {
			element.style.height = (element.scrollHeight + 32) + 'px';
		}
	}
	
	#borders(element) {
		let leftWidth = this.#prev(element).offsetLeft;
		let middleWidth = this.#widths(this.#prev(element), this.#prev(element).offsetWidth)+ 2;
		let firstChild = this.#next(element).firstElementChild;
		
		firstChild.style.width = leftWidth + 'px';
		this.#next(firstChild).style.width = middleWidth + 'px';
		this.#next(firstChild).classList.add('sf-label-no-border-top');
	}
}


(function() {
	new FormControl;
})();
