export const isURL = (text: string) => {
    const pattern = new RegExp('^(https?:\\/\\/)?'+ // protocol
        '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|'+ // domain name
        '((\\d{1,3}\\.){3}\\d{1,3}))'+ // OR ip (v4) address
        '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*'+ // port and path
        '(\\?[;&a-z\\d%_.~+=-]*)?'+ // query string
        '(\\#[-a-z\\d_]*)?$','i'); // fragment locator
    return !!pattern.test(text);
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
            return `<a class='hashtag--text' href="${word}">${word}</a>`;
        }
        if(isURL(word)) {
            return `<a class='link--text' href="${word}" target="_blank">${shortenedLink(word)}</a>`;
        }
        if(word == '') {
            return `<br/>`
        }
        return `<span>${word}</span>`;
    })
    return newText.join(' ');
}