import React, { useState } from 'react';
import { ScrollView, StyleSheet, View, Text as RNText } from 'react-native';
import { Card, List, Text, IconButton } from 'react-native-paper';
import * as Speech from 'expo-speech';

const debateTopics1 = [
  {
    id: 1,
    topic: 'Lesson 38: DEBATE - LIFE CONDITION',
    description: ' SOCIAL—WHAT DO YOU THINK ABOUT LIFE IN TANA? ',
    arguments1: [
      {
        debate: "To be expensive[ixpensiv] ",
        frenchTranslation: "Cher ",
        malagasyTranslation: " Lafo"
      },
      {
        debate: "To be cheap[trip]",
        frenchTranslation: "Bon marché /pas cher ",
        malagasyTranslation: " Mora"
      },
      {
        debate: "The cost of living[kastov]  ",
        frenchTranslation: "Coût de la vie  ",
        malagasyTranslation: " Ny vidim-piainana"
      },
      {
        debate: "The things’ price[de tins]  ",
        frenchTranslation: "Prix des choses  ",
        malagasyTranslation: " Ny vidin-javatra "
      },
      {
        debate: "To increase/rise/go up[inkriz]",
        frenchTranslation: "Augmenter ",
        malagasyTranslation: " Miakatra"
      },
      {
        debate: "To decrease/drop off/decline[dikriz] ",
        frenchTranslation: "Diminuer",
        malagasyTranslation: " Midina"
      },
      {
        debate: "To afford/have the means to[eford]  ",
        frenchTranslation: "Avoir le moyen de ",
        malagasyTranslation: " Manana fahafahana"
      },
      {
        debate: "To stand/bear/tolerate[steind/ber/tolereit]  ",
        frenchTranslation: "Supporter ",
        malagasyTranslation: " Mahazaka"
      },
      {
        debate: "To make a good living  ",
        frenchTranslation: "Gagner sa vie ",
        malagasyTranslation: " Mandeha tsara ny atao"
      },
      {
        debate: "To struggle (to)/fight[stragel/fait]",
        frenchTranslation: "Lutter contre/avoir du mal à ",
        malagasyTranslation: " Miady mafy @"
      },
      {
        debate: "To suffer from [safer] ",
        frenchTranslation: " Souffrir (de)/subir ",
        malagasyTranslation: " Mijaly/mizaka "
      },
      {
        debate: "To face/confront[feis/kanfrant]",
        frenchTranslation: "Faire face à/confronter  ",
        malagasyTranslation: " Miatrika ny zava-misy "
      },
      {
        debate: "To get rid of sb/to avoid +ing ",
        frenchTranslation: "Se débarrasser/éviter de  ",
        malagasyTranslation: " Miala/ialana"
      },
      {
        debate: "unemployed/jobless people [animploid] ",
        frenchTranslation: "Des gens chômeurs  ",
        malagasyTranslation: " Olona tsy miasa"
      },
      {
        debate: "Unemployment rate",
        frenchTranslation: "Taux de chômage",
        malagasyTranslation: " Tahan’ny tsy fanan’(asa)"
      },
      {
        debate: "To found /create/establish[faond]",
        frenchTranslation: "Fonder/créer/établir  ",
        malagasyTranslation: " Manangana/mamorona"
      },
      {
        debate: "To send sb to school ",
        frenchTranslation: "Envoyer qlq1 à l’école",
        malagasyTranslation: " Mandefa olona hianatra "
      },
      {
        debate: "To educate/teach/instruct[ejoukeit]",
        frenchTranslation: "Éduquer/instruire",
        malagasyTranslation: " Mampianatra "
      },
      {
        debate: "The purchase power[pertreis paower]  ",
        frenchTranslation: "Pouvoir d’achat ",
        malagasyTranslation: " Fahefana mividy"
      },
      {
        debate: "To complain/moan about [kamplein]",
        frenchTranslation: "Se plaindre ",
        malagasyTranslation: " Mitaraina "
      },
      {
        debate: "In terms of/concerning about",
        frenchTranslation: "Pour ce qui est de/ au niveau de ",
        malagasyTranslation: " Raha mikasika manokana"
      },
      {
        debate: "The advantage of+ving[di advantidz] ",
        frenchTranslation: "L’avantage de ",
        malagasyTranslation: " Ny tombotsoan’ny "
      },
      {
        debate: "The disadvantage/drawback of[disadva]  ",
        frenchTranslation: "L’inconvénient/désavantage de ",
        malagasyTranslation: " Ny lafi-ratsin’ny "
      },
      {
        debate: "To rob/burglarize/burgle[rab/berglaraiz] ",
        frenchTranslation: "Dévaliser/dérober  ",
        malagasyTranslation: " Mandrava/mandroba"
      },
      {
        debate: "To shoplift/snatch sth[shoplift]  ",
        frenchTranslation: "Voler à l’etalage ",
        malagasyTranslation: " Mangalatra zvt @ boutik"
      },
      {
        debate: "Pickpocket ",
        frenchTranslation: "pickpocket ",
        malagasyTranslation: " Mpangaro-posy"
      },
      {
        debate: "To(be) pollute(d)/to be dirty [pôlout]  ",
        frenchTranslation: "Polluer(é)/sale",
        malagasyTranslation: " Mandoto/Maloto"
      },
      {
        debate: "To litter/throw away sth  ",
        frenchTranslation: "Laisser de détritus/ Jeter ",
        malagasyTranslation: " Manipitsipy zvt/mandoto"
      },
      {
        debate: "To be difficult/hard/tough to  ",
        frenchTranslation: "Être Difficile de ",
        malagasyTranslation: " Sarotra ny "
      },
      {
        debate: "To apply for a job  ",
        frenchTranslation: "Demander d’emploie  ",
        malagasyTranslation: " Manao fangatahana asa"
      },
      {
        debate: "To find/get a job",
        frenchTranslation: "Trouver un boulôt  ",
        malagasyTranslation: " Mahita asa"
      },
      {
        debate: "To look for/search/seek for sth ",
        frenchTranslation: "Chercher qlq chose",
        malagasyTranslation: " Mitady zvt"
      },
      {
        debate: "To humble oneself/to be humble[hambol]",
        frenchTranslation: "S’humilier/être humble ",
        malagasyTranslation: " Manetri-tena "
      },
      {
        debate: "To console/comfort sb[kensol/kamfor] ",
        frenchTranslation: "Consoler/réconforter   ",
        malagasyTranslation: " Mampionona"
      },
      {
        debate: "To be poor/ A poverty ",
        frenchTranslation: "Etre pauvre/ Pauvreté",
        malagasyTranslation: " Mahantra/ Fahantrana"
      },
      {
        debate: "Homeless ",
        frenchTranslation: "Sans abri",
        malagasyTranslation: " Tsy manan-kialofana "
      },
      {
        debate: "To overcome/defeat sb ",
        frenchTranslation: "Vaincre ",
        malagasyTranslation: " Mandresy"
      },
      {
        debate: "To pass through a problem",
        frenchTranslation: "Avoir un problem",
        malagasyTranslation: " Mandalo olana"
      },
      {
        debate: "To  be in trouble/in a hot water[trabel]",
        frenchTranslation: "Avoir des ennuis ",
        malagasyTranslation: " Mandalo olana"
      },
      {
        debate: "To resolve a problem[rizalv] ",
        frenchTranslation: "Resoudre un problem  ",
        malagasyTranslation: " Mamaha olona"
      },
      {
        debate: "To encourage [inkaridze] ",
        frenchTranslation: "Encourager  ",
        malagasyTranslation: " Mamporisika"
      },
      {
        debate: "To reach (my goal) ",
        frenchTranslation: "Atteindre mon but",
        malagasyTranslation: " Mahatratra ny tanjona"
      },
      {
        debate: "To work hard ",
        frenchTranslation: "Travailler dûr   ",
        malagasyTranslation: " Miasa mafy "
      },
      {
        debate: "To fail[feil]",
        frenchTranslation: "Echouer",
        malagasyTranslation: " Tsy tafita/ Resy "
      },
      {
        debate: "To succeed[saksid] ",
        frenchTranslation: " Réussir",
        malagasyTranslation: " Tafita "
      },
      {
        debate: "To discourage[diskaridze] ",
        frenchTranslation: " Décourager ",
        malagasyTranslation: " Manakivy "
      },
      {
        debate: "To endure[indior] ",
        frenchTranslation: " Sûbir",
        malagasyTranslation: " Miaritra/miatrika "
      },
      {
        debate: "To worsen/to get worse and worse ",
        frenchTranslation: " Empirer ",
        malagasyTranslation: " Miharatsy "
      },
      {
        debate: "To survive[servaiv] ",
        frenchTranslation: " Survivre",
        malagasyTranslation: "Miaina "
      },
      {
        debate: "To scrimp (and save) ",
        frenchTranslation: " Lésiner",
        malagasyTranslation: " Mitsitsy"
      },
      {
        debate: "To save",
        frenchTranslation: " Epargner ",
        malagasyTranslation: "   Mitahiry "
      },
    ],
  },
 
];

