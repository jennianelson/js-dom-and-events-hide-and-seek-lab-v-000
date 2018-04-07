function getFirstSelector(selector) {
    return document.querySelector(selector)
}

function nestedTarget() {
    return document.querySelector('div#nested div.target')
}

function deepestChild() {
    let grandNode =  document.getElementById('grand-node')
    let divs = grandNode.getElementsByTagName('div')
    return divs[divs.length -1]
}

function increaseRankBy(n) {
    let rankedLis = document.querySelectorAll('ul.ranked-list li')
    for (let i = 0; i < rankedLis.length ; i++) {
        let addN = parseInt(rankedLis[i].textContent) + n;
        rankedLis[i].textContent = addN.toString()
    }
}