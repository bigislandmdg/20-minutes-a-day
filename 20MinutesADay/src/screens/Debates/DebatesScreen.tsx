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
        debate:"TO BE GUILTY[gilti]",
        frenchTranslation: " Etre coupable ",
        malagasyTranslation: " Meloka"
      },
      {
        debate: "TO CONDEMN/SENTENCE",
        frenchTranslation: " Condamner qlq1",
        malagasyTranslation: " Manameloka olona"
      },
      {
        debate: "TO SUE SB/FILE A SUIT AGAINST SB",
        frenchTranslation: " Poursuivre qlq1 en justice ",
        malagasyTranslation: " Mitory olona"
      },
      {
        debate: "TO LODGE A COMPLAINT AGAINST SB ",
        frenchTranslation: " Porter plainte contre qlq1 ",
        malagasyTranslation: " Mametraka fitarainana"
      },
      {
        debate: "TO ARREST SB/BE UNDER ARREST",
        frenchTranslation: "Etre en état d’arrestation/arrêter",
        malagasyTranslation: " Voasambotra/Misambotra"
      },
      {
        debate: "TO DETAIN",
        frenchTranslation: "Retenir ",
        malagasyTranslation: " Mitazona"
      },
      {
        debate: "TO JAIL/ TO BE BEHIND BAR",
        frenchTranslation: " Mettre qlq1 en prison ",
        malagasyTranslation: " Mampiditra am-ponja "
      },
      {
        debate: "TO TO FINE SB",
        frenchTranslation: " Infliger une amende à",
        malagasyTranslation: " Mampandoa sazy "
      },
      {
        debate: "TO INFRINGE/VIOLATE  ",
        frenchTranslation: "Violer/enfreindre la loi ",
        malagasyTranslation: " Mandika lalàna "
      },
      {
        debate: "TO OBEY/ACCEPT ",
        frenchTranslation: "Accepter/ obéir ",
        malagasyTranslation: " Manaiky"
      },
      {
        debate: "TO BRIBE/CORRUPT[kerapt]",
        frenchTranslation: " Corrompre qlq1  ",
        malagasyTranslation: " Manao kolikoly"
      },
      {
        debate: "TO TAKE A KICK-BACK/BRIBERY ",
        frenchTranslation: "Prendre de pot-de-vin ",
        malagasyTranslation: " Mandray kolikoly "
      },
      {
        debate: "TO RELEASE/SET SB FREE",
        frenchTranslation: " Rélâcher",
        malagasyTranslation: " Manafaka/Mamotsitra "
      },
      {
        debate: "TO HANDCUFF[henkaf]/TIE SB UP ",
        frenchTranslation: " Passer le menotte/attacher ",
        malagasyTranslation: " Mamatotra olona"
      },
      {
        debate: "TO CATCH[catr] SB REDHANDED ",
        frenchTranslation: " Prendre qlq1 au flagrant delit ",
        malagasyTranslation: " Tratra ambody omby "
      },
      {
        debate: "TO BE CONVICTED/CONVICT",
        frenchTranslation: " Reconnu coupable ",
        malagasyTranslation: " Voaheloka "
      },
      {
        debate: "TO WITNESS ON BEHALF OF SB ",
        frenchTranslation: " Temoigner en faveur de ",
        malagasyTranslation: "  Mijoro vavolombelona"
      },
      {
        debate: "TO BE OR GO ON TRIAL FOR STH ",
        frenchTranslation: " Passer en justice ",
        malagasyTranslation: " Tsaraina amin’ny fitsarana "
      },
      {
        debate: "TO LIE TO SB[lai] ",
        frenchTranslation: " Mentir ",
        malagasyTranslation: " Mandainga"
      },
      {
        debate: " TO KEEP STH SECRET ",
        frenchTranslation: " Garder qlqchose en secret ",
        malagasyTranslation: " Tsy miteny ny ambara3 "
      },
      {
        debate: "TO MURDER[merder]/KILL ",
        frenchTranslation: " Tuer ",
        malagasyTranslation: " Mamono "
      },
      {
        debate: "TO PASS AWAY/KICK THE BUCKET  ",
        frenchTranslation: " Mourir ",
        malagasyTranslation: " Maty "
      },
      {
        debate: "TO POINT A GUN ON SB ",
        frenchTranslation: " Pointer un arme ",
        malagasyTranslation: " Manondro basy olona"
      },
      {
        debate: "TO RAPE[reip]",
        frenchTranslation: " Violer ",
        malagasyTranslation: " Manolana "
      },
      {
        debate: "A CHILD MOLESTER[tsaid …] ",
        frenchTranslation: " Pedophile  ",
        malagasyTranslation: " Mpanola zaza "
      },
      {
        debate: "TO HARASS(sexual harassment)",
        frenchTranslation: " Harceler(Harcelement sexuel) ",
        malagasyTranslation: " Mitsiriritra "
      },
      {
        debate: "TO LAUNDER[laonder]  ",
        frenchTranslation: " Blanchir ",
        malagasyTranslation: " Mandany vola@tsy izy "
      },
      {
        debate: "TO FORBID/PROHIBIT",
        frenchTranslation: " Interdire ",
        malagasyTranslation: " Misakana "
      },
      {
        debate: "TO ALLOW SB TO ",
        frenchTranslation: "Permettre qlq1 ",
        malagasyTranslation: " Mamela olona"
      },
      {
        debate: "TO BE ILLEGAL/LEGAL ",
        frenchTranslation: "Etre illégal/Légal",
        malagasyTranslation: " Tsy ara-dalàna/ara-dalàna"
      },
      {
        debate: "TO DO BAD/WRONG THINGS",
        frenchTranslation: " Faire une mauvaise chose",
        malagasyTranslation: " Manao zvt tsy mety"
      },
      {
        debate: "A WRONG DOER",
        frenchTranslation: " Malfaiteur ",
        malagasyTranslation: " Mpanao meloka"
      },
      {
        debate: "TO POISON SB[poizen]",
        frenchTranslation: " Empoisonner ",
        malagasyTranslation: " Manapoizina olona"
      },
      {
        debate: " A STEALER/A THIEF[fif]",
        frenchTranslation: " Voleur ",
        malagasyTranslation: " Mpangalatra"
      },
      {
        debate: "TO SURRENDER ONESELF TO SB ",
        frenchTranslation: " Se rendre à la police ",
        malagasyTranslation: " Manolotena @ polisy"
      },
      {
        debate: "TO BE CAUGHT [kot]  ",
        frenchTranslation: " Etre arrêté  ",
        malagasyTranslation: " Voasambotra "
      },
      {
        debate: "TO INVESTIGATE [investigeit]",
        frenchTranslation: " Enquêter ",
        malagasyTranslation: " Manao fanadiadihana"
      },
      {
        debate: "TO DISCOVER THE TRUTH[trouf]",
        frenchTranslation: " Découvrir la verité ",
        malagasyTranslation: " Mamantatra ny marina",
      },
      {
        debate: "TO CONVICT[kanvikt]",
        frenchTranslation: " Reconnaître coupable de ",
        malagasyTranslation: " Voaheloka "
      },
      {
        debate: "TO BE ON BAIL[bel]",
        frenchTranslation: " Libérer Sous caution",
        malagasyTranslation: " Vototra satria nandoa sazy "
      },
      {
        debate: "TO POST BAIL FOR SB",
        frenchTranslation: " Payer la caution de qn",
        malagasyTranslation: " Mandoa dina "
      },
      {
        debate: "TO BE (IL)LEGITIMATE[lijitimait]",
        frenchTranslation: " Etre légitime/illigitime ",
        malagasyTranslation: " Ara-dalàna"
      },
      {
        debate: "TO BE ELIGIBLE[ilijibel] ",
        frenchTranslation: " Etre en droit de/avoir le droit de ",
        malagasyTranslation: " Mahafeno zvt takiana/manana zo"
      },
      {
        debate: "TO EXPIRE[ixpair]/TO BE EXPIRED ",
        frenchTranslation: " Etre périmé ",
        malagasyTranslation: " Lany daty"
      },
      {
        debate: "TO BE -OUT-OF-DATED",
        frenchTranslation: " Démodé/périmé ",
        malagasyTranslation: " Tsy malaza/lany daty"
      },
      {
        debate: "TO INCARCERATE [inkarsereit]",
        frenchTranslation: " Incarcérer ",
        malagasyTranslation: " Mampiditra olona am-ponja "
      },
      {
        debate: "TO HOLD A GRUGDE AGAINST SB",
        frenchTranslation: " Etre rancunier(e)  ",
        malagasyTranslation: " Manana lolom-po"
      },
    ],
  },
 
];