const debateTopics2 = [
  {
    id: 1,
    topic: 'Lesson 39: DEBATE - ANSWER',
    description: ' SOCIAL—WHAT DO YOU THINK ABOUT LIFE IN TANA? ',
    arguments1: [
      {
        debate:`  Well, thanks for your question, to begin with, I’m not from here, as you know, and I’ve been here for more than ten years now. Well, what I wanna say is that I have a lot to tell you concerning about the life in Tana. So, Let me tell you the reason why I moved here, six years ago, before I got my high school diploma, I had already thought of moving to follow my university
studies here, but when I first arrived here, I wasn’t really enjoying here, and that was because of the climate change as I used to live in a sunny town like Tulear. However, I had to get used to it
whether I stood it or not. As for now, as you can see I love to live here.
      So, to me, Tana has two different aspects of life condition, and that is the drawback and
advantage, I mean, on the one hand, it is good to live here in Tana when you have something to
do, like source of an income that you can depend on to cover all your monthly expenses, Why?
Because? You know that, here, everything needs money and without it, nothing is gonna go well,
for instance, wherever you go you have to take a bus or a taxi, because that’s the way it is, that’s
how people live here, that’s the rhythm.
    I like living here in Tana too, in terms of education, I mean, here in Tana where you can
find all the best universities of Madagascar. As long as you are a student, Tana is the right place
for you to get a good education and you have multiple choices. Not only Tana is it a capital of
Madagascar but also it’s advantageous, in terms of high technology, I reckon that, everything you
look for is found in Tana, so, you don’t need worry, whether you need materials for construction
or other things. But now, let me tell you the drawbacks of living here, we all know that our
country has been in crisis for.`,
      },
     
    ],
  },
 
];

