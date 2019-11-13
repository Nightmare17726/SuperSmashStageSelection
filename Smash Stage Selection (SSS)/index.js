//Created by Nightmare

var Element = {
    urlMain: 'https://supersmashult-stages.netlify.com/',
    overlay: function(el, num) {
        var oak = document.querySelector(`.map${num}`);
        var elm = document.getElementById(el);

        oak.addEventListener('click', function() {
            oak.classList.toggle('overlay');
            oak.classList.toggle(el);
            oak.style.backgroundImage = `url(${el}D.jpg)`;

            //elm.innerHTML = "";

            elm.innerHTML = el;
            //elm.style.display = "inline";

            oak.addEventListener('click', function() {
                oak.classList.remove('overlay');
                oak.classList.add(el);
                oak.style.backgroundImage = `url(${el}.jpg)`;

                //elm.innerHTML = el;
                elm.innerHTML = "";
            });
        });
    },
    sign: function() {
        document.querySelector('.body').insertAdjacentHTML('afterBegin', 'Created By: Nightmare');
    },
    index: function() {
        location.replace('index.html');
    },
    ruleSelection: function() {
        location.replace('ruleselection.html');
    },
    gen6Set: function() {
        location.replace('ruleset1.html');
    },
    reloadPg: function() {
        location.reload();
    },
    gentRules: function() {
        location.replace('gentrules.html');
    }
}

Element.sign();

//ruleselector.html - the main page (currently not being used)
/*
if (location.href.includes('ruleselection')) {
    document.getElementById('ruleSelector1').addEventListener('click', function() {
        location.replace('ruleSet1.html');
    });
    document.getElementById('ruleSelector2').addEventListener('click', function() {
        location.replace('ruleSet2.html');
    });
    document.getElementById('ruleSelector3').addEventListener('click', function() {
        location.replace('ruleSet3.html');
    });
    document.getElementById('ruleSelector4').addEventListener('click', function() {
        location.replace('ruleSet4.html');
    });
} */

//ruleSet1.html - the first ruleset
if (location.href.includes('ruleset1')) {
    Element.overlay('battlefield', 1);
    Element.overlay('smashville', 2);
    Element.overlay('pokeStadium2', 3);
    Element.overlay('finalDestination', 4);
    Element.overlay('unovaPkmnLeague', 5);
    Element.overlay('castleSiege', 6);
    Element.overlay('townAndCity', 7);
    Element.overlay('yoshiStory', 8);
    Element.overlay('kalosPkmnLeague', 9);
    Element.overlay('yoshiIsland', 10);
}

/*
//ruleSet2.html - the second ruleset
if (location.href.includes('ruleSet2')) {

}

//ruleSet3.html - the third ruleset
if (location.href.includes('ruleSet3')) {

}

//ruleSet4.html - the fourth ruleset
if (location.href.includes('ruleSet4')) {

}*/