const debateTopics6 = [
  {
    id: 1,
    topic: 'Lesson 55: DEBATE--RELIGION',
    description: 'WHY DO YOU GO TO CHURCH? ',
    arguments1: [
      {
        debate: "TO BE A CHRISTIAN ",
        frenchTranslation: " Etre un chrétien",
        malagasyTranslation: " Kristianina"
      },
      {
        debate: "TO BE A MUSLIM",
        frenchTranslation: " Etre un musulman  ",
        malagasyTranslation: " Silamo"
      },
      {
        debate: "TO BE ATHEIST [eifiest]",
        frenchTranslation: " Etre un athée",
        malagasyTranslation: " Olona tsy mino"
      },
      {
        debate: "TO BE NON BELIEVER/UNBELIEVER ",
        frenchTranslation: " Incroyant  ",
        malagasyTranslation: " Olona tsy mino "
      },
      {
        debate:" TO GO TO CHURCH[trertr]",
        frenchTranslation: " Aller a l’église  ",
        malagasyTranslation: " Mandeha mivavaka"
      },
      {
        debate: "TO PRAY[prei]",
        frenchTranslation: " Prier",
        malagasyTranslation: " Mivavaka"
      },
      {
        debate: "TO KNEEL[nil] DOWN",
        frenchTranslation: " S’agénouiller",
        malagasyTranslation: " Mandohalika"
      },
      {
        debate: "TO BOW[bao] YOUR HEAD",
        frenchTranslation: " Incliner la tête  ",
        malagasyTranslation: " Manondrika ny loha"
      },
      {
        debate: "TO LIFT UP YOUR HAND  ",
        frenchTranslation: " Lever votre main ",
        malagasyTranslation: " Manandra-tananao"
      },
      {
        debate: "TO CLAP HANDS",
        frenchTranslation: " Applaudir (les mains)",
        malagasyTranslation: " Mitehafa tanana"
      },
      {
        debate: "TO GLORIFY[glorifai] THE LORD",
        frenchTranslation: " Glorifier ",
        malagasyTranslation: " Manome voninahitra"
      },
      {
        debate: "TO WORSHIP",
        frenchTranslation: " Adorer ",
        malagasyTranslation: " Manompo "
      },
      {
        debate: "TO REPENT[ripent]",
        frenchTranslation: " Repentir",
        malagasyTranslation: " Mibebaka "
      },
      {
        debate: " TO CONFESS[kanfes] ",
        frenchTranslation: " Confesser ",
        malagasyTranslation: " Mitsotra "
      },
      {
        debate: " TO SIN/COMMIT A SIN ",
        frenchTranslation: " Pécher ",
        malagasyTranslation: " Manota"
      },
      {
        debate: "TO FORGIVE",
        frenchTranslation: " Pardonner",
        malagasyTranslation: " Mamela heloka"
      },
      {
        debate: " TO LISTEN TO THE WORD OF GOD ",
        frenchTranslation: "Ecouter la parole de Dieu ",
        malagasyTranslation: " Mihaino ny Tenin’Atra "
      },
      {
        debate: "TO SING FOR THE LORD",
        frenchTranslation: " Chanter pour le Seigneur",
        malagasyTranslation: " Mihira hoan’I Tompo "
      },
      {
        debate: "TO PREACH[pritr]THE SERMON ",
        frenchTranslation: " Prêcher le sermon ",
        malagasyTranslation: " Mitory Teny"
      },
      {
        debate: " TO ATTEND A BIBLE STUDY ",
        frenchTranslation: " Assister l’école biblique ",
        malagasyTranslation: " Mianatra Baiboly "
      },
      {
        debate: "TO BAPTISE[baptaiz]/TO BE BAPTIZED",
        frenchTranslation: " Baptiser ",
        malagasyTranslation: " Vita batisa/manao batisa "
      },
      {
        debate: "TO BE CONVERTED[converted] ",
        frenchTranslation: " Etre convertis ",
        malagasyTranslation: " Voavonjy/novaina vaoavao"
      },
      {
        debate: "TO CHANGE YOUR LIFE ",
        frenchTranslation: " Changer votre vie ",
        malagasyTranslation: " Manova ny fiainanao "
      },
      {
        debate: "TO SAVE SB/TO BE SAVED[seivt] ",
        frenchTranslation: " Sauver/Etre Sauvé  ",
        malagasyTranslation: " Mamonjy/Voavonjy"
      },
      {
        debate: "TO CRUCIFY[krousifai]/TO BE CRUCIFIED ",
        frenchTranslation: " Crucifier/Etre crucifie",
        malagasyTranslation: " Nomboana/voaombo "
      },
      {
        debate: "TO RAISE FROM THE DEAD ",
        frenchTranslation: " Ressusciter  ",
        malagasyTranslation: " Mitsangana @ maty "
      },
      {
        debate: " TO RESURRECT[rezerekt]",
        frenchTranslation: "  Ressusciter",
        malagasyTranslation: " Mitsangana @ maty "
      },
      {
        debate: "TO SUFFER[safer] ",
        frenchTranslation: " Souffrir ",
        malagasyTranslation: " Mijaly"
      },
      {
        debate: "TO WOUND",
        frenchTranslation: " Blesser ",
        malagasyTranslation: " Maratra "
      },
      {
        debate: "TO SURRENDER[serender]TO GIVE UP ",
        frenchTranslation: " Se rendre/s’abandoner ",
        malagasyTranslation: " Manolo-tena/mahafoy tena "
      },
      {
        debate: "TO BELIEVE/TO HAVE FAITH IN GOD",
        frenchTranslation: " Croire/avoir la foi en ",
        malagasyTranslation: " Mino "
      },
      {
        debate: " TO ACCEPT/OBEY[obei]",
        frenchTranslation: "  Accepter/obéir ",
        malagasyTranslation: " Manaiky "
      },
      {
        debate: "THE SAVIOR/HEALER[hiler]",
        frenchTranslation: " Le sauveur/guerisseur  ",
        malagasyTranslation: " Mpamonjy/Mpanasitrana "
      },
      {
        debate: "TO BE RIGHTEOUS[raitres] ",
        frenchTranslation: "Etre juste ",
        malagasyTranslation: " Olona marina"
      },
      {
        debate: "A WRONGDOER ",
        frenchTranslation: " Mailfaiteur",
        malagasyTranslation: " Mpanao ratsy"
      },
      {
        debate: "TO ADMIT YOUR SIN",
        frenchTranslation: " Admettre votre peché",
        malagasyTranslation: " Miaiky ny otanao"
      },
      {
        debate: "TO FAST AND PRAY",
        frenchTranslation: " Prier et jeuner  ",
        malagasyTranslation: " Mivavaka sy mifady hanina"
      },
      {
        debate: "TO GET THE HOLY SPIRIT",
        frenchTranslation: " Recevoir le Saint Esprit  ",
        malagasyTranslation: " Mandray ny Fanahy Masina"
      },
      {
        debate: "TO LAY YOUR HANDS ON SB",
        frenchTranslation: " Poser les mains sur",
        malagasyTranslation: " Mametra tanana @"
      },
      {
        debate: "TO CAST OUT THE DEVIL[devel] ",
        frenchTranslation: " Chasser le demon ",
        malagasyTranslation: " Mandroaka demony"
      },
      {
        debate: "THE END TIMES/DOOMSDAY[doumzdei]",
        frenchTranslation: " La fin de temps",
        malagasyTranslation: " Far’andro "
      },
      {
        debate: "TO ELECT/SELECT/CHOOSE",
        frenchTranslation: " Elir/selectionner/ choisir ",
        malagasyTranslation: " Mifidy"
      },
      {
        debate: "TO SPEAK IN TONGUES[tangues]",
        frenchTranslation: " Parler en langue ",
        malagasyTranslation: " Miteny @ teny tsy fantatra",
      },
      {
        debate: "TO ORDAIN SB",
        frenchTranslation: " Ordonner ",
        malagasyTranslation: " Mifidy(religion) "
      },
      {
        debate: "TO ANOINT SB",
        frenchTranslation: " Oindre/consacrer",
        malagasyTranslation: " Manosotra(diloilo)Mpanjaka "
      },
      
    ],
  },
 
];



