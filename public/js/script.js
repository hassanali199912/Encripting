console.log('Holle From JS');

// cacerCyiper('ABCDEFGHI', 23, 0)
// aniffCyiper('zebbw', 7, 2, 1)


var maintextinput = document.getElementById('maintextinput')
var valuesOfCipher = document.getElementById('valuesOfCipher')

//cacerCyiper
var shift = document.getElementById('shift')
var ceaserEncy = document.getElementById('ceaserEncy')
var ceaserDency = document.getElementById('ceaserDency')

ceaserEncy.onclick = () => {
    var textvalue = maintextinput.value
    var shifttextvalue = shift.value


    valuesOfCipher.innerHTML = cacerCyiper(textvalue, parseInt(shifttextvalue), 0)
}
ceaserDency.onclick = () => {
    var textvalue = maintextinput.value
    var shifttextvalue = shift.value

    valuesOfCipher.innerHTML = cacerCyiper(textvalue, parseInt(shifttextvalue), 0)
}

// aniffCyiper 
var alphaValue = document.getElementById('alphaValue')
var betaValue = document.getElementById('betaValue')

var affineEncy = document.getElementById('affineEncy')
var affineDency = document.getElementById('affineDency')

affineEncy.onclick = () => {
    var textvalue = maintextinput.value
    var a = alphaValue.value
    var b = betaValue.value


    valuesOfCipher.innerHTML = aniffCyiper(textvalue, parseInt(a), parseInt(b), 0)
}
affineDency.onclick = () => {
    var textvalue = maintextinput.value
    var a = alphaValue.value
    var b = betaValue.value


    valuesOfCipher.innerHTML = aniffCyiper(textvalue, parseInt(a), parseInt(b), 1)
}






function cacerCyiper(string, shift, encyordency) {
    if (encyordency == 0) {
        var char = ''
        for (let index = 0; index < string.length; index++) {


            if (string.charAt(index).toLowerCase() === string.charAt(index)) {

                var char1 = ((string.charAt(index).charCodeAt(0) + shift - 97) % 26) + 97
                char += String.fromCharCode(char1)

            } else {

                var char1 = ((string.charAt(index).charCodeAt(0) + shift - 65) % 26) + 65
                char += String.fromCharCode(char1)

            }


        }

    } else {

        var char = ''
        for (let index = 0; index < string.length; index++) {


            if (string.charAt(index).toLowerCase() === string.charAt(index)) {

                var char1 = ((string.charAt(index).charCodeAt(0) - shift + 97) % 26) + 97
                char += String.fromCharCode(char1)

            } else {

                var char1 = ((string.charAt(index).charCodeAt(0) - shift + 65) % 26) + 65
                char += String.fromCharCode(char1)

            }


        }

    }

    return char
}
const alpha = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z']

function aniffCyiper(string, a, b, encyordency) {
    var res = ''
    if (encyordency == 0) {

        for (let index = 0; index < string.length; index++) {
            for (let i = 0; i < alpha.length; i++) {
                if (string.charAt(index) == alpha[i]) {
                    const char = (a * i + b) % 26
                    res += alpha[char]

                }

            }


        }


    } else {
        var mi = 0

        for (let i = 0; i < 26; i++) {
            if ((a * i % 26) == 1) {
                mi = i
            }
        }

        for (let i = 0; i < string.length; i++) {
            for (let j = 0; j < alpha.length; j++) {
                if (string.charAt(i) == alpha[j]) {
                    var x = mi * (j - b)
                    while (x <= 0) {
                        x += 26
                    }

                    const char = x % 26
                    res += alpha[char]
                }

            }

        }

    }
    return res

}