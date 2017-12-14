function generateName() {
    let url = 'https://acedev-project-name-generator-v1.p.mashape.com/with-number';

    $.ajax({
        type: 'GET',
        headers: {
            'X-Mashape-Key': 'UZ8o1uLBcTmshYqbstFIibDZGoz4p1wk4N5jsnp8SyUjoOrHGp',
            'Accept': 'application/json'
        },
        url: url,
        dataType: 'json',
        success: function (data) {
                getName(data);
        }
    });

    function getName(data) {
        let text = $('<p>' + data.dashed + ' </p>');

        $('#name-container').append(text);
    }
}