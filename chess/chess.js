const bindingSize = 8;
let black = "#";
let white = " ";
let raw = "";




for (let i = 0; i < bindingSize; i++) {
    raw = "";
    for (let j = 0; j < bindingSize; j++) {

        if ((i + j) % 2) {
            raw += black;

        }
        else {
            raw += white;
        }
    }
    console.log(raw);
    // if (i % 2 == 0) {
    //     console.log("# # # #");
    // }
    // else {
    //     console.log(" # # # #");

    // }
}