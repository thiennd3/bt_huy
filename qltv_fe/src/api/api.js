export const createBook = (book) => {
    var myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    var raw = JSON.stringify(book);

    var requestOptions = {
        method: 'POST',
        headers: myHeaders,
        body: raw,
    };

    return fetch("http://localhost:8080/api/books", requestOptions)
        .then(response => response.json())

}
export const deleteBook = (book) => {
    console.log(book);
}

export const createAccount = (book) => {
    console.log(book);
}

export const getBooks = (page,limit,key) => {
    var requestOptions = {
        method: 'GET',
    };

    return fetch(`http://localhost:8080/api/books?page=${page}&limit=${limit}&key_search=ok`, requestOptions)
        .then(response => response.json())

}

export const login = (account) => {
    console.log(account);
}