const debateTopics7 = [
  {
    id: 1,
    topic: 'Lesson 56: DEBATE--RELIGION',
    description: 'WHY DO YOU GO TO CHURCH? ',
    arguments1: [
      {
        debate:`   Well, thanks for your question, to begin with, let me introduce myself, I’m Rene
Fulgence, I’m from Tulear and I live in 67Ha. And, I’m glad to tell you about my religion
background, I’m a Christian, and I’ve been raised in Christianity by my parents, and first,
the reason why I go to church just because I believe in God and He has loved me before I
did, and I love Him too, according to me, church is the place of worship where you can
praise and sing for Him, what I mean is that, I like to praise the Lord. God is my Savior,
because I was a sinner and He has forgiven my sin, so, I’m grateful to Him for all things. I
also go to church because I believe that if I want to meet Him, I think the first place where I
should see Him is in church, and I like listening to the Word of God which is preached by
the pastor. 
        Moreover, I was already baptized and I take communion every month, and also,
I’d like to tell you that after my baptism, I had received the Holy Spirit, I believe in speaking
in tongues, the divine healing and casting out the devil. I think that seeing the fact that God
is merciful and has given us the opportunity to be His children by sending His only child to
us who is Jesus Christ makes me confident and happy. Don’t forget that He was crucified
and raised from the dead to fulfillthe scriptures. So, to finish with, I love the the Lord Jesus
because He has loved me before I did. I think that’s I can tell me about that.


    → To judge = Juger/mitsara
        \n → To fulfill= accomplir /completer/mananteraka
        \n → To prophecise= prophétiser /maminany
        \n → THE TITHE[taid]= dime=Fahafolonkarena; 
        \n → TO GIVE OFFERING = Donner l’offrande= Manao rakitra/sorona
        \n → TO DEVOTE/CONSACRATE YOUR TIME= Consacrer votre temps= Manokam-potoana
        \n → TO SACRIFICE = Sacrifier= Manolotra fanatitra`,
      },
    ],
    arguments2: [
      
      {
        debate: "TO BE A POLITICIAN ",
        frenchTranslation: " Etre un politicien ",
        malagasyTranslation: " Mpanao Politika"
      },
      {
        debate: "POLITICAL[politikol] PARTY",
        frenchTranslation: " Partie/groupe politique  ",
        malagasyTranslation: " Vondrona politika"
      },
      {
        debate: "TO JOIN THE POLITICAL PARTY",
        frenchTranslation: " Joindre un groupe politique",
        malagasyTranslation: " Miditra mpikambana"
      },
      {
        debate: "POLITICAL CRISIS[kraisiz]",
        frenchTranslation: " Crise politique ",
        malagasyTranslation: " Krizy politika"
      },
      {
        debate: "TO VOTE FOR SB/CAST A BALLOT ",
        frenchTranslation: " Voter pour qlq1 ",
        malagasyTranslation: " Mifidy"
      },
      {
        debate: "FIRST/SECOND BALLOT",
        frenchTranslation: " Première/deuxième tour",
        malagasyTranslation: " Fiodinana voalohany/faha2"
      },
      {
        debate: "TO ELECT[ilekt]",
        frenchTranslation: " Elire ",
        malagasyTranslation: " Mifidy"
      },
      {
        debate: "TO RUN FOR PRESIDENT",
        frenchTranslation: " Etre candidat a la présidence ",
        malagasyTranslation: " Milatsaka ho prezida"
      },
      {
        debate: "TO CAMPAIGN",
        frenchTranslation: " Mener une campaigne",
        malagasyTranslation: " Manao fampielezan-kevitra"
      },
      {
        debate: "TO BE A CANDIDATE",
        frenchTranslation: " Etre un candidat",
        malagasyTranslation: " Milatsaka hofidina "
      },
      {
        debate: "A BALLOT BOX",
        frenchTranslation: " Urne",
        malagasyTranslation: " Vata fandatsaham-bato"
      },
      {
        debate: "STRAW [stro] BALLOT",
        frenchTranslation: " Sondage",
        malagasyTranslation: " Fitsapana"
      },
      {
        debate: "A BALLOT/POLL",
        frenchTranslation: "Scrutin/vote ",
        malagasyTranslation: " Latsa-bato "
      },
      {
        debate: "BALLOT PAPER",
        frenchTranslation: "Bulletin de vote",
        malagasyTranslation: "Vato "
      },
      {
        debate: "TO REGISTER[rejester]",
        frenchTranslation: " S’inscrire",
        malagasyTranslation: " Manoratra anarana"
      },
      {
        debate: "TO OUST[aost] ",
        frenchTranslation: "Forcer qn a démissioner",
        malagasyTranslation: " Manongana olona @ asany"
      },
      {
        debate: "TO FIRE/RELIEVE SB FROM HIS DUTY",
        frenchTranslation: " Déstituer",
        malagasyTranslation: " Manala olona @ asany"
      },
      {
        debate: "TO DICTATE[dikteit]",
        frenchTranslation: " Donner des ordres",
        malagasyTranslation: " Manao didy jadona/mandidy"
      },
      {
        debate: "DICTATOR/DICTATORSHIP",
        frenchTranslation: "  Dictacteur/dictature ",
        malagasyTranslation: " Didy jadona"
      },
      {
        debate: "TO BAN",
        frenchTranslation: " Censurer ",
        malagasyTranslation: " Misakana"
      },
    ],
  },
];


