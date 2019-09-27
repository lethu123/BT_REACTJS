function getMyEle(ele) {
    return document.getElementById(ele);
}

function submit1() {

    var price = getMyEle('price').value;
    console.log(price);
    var evaluate = getMyEle('evaluate').value;
    console.log(evaluate);

    var numberPeople = getMyEle('people').value;
    console.log(numberPeople);

    if (!price) {
        getMyEle('price-error').style.display = "block";
    } else {
        getMyEle('price-error').style.display = "none";
    }
    if (!evaluate) {
        getMyEle('evaluate-error').style.display = "block";
    } else {
        getMyEle('evaluate-error').style.display = "none";
    }
    if (!numberPeople) {
        getMyEle('people-error').style.display = "block";
    } else {
        getMyEle('people-error').style.display = "none";
    }
    
    if(price && evaluate && numberPeople) {
        var total = Math.round(((price * evaluate) / numberPeople) * 100)/100;
        getMyEle('total').innerHTML = total;
    }

    
}
