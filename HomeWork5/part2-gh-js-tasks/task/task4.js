'use strict';

/**
 * Упражнение на строки
 *
 * Петя записался в кружок по программированию.
 * На первом занятии Пете задали написать простую программу.
 * Программа должна делать следующее: в заданной строке, которая состоит из прописных и строчных латинских букв, она:
 * удаляет все гласные буквы,
 * перед каждой согласной буквой ставит символ ".",
 * все прописные согласные буквы заменяет на строчные.
 *
 * Гласными буквами считаются буквы "A", "O", "Y", "E", "U", "I", а согласными — все остальные.
 * На вход программе подается ровно одна строка, она должна вернуть результат в виде одной строки,
 * получившейся после обработки.
 *
 * Помогите Пете справиться с этим несложным заданием.
 */

var stringDotTests = [
    {
        parameters: ["tour"],
        expectedResult: ".t.r"
    },
    {
        parameters: ["GeekHub"],
        expectedResult: ".g.k.h.b"
    },
    {
        parameters: ["aBAcAba"],
        expectedResult: ".b.c.b"
    },
    {
        parameters: ["aa"],
        expectedResult: ""
    }
];


function stringDot(word) {
    var result = '',
        letters = [];

    for (var i = 0; i < word.length; i++) {
        letters[i] = word.charAt(i).toLowerCase();

    }

    for (var key in letters){

        if (letters[key] === 'a'){
            letters.splice(key, 1);
        }
        if (letters[key] === 'e'){
            letters.splice(key, 1);
        }
        if (letters[key] === 'y'){
            letters.splice(key, 1);
        }
        if (letters[key] === 'u'){
            letters.splice(key, 1);
        }
        if (letters[key] === 'i'){
            letters.splice(key, 1);
        }
        if (letters[key] === 'o'){
            letters.splice(key, 1);
        }
        console.log(letters[i]);
    }

    for (var key in letters) {
        result += '.' + letters[key];
    }


    return result;

}


tasks.push({
    title: "Упражнение на строки",
    solution: stringDot,
    tests: stringDotTests
});
