'use strict';

function getRepo(){
    $('form').submit(function(){
        $('#searchResults').empty();
        $('header').show();
        event.preventDefault();
        let userName = $('#user').val();
        let fetchURL = `https://api.github.com/users/${userName}/repos`;

        fetch(fetchURL)
            .then(response => {
                if(response.ok) {
                    return response.json();
                }
                throw new Error(response.statusText);
            })
            .then(responseJson => process(responseJson))
            .catch(err => {
                $('#searchResults').text(`Username ${err.message}`);
                $('header').hide();
            });
    });
}

function process(responseJson){
    console.log(responseJson);
    for(let i=0; i<responseJson.length; i++){
        //$('#results-list').append(`<li>
        $('#searchResults').append(`<li>
                <p>${responseJson[i].name}</p>
                <a href="${responseJson[i].html_url}" target="_blank">Link</a>
            </li>`);
    };
}

function start(){
    $('header').hide();
    getRepo();
};

$(start);




















