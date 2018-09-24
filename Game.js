alert("u moet de volgende vragen beantwoorden u mag geen rekenmachine gebruiken.")


var vraag;
var points=0;

antwoord = prompt("Wat is 5x9?");

if (antwoord == '45') {
    points = points + 1;
    antwoord = prompt('Wat is 6x6?');

    if (antwoord == '36') {
        points=points+1;
        antwoord = prompt('Wat is 7x6?');

        if (antwoord == '42') {
            points=points+1;
            antwoord = prompt('Wat is 7+6?');

            if (antwoord == '13') {
                points=points+1;
                antwoord = prompt('Wat is 9x2?');

                 if (antwoord == '18') {
                    points=points+1;
                    antwoord = prompt('Wat is 10x2?');

                    if (antwoord == '20') {
                        points=points+1;
                        antwoord = prompt('Wat is 19x2?');

                        if (antwoord == '38') {
                            points=points+1;
                            antwoord = prompt('Wat is 20x2?');

                                 if (antwoord == '40') {
                                    points=points+1;
                                    antwoord = prompt('Wat is 100x2?');

                                     if (antwoord == '200') {
                                         points=points+1;
                                         antwoord = prompt('Wat is 20x20?');

                                         if (antwoord == '400') {
                                            points=points+1;
                                            alert("U heeft een perfecte score behaald!")
} else {
                                           alert('U heeft fout geantwoord');
                                            } 

                                     } else {
                                        alert('U heeft fout geantwoord');
                                        } 

                             } else {
                                alert('U heeft fout geantwoord');
                                } 

                         } else {
                            alert('U heeft fout geantwoord');
                        } 
                     } else {
                        alert('U heeft fout geantwoord');
                    } 

                 } else {
                    alert('U heeft fout geantwoord');
                } 

            } else {
                alert('U heeft fout geantwoord');
            } 

        } else {
            alert('U heeft fout geantwoord');
        } 
    } else {

    }
} else {
    alert('U heeft fout geantwoord');
}
alert('U heeft ' + points +  ' punt(en) behaald van de 10.');

document.write('Oefenen toets rekenen. <br>');

document.write('U heeft ' + points +  ' punt(en) behaald van de 10.<br>');

document.write('Druk op f5 om het opnieuw te spelen of refresh de site.')

