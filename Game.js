alert("u moet de volgende vragen beantwoorden, de vragen gaan over Nederland.")


var vraag;
var points=0;

antwoord = prompt("Welk land ligt ten zuiden van Nederland?");

if (antwoord == 'belgië') {
    points = points + 1;
    antwoord = prompt('Hoeveel coupletten heeft het Wilhelmus?');

    if (antwoord == '15') {
        points=points+1;
        antwoord = prompt('Hoe heet het grootste Nederlandse Waddeneiland?');

        if (antwoord == 'texel') {
            points=points+1;
            antwoord = prompt('Op welke datum is koningin Beatrix jarig?');

            if (antwoord == '31 januari') {
                points=points+1;
                antwoord = prompt('Welke provincie in Nederland is het dunst bevolkt?');

                 if (antwoord == 'drenthe') {
                    points=points+1;
                    antwoord = prompt('Wat is de start en aankomstplaats van de Elfstedentocht?');

                    if (antwoord == 'leeuwarden') {
                        points=points+1;
                        antwoord = prompt('In welke stad vind je het Nederlands Spoorwegmuseum');

                        if (antwoord == 'utrecht') {
                            points=points+1;
                            antwoord = prompt('Welke dam sluit het IJsselmeer af van de Waddenzee?');

                                 if (antwoord == 'de afsluitdijk') {
                                    points=points+1;
                                    antwoord = prompt('Welke achternaam komt in Nederland het meest voor?');

                                     if (antwoord == 'de vries') {
                                         points=points+1;
                                         antwoord = prompt('In welke zee liggen de Waddeneilanden?');

                                         if (antwoord == 'noordzee') {
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

document.write('quiz over Nederland. <br>');

document.write('U heeft ' + points +  ' punt(en) behaald van de 10.<br>');

document.write('Druk op f5 om het opnieuw te spelen of refresh de site.')