const debateTopics3 = [
  {
    id: 1,
    topic: 'Lesson 48: DEBATE--EDUCATION',
    description: 'VOCABS—WHAT MEANS EDUCATIONS TO YOU? ',
    arguments1: [
      {
        debate: "TO BE EXPENSIVE[ixpensiv] ",
        frenchTranslation: "Cher ",
        malagasyTranslation: " Lafo"
      },
      {
        debate: "TO BE CHEAP[trip]",
        frenchTranslation: "Bon marché /pas cher ",
        malagasyTranslation: " Mora"
      },
      {
        debate: "THE COST OF LIVING[kastov livin]",
        frenchTranslation: "Coût de la vie  ",
        malagasyTranslation: " Ny vidim-piainana"
      },
      {
        debate: "SCHOOL FEE[skoul fi]  ",
        frenchTranslation: " Ecolage  ",
        malagasyTranslation: " Ny saram-pianarana "
      },
      {
        debate: "TO INCREASE/RISE[inkriz/raiz]",
        frenchTranslation: " Augmenter ",
        malagasyTranslation: " Miakatra"
      },
      {
        debate: "TO DECREASE[dikriz]",
        frenchTranslation: " Diminuer",
        malagasyTranslation: " Midina"
      },
      {
        debate: "TO AFFORD/TO HAVE THE MEANS TO[eford]",
        frenchTranslation: " Avoir le moyen de ",
        malagasyTranslation: " Manana fahafahana"
      },
      {
        debate: "TO HAVE AN OPPORTUNITY TO ",
        frenchTranslation: " Avoir une opportunité de ",
        malagasyTranslation: " Manana fahafahana"
      },
      {
        debate: "TO HAVE A CHANCE TO",
        frenchTranslation: " Avoir une occasion de ",
        malagasyTranslation: " Manana fahafahana"
      },
      {
        debate: "TO TAKE A CHANCE TO [trens]",
        frenchTranslation: " Saisir une occasion de ",
        malagasyTranslation: " Manararaotra @"
      },
      {
        debate: "TO FACE/ASSUME[feis/asiom]",
        frenchTranslation: " Faire face à/confronter ",
        malagasyTranslation: " Miatrika ny zava-misy "
      },
      {
        debate: "TO GET RID OF SB/STH",
        frenchTranslation: " Se débarrasser de qlq1/qlqch ",
        malagasyTranslation: " Miala "
      },
      {
        debate: "TO AVOID+V.ING ",
        frenchTranslation: "Éviter de ",
        malagasyTranslation: " Misoroka "
      },
      {
        debate: "TO UNDERESTIMATE [anderestimeit] ",
        frenchTranslation: "Sous-estimer ",
        malagasyTranslation: " Manambanimbany"
      },
      {
        debate: "TO FOUND[faond]ESTABLISH/CREATE",
        frenchTranslation: "Fonder/créer/établir  ",
        malagasyTranslation: " Manangana/mamorona"
      },
      {
        debate: "TO SEND YOUR CHILDREN TO SCHOOL ",
        frenchTranslation: "Envoyer qlq1 à l’école",
        malagasyTranslation: " Mandefa olona hianatra "
      },
      {
        debate: "TO EDUCATE[ejoukeit]",
        frenchTranslation: "Éduquer/instruire",
        malagasyTranslation: " Mampianatra "
      },
      {
        debate: "TO UNLOCK[anlak] YOUR POTENTIAL  ",
        frenchTranslation: "Déverrouiller votre potentiel ",
        malagasyTranslation: "Mamantatra ny tsara @ olona "
      },
      {
        debate: "TO DEVELOP[divelop]",
        frenchTranslation: " Développer ",
        malagasyTranslation: " Mivoatra "
      },
      {
        debate: "TO ENRICH[inritr]",
        frenchTranslation: " Enrichir ",
        malagasyTranslation: " Mampitombo "
      },
      {
        debate: "THE ADVANTAGE OF+V.ING[advantidj] ",
        frenchTranslation: " L’avantage de ",
        malagasyTranslation: " Ny tombotsoan’ny "
      },
      {
        debate: "THE DISADVANTAGE OF+V.ING[disadvantidj]  ",
        frenchTranslation: " L’inconvénient/désavantage de ",
        malagasyTranslation: " Ny lafi-ratsin’ny "
      },
      {
        debate: "TO ALLOW/LET[elao] ",
        frenchTranslation: " Permettre qlq1 ",
        malagasyTranslation: " Mamela"
      },
      {
        debate: "TO FACILITATE[fasiliteit]  ",
        frenchTranslation: "Faciliter ",
        malagasyTranslation: " Manamora "
      },
      {
        debate: "TO DISCOVER[diskaver] ",
        frenchTranslation: "Découvrir ",
        malagasyTranslation: " Mahita "
      },
      {
        debate: "TO PREPARE YOUR FUTURE[pripar]  ",
        frenchTranslation: " Préparer votre futur ",
        malagasyTranslation: " Mandrafitra ny hoavinao "
      },
      {
        debate: "TO PUT STH IN PLACE[pleis] ",
        frenchTranslation: " Mettre qlqch en place ",
        malagasyTranslation: " Mametraka/mandamina"
      },
      {
        debate: "TO IMPROVE[improuv]",
        frenchTranslation: " Améliorer ",
        malagasyTranslation: " Manatsara "
      },
      {
        debate: "TO BRIGHTEN[braiten]",
        frenchTranslation: " S'ameliorer ",
        malagasyTranslation: " Mihatsara "
      },
      {
        debate: "TO GET RICH#POOR [ritr]",
        frenchTranslation: " Devenir riche/pauvre ",
        malagasyTranslation: " Miha-manankarena/mahantra "
      },
      {
        debate: "TO BE WEALTHY[welfi] ",
        frenchTranslation: " Etre riche ",
        malagasyTranslation: "Mpanefoefo "
      },
      {
        debate: "TO EXPLOIT[ixploit]",
        frenchTranslation: "Exploiter ",
        malagasyTranslation: " Mitrandraka "
      },
      {
        debate: "TO PLAY HOOKEY/TRUANT[houki ] ",
        frenchTranslation: "Faire l'ecole buissonnière ",
        malagasyTranslation: " Manao kilavaka"
      },
      {
        debate: "To be poor/ A poverty ",
        frenchTranslation: "Etre pauvre/ Pauvreté",
        malagasyTranslation: " Mahantra/ Fahantrana"
      },
      {
        debate: "TO DROP OUT OF SCHOOL[draop aotov]",
        frenchTranslation: "Arreter l'ecole",
        malagasyTranslation: "Mijanona ny fianarana"
      },
      {
        debate: "TO BE STUBBORN[staborn]",
        frenchTranslation: "Etre têtu ",
        malagasyTranslation: " Maditra"
      },
      {
        debate: "TO BE INTELLIGENT/SMART",
        frenchTranslation: "Etre intelligent ",
        malagasyTranslation: " Mahay/Kinga saina"
      },
      {
        debate: "TO IGNORE/NEGLECT[ignor]",
        frenchTranslation: "Ignorer ",
        malagasyTranslation: " Tsy miraharaha"
      },
      {
        debate: "TO BUCKLE DOWN[bakel daon] ",
        frenchTranslation: " Travailler serieusement ",
        malagasyTranslation: " Miasa tsara"
      },
      {
        debate: "TO TAKE AN EXAM[teiken igzam] ",
        frenchTranslation: "Passer un examen ",
        malagasyTranslation: " Manao fanadinana "
      },
      {
        debate: "TO TAKE A TEST/COMPETITIVE EXAM",
        frenchTranslation: "Passer un test/concours ",
        malagasyTranslation: " Manao fifaninanana/ fitsapana"
      },
      {
        debate: "TO REACH[ritr]YOUR GOAL",
        frenchTranslation: " Atteindre votre but",
        malagasyTranslation: " Mahatratra ny tanjona",
      },
      {
        debate: "TO SIT (FOR) AN EXAM[igzem]",
        frenchTranslation: " Passer un examen ",
        malagasyTranslation: " Manao fanadinana "
      },
      {
        debate: "TO FAIL[feil]",
        frenchTranslation: " Echouer/ Rater",
        malagasyTranslation: " Tsy tafita/ Resy "
      },
      {
        debate: "TO SUCCEED[saksid]",
        frenchTranslation: " Réussir",
        malagasyTranslation: " Tafita "
      },
      {
        debate: " TO DISCOURAGE[diskaridge]",
        frenchTranslation: " Décourager ",
        malagasyTranslation: " Manakivy"
      },
      {
        debate: "TO HAVE HIGH[hai] HOPES OF STH ",
        frenchTranslation: " Fonder de grands espoirs sur ",
        malagasyTranslation: " Manana fanantenana"
      },
      {
        debate: "TO HAVE A GLIMMER OF HOPE ",
        frenchTranslation: " Avoir un petit espoir ",
        malagasyTranslation: "Manana fanantenana kely"
      },
      {
        debate: " TO HAVE A DASHED[dasht]",
        frenchTranslation: " Avoir un espoir aneanti sur ",
        malagasyTranslation: " Tsy misy fanantenana"
      },
      {
        debate: "TO BE DESPARATE",
        frenchTranslation: " Etre désespéré ",
        malagasyTranslation: " Kivy "
      },
      {
        debate: "TO KEEP/PUT STH IN MIND",
        frenchTranslation: " Garder qlqch à l'esprit ",
        malagasyTranslation: " Mitadidy zvt "
      },
    ],
  },
 
];

const debateTopics4 = [
  {
    id: 1,
    topic: 'Lesson 49: DEBATE--EDUCATION',
    description: 'VOCABS—WHAT MEANS EDUCATIONS TO YOU? ',
    arguments1: [
      {
        debate: "TO TAKE STH INTO ACCOUNT[ekant] ",
        frenchTranslation: "Tenir compte de qlqch ",
        malagasyTranslation: " Mihevitra ny momba  ny zvt iray"
      },
      {
        debate: "TO TAKE STH INTO CONSIDERATION",
        frenchTranslation: "Prendre qlqch en considération ",
        malagasyTranslation: " Mampisy lanja ny zvt iray"
      },
      {
        debate: "TO REALIZE[rielaiz]",
        frenchTranslation: "Se rendre compte de ",
        malagasyTranslation: " Mahatsapa"
      },
      {
        debate: "TO RECOGNIZE[rekognaiz]  ",
        frenchTranslation: " Reconnaître ",
        malagasyTranslation: " Mahatsapa "
      },
      {
        debate: "TO FIGURE STH OUT[aot]",
        frenchTranslation: " Reflechir ",
        malagasyTranslation: " Mieritreritra"
      },
      {
        debate: "TO CHEW STH OVER",
        frenchTranslation: " Réfléchir  ",
        malagasyTranslation: " Mandinika"
      },
      {
        debate: "TO MEMORIZE[memoraiz]",
        frenchTranslation: " Mémoriser ",
        malagasyTranslation: " Mitadidy"
      },
      {
        debate: " TO RECALL[rikol]",
        frenchTranslation: " Se souvenir de ",
        malagasyTranslation: " Mitadidy"
      },
      {
        debate: "TO REMIND[rimaind]",
        frenchTranslation: " Rappeler ",
        malagasyTranslation: " Mampahatsiahy olona"
      },
      {
        debate: "TO BE AMBITIOUS[embisies]",
        frenchTranslation: " Etre ambitieux ",
        malagasyTranslation: " Manana tanjona "
      },
      {
        debate: "TO BE MOTIVATED[motiveitid]",
        frenchTranslation: " Etre motivé ",
        malagasyTranslation: " Mientanentana "
      },
      {
        debate: "TO BE OPTIMISTIC",
        frenchTranslation: " Etre optimiste ",
        malagasyTranslation: " Be finoana "
      },
      {
        debate: "TO BE PESSIMISTIC ",
        frenchTranslation: "Etre pessimiste ",
        malagasyTranslation: " Tsy manam-pinoana "
      },
      {
        debate: "TO BE REALISTIC ",
        frenchTranslation: "Realiste/ raisonnable ",
        malagasyTranslation: "Olona mahay mandahatra "
      },
      {
        debate: "TO PLAY AN IMPORTANT ROLE IN",
        frenchTranslation: " Jouer un grand rôle dans la vie ",
        malagasyTranslation: " Manana anjara toerana @"
      },
      {
        debate: "TO LAUNCH A PROJECT ",
        frenchTranslation: "Lancer un projet ",
        malagasyTranslation: " Manantanteraka tetikasa"
      },
      {
        debate: "TO MANAGE[manidge]",
        frenchTranslation: "Gérer ",
        malagasyTranslation: " Mintantana "
      },
      {
        debate: "TO LEAD[lid]  ",
        frenchTranslation: "Mener ",
        malagasyTranslation: "Mitarika "
      },
      {
        debate: "TO BE ILLITERATE[iliteret]",
        frenchTranslation: "  Illettré ",
        malagasyTranslation: " Tsy mahay taratasy"
      },
      {
        debate: "TO BE INTELLECTUAL[intelektruiel]",
        frenchTranslation: " Intellectuel ",
        malagasyTranslation: " Olona nianatra "
      },
      {
        debate: "ILLITERACY [ilitreci] ",
        frenchTranslation: " Analphabétisme ",
        malagasyTranslation: " Tsy fahaizana taratasy "
      },
      {
        debate: "TO BE DULL[dal]",
        frenchTranslation: " Faible / mediocre(education) ",
        malagasyTranslation: " Donto / Bado "
      },
      {
        debate: "TO MAKE/TAKE A DECISION[dicizen] ",
        frenchTranslation: " Prendre une décision ",
        malagasyTranslation: " Manapa-kevitra "
      },
      {
        debate: "TO MAKE/TAKE GOOD A DECISION ",
        frenchTranslation: "Faire un bon / mauvais choix ",
        malagasyTranslation: " Mandray fanapahan-kevitra tsara "
      },
    ],
    arguments2: [
      {
        debate:`     Well, thanks for your question, to start with, let me talk a little bit about myself for those of you who don’t know me. My name’s Rene, I’m from Tulear, and I’ve been here in Tana
for more than nine years and I like Tana. So, to me “Education” defines of theact or process of imparting or acquiring general knowledge, developing the powers of reasoning and
judgment, and generally of preparing oneself or others intellectually for mature life, which means that it plays an important role in our lives, and anybody who wants to develop and move forwards according to the world’s development shouldn’t underestimate its importance.
And also, education is the key of success, I mean, if you want to succeed in everything you do, I think, education can help you unlock your pontential. You may say that there many people out there who are illiterate but rich, what about them? For sure, I realize that, because education
is not only done in school and have degrees but everywhere, you can learn from your mistake, you can learn from others mistake, and especially from others’ success, that’s to say, u know the way of getting and developing our ability to know everything,`,
      },
    ],
    arguments3: [
      {
        debate:` → TO BE CROOKED[kroukid]  =Tordu /Mivalana
        \n → TO BE BENT[bent]  =Courbé/ Biloka /Mivilana
        \n → TO BE DENT[dent]  =Cabossé = Pepo/Kepoka
        \n → TO BE TWIST/ TO BE TWISTED[twisted]  =Tordu/Entortillé = Miforitra
        \n → SLOPE[slôup] =Pente = Tendrombohitra
        \n → TO GO UPHILL/DOWNHILL = Monteé/Descente = Miakatra/Midina`,
      },
    ]
  },
 
];

const debateTopics5 = [
  {
    id: 1,
    topic: 'Lesson 52: DEBATE--LAW',
    description: 'WHAT WOULD YOU DO IF SB STOLE YOUR BELONGINGS? ',
    arguments1: [
      {
        debate: "TO ACCUSE [akioz] ",
        frenchTranslation: " Accuser qlq1",
        malagasyTranslation: " Manendrikendrika"
      },
      {
        debate: "TO SUSPECT [saspekt]",
        frenchTranslation: " Suspecter qlq1 ",
        malagasyTranslation: " Miahiahy olona"
      },
      {
        debate: "TO BLAME YOURSELF/SB",
        frenchTranslation: "Blamer qlq1/se culpabiliser  ",
        malagasyTranslation: " Manome tsiny olona / tena"
      },
      {
        debate: "TO FEEL GUILTY[gilti] ",
        frenchTranslation: " Se culpabiliser ",
        malagasyTranslation: " Manome tsiny tena "
      },
      {
        debate: "TO INCREASE/RISE[inkriz/raiz]",
        frenchTranslation: " Augmenter ",
        malagasyTranslation: " Miakatra"
      },
      {
        debate: "TO DECREASE[dikriz]",
        frenchTranslation: " Diminuer",
        malagasyTranslation: " Midina"
      },
      {
        debate: "TO AFFORD/TO HAVE THE MEANS TO[eford]",
        frenchTranslation: " Avoir le moyen de ",
        malagasyTranslation: " Manana fahafahana"
      },
      {
        debate: "TO HAVE AN OPPORTUNITY TO ",
        frenchTranslation: " Avoir une opportunité de ",
        malagasyTranslation: " Manana fahafahana"
      },
      {
        debate: "TO HAVE A CHANCE TO",
        frenchTranslation: " Avoir une occasion de ",
        malagasyTranslation: " Manana fahafahana"
      },
      {
        debate: "TO TAKE A CHANCE TO [trens]",
        frenchTranslation: " Saisir une occasion de ",
        malagasyTranslation: " Manararaotra @"
      },
      {
        debate: "TO FACE/ASSUME[feis/asiom]",
        frenchTranslation: " Faire face à/confronter ",
        malagasyTranslation: " Miatrika ny zava-misy "
      },
      {
        debate: "TO GET RID OF SB/STH",
        frenchTranslation: " Se débarrasser de qlq1/qlqch ",
        malagasyTranslation: " Miala "
      },
      {
        debate: "TO AVOID+V.ING ",
        frenchTranslation: "Éviter de ",
        malagasyTranslation: " Misoroka "
      },
      {
        debate: "TO UNDERESTIMATE [anderestimeit] ",
        frenchTranslation: "Sous-estimer ",
        malagasyTranslation: " Manambanimbany"
      },
      {
        debate: "TO FOUND[faond]ESTABLISH/CREATE",
        frenchTranslation: "Fonder/créer/établir  ",
        malagasyTranslation: " Manangana/mamorona"
      },
      {
        debate: "TO SEND YOUR CHILDREN TO SCHOOL ",
        frenchTranslation: "Envoyer qlq1 à l’école",
        malagasyTranslation: " Mandefa olona hianatra "
      },
      {
        debate: "TO EDUCATE[ejoukeit]",
        frenchTranslation: "Éduquer/instruire",
        malagasyTranslation: " Mampianatra "
      },
      {
        debate: "TO UNLOCK[anlak] YOUR POTENTIAL  ",
        frenchTranslation: "Déverrouiller votre potentiel ",
        malagasyTranslation: "Mamantatra ny tsara @ olona "
      },
      {
        debate: "TO DEVELOP[divelop]",
        frenchTranslation: " Développer ",
        malagasyTranslation: " Mivoatra "
      },
      {
        debate: "TO ENRICH[inritr]",
        frenchTranslation: " Enrichir ",
        malagasyTranslation: " Mampitombo "
      },
      {
        debate: "THE ADVANTAGE OF+V.ING[advantidj] ",
        frenchTranslation: " L’avantage de ",
        malagasyTranslation: " Ny tombotsoan’ny "
      },
      {
        debate: "THE DISADVANTAGE OF+V.ING[disadvantidj]  ",
        frenchTranslation: " L’inconvénient/désavantage de ",
        malagasyTranslation: " Ny lafi-ratsin’ny "
      },
      {
        debate: "TO ALLOW/LET[elao] ",
        frenchTranslation: " Permettre qlq1 ",
        malagasyTranslation: " Mamela"
      },
      {
        debate: "TO FACILITATE[fasiliteit]  ",
        frenchTranslation: "Faciliter ",
        malagasyTranslation: " Manamora "
      },
      {
        debate: "TO DISCOVER[diskaver] ",
        frenchTranslation: "Découvrir ",
        malagasyTranslation: " Mahita "
      },
      {
        debate: "TO PREPARE YOUR FUTURE[pripar]  ",
        frenchTranslation: " Préparer votre futur ",
        malagasyTranslation: " Mandrafitra ny hoavinao "
      },
      {
        debate: "TO PUT STH IN PLACE[pleis] ",
        frenchTranslation: " Mettre qlqch en place ",
        malagasyTranslation: " Mametraka/mandamina"
      },
      {
        debate: "TO IMPROVE[improuv]",
        frenchTranslation: " Améliorer ",
        malagasyTranslation: " Manatsara "
      },
      {
        debate: "TO BRIGHTEN[braiten]",
        frenchTranslation: " S'ameliorer ",
        malagasyTranslation: " Mihatsara "
      },
      {
        debate: "TO GET RICH#POOR [ritr]",
        frenchTranslation: " Devenir riche/pauvre ",
        malagasyTranslation: " Miha-manankarena/mahantra "
      },
      {
        debate: "TO BE WEALTHY[welfi] ",
        frenchTranslation: " Etre riche ",
        malagasyTranslation: "Mpanefoefo "
      },
      {
        debate: "TO EXPLOIT[ixploit]",
        frenchTranslation: "Exploiter ",
        malagasyTranslation: " Mitrandraka "
      },
      {
        debate: "TO PLAY HOOKEY/TRUANT[houki ] ",
        frenchTranslation: "Faire l'ecole buissonnière ",
        malagasyTranslation: " Manao kilavaka"
      },
      {
        debate: "To be poor/ A poverty ",
        frenchTranslation: "Etre pauvre/ Pauvreté",
        malagasyTranslation: " Mahantra/ Fahantrana"
      },
      {
        debate: "TO DROP OUT OF SCHOOL[draop aotov]",
        frenchTranslation: "Arreter l'ecole",
        malagasyTranslation: "Mijanona ny fianarana"
      },
      {
        debate: "TO BE STUBBORN[staborn]",
        frenchTranslation: "Etre têtu ",
        malagasyTranslation: " Maditra"
      },
      {
        debate: "TO BE INTELLIGENT/SMART",
        frenchTranslation: "Etre intelligent ",
        malagasyTranslation: " Mahay/Kinga saina"
      },
      {
        debate: "TO IGNORE/NEGLECT[ignor]",
        frenchTranslation: "Ignorer ",
        malagasyTranslation: " Tsy miraharaha"
      },
      {
        debate: "TO BUCKLE DOWN[bakel daon] ",
        frenchTranslation: " Travailler serieusement ",
        malagasyTranslation: " Miasa tsara"
      },
      {
        debate: "TO TAKE AN EXAM[teiken igzam] ",
        frenchTranslation: "Passer un examen ",
        malagasyTranslation: " Manao fanadinana "
      },
      {
        debate: "TO TAKE A TEST/COMPETITIVE EXAM",
        frenchTranslation: "Passer un test/concours ",
        malagasyTranslation: " Manao fifaninanana/ fitsapana"
      },
      {
        debate: "TO REACH[ritr]YOUR GOAL",
        frenchTranslation: " Atteindre votre but",
        malagasyTranslation: " Mahatratra ny tanjona",
      },
      {
        debate: "TO SIT (FOR) AN EXAM[igzem]",
        frenchTranslation: " Passer un examen ",
        malagasyTranslation: " Manao fanadinana "
      },
      {
        debate: "TO FAIL[feil]",
        frenchTranslation: " Echouer/ Rater",
        malagasyTranslation: " Tsy tafita/ Resy "
      },
      {
        debate: "TO SUCCEED[saksid]",
        frenchTranslation: " Réussir",
        malagasyTranslation: " Tafita "
      },
      {
        debate: " TO DISCOURAGE[diskaridge]",
        frenchTranslation: " Décourager ",
        malagasyTranslation: " Manakivy"
      },
      {
        debate: "TO HAVE HIGH[hai] HOPES OF STH ",
        frenchTranslation: " Fonder de grands espoirs sur ",
        malagasyTranslation: " Manana fanantenana"
      },
      {
        debate: "TO HAVE A GLIMMER OF HOPE ",
        frenchTranslation: " Avoir un petit espoir ",
        malagasyTranslation: "Manana fanantenana kely"
      },
      {
        debate: " TO HAVE A DASHED[dasht]",
        frenchTranslation: " Avoir un espoir aneanti sur ",
        malagasyTranslation: " Tsy misy fanantenana"
      },
      {
        debate: "TO BE DESPARATE",
        frenchTranslation: " Etre désespéré ",
        malagasyTranslation: " Kivy "
      },
      {
        debate: "TO KEEP/PUT STH IN MIND",
        frenchTranslation: " Garder qlqch à l'esprit ",
        malagasyTranslation: " Mitadidy zvt "
      },
    ],
  },
 
];

const DebatesScreen = () => {
  const [expanded, setExpanded] = useState<string | null>(null);

  // ✅ Fonction pour lire le texte avec Expo Speech
  const speak = (text: string) => {
    Speech.speak(text, {
      language: 'en',
      pitch: 1.0,
      rate: 1.0,
    });
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.title}>Debates</Text>
      <Text style={styles.content}>
        This screen displays various topics for debates.
      </Text>

      {debateTopics1.map((debate) => (
              <Card key={debate.id} style={styles.card}>
                <Card.Title
                  title={<Text style={{ fontWeight: 'bold' }}>{debate.topic}</Text>}
                  subtitle={debate.description}
                  right={(props) => (
                    <IconButton
                      {...props}
                      icon="volume-high"
                      onPress={() => speak(debate.topic)}
                    />
                  )}
                />
                <Card.Content>
                  <List.Section>
                     <List.Accordion
                          title="SOCIAL—WHAT DO YOU THINK ABOUT LIFE IN TANA? "
                          left={(props) => (
                            <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                              )}
                          >
                          <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <RNText style={styles.tableHeader}>English</RNText>
                                  <RNText style={styles.tableHeader}>French</RNText>
                                                       <RNText style={styles.tableHeader}>Malagasy</RNText>
                                                     </View>
                                                     {debate.arguments1.map((item, index) => (
                                                       <View key={index} style={styles.tableRow}>
                                                         <RNText style={styles.tableCell}>{item.debate}</RNText>
                                                         <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                                                         <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                              </View>
                            ))}
                          </View>
                      </List.Accordion>
                  </List.Section>
                </Card.Content>
              </Card>
            ))}

{debateTopics2.map((debate) => (
  <Card key={debate.id} style={styles.card}>
    <Card.Title
      title={<Text style={{ fontWeight: 'bold' }}>{debate.topic}</Text>}
      subtitle={debate.description}
      right={(props) => (
        <IconButton
          {...props}
          icon="volume-high"
          onPress={() => speak(debate.topic)}
        />
      )}
    />
    <Card.Content>
      <List.Section>
        <List.Accordion
          title="SOCIAL—WHAT DO YOU THINK ABOUT LIFE IN TANA?"
          left={(props) => (
            <List.Icon {...props} icon="book-open" color="#8DA9C4" />
          )}
        >
          {debate.arguments1.map((arg, index) => {
            const boldPhrases = [
              "Well",
              "aspects of life condition",
              "the drawback and advantage",
              "income",
              "monthly",
              "cover",
              "Why",
              "Because",
            ];

            const regex = new RegExp(`(${boldPhrases.join('|')})`, 'gi');
            const parts = arg.debate.split(regex);

            return (
              <List.Item
                key={index}
                title={() => (
                  <Text>
                    {parts.map((part, i) => {
                      const isBold = boldPhrases.some(
                        (phrase) =>
                          phrase.toLowerCase() === part.trim().toLowerCase()
                      );
                      return (
                        <Text key={i} style={isBold ? { fontWeight: 'bold' } : {}}>
                          {part}
                        </Text>
                      );
                    })}
                  </Text>
                )}

              />
            );
          })}
        </List.Accordion>
      </List.Section>
    </Card.Content>
  </Card>
))}

{debateTopics3.map((debate) => (
              <Card key={debate.id} style={styles.card}>
                <Card.Title
                  title={<Text style={{ fontWeight: 'bold' }}>{debate.topic}</Text>}
                  subtitle={debate.description}
                  right={(props) => (
                    <IconButton
                      {...props}
                      icon="volume-high"
                      onPress={() => speak(debate.topic)}
                    />
                  )}
                />
                <Card.Content>
                  <List.Section>
                     <List.Accordion
                          title="VOCABS—WHAT MEANS EDUCATIONS TO YOU? "
                          left={(props) => (
                            <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                              )}
                          >
                          <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <RNText style={styles.tableHeader}>English</RNText>
                                  <RNText style={styles.tableHeader}>French</RNText>
                                                       <RNText style={styles.tableHeader}>Malagasy</RNText>
                                                     </View>
                                                     {debate.arguments1.map((item, index) => (
                                                       <View key={index} style={styles.tableRow}>
                                                         <RNText style={styles.tableCell}>{item.debate}</RNText>
                                                         <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                                                         <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                              </View>
                            ))}
                          </View>
                      </List.Accordion>
                  </List.Section>
                </Card.Content>
              </Card>
            ))}

{debateTopics4.map((debate) => (
              <Card key={debate.id} style={styles.card}>
                <Card.Title
                  title={<Text style={{ fontWeight: 'bold' }}>{debate.topic}</Text>}
                  subtitle={debate.description}
                  right={(props) => (
                    <IconButton
                      {...props}
                      icon="volume-high"
                      onPress={() => speak(debate.topic)}
                    />
                  )}
                />
                <Card.Content>
                  <List.Section>
                     <List.Accordion
                          title="VOCABS—WHAT MEANS EDUCATIONS TO YOU? "
                          left={(props) => (
                            <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                              )}
                          >
                          <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <RNText style={styles.tableHeader}>English</RNText>
                                  <RNText style={styles.tableHeader}>French</RNText>
                                                       <RNText style={styles.tableHeader}>Malagasy</RNText>
                                                     </View>
                                                     {debate.arguments1.map((item, index) => (
                                                       <View key={index} style={styles.tableRow}>
                                                         <RNText style={styles.tableCell}>{item.debate}</RNText>
                                                         <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                                                         <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                              </View>
                            ))}
                          </View>
                      </List.Accordion>

                      <List.Accordion
          title="→ WHAT MEANS EDUCATION TO YOU?"
          left={(props) => (
            <List.Icon {...props} icon="book-open" color="#8DA9C4" />
          )}
        >
          {debate.arguments2.map((arg, index) => {
            const boldPhrases = [
              "imparting",
              "mature",
              "lives",
            ];

            const regex = new RegExp(`(${boldPhrases.join('|')})`, 'gi');
            const parts = arg.debate.split(regex);

            return (
              <List.Item
                key={index}
                title={() => (
                  <Text>
                    {parts.map((part, i) => {
                      const isBold = boldPhrases.some(
                        (phrase) =>
                          phrase.toLowerCase() === part.trim().toLowerCase()
                      );
                      return (
                        <Text key={i} style={isBold ? { fontWeight: 'bold' } : {}}>
                          {part}
                        </Text>
                      );
                    })}
                  </Text>
                )}

              />
            );
          })}
        </List.Accordion>

        <List.Accordion
          title="→ WHAT MEANS EDUCATION TO YOU?"
          left={(props) => (
            <List.Icon {...props} icon="book-open" color="#8DA9C4" />
          )}
        >
          {debate.arguments3.map((arg, index) => {
            const boldPhrases = [
              "imparting",
              "mature",
              "lives",
            ];

            const regex = new RegExp(`(${boldPhrases.join('|')})`, 'gi');
            const parts = arg.debate.split(regex);

            return (
              <List.Item
                key={index}
                title={() => (
                  <Text>
                    {parts.map((part, i) => {
                      const isBold = boldPhrases.some(
                        (phrase) =>
                          phrase.toLowerCase() === part.trim().toLowerCase()
                      );
                      return (
                        <Text key={i} style={isBold ? { fontWeight: 'bold' } : {}}>
                          {part}
                        </Text>
                      );
                    })}
                  </Text>
                )}

              />
            );
          })}
        </List.Accordion>
                  </List.Section>
                </Card.Content>
              </Card>
            ))}

{debateTopics5.map((debate) => (
              <Card key={debate.id} style={styles.card}>
                <Card.Title
                  title={<Text style={{ fontWeight: 'bold' }}>{debate.topic}</Text>}
                  subtitle={debate.description}
                  right={(props) => (
                    <IconButton
                      {...props}
                      icon="volume-high"
                      onPress={() => speak(debate.topic)}
                    />
                  )}
                />
                <Card.Content>
                  <List.Section>
                     <List.Accordion
                          title="WHAT WOULD YOU DO IF SB STOLE YOUR BELONGINGS? "
                          left={(props) => (
                            <List.Icon {...props} icon="book-open" color='#8DA9C4' />
                              )}
                          >
                          <View style={styles.table}>
                            <View style={styles.tableRow}>
                                <RNText style={styles.tableHeader}>English</RNText>
                                  <RNText style={styles.tableHeader}>French</RNText>
                                                       <RNText style={styles.tableHeader}>Malagasy</RNText>
                                                     </View>
                                                     {debate.arguments1.map((item, index) => (
                                                       <View key={index} style={styles.tableRow}>
                                                         <RNText style={styles.tableCell}>{item.debate}</RNText>
                                                         <RNText style={styles.tableCell}>{item.frenchTranslation}</RNText>
                                                         <RNText style={styles.tableCell}>{item.malagasyTranslation}</RNText>
                              </View>
                            ))}
                          </View>
                      </List.Accordion>
                  </List.Section>
                </Card.Content>
              </Card>
            ))}      

    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    color: '#bb3e03',
    textAlign: 'center',
  },
  content: {
    fontSize: 16,
    marginBottom: 16,
  },
  card: {
    marginBottom: 16,
    borderRadius: 8,
    elevation: 4,
    backgroundColor: '#fff',
  },
  accordion: {
    backgroundColor: '#f9f9f9',
    borderRadius: 4,
  },
  table: {
    padding: 8,
    marginTop: 5,
  },
  tableRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 4,
  },
  tableHeader: {
    fontWeight: 'bold',
    color: '#8da9c4',
    flex: 1,

  },
  tableCell: {
    flex: 1,
    color: '#000',
    fontSize: 15,
  },
});

export default DebatesScreen;
