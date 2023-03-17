
let a = "";
let b = "";
let opt;


const btnHandler = (btn) => {
    const pressValue = btn.innerText;
    const resultInput = document.getElementById('resultInput');
    if (isNaN(pressValue)) {
        if (pressValue == 'C') {
            a = "";
            b = "";
            opt = undefined;
            resultInput.value = "";
            return
        }
        if (pressValue == "=") {
            const result = phepTinh(a, b, opt);
            resultInput.value = result;
            a = "";
            b = "";
            opt = undefined;
        } else {
            opt = pressValue;
        }
    } else {
        if (opt) {
            b += pressValue;
            resultInput.value = b;
        } else {
            a += pressValue;
            resultInput.value = a;
        }
    }
}

const phepTinh = (a, b, opt) => {
   
    a = Number(a);
    b=Number(b);
    switch (opt) {
        case '+': {
           index.add(a,b);
        }
        case '-': {
                return a - b;
        }
        case 'x': {
                return a * b;
        }
        case ':': {
                return a / b;
        }
    }
}


