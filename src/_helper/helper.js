export function humanize(str, sprate = '_'){
    
    var i, frags = str.split(sprate);
    for (i=0; i<frags.length; i++) {
        frags[i] = frags[i].charAt(0).toUpperCase() + frags[i].slice(1);
    }
    return frags.join(' ');
}

export function ucfirst(string) {
	return string.charAt(0).toUpperCase() + string.slice(1);
}