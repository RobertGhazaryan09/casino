const balance = document.querySelector('#balance')
const button = document.querySelector('#click')
const rows = document.querySelectorAll('.row');
const columns = document.querySelectorAll('.column');
const bet = document.querySelectorAll('.bet');
let arr = ["images/bells.jpg", "images/seven.jpg", "images/limon.jpg", "images/orange.jpg", "images/salor.jpg", "images/watermelon.jpg", "images/xaxox.jpg", "images/star.jpg"]
let value = bet[0];
const lastWin = document.querySelector('#lastwin');
const images = document.querySelectorAll('.img')
bet[0].addEventListener('click', () => {
    value = bet[0];
    bet[0].style.backgroundColor = 'green'
    bet[1].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[2].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[3].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[4].style.backgroundColor = 'rgb(0, 255, 89)'
})
bet[1].addEventListener('click', () => {
    value = bet[1];
    bet[1].style.backgroundColor = 'green'
    bet[0].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[2].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[3].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[4].style.backgroundColor = 'rgb(0, 255, 89)'
})
bet[2].addEventListener('click', () => {
    value = bet[2];
    bet[2].style.backgroundColor = 'green'
    bet[1].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[0].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[3].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[4].style.backgroundColor = 'rgb(0, 255, 89)'
})
bet[3].addEventListener('click', () => {
    value = bet[3];
    bet[3].style.backgroundColor = 'green'
    bet[1].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[2].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[0].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[4].style.backgroundColor = 'rgb(0, 255, 89)'
})
bet[4].addEventListener('click', () => {
    value = bet[4];
    bet[4].style.backgroundColor = 'green'
    bet[1].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[2].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[3].style.backgroundColor = 'rgb(0, 255, 89)'
    bet[0].style.backgroundColor = 'rgb(0, 255, 89)'
})


let x = true

