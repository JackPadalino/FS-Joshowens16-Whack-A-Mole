let score = $('#score')
const holes = $('.hole')
const moles = $('.mole')
const reset = $('#reset-btn')
const playGame = $('#play-btn')
$("#game-board").hide()
let sum = 0

playGame.click(function () {
        $('#game-menu').hide()
        $("#game-board").show()
})

$('.hole').click(function () {
        if ($(this).hasClass('hole mole')) {
                console.log($(this)[0])
                $(this).removeClass('.hole mole')
                sum += 1
                score.text(`Moles whacked: ${sum}`)
}

        
      });
setInterval(()=> {
        let random = Math.floor(Math.random() * holes.length);
        let currentMole = $(holes[random]);
        currentMole.toggleClass("mole")

}, 300)

reset.click(function () {
        sum = 0;
        score.text('Start Whackin!')
})

