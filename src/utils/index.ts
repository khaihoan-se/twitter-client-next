export const isURL = (text: string) => {
    var urlPattern = new RegExp('^(https?:\\/\\/)?'+ // validate protocol
	    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // validate domain name
	    '((\\d{1,3}\\.){3}\\d{1,3}))'+ // validate OR ip (v4) address
	    '(\\:\\d+)?(\\/[-a-z\\d%_.~+@]*)*'+ // validate port and path
	    '(\\?[;&a-z\\d%_.~+=-]*)?'+ // validate query string
	    '(\\#[-a-z\\d_]*)?$','i'); // validate fragment locator
	  return !!urlPattern.test(text);
}

export const shortenedLink = (text: string) => {
    return text.replace(/^(https?:\/\/)?(www\.)?/i, '').replace(/\/$/, '');
}

export const checkIfValidHashtag = (text: string) => {
    const regexExp = /^#[^ !@#$%^&*(),.?":{}|<>]*$/gi;
    
    return regexExp.test(text);
}

export const changeText = (text: string) => {
    const arrText = text.split(' ');
    
    const newText = arrText.map(word => {
        if(checkIfValidHashtag(word)) {
            return `<a class='hashtag--text' href="search?hastag=${word}">${word}</a>`;
        }
        if(isURL(word)) {
            return `<a class='link--text' href="${word}" target="_blank">${shortenedLink(word)}</a>`;
        }
        if(word == '' || text.length == 0) {
            return `<p></p>`
        }
        if(word == '') {
            return `<br/>`
        }
        return `<span>${word}</span>`;
    })
    return newText.join(' ');
}