$(document).ready(function () {
    var data = [];
    var inputObj = {};
    var scores = [];
    $('.sub-btn').on('click', function (event) {

        inputObj["name"] = $('#name').val().trim()
        inputObj["imageLink"] = $('#link-img').val().trim();
        for (var i = 0; i < 10; i++) {
            var res = $(`#q${i}`).val()
            scores.push(res);
        }
        inputObj["scores"] = scores;
        data.push(inputObj);
        $.post("/api/friends", inputObj);
        console.log('submitted');


    })
})