const debateTopics8 = [
  {
    id: 1,
    topic: 'Lesson 57: DEBATE--POLITICAL TERMS',
    description: 'WHAT DO YOU THINK ABOUT THE GOVERNMENT? ',
    arguments1: [
      {
        debate: "TO APPLY THE ROADMAP",
        frenchTranslation: " Appliquer la feuille de route",
        malagasyTranslation: " Mampiatra ny tondro zotra"
      },
      {
        debate: "A COUP",
        frenchTranslation: " Coup d’Etat",
        malagasyTranslation: " Fanonganam-panjakana"
      },
      {
        debate: "TO GO ON STRIKE[straik]",
        frenchTranslation: " Faire une grève",
        malagasyTranslation: " Manankorotana"
      },
      {
        debate: "TO BE ON STRIKE ",
        frenchTranslation: " Etre en grève",
        malagasyTranslation: " Mitoko(manao fitokononana) "
      },
      {
        debate:"TO DEMAND, CLAIM",
        frenchTranslation: " Révendiquer",
        malagasyTranslation: " Mitaky"
      },
      {
        debate: "TO WAR/GO TO WAR WITH SB",
        frenchTranslation: " Entrer en guerre avec ",
        malagasyTranslation: " Miady"
      },
      {
        debate: "TO WAGE TO WAR AGAINST",
        frenchTranslation: " Faire la guerre",
        malagasyTranslation: " Miady"
      },
      {
        debate: "TO ALLY [elai]",
        frenchTranslation: " Allier",
        malagasyTranslation: " Miray/mifandray"
      },
      {
        debate: "ALLIED COUNTRY",
        frenchTranslation: " Pays allié",
        malagasyTranslation: " Firenena akaiky"
      },
      {
        debate: "TO CONSERVE[kanserv]",
        frenchTranslation: " Consérver",
        malagasyTranslation: " Mitahiry"
      },
      {
        debate: "TO GOVERN[gavern] ",
        frenchTranslation: " Gouverner ",
        malagasyTranslation: " Mitondra"
      },
      {
        debate: "TO LEAD[lid]",
        frenchTranslation: "  Mener",
        malagasyTranslation: " Mitantana "
      },
      {
        debate: "TO PROMISE[pramis]",
        frenchTranslation: " Promettre",
        malagasyTranslation: " Mampanantena "
      },
      {
        debate: "TO FAIL TO FULFILL[foulfil]",
        frenchTranslation: " Echouer (d’accomplir) ",
        malagasyTranslation: " Tsy mahatanteraka "
      },
      {
        debate: "TO CHANGE[treinje]",
        frenchTranslation: " Changer ",
        malagasyTranslation: " Manova"
      },
      {
        debate: "TO REHABILITATE/RE-ESTABLISH",
        frenchTranslation: " Réhabiliter",
        malagasyTranslation: " Manamboatra indray"
      },
      {
        debate: " TO RENEW[rinio]",
        frenchTranslation: " Rénouveller ",
        malagasyTranslation: " Manova/Manavao "
      },
      {
        debate: "TO CREATE[kriet]",
        frenchTranslation: "  Créer",
        malagasyTranslation: " Mamorona"
      },
      {
        debate: "TO ELIMINATE[ilimineit] ",
        frenchTranslation: " Eliminer",
        malagasyTranslation: " Manala"
      },
      {
        debate: "TO REDUCE[redios] ",
        frenchTranslation: " Réduire ",
        malagasyTranslation: " Mampidina"
      },
      {
        debate: "TO SHELL/BOMBARD",
        frenchTranslation: " Bombarder",
        malagasyTranslation: " Manjera baomba "
      },
      {
        debate: "TO EXPLOID/BLAST ",
        frenchTranslation: " Exploser/faire sauter ",
        malagasyTranslation: " Mampipoaka"
      },
      {
        debate: "TO SHOOT/FIRE[fair]",
        frenchTranslation: " Tirer",
        malagasyTranslation: " Mitifitra"
      },
      {
        debate: "TO SUPPLY[saplai]PROVIDE[provaid]",
        frenchTranslation: " Fournir",
        malagasyTranslation: " Mamatsy"
      },
      {
        debate: "A WEAPON[wepen] ",
        frenchTranslation: " Arme",
        malagasyTranslation: " Fitaova-piadiana "
      },
      {
        debate: "TO HUNT[hant]",
        frenchTranslation: " Chasser",
        malagasyTranslation: " Manenjika/mihaza "
      },
      {
        debate: " TO EXILE[igzail]/BE IN EXILE",
        frenchTranslation: " Exiler/ être en éxil ",
        malagasyTranslation: " Sesitany politika"
      },
      {
        debate: "REFUGEE[refioj] ",
        frenchTranslation: " Réfugie ",
        malagasyTranslation: " Mpifindra toerana"
      },
      {
        debate: "TO IMMIGRATE[imigreit]",
        frenchTranslation: " Immigrer ",
        malagasyTranslation: " Mifindra monina "
      },
      {
        debate: "TO MASSACRE[masaker]",
        frenchTranslation: " Massacrer ",
        malagasyTranslation: " Mamono olona "
      },
      {
        debate: "TO SLAUGHTER[sloter]",
        frenchTranslation: " Abattre/tuer ",
        malagasyTranslation: " Mamono biby/olona "
      },
      {
        debate: " TO FACE/ENCOUNTER[inkaonter]",
        frenchTranslation: " Faire face à",
        malagasyTranslation: " Miatrika"
      },
      {
        debate: "TO RECONCILE[rekonsail]",
        frenchTranslation: " Réconcilier",
        malagasyTranslation: " Mampihavana"
      },
      {
        debate: "TO GRANT AN AMNISTY",
        frenchTranslation: " Donner une amnistie",
        malagasyTranslation: " Manome famelana(politika)"
      },
      {
        debate: "THE ACT OF GRACE ",
        frenchTranslation: " La loi d’amnistie",
        malagasyTranslation: " Lalàna ny famelan-kelona"
      },
      {
        debate: "TO OPPOSE TO SB",
        frenchTranslation: " S’opposer",
        malagasyTranslation: " Manohitra"
      },
      {
        debate: "TO ARGUE[argio]",
        frenchTranslation: " Argumenter",
        malagasyTranslation: " Maneho hevitra"
      },
      {
        debate: "TO BE IN CONFLICT WITH SB",
        frenchTranslation: " Etre en conflit",
        malagasyTranslation: " Mifamaly"
      },
      {
        debate: "A CAR BOMB[kar bam]",
        frenchTranslation: " Voiture piégée",
        malagasyTranslation: " Fiara voasesika baomba"
      },
      {
        debate: "TO DEFUSE[difioz] a situation/crisis",
        frenchTranslation: " Désarmorcer (bombe) ",
        malagasyTranslation: " Mampitsahatra baomba"
      },
      {
        debate: "FIRST/SECOND[seken] TERM",
        frenchTranslation: " 1 /2 eme MANDAT",
        malagasyTranslation: " ½ ème mandat "
      },
      {
        debate: "A GUNMAN[ganman]",
        frenchTranslation: " Bandit armé ",
        malagasyTranslation: " Olona mirongo basy"
      },
      {
        debate: "A LETTER BOMB",
        frenchTranslation: " Lettre piégée",
        malagasyTranslation: " Baomba voafono",
      },
      {
        debate: "TO MINE[main]",
        frenchTranslation: " Minier ",
        malagasyTranslation: " Mandevina baomba"
      },
      {
        debate: "TO APPOINT SB ",
        frenchTranslation: " Nominer",
        malagasyTranslation: " Mifidy olona "
      },
      {
        debate: "TO CONSPIRE/PLOT TO DO STH ",
        frenchTranslation: " Conspirer/comploter",
        malagasyTranslation: " Mikonokonona "
      },
      {
        debate: "A MILITANT(activist)/SEPARATIST ",
        frenchTranslation: " Militant/Separatiste",
        malagasyTranslation: " Mpanohana/mpandray anjara"
      },
      
    ],
  },
 
];


