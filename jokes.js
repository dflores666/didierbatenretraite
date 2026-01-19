/**
 * Les blagues de la retraite de Didier
 * Une nouvelle blague à chaque rechargement !
 * 
 * Contexte : Didier travaille dans le funéraire, ancien rugbyman (un peu rouillé),
 * en couple avec Anne, et part en retraite le 1er avril 2027 !
 * 
 * Total : 200 blagues (16 catégories x ~12-13 blagues)
 */
const jokes = [
    // ═══════════════════════════════════════════════════════════════
    // Catégorie : 1er Avril - C'est pas une blague ! (12 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Le 1er avril 2027, tout le monde pensera que c'est une blague. Mais non.",
    "Poisson d'avril ? Non non, Didier part VRAIMENT le 1er avril !",
    "Le destin a de l'humour : faire partir Didier le jour des blagues.",
    "1er avril 2027 : la seule fois où 'Je pars à la retraite' ne sera pas un poisson.",
    "Didier a choisi le 1er avril pour que personne ne le croie. Stratégie.",
    "Ce n'est PAS un poisson d'avril. C'est la vraie vie. Didier s'en va.",
    "Le plus beau poisson d'avril de Didier : partir pour de vrai.",
    "1er avril : jour des blagues... et de la libération de Didier !",
    "Le 1er avril, Didier dira 'Je pars'. Personne ne le croira. Tant pis pour eux.",
    "C'est pas un poisson, c'est un Didier libre !",
    "1er avril : la blague c'est qu'il a travaillé aussi longtemps.",
    "Partir le 1er avril, c'est s'assurer que la fête sera mémorable.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Didier un peu rouillé (13 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Didier n'est pas vieux, il est vintage.",
    "Les articulations de Didier font plus de bruit que son réveil.",
    "Didier se lève le matin comme un diesel : ça prend du temps.",
    "Le dos de Didier a plus de kilomètres qu'une vieille 205.",
    "Didier ne vieillit pas, il prend de la patine.",
    "Les genoux de Didier craquent tellement qu'on dirait du pop-corn.",
    "Le kiné de Didier a acheté une maison grâce à lui.",
    "Didier n'est pas rouillé, il est 'expérimenté mécaniquement'.",
    "Didier met plus de temps à démarrer qu'un vieux tracteur.",
    "Didier a le dos en kit IKEA : ça tient, mais c'est fragile.",
    "Les chaussettes de Didier sont son plus grand défi matinal.",
    "Le bruit des os de Didier le matin annonce la météo.",
    "Didier rouillé ? Non, juste en mode économie d'énergie.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : C'est pas encore aujourd'hui (12 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Non, ce n'est pas aujourd'hui. Retourne bosser, Didier.",
    "Spoiler : demain non plus.",
    "Pas encore. Mais tu peux toujours rêver devant la machine à café.",
    "La retraite ? Toujours pas. Allez, une petite réunion pour te changer les idées ?",
    "Nope. Mais chaque seconde qui passe te rapproche du bonheur.",
    "Toujours pas ! Mais courage, tu as déjà survécu à tant de lundis.",
    "Non. Mais si ça peut te consoler, le temps passe vite... ou pas.",
    "Toujours en poste, Didier. Encore un effort.",
    "Pas aujourd'hui, champion. Mais bientôt. Enfin... relativement.",
    "Non. Mais hey, c'est déjà moins loin qu'hier !",
    "La réponse est non. Reviens demain. Et après-demain.",
    "Pas encore, Didier. Le chrono ne ment jamais.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Anne, la compagne (13 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Anne va enfin avoir Didier à la maison H24. Courage, Anne !",
    "Anne se demande si c'est une bonne nouvelle ou pas...",
    "Didier retraité = Anne qui va devoir partager la télécommande.",
    "Anne prépare déjà la liste des corvées pour Didier retraité.",
    "Anne : 'Super, il va être là tout le temps maintenant...'",
    "Didier + Anne + retraite = voyages en amoureux !",
    "Bientôt, Didier pourra faire le petit-déj' au lit pour Anne. Tous les jours.",
    "Anne va découvrir que Didier sait pas quoi faire de ses journées.",
    "Didier retraité : le nouveau colocataire à temps plein d'Anne.",
    "Anne et Didier : bientôt en vacances permanentes !",
    "Anne : 'Tu vas faire quoi toute la journée ?' Didier : 'Bonne question.'",
    "Le couple Anne & Didier va passer au niveau expert : 24/7 ensemble.",
    "Anne compte les jours aussi. Mais pas pour les mêmes raisons.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Funéraire avec humour (13 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Didier a enterré tellement de gens qu'il mérite d'enterrer sa carrière en beauté.",
    "Dans le funéraire, on dit 'RIP'. Pour Didier, ce sera 'Retraite Incroyablement Proche'.",
    "Bientôt, les seuls cercueils que Didier verra seront dans les films.",
    "Didier va enfin pouvoir dire : 'C'est plus mon problème, les enterrements !'",
    "Le funéraire, c'est terminé. Place aux funérailles de sa carrière !",
    "Didier a accompagné tant de monde vers leur dernier voyage... À son tour de partir !",
    "Plus besoin de costume noir tous les jours, Didier. Bermuda autorisé !",
    "Après une carrière dans le funéraire, Didier va enfin vivre sa meilleure vie.",
    "RIP la carrière de Didier. Bienvenue la retraite !",
    "Didier connaît les fins. Il est temps d'écrire un nouveau chapitre.",
    "Plus de noir obligatoire ! À toi les chemises hawaïennes, Didier.",
    "Fini les condoléances, place aux félicitations !",
    "Dans le funéraire, tout a une fin. Même la carrière de Didier.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Sport / Ancien rugbyman (12 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Ancien sportif, Didier va enfin pouvoir regarder les matchs sans culpabiliser.",
    "Essai transformé : Didier marque la retraite !",
    "Carton rouge pour le travail. Didier est expulsé... vers le bonheur !",
    "L'arbitre a sifflé : fin de carrière pour Didier !",
    "Bientôt, le seul match que Didier perdra sera contre la grasse mat'.",
    "Didier plaque le boulot comme il plaquait les adversaires.",
    "Ancien rugbyman, maintenant champion de la sieste.",
    "Le seul drop que Didier fera désormais, c'est sur le canapé.",
    "Mi-temps terminée. Place au 3ème temps... permanent !",
    "Didier a joué toute sa carrière. Maintenant c'est relâche.",
    "Touche finale pour Didier : direction la retraite.",
    "Le pack du boulot, c'est fini. Didier sort du terrain.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Patience (12 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Encore un peu de patience... environ 300 réunions inutiles à tenir.",
    "Patience, Didier ! Rome ne s'est pas construite en un jour, ta retraite non plus.",
    "Bientôt, Didier. Bientôt. Enfin, façon de parler.",
    "Plus que quelques centaines de cafés à boire avant le grand jour.",
    "Chaque jour te rapproche du but. Mais aujourd'hui n'est pas ce jour.",
    "La patience est une vertu. Didier est très vertueux.",
    "Attendre la retraite, c'est comme attendre Noël. En plus long.",
    "Didier a la patience d'un saint. Il n'a pas le choix.",
    "Encore un peu. Un tout petit peu. Enfin, regarde le compteur.",
    "La patience de Didier sera récompensée. Le 1er avril 2027.",
    "Patience, patience... le temps joue en ta faveur, Didier.",
    "Chaque seconde de patience = une seconde de moins avant la liberté.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Comptage absurde (13 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Plus que quelques milliers de 'Bonjour !' à la machine à café.",
    "Il te reste environ 2 millions de secondes. Mais qui compte ?",
    "Tu as encore le temps de participer à au moins 200 pots de départ... des autres.",
    "D'ici là, tu auras le temps de raconter 3 fois toutes tes anecdotes.",
    "Plus que quelques milliers d'emails 'Bien cordialement' à envoyer.",
    "Il te reste à peu près 500 sandwichs triangle à manger.",
    "Plus que 300 fois où tu diras 'Vivement vendredi !'",
    "Environ 250 'Tu as passé un bon week-end ?' à échanger.",
    "Plus que 400 pauses café avant la liberté.",
    "Encore environ 100 réunions qui auraient pu être des emails.",
    "Il te reste 10 000 clics de souris. Environ.",
    "Plus que 50 lundis matins difficiles. Courage.",
    "Environ 1000 'Ça va ?' - 'Ça va et toi ?' à échanger.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Vie de bureau vs Retraite (13 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Bientôt fini les réunions qui auraient pu être des emails !",
    "Tu pourras bientôt dire 'Je suis en réunion' sans mentir (réunion apéro).",
    "La retraite : le seul endroit où 'ne rien faire' est productif.",
    "Bientôt tu pourras mettre 'Out of Office' pour toujours !",
    "Fini les 'On se fait un call ?' - Bientôt ce sera 'On se fait une pétanque ?'",
    "Plus de reporting, plus de KPIs, juste des siestes et des apéros.",
    "La retraite : quand tous les jours sont des dimanches, même le lundi.",
    "Plus de dress code. Jogging officiel autorisé.",
    "Fini les deadlines. La seule deadline sera l'apéro.",
    "Plus de 'C'est urgent'. Rien n'est urgent en retraite.",
    "Terminé les mails à 7h du matin. Vive les grasses mat'.",
    "Fini le 'On se cale un créneau ?'. Tous les créneaux sont libres.",
    "Plus jamais de PowerPoint. Jamais. JAMAIS.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Motivation ironique (12 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Courage Didier, tu es sur la dernière ligne droite ! (enfin presque)",
    "Tu y es presque ! Enfin, 'presque' à l'échelle géologique.",
    "Keep calm and attend ta retraite.",
    "La lumière au bout du tunnel ? C'est le soleil qui t'attend !",
    "Accroche-toi Didier ! Tu as survécu à pire.",
    "Tu as fait le plus dur : tu as commencé à travailler. Maintenant, finis !",
    "T'inquiète Didier, c'est bientôt fini. Enfin... bientôt.",
    "Le bout du tunnel approche. Ou pas. Regarde le compteur.",
    "Force et honneur, Didier. La retraite est proche.",
    "Tiens bon ! Chaque jour est une victoire.",
    "Tu gères, Didier. Comme toujours. Mais fatigué.",
    "Allez Didier ! Plus que quelques sprints... à ton rythme.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Projets de retraite (13 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Bientôt les mots croisés à 10h seront ton seul engagement.",
    "La pétanque t'attend, Didier. Encore un peu de patience.",
    "Tu vas enfin avoir le temps de ne rien faire. Professionnellement.",
    "Les mots fléchés et le café au soleil : ton futur quotidien.",
    "Le canapé va enfin connaître son vrai propriétaire.",
    "Bientôt, 'être débordé' voudra dire choisir entre sieste et apéro.",
    "Tu vas pouvoir être en retard... pour rien du tout !",
    "L'apéro à 11h, ça sera bientôt légal pour toi.",
    "Bientôt, le seul stress sera de choisir le programme télé.",
    "Didier va enfin pouvoir finir cette série commencée il y a 3 ans.",
    "La grasse mat' va devenir un art de vivre.",
    "Le réveil va prendre sa retraite en même temps que Didier.",
    "Bientôt, le planning de Didier sera : vide. Glorieusement vide.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Philosophique (12 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Le temps est relatif, sauf quand on attend sa retraite.",
    "Travailler, c'est trop dur. Et ne pas travailler, c'est bientôt pour toi !",
    "La vie, c'est ce qui se passe pendant qu'on attend la retraite.",
    "Didier a accompagné des fins de vie. Maintenant, place au début de la belle vie.",
    "Chaque jour, Didier médite sur le sens de la retraite.",
    "Le bonheur ? C'est dans le compte à rebours.",
    "Travailler pour vivre ou vivre pour travailler ? Bientôt, juste vivre.",
    "La retraite n'est pas la fin, c'est le commencement.",
    "Didier a tout donné. Maintenant, il va tout recevoir.",
    "La sagesse de Didier : savoir quand s'arrêter. C'est bientôt.",
    "Le secret du bonheur ? Le compte à rebours de la retraite.",
    "Didier philosophe : 'Je travaille, donc je souffre. Bientôt fini.'",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Statistiques inutiles (12 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Fun fact : Tu as déjà passé environ 40 ans à attendre ce moment.",
    "Statistiquement, chaque seconde te rapproche. Impressionnant, non ?",
    "Saviez-vous ? Didier pense à sa retraite 47 fois par jour.",
    "En moyenne, Didier regarde ce site 12 fois par semaine.",
    "94% des collègues de Didier pensent qu'il mérite sa retraite. Les 6% sont jaloux.",
    "Ce site a été visité autant de fois que Didier a soupiré au travail.",
    "Étude scientifique : 100% des Didier veulent leur retraite.",
    "Probabilité que Didier soit content le 1er avril : 100%.",
    "Nombre de fois où Didier a regardé le calendrier aujourd'hui : beaucoup.",
    "Temps moyen avant que Didier parle de sa retraite : 3 minutes.",
    "Didier a compté les jours 847 fois. Et il recommence chaque matin.",
    "87% de ce site est composé d'espoir. Les 13% restants : impatience.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Références pop culture (13 blagues)
    // ═══════════════════════════════════════════════════════════════
    "La retraite is coming... le 1er avril !",
    "To be retired, or not to be... bientôt la question ne se posera plus.",
    "Didier : 'Je reviendrai !' (à la maison, tous les jours, dès avril 2027)",
    "Houston, nous avons un compte à rebours.",
    "'C'est pas faux.' - Perceval, à propos de la date de retraite de Didier.",
    "Un petit pas pour Didier, un grand pas vers la retraite.",
    "Veni, Vidi, Bientôt Retraiti.",
    "Carpe Diem... en attendant Carpe Retraite.",
    "Demain est un autre jour... plus proche de la retraite.",
    "Que la retraite soit avec toi, Didier.",
    "Winter is coming... mais la retraite arrive avant !",
    "May the retraite be with you.",
    "'On n'est pas bien là ?' Bientôt si, Didier. Bientôt si.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Vieille école / Le bon vieux temps (13 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Didier, c'est la vieille école. La vraie. Celle qui bosse.",
    "Du temps de Didier, on bossait dur et on se plaignait pas. Enfin, un peu quand même.",
    "Didier a connu l'époque où les téléphones avaient des fils.",
    "Avant les emails, il y avait Didier. Et le courrier. Et la patience.",
    "Didier, c'est un homme à l'ancienne : solide, fiable, et bientôt en retraite.",
    "De mon temps... Didier a le droit de le dire, maintenant.",
    "Didier a traversé les époques. Maintenant, il va profiter.",
    "Les jeunes ne savent pas ce que c'est. Didier, si.",
    "Didier a connu le Minitel. Et il a survécu.",
    "À l'ancienne, Didier. Comme le bon vin.",
    "Didier, c'est pas la nouvelle génération. C'est la bonne.",
    "Il était une fois un Didier... qui bossait sans se plaindre. Fin de l'histoire.",
    "Didier a tout vu, tout vécu. Maintenant, place au repos mérité.",

    // ═══════════════════════════════════════════════════════════════
    // Catégorie : Collègues et travail (12 blagues)
    // ═══════════════════════════════════════════════════════════════
    "Tes collègues comptent aussi les jours. Pour faire la fête.",
    "Qui va raconter des histoires après toi ?",
    "La machine à café va te regretter.",
    "Le parking va perdre son meilleur client.",
    "Les familles vont devoir trouver un autre Didier. Bon courage.",
    "Le bureau de Didier va devenir un lieu de pèlerinage.",
    "Les collègues vont devoir trouver quelqu'un d'autre à charrier.",
    "La légende Didier va quitter le bâtiment. Enfin, bientôt.",
    "L'imprimante va s'ennuyer sans les jurons de Didier.",
    "Le frigo de la salle de pause perd son gardien.",
    "Didier part, mais ses blagues restent gravées dans les mémoires.",
    "Les pauses café ne seront plus jamais les mêmes sans Didier.",
];
