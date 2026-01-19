# Didier bat en Retraite 🏖️

Un site humoristique avec un compte à rebours vers la grande retraite de Didier (1er juillet 2027).

**Domaine** : `didierbatenretraite.fr`

## Fonctionnalités

- Compte à rebours en temps réel
- 100+ blagues aléatoires à chaque rechargement
- Design moderne et responsive
- Non indexable par les moteurs de recherche (sauf le domaine)

## Structure

```
didierbatenretraite/
├── index.html      # Page principale
├── style.css       # Styles
├── script.js       # Compte à rebours
├── jokes.js        # Les 100 blagues
├── robots.txt      # Blocage SEO
├── vercel.json     # Config Vercel
└── assets/
    └── didier.jpg  # Photo de Didier (à ajouter)
```

## Personnalisation

### Ajouter la photo de Didier

1. Renomme ta photo en `didier.jpg`
2. Place-la dans le dossier `assets/`
3. Format recommandé : carré, minimum 300x300px

### Modifier les blagues

Édite le fichier `jokes.js` pour ajouter/modifier/supprimer des blagues.

## Déploiement sur Vercel

### Option 1 : Via GitHub (recommandé)

1. **Créer un repo GitHub** :
   ```bash
   cd didierbatenretraite
   git init
   git add .
   git commit -m "Initial commit - La retraite de Didier"
   ```

2. **Pousser sur GitHub** :
   - Crée un nouveau repo sur github.com
   - Puis :
   ```bash
   git remote add origin https://github.com/TON_USERNAME/didierbatenretraite.git
   git push -u origin main
   ```

3. **Connecter à Vercel** :
   - Va sur [vercel.com](https://vercel.com)
   - Connecte-toi avec GitHub
   - Clique "Add New Project"
   - Importe le repo `didierbatenretraite`
   - Clique "Deploy"

4. **Configurer le domaine** :
   - Dans les settings du projet Vercel
   - Onglet "Domains"
   - Ajoute `didierbatenretraite.fr`
   - Configure les DNS chez ton registrar

### Option 2 : Via Vercel CLI

1. **Installer Vercel CLI** :
   ```bash
   npm install -g vercel
   ```

2. **Déployer** :
   ```bash
   cd didierbatenretraite
   vercel
   ```

3. **Suivre les instructions** pour lier à ton compte.

## Configuration DNS (pour le domaine personnalisé)

Chez ton registrar (OVH, Gandi, etc.), ajoute :

| Type  | Nom | Valeur |
|-------|-----|--------|
| A     | @   | 76.76.21.21 |
| CNAME | www | cname.vercel-dns.com |

## Tester en local

Ouvre simplement `index.html` dans ton navigateur, ou utilise un serveur local :

```bash
# Avec Python
python -m http.server 8000

# Avec Node.js (npx)
npx serve
```

Puis ouvre http://localhost:8000

## Licence

Fait avec humour pour Didier 🎉