const debateTopics9 = [
  {
    id: 1,
    topic: 'Lesson 58: DEBATE--MEDICAL TERMS',
    description: 'ARE YOU AGAINST OR FOR ABORTION? ',
    arguments1: [
      {
        debate: "TO GO TO THE HOSPITAL",
        frenchTranslation: " Aller à l’hôpital",
        malagasyTranslation: " Mandeha any @ hopitaly"
      },
      {
        debate: "TO EXAMINE[igzamin]YOUR HEALTH",
        frenchTranslation: " Examiner votre santé",
        malagasyTranslation: " Mijery ny fahasalamanao"
      },
      {
        debate: "TO CONSULT[kensalt]A DOCTOR",
        frenchTranslation: " Consulter un docteur",
        malagasyTranslation: " Manontany dokotera ny @"
      },
      {
        debate: "TO GO TO THE DOCTOR ",
        frenchTranslation: " Consulter un docteur",
        malagasyTranslation: " Mijery dokotera"
      },
      {
        debate:"TO PRESCRIBE ANTIBIOTIC FOR SB",
        frenchTranslation: " Préscrire des antibiotiques",
        malagasyTranslation: " Manome ordonnance"
      },
      {
        debate: "TO GIVE SB A PRESCRIPTION",
        frenchTranslation: " Faire une ordonnance",
        malagasyTranslation: " Manome ordonnance"
      },
      {
        debate: "TO GULP[galp]/TO SWALLOW[soalôou] ",
        frenchTranslation: " Avaler",
        malagasyTranslation: " Mitelina"
      },
      {
        debate: "TO TAKE A TABLET",
        frenchTranslation: " Prendre son comprimé",
        malagasyTranslation: " Mihinana fanafody"
      },
      {
        debate: "TO TAKE A REST",
        frenchTranslation: " Se reposer",
        malagasyTranslation: " Manka aina/miala sasatra"
      },
      {
        debate: "TO FOLLOW THE INSTRUCTION",
        frenchTranslation: " Suivre l’instruction",
        malagasyTranslation: " Manaraka torolalana "
      },
      {
        debate: "TO RESPECT THE DOSE[dôuz] ",
        frenchTranslation: " Respecter le dose ",
        malagasyTranslation: " Manaja ny herim-panafody"
      },
      {
        debate: "TO BE SUSPICIOUS[saspises]",
        frenchTranslation: "  Etre méfiant",
        malagasyTranslation: " Mampiahiahy "
      },
      {
        debate: "TO PROMISE[pramis]",
        frenchTranslation: " Promettre",
        malagasyTranslation: " Mampanantena "
      },
      {
        debate: "TO FAIL TO FULFILL[foulfil]",
        frenchTranslation: " Echouer (d’accomplir) ",
        malagasyTranslation: " Tsy mahatanteraka "
      },
      {
        debate: "TO CHANGE[treinje]",
        frenchTranslation: " Changer ",
        malagasyTranslation: " Manova"
      },
      {
        debate: "TO REHABILITATE/RE-ESTABLISH",
        frenchTranslation: " Réhabiliter",
        malagasyTranslation: " Manamboatra indray"
      },
      {
        debate: " TO RENEW[rinio]",
        frenchTranslation: " Rénouveller ",
        malagasyTranslation: " Manova/Manavao "
      },
      {
        debate: "TO CREATE[kriet]",
        frenchTranslation: "  Créer",
        malagasyTranslation: " Mamorona"
      },
      {
        debate: "TO ELIMINATE[ilimineit] ",
        frenchTranslation: " Eliminer",
        malagasyTranslation: " Manala"
      },
      {
        debate: "TO REDUCE[redios] ",
        frenchTranslation: " Réduire ",
        malagasyTranslation: " Mampidina"
      },
      {
        debate: "TO SHELL/BOMBARD",
        frenchTranslation: " Bombarder",
        malagasyTranslation: " Manjera baomba "
      },
      {
        debate: "TO EXPLOID/BLAST ",
        frenchTranslation: " Exploser/faire sauter ",
        malagasyTranslation: " Mampipoaka"
      },
      {
        debate: "TO SHOOT/FIRE[fair]",
        frenchTranslation: " Tirer",
        malagasyTranslation: " Mitifitra"
      },
      {
        debate: "TO SUPPLY[saplai]PROVIDE[provaid]",
        frenchTranslation: " Fournir",
        malagasyTranslation: " Mamatsy"
      },
      {
        debate: "A WEAPON[wepen] ",
        frenchTranslation: " Arme",
        malagasyTranslation: " Fitaova-piadiana "
      },
      {
        debate: "TO HUNT[hant]",
        frenchTranslation: " Chasser",
        malagasyTranslation: " Manenjika/mihaza "
      },
      {
        debate: " TO EXILE[igzail]/BE IN EXILE",
        frenchTranslation: " Exiler/ être en éxil ",
        malagasyTranslation: " Sesitany politika"
      },
      {
        debate: "REFUGEE[refioj] ",
        frenchTranslation: " Réfugie ",
        malagasyTranslation: " Mpifindra toerana"
      },
      {
        debate: "TO IMMIGRATE[imigreit]",
        frenchTranslation: " Immigrer ",
        malagasyTranslation: " Mifindra monina "
      },
      {
        debate: "TO MASSACRE[masaker]",
        frenchTranslation: " Massacrer ",
        malagasyTranslation: " Mamono olona "
      },
      {
        debate: "TO SLAUGHTER[sloter]",
        frenchTranslation: " Abattre/tuer ",
        malagasyTranslation: " Mamono biby/olona "
      },
      {
        debate: " TO FACE/ENCOUNTER[inkaonter]",
        frenchTranslation: " Faire face à",
        malagasyTranslation: " Miatrika"
      },
      {
        debate: "TO RECONCILE[rekonsail]",
        frenchTranslation: " Réconcilier",
        malagasyTranslation: " Mampihavana"
      },
      {
        debate: "TO GRANT AN AMNISTY",
        frenchTranslation: " Donner une amnistie",
        malagasyTranslation: " Manome famelana(politika)"
      },
      {
        debate: "THE ACT OF GRACE ",
        frenchTranslation: " La loi d’amnistie",
        malagasyTranslation: " Lalàna ny famelan-kelona"
      },
      {
        debate: "TO OPPOSE TO SB",
        frenchTranslation: " S’opposer",
        malagasyTranslation: " Manohitra"
      },
      {
        debate: "TO ARGUE[argio]",
        frenchTranslation: " Argumenter",
        malagasyTranslation: " Maneho hevitra"
      },
      {
        debate: "TO BE IN CONFLICT WITH SB",
        frenchTranslation: " Etre en conflit",
        malagasyTranslation: " Mifamaly"
      },
      {
        debate: "A CAR BOMB[kar bam]",
        frenchTranslation: " Voiture piégée",
        malagasyTranslation: " Fiara voasesika baomba"
      },
      {
        debate: "TO DEFUSE[difioz] a situation/crisis",
        frenchTranslation: " Désarmorcer (bombe) ",
        malagasyTranslation: " Mampitsahatra baomba"
      },
      {
        debate: "FIRST/SECOND[seken] TERM",
        frenchTranslation: " 1 /2 eme MANDAT",
        malagasyTranslation: " ½ ème mandat "
      },
      {
        debate: "A GUNMAN[ganman]",
        frenchTranslation: " Bandit armé ",
        malagasyTranslation: " Olona mirongo basy"
      },
      {
        debate: "A LETTER BOMB",
        frenchTranslation: " Lettre piégée",
        malagasyTranslation: " Baomba voafono",
      },
      {
        debate: "TO MINE[main]",
        frenchTranslation: " Minier ",
        malagasyTranslation: " Mandevina baomba"
      },
      {
        debate: "TO APPOINT SB ",
        frenchTranslation: " Nominer",
        malagasyTranslation: " Mifidy olona "
      },
      {
        debate: "TO CONSPIRE/PLOT TO DO STH ",
        frenchTranslation: " Conspirer/comploter",
        malagasyTranslation: " Mikonokonona "
      },
      {
        debate: "A MILITANT(activist)/SEPARATIST ",
        frenchTranslation: " Militant/Separatiste",
        malagasyTranslation: " Mpanohana/mpandray anjara"
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

      {debateTopics6.map((debate) => (
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
                          title="WHY DO YOU GO TO CHURCH?? "
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

        {debateTopics7.map((debate) => (
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
          title="WHY DO YOU GO TO CHURCH?"
          left={(props) => (
            <List.Icon {...props} icon="book-open" color="#8DA9C4" />
          )}
        >
          {debate.arguments1.map((arg, index) => {
            const boldPhrases = [
              "I'm grateful to",
              "fullfill",
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
                          title="DEBATE—POLITICAL TERMS 
                           WHAT DO YOU THINK ABOUT THE GOVERNMENT ?"
                           
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
                                                     {debate.arguments2.map((item, index) => (
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

          {debateTopics8.map((debate) => (
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
                          title="WHAT DO YOU THINK ABOUT THE GOVERNMENT ? "
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

          {debateTopics9.map((debate) => (
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
                          title="ARE YOU AGAINST OR FOR ABORTION?"
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
