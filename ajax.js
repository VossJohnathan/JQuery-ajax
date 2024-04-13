$(document).ready(function (){
    //run when page load.
    const params = {
        q: 'javascript', //change to user input
        maxResults: 24,
    }

    $.get(
        `https://www.googleapis.com/books/v1/volumes`, //endpoint
        params,
        function (data) {
            console.log('results', data);

            //unique to google books.
            //for homework look up what the api returns this as.
            for (let item of data.items) {
                $('#results').append(`
                <h3>${item.volumeInfo.title}</h3>
                <p>${item.volumeInfo?.subtitle?.toUpperCase()}</p>
                <p>${item.volumeInfo?.authors?.join(' , ')}</p>
                `)                  
            }
        },
        'json'
    );
    console.log('done loading...')
});

function SearchFunction() {
    let searchText = form1.value;

    $('#AppleResults').html("");

    const params = {
        term: searchText,
        country: 'US',
        limit: 5,
    }

    $.get(
        `https://itunes.apple.com/search?term=Pirate&country=US&media=movie&limit=5`,
        params,
        function (appleData) {
            console.log('apple results', appleData);

            for (let results of appleData.results) {
                $('#AppleResults').append(`
                <h3>${results.trackName}</h3>
                
                `)
            }
        },
        `json`

    );
    console.log('Apple Done Loading')
}