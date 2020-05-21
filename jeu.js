var step = 0;

var textes = [
   "An de grâce 832<br/>Votre population est de " + hash(1) + "<br/>« Votre majesté ! Une vieille femme demande audience. Elle prétend être voyante et vous propose de lire votre avenir. »",
   "An de grâce 845<br/>C'est la guerre ! Le seigneur du royaume voisin est en train de mobiliser son armée.",
   "An de grâce 852<br/>Votre conseiller souhaite vous voir: « Un soleil de plomb règne sur votre royaume, menaçant vos terres de sécheresse. »",
   "An de grâce 861<br/>Un homme avec un masque de corbeau se présente à votre porte. « Votre majesté, je suis médecin, Voyez ce formage. Si vous le proposez à votre peuple, il sera immunisé de la Grande Peste. »",
   "An de grâce 868<br/>« Votre majesté, grande nouvelle ! Votre suzeraine vous rend visite. Vous vous devez de l'éblouir. »",
   "An de grâce 875<br/>Un peintre célèbre vous demande audience. « Votre majesté, vos terres sont magnifiques. Je souhaiterais m'y établir »",
   "An de grâce 881<br/>« Votre majesté, on dit de vous que vous êtes une grande bretteuse. Je vous défie en duel ! »",
   "An de grâce 888<br/>Révolte ! « C'est inacceptable, nous exigeons de pouvoir gérer nos propres récoltes. »",
   "An de grâce 893<br/>« Votre Majesté, on raconte qu'un objet mystérieux est apparu au milieu de la Forêt de l'Ouest. Il pourrait s'agir d'un puissant artefact. »",
   "An de grâce 898<br/>« Le seigneur voisin vous propose un accord commercial. »"
 ];

var a = [
  "Parle, je t'écoute",
  "Allons, discutons, je suis sûr qu'il n'est pas fermé à la diplomatie",
  "Qu'on fasse creuser des canots depuis la rivière.",
  "Très bien, j'achète !",
  "Organisons un Banquet.",
  "Ce sera un honneur de vous avoir parmi nous.",
  "En garde !",
  "Très bien. Faites à votre idée.",
  "Très bien, je vais voir cela de mes propres yeux.",
  "Cet accord m'a l'air juste. J'accepte."
];
var b = ["Qu'on l'emmenne, je ne crois pas en ces simagrées",
  "Je refuse de faire souffrir mon peuple dans une guerre absurde. Je me rends.",
  "Je suis sûr que ce temps ne durera pas, inutile de s'inquiéter.",
  "Commençons par un test à petite échelle.",
  "Invitons-la à la messe.",
  "Allons bon ! Hors de question qu'un parasite vive aux crochet de mon peuple.",
  "Je crains de décevoir vos attente, mais Dame Églantine ici est ma meilleure bretteuse.",
  "Allons, discutons. Je suis sûr que nous pouvons trouver un accord.",
  "Dame Églantine, Je vous confie la mission de voir de quoi il retourne.",
  "Cet accord est intéressant, mais je propose une petite modification."
];
var c = ["Sorcière, au bûcher !",
  "Ah vraiment ? Qu'on prépare les balistes !",
  "Il faut que nous changions nos cultures. Cette nouvelle variété de blé devrait mieux supporter le temps.",
  "C'est hors de question, sortez avec vos histoires !",
  "J'ai entendu dire qu'elle aimait la chasse. Organisons-en une.",
  "Pourquoi pas ? Je vais vous recommander à une mienne amie pour qu'elle soit votre mécène.",
  "Pour qui me prenez-vous ? Je ne suis pas femme à m'abaisser à de telles bêtises.",
  "Gaaardes !!!! Arrêtez ces malandrins !",
  "Il vaut mieux ne pas se frotter aux forces de l'occulte. Je vous interdis d'aller voir.",
  "Pour qui me prenez vous ? Cet accord est un affront !"
];

var chemin = 1;

var reponses = new Map();
reponses.set("A1", [
  "La voyante vous prédit une année ensoleillée. Vous prévoyez l'eau en conséquence. Les récoltes sont excellentes, et votre population en bénéficie.",
  "La voyante vous prédit la naissance d'un graçon l'année suivante. L'année suivante, vous avez un garçon. Mais ce n'était pas loin.",
  "La voyante prédit une guerre. Vous préparez les armes, mais nul ne vous attaque. Le prix des armes pèse lourdement sur votre peuple."
]);
reponses.set("B1", [
  "Vous ouvrez une nouvelle ère de raison, qui profite à votre peuple.",
  "L'anecdote fait bien rire vos conseillers et vous-même pendant plusieurs mois.",
  "« Comment osez-vous ? Je vous maudis ! Plusieurs mois se passent sans que tombe une goutte d'eau. C'est la disette. »"
]);
reponses.set("C1", [
  "Vous avez l'impression qu'un véritable carcan a été levé. Tout à coup, les champs sont plus productifs, les bêtes moins malades…",
  "Les cris de la sorcière hantent vos cauchemars pendant des mois.",
  "« Comment osez-vous ? Je vous maudis ! Plusieurs mois se passent sans que tombe une goutte d'eau. C'est la disette. »"
]);
reponses.set("A2", [
  "Vous négociez habilement. Vous parvenez à gagner un nouveau territoire !",
  "Vous parvenez à signer une armistice et évitez la catastrophe.",
  "Vous parvenez à désamorcer la guerre, mais au prix d'une partie de votre royaume."
]);
reponses.set("B2", [
  "Vous devenez vassal de votre voisin. Cela ne change rien en pratique, mais il vous prête assistance.",
  "Vous devenez vassal de votre voisin. Cela ne change rien en pratique.",
  "Votre voisin pille votre territoire et massacre votre peuple."
]);
reponses.set("C2", [
  "Votre victoire est écransante. Vous gagnez des terres de votre voisin.",
  "Au bout de quelques semain_textes à vous observer, vous finissez pas signer un accord de paix.",
  "Vous finissez par gagner, mais à quel prix ? Votre population sort exsangue de ce conflit."
]);
reponses.set("A3", [
  "Vouss obtenez de merveilleuses récoltes, qui profitent à votre peuple.",
  "Votre manœuvre permet de main_texttenir vos cultures.",
  "Votre changement fait pourrir vos récoltes sur pieds."
]);
reponses.set("B3", [
  "Les pluies tombent, et font fructifier de splendides récoltes.",
  "La pluie retombe aussi et la suituation se régule.",
  "La sécheresse tue toutes vos récoltes."
]);
reponses.set("C3", [
  "Cette nouvelle récolte semble pousser toute seule ! La nourriture est abondante.",
  "Cette nouvelle culture remplace l'ancienne; elle est effectivement adaptée à la situation.",
  "Il est trop tard, avant que la nouvelle espèce ne prenne, la famine décime votre population."
]);
reponses.set("A4", [
  "Cette mesure fait drastiquement baisser la mortalité de votre population.",
  "Vous vous êtes fait avoir, il ne s'agit que d'herbes sans effets.",
  "Le remède semble pire que le mal. Cette médecine est en fait un poison."
]);
reponses.set("B4", [
  "Vous réussissez à améliorer encore le remède, épargnant ainsi des milliers de vies.",
  "Le remède s'avère en fait inefficace.",
  "Le temps de tester le formage, une épidémie de gande peste décime votre peuple."
]);
reponses.set("C4", [
  "Il s'agissait bien d'un charlatan. Vous acquerrez une grande réputation auprès des médecins de votre temps, qui vous apporte un vrai traitement.",
  "Il tourne les talons et s'en va.",
  "La semain_texte suivante, une épidémie de gande peste décime votre peuple."
]);
reponses.set("A5", [
  "Grâce à ce banquet, vous acquerrez une grande réputation, qui attire des gens venant des quatre pojnts du royaume.",
  "Vous passez une excellente soirée. Le montreur d'ours était particulièrement bon.",
  "Le banquet était excellent, mais vous êtes ruiné. Vous êtes obligé d'imposer votre peuple, qui souffre de disette."
]);
reponses.set("B5", [
  "Votre messe fait date. Des ordres monastiques s'installent, et dispensent des soin à votre peuple.",
  "Durant la messe solennelle, vous parvenez à discuter avec la reine. Apparemment, elle aime le sanglier.",
  "L'église vous blâme pour votre messe impie. Elle vous coupe aussi les vivres."
]);
reponses.set("C5", [
  "Vous devenez veneuse de la reine. Vela vous profite. Vous avez désormais l'oreille attentive de la reine et en profitez pour amméliorer la vie de votre peuple.",
  "Vous parvenez à abattre un cerf. La reine, un sanglier.",
  "La reine succombe à un affrontement avec un sanglier. Vous devez payer son enterrement. Votre peuple doit se serrer la ceinture."
]);
reponses.set("A6", [
  "Une véritable cour s'installe dans votre royaume. Une cour riche. Dont l'argent profite à tous.",
  "Votre château se remplit de magnifiques tableaux faisant votre orgueil.",
  "Cet artiste est très dispendieux, et vit à vos crochets. Cela ressurgit sur votre peuple."
]);
reponses.set("B6", [
  "Vous recevez un soutien substantiel des adversaire de cet artiste.",
  "L'artiste repart. « J'aurai peut-être plus de chance dans le domaine d'à côté. »",
  "L'artiste s'installe dans le domain_texte d'à côté. Il rayonne à vos dépens, causant un exode."
]);
reponses.set("C6", [
  "Une véritable cour s'installe dans votre royaume. Une cour riche. Dont l'argent profite à tous.",
  "La mécène finit par se lasser de l'artiste, qui repart.",
  "Les rivaux de l'artiste décident de vous saboter et font installer des bandits dans votre domain_texte."
]);
reponses.set("A7", [
  "Vous gagnez votre duel. De jeunes nobles viennent profiter de vos enseignements, et des bons produits que produit votre peuple, contre monaie sonnante et trébuchante.",
  "Après quelques passes, vous concluez que vous êtes aussi fortes l'une que l'autre.",
  "Vous êtes blessée. Pendant votre convalescence, votre royaume est mal géré, ce qui se ressent."
]);
reponses.set("B7", [
  "Dame Églantine gagne le duel. De jeunes nobles viennent profiter de vos enseignements, et des bons produits que produit votre peuple, contre monaie sonnante et trébuchante.",
  "Dame Églantine tue son adversaire durant le duel.",
  "Dame Églantine tue son adversaire durant le duel. Malheureusement, elle n'était pas seule. Un groupe de bandits s'installe dans le royaume et massacre tous ceux qu'elle croise."
]);
reponses.set("C7", [
  "La femme fait demi-tour. Vous entendez parler d'une justicière qui s'est installée dans le royaume et débarrasse le royaume des bandits.",
  "La femme fait demi-tour. Vous n'entendez plus jamais parler d'elle.",
  "La femme fait demi-tour. Vous entendez parler d'une femme-bandit qui s'est installée dans le royaume et massacre tous ceux qu'elle croise."
]);
reponses.set("A8", [
  "La paix se rétablit. Les paysans semblent savoir mieux gérer leurs récoltes que vous-même.",
  "Votre manœuvre permet un retour à la normale.",
  "Ces paysans sont incapables de gérer les récoltes, qui pourrissent. La disette règne."
]);
reponses.set("B8", [
  "Vous trouvez un bon équilibre, meilleur que l'ancien. Chacun peut manger à sa faim.",
  "Votre manœuvre permet un retour à la normale.",
  "Vous trouvez un accord, mais les responsabilités sont mal définies et les récoltes finissent par pourrir."
]);
reponses.set("C8", [
  "Vous matez la révolte. Désormais vous reignez par la peur, mais n'est-ce pas ela qui pousse chacun à faire de son mieux ?",
  "Les meneurs sont arrêtés, la suituation revient à la normale.",
  "Le conflit se crispe. Les paysans refusent de céder. Toute une partie du royaume souffre de la faim, vous et votre cour d'abord."
]);
reponses.set("A9", [
  "Vous trouvez une corne d'abondance. Votre peuple ne souffrira plus jamais de la faim.",
  "Vous trouvez une épée qui chante. Vos nuits ne sront plus jamais aussi paisibles…",
  "Vous vous perdez pendant des mois. Et vous avez oublié de déterminer qui dirigeait durant votre absence. À votre retour, c'est la catastrophe."
]);
reponses.set("B9", [
  "Dame Églantine ramène une corne d'abondance. Votre peuple ne souffrira plus jamais de la faim.",
  "Dame Églantine revientt les main_texts vides « Il n'y avait rien dans cette forêt indique-t-elle en dissimulant soigneusement ses main_texts. »",
  "Dame Églantine ramène un cristal noir. Le lendemain_text matin, le fils aîné de chaque famille est retrouvé mort, dans un bain de sang."
]);
reponses.set("C9", [
  "Le peuple vous désobéit, et tombe sur un puits aux vœux, qui comble votre domain_texte de ses bienfaits.",
  "L'artefact tombe dans l'oubli.",
  "Malheureusement, vous aviez raison, mais par conséquent, vous n'êtes pas allé fermer cette porte démoniaqu. Les démons déboulent sur votre plan et massacrent dans un rire dément."
]);
reponses.set("A10", [
  "Cet accord profite à tout un chacun.",
  "Cet accord vous permet de déouvrir le poivre. Délicieux !",
  "Rapidement, vous êtes ruiné, votre population aussi. Vous auriez peut-être dû relire cet accord."
]);
reponses.set("B10", [
  "Vos talents de négociatrice vous permet de trouver un accord à votre avantage.",
  "Votre voisin refuse l'accord et repart chez lui.",
  "Vous mmanquez un point essentiel de l'accord. Vous êtes ruiné, votre population aussi."
]);
reponses.set("C10", [
  "Votre voisin se montre plus raisonnable. Vous obtenez un droit à sens unique.",
  "Votre voisin repart dans son domain_texte.",
  "Ah c'est comme ça ? Alors, c'est la guerre. J'obtiendrai ce que je veux, de gré ou de force."
]);

function questionSuivante(){
    if(step == 10){
        document.getElementById("main_text").innerHTML = "Vous rendez l'âme en 900. Le jeu est terminé; votre domain_texte abrite " + hash(chemin) + " âmes.";
        document.getElementById("OK").innerHTML = "Réinitialiser";
        document.getElementById("OK").setAttribute("onclick", "reinitialize()");
    }
    else{
        document.getElementById("main_text").innerHTML = textes[step];
        document.getElementById("OK").setAttribute("style", "display:none");
        document.getElementById("A").setAttribute("style", "display:block");
        document.getElementById("B").setAttribute("style", "display:block");
        document.getElementById("C").setAttribute("style", "display:block");
        document.getElementById("A").innerHTML = a[step];
        document.getElementById("B").innerHTML = b[step];
        document.getElementById("C").innerHTML = c[step];
        step++;
    }
}

function reinitialize(){
    step = 0;
    chemin = 1;
    questionSuivante();
    document.getElementById("OK").innerHTML = "OK";
    document.getElementById("OK").setAttribute("onclick", "questionSuivante()");
}

function choix(cle){
    ancien_gain = hash(chemin)
    if(cle == "A"){
        chemin = 3 * chemin;
        k = "A" + [step]
        }
    else if(cle == "B"){
        chemin = 3 * chemin + 1;
        k = "B" + [step]
    }
    else{
        chemin = 3 * chemin + 2;
        k = "C" + [step]
    }
    gain = (hash(chemin) - ancien_gain)/ancien_gain
    reponse(k, gain);
}

function hash(n){
    return ((12007 * n + 11054) % 100019) % 76781
}

function reponse(cle, gain){
    var specific;
    if(gain < -.5){
        specific = reponses.get(cle)[2]
    }
    else if(gain > .5){
        specific = reponses.get(cle)[0]
    }
    else{
        specific = reponses.get(cle)[1]
    }
    document.getElementById("main_text").innerHTML = specific  + "<br/>Il y a désormais " + hash(chemin) + " habitants dans votre royaume.";
    document.getElementById("OK").setAttribute("style", "display:block");
    document.getElementById("A").setAttribute("style", "display:none");
    document.getElementById("B").setAttribute("style", "display:none");
    document.getElementById("C").setAttribute("style", "display:none");
}
