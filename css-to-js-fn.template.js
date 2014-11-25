function css_to_js (css) {
	if(typeof document === 'undefined') {
		//not in the browser
		return;
	}
	var d = document;


	//keep track of css code that's allready been inserted
	d.less_to_js__inserted = d.less_to_js__inserted || {};
	if (d.less_to_js__inserted[css]){
		return;
	}
	d.less_to_js__inserted[css] = true;


	//inject a style tag with the css
	var elem = d.createElement('style');
	elem.setAttribute('type', 'text/css');

	if ('textContent' in elem) {
		elem.textContent = css;
	} else {
		elem.styleSheet.cssText = css;
	}

	d.getElementsByTagName('head')[0].appendChild(elem);
};