button.addEventListener('click', () => {
    if (x) {
        new Audio("https://assets.mixkit.co/active_storage/sfx/1998/1998-preview.mp3").play()
        balance.innerHTML = Number(balance.innerHTML) - Number(value.innerHTML)
        if (balance.innerHTML >= Number(value.innerHTML)) {
            let starCount = 0
            let i = 0;
            setInterval(() => {
                if (i < columns.length) {
                    images[i].src = arr[Math.round(Math.random() * (arr.length - 1))]
                    if (images[i].src.includes("images/star.jpg")) {
                        new Audio("https://assets.mixkit.co/active_storage/sfx/1999/1999-preview.mp3").play()
                        starCount++
                    }
                }
                i++
            }, 123)
            setTimeout(() => {
                if (starCount >= 3) {
                    if (starCount >= 4) {
                        if (starCount === 5) {
                            lastWin.innerHTML = Number(value.innerHTML) * 300
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 200
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else {
                        lastWin.innerHTML = Number(value.innerHTML) * 20
                        balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                    }
                }
                if (images[0].src === images[3].src && images[0].src === images[6].src) {
                    if (images[0].src.includes('images/seven.jpg')) {
                        if (images[0].src === images[9].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 600
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 450
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 40
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/xaxox.jpg')) {
                        if (images[0].src === images[9].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 400
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 250
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 20
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/watermelon.jpg')) {
                        if (images[0].src === images[9].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 400
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 250
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 20
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/bells.jpg')) {
                        if (images[0].src === images[9].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 300
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 200
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 16
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/limon.jpg')) {
                        if (images[0].src === images[9].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 80
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 10
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/orange.jpg')) {
                        if (images[0].src === images[9].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 80
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 10
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/salor.jpg')) {
                        if (images[0].src === images[9].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 80
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 10
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    }
                    new Audio("https://assets.mixkit.co/active_storage/sfx/2067/2067-preview.mp3").play()
                }
                if (images[1].src === images[4].src && images[1].src === images[7].src) {
                    if (images[1].src.includes('images/seven.jpg')) {
                        if (images[1].src === images[10].src) {
                            if (images[1].src === images[13].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 620
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)

                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 470
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 42
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[1].src.includes('images/xaxox.jpg')) {
                        if (images[1].src === images[10].src) {
                            if (images[1].src === images[13].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 420
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 255
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 22
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[1].src.includes('images/watermelon.jpg')) {
                        if (images[1] === images[10]) {
                            if (images[1] === images[13]) {
                                lastWin.innerHTML = Number(value.innerHTML) * 420
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 255
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 22
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[1].src.includes('images/bells.jpg')) {
                        if (images[1].src === images[10].src) {
                            if (images[1].src === images[13].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 310
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 205
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 18
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[1].src.includes('images/limon.jpg')) {
                        if (images[1].src === images[10].src) {
                            if (images[1].src === images[13].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 170
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 85
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 13
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[1].src.includes('images/orange.jpg')) {
                        if (images[1].src === images[10].src) {
                            if (images[1].src === images[13].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 170
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 85
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 13
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[1].src.includes('images/salor.jpg')) {
                        if (images[1].src === images[10].src) {
                            if (images[1].src === images[13].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 170
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 85
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)

                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 13
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    }
                    new Audio("https://assets.mixkit.co/active_storage/sfx/2067/2067-preview.mp3").play()
                }
                if (images[2].src === images[5].src && images[2].src === images[8].src) {
                    if (images[2].src.includes('images/seven.jpg')) {
                        if (images[2].src === images[11].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 600
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 450
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 40
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/xaxox.jpg')) {
                        if (images[2].src === images[11].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 400
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 250
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 20
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/watermelon.jpg')) {
                        if (images[2].src === images[11].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 400
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 250
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 20
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/bells.jpg')) {
                        if (images[2].src === images[11].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 300
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 200
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 16
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/limon.jpg')) {
                        if (images[2].src === images[11].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 80
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 10
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/orange.jpg')) {
                        if (images[2].src === images[11].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 80
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 10
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/salor.jpg')) {
                        if (images[2].src === images[11].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 80
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 10
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    }
                    new Audio("https://assets.mixkit.co/active_storage/sfx/2067/2067-preview.mp3").play()
                }
                if (images[0].src === images[4].src && images[0].src === images[8].src) {
                    if (images[0].src.includes('images/seven.jpg')) {
                        if (images[0].src === images[10].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 450
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 300
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 20
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/xaxox.jpg')) {
                        if (images[0].src === images[10].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 300
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 15
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/watermelon.jpg')) {
                        if (images[0].src === images[10].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 300
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 15
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/bells.jpg')) {
                        if (images[0].src === images[10].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 100
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 10
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/limon.jpg')) {
                        if (images[0].src === images[10].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 100
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 40
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 7
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/orange.jpg')) {
                        if (images[0].src === images[10].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 100
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 40
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 7
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[0].src.includes('images/salor.jpg')) {
                        if (images[0].src === images[10].src) {
                            if (images[0].src === images[12].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 100
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 40
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 7
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    }
                    new Audio("https://assets.mixkit.co/active_storage/sfx/2067/2067-preview.mp3").play()
                }
                if (images[2].src === images[4].src && images[2].src === images[6].src) {
                    if (images[2].src.includes('images/seven.jpg')) {
                        if (images[2].src === images[10].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 450
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 300
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 20
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/xaxox.jpg')) {
                        if (images[2].src === images[10].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 300
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 15
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/watermelon.jpg')) {
                        if (images[2].src === images[10].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 300
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 15
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/bells.jpg')) {
                        if (images[2].src === images[10].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 150
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 100
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 10
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/limon.jpg')) {
                        if (images[2].src === images[10].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 100
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 40
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 7
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/orange.jpg')) {
                        if (images[2].src === images[10].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 100
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 40
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 7
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    } else if (images[2].src.includes('images/salor.jpg')) {
                        if (images[2].src === images[10].src) {
                            if (images[2].src === images[14].src) {
                                lastWin.innerHTML = Number(value.innerHTML) * 100
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            } else {
                                lastWin.innerHTML = Number(value.innerHTML) * 40
                                balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                            }
                        } else {
                            lastWin.innerHTML = Number(value.innerHTML) * 7
                            balance.innerHTML = Number(balance.innerHTML) + Number(lastWin.innerHTML)
                        }
                    }
                    new Audio("https://assets.mixkit.co/active_storage/sfx/2067/2067-preview.mp3").play()
                }
            }, 2500)

        } else {
            alert('no money')
        }
        console.log('xaxa xaxa tenqnq inchqan kkres');
        x = false
        setTimeout(() => {
            x = true
        }, 2500);
    } else {
        console.log('spasi ara');
    }

})

