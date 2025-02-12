const messages = [
    "Daddy, I love you! ❤️🐶",
    "Mommy, I love you! ❤️🐶",
    "You are my favorite human! 🐾",
    "I will always be by your side! 🐶💕",
    "You're the best hooman ever! 🥰",
    "Every day with you is my favorite day! 🐾💖",
    "No matter what, I'll always wag my tail for you! 🐕✨",
    "Your hugs are my favorite place in the world! 🤗🐶",
    "You're not just my owner, you're my family! ❤️🐾",
    "Whenever you're sad, just remember: I love you so much! 🐶💛"
];

// Aquí coloca tu imagen ASCII. Puedes modificarla según tu diseño.
const asciiArt = String.raw`
                                                    .::::::::::::::..
                                                    :=-:::::----:::::::::...
                                                    .-:::-------=-:::::::::-:::::
                       .:-                   ...... :-==-----------::-----------==
     ...:--==--===-----==+*+-::-=+****+-:-=+**+++++==-==++=---==--=-:---------=++-
  :-=========+++=---::-=+*+++*##%%%%%%%###%%###*****+++=====---==--=----------+=+
:*+========+++=======-=++++*##%%%%%%%%%%%%%%%%%%##+++=+=====--::-=-=-:-------===-
++=======+++====+++==-===+*##%%%%%@@@@@@@@@@@@%%%#=----===+=-==----=::-----:--=*
*=====+=+*+=+++****+-===++**#%%%@@@@@@@@@@@@@@@@@#=-----======-=-----.:---:-===.
*======++=+++*##*++=======+=+*%@@@@@@@@@@@@@@@@@@%+------------=-----::----+=:
*======+++=+*#*+*+===------===#@@@@@@@@@@@@@@@@@%#+=-:::......:-=----=::---=
*=====+*===++++++===-::..:::==*#%@@@@@@@@@@@@@@@#*=--::.:-:....:==--=+-:---=-
-+===-++=-+**+++===-...-=-:::-=*%@@@@@@@@@@@@@@%#+=-::.=%%%-.::.==---*=---==-.
 =====++:  .=+=====:..=@@@--::-+*%@@@@@@@@@@@@@@#+=-:::-###-.:-.:----+------:
 .---++-     .-----::::*#*-==:=+*%@@@@@@@@@@@@@@%*++=-::::..:-:.-=::-=+==--.
   ::+=:       --=+:.:.:::::--=*%@@@@@@%%%%%%%%@@%%*+*=:-:::..:-=+=--::=-:
    -+-        -=**+:..:::--=+*%@@@%%%%%%%%%%%%%%%@%###++===--==+*+==:
    =+:        :+***=---=++*##%@%%%%%%%%%%%%%%%%%%%@%####***++=+**++=:
    -*=        :****+=++***#%%@@%%%%%%%%%%%%%%%%%%%@@%%%##***++*****+-
     =+.       =*****++***#%%@@%%%%%%%%%%%####%%%%%@@@@%%%###*******=+.
               =+*********#%@@%%%%%%%%%%#######%%%%%@@@@%%%%###****+--
                =+*******#%%%%%@%#**++++++==-==*#%%%%%@@@@%%%%%###*==
                :+*######%@%%@@%+-::::::::::::::-+%@@%%%@@%@%%%%##+-=
                 =+**####%%%%@@+::::---------:::::=%%%##%@@%%%%%##==.
                 .+****#%%%%%@*:::--=+**+*+=--:::::*%%%##%%%#####*+-
                  =+***#%##%%%=::::::-====-::::::::+%%%%###%##**#*+
                  ====+*##%%%#=:-::+-::::::.-=-::::=#%%%##*****+++*
                  :*==+*#%%%%%=::::-::::::::::-----*%%%%###**+==+*=
                  .-==+*#%%%%#*=::-::::::::::-=--=*####%###+=-==-
                 .:::--+*##%%###+:::::::::::::::=*########*=:-.
                 ::::--=+######*+-::::::::::::-=**#######*=:=.
                .::::--=-+*#####*==----:::----=+*#%%###*+--:::
                :::::-===-=+*####*+===========++######*--==:-::
                :::::+===-===+***+*++++==++++**+**+++=--++-:=...
`;

// Función que crea una burbuja de diálogo estilo cowsay a partir de un texto.
function createBubble(text) {
    const bubbleWidth = text.length;
    const top = " " + "_".repeat(bubbleWidth + 2);
    const middle = `< ${text} >`;
    const bottom = " " + "-".repeat(bubbleWidth + 2);
    return [top, middle, bottom];
}

// Función para unir dos bloques de texto (arreglos de líneas) en columnas.
function mergeColumns(leftLines, rightLines, spacing = 4) {
    const maxLines = Math.max(leftLines.length, rightLines.length);
    let merged = [];
    for (let i = 0; i < maxLines; i++) {
        const left = leftLines[i] || "";
        const right = rightLines[i] || "";
        merged.push(left + " ".repeat(spacing) + right);
    }
    return merged.join("\n");
}

const violetsMessage = () => {
    // Seleccionamos un mensaje aleatorio.
    const message = messages[Math.floor(Math.random() * messages.length)];

    // Creamos la burbuja de diálogo.
    const bubbleLines = createBubble(message);

    // Separamos la imagen ASCII en líneas.
    const asciiLines = asciiArt.trim().split("\n");

    // Centramos verticalmente la burbuja respecto al ASCII:
    // Calculamos cuántas líneas de padding necesitamos arriba y abajo.
    const totalAsciiLines = asciiLines.length;
    const bubbleLinesCount = bubbleLines.length;
    const paddingTop = Math.floor((totalAsciiLines - bubbleLinesCount) / 2);
    const paddingBottom = totalAsciiLines - bubbleLinesCount - paddingTop;
    const bubblePadded = [
        ...new Array(paddingTop).fill(""),
        ...bubbleLines,
        ...new Array(paddingBottom).fill("")
    ];

    // Unimos la imagen ASCII (izquierda) con la burbuja (derecha).
    const output = mergeColumns(asciiLines, bubblePadded, 4);

    // Imprimimos en consola con color azul (\x1b[34m) y luego reseteamos (\x1b[0m)
    console.log(`\x1b[34m${output}\x1b[0m`);
};

module.exports = {
    violetsMessage
};