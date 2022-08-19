const input = document.querySelector("#input");
const result = document.querySelector("#result");

function btnEncrypt_OnClick() {
    console.log("click");
    result.value = Encrypt(input.value, true);
}

function btnDecrypt_OnClick() {
    console.log("click");
    result.value = Encrypt(input.value, false);
}

function btnCopy_OnClick() {
    console.log("click");

    navigator.clipboard.writeText(result.value);

}

function Encrypt(input, handle) {
    const table = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    console.log(input, handle);

    for(let atual = 0; atual < table.length; atual++)
        if(handle) {
            if(input.includes(table[atual][0]))
                input = input.replaceAll(table[atual][0], table[atual][1]);
        }            
        else
            if(input.includes(table[atual][1]))
                input = input.replaceAll(table[atual][1], table[atual][0]);
    
    console.log(input)

    return input;
}