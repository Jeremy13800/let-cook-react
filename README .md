# Let's Cook 🍳

![HTML Badge](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS Badge](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript Badge](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![React Badge](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Vite Badge](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)

## Description

**Let's Cook** est une application web interactive construite avec **React** et **Vite**. Elle permet aux utilisateurs de consulter, d'ajouter et de gérer des recettes de cuisine.

### Objectifs pédagogiques

Ce projet vise à :

- Maîtriser les bases de **React** : composants, hooks (useState, useEffect), gestion du routage avec **react-router-dom**.
- Implémenter une interface utilisateur réactive et fluide.
- Exploiter des fichiers JSON en tant que source de données.
- Structurer un projet front-end moderne avec les bonnes pratiques de développement.

## Fonctionnalités principales

1. **Affichage des recettes**

   - Page d'accueil listant toutes les recettes sous forme de cartes.
   - Détails d'une recette disponibles sur une page dédiée.

2. **Recherche dynamique**

   - Recherche par mots-clés via une barre de recherche intuitive.

3. **Gestion des recettes**

   - Ajout, modification et suppression de recettes via le **Dashboard**.

4. **Thème sombre**

   - Possibilité de basculer entre le mode clair et le mode sombre.

5. **Navigation intuitive**
   - Utilisation de **react-router-dom** pour une navigation sans rechargement de page.

## Architecture du projet

```
.
├── src
│   ├── assets
│   │   └── recettes.json
│   ├── components
│   │   ├── Cards.jsx
│   │   ├── DarkModeToggle.jsx
│   │   ├── DashboardContent.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── RecipesContent.jsx
│   │   ├── Hero.jsx
│   │   ├── HeroDashboard.jsx
│   │   ├── HeroRecipes.jsx
│   │   └── Section.jsx
│   ├── hooks
│   │   └── useRecipes.jsx
│   ├── pages
│   │   ├── Dashboard.jsx
│   │   ├── Home.jsx
│   │   └── Recette.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
└── package.json
```

### Points clés de l'architecture :

- Les composants sont organisés dans le dossier **components**.
- Les pages principales sont placées dans le dossier **pages**.
- Les données des recettes sont stockées dans un fichier **recettes.json**.

### Ressources utilisées

- **React** : Bibliothèque front-end pour la création de l'interface utilisateur.
- **Vite** : Outil de build rapide pour les projets web modernes.
- **React Router** : Gestionnaire de routage pour la navigation dans l'application.
- **JSON** : Format de stockage des recettes.
- **React Icons** : Ensemble d'icônes utilisées dans l'application.

- Les pages principales sont placées dans le dossier **pages**.
- Les données des recettes sont stockées dans un fichier **recettes.json**.

## Instructions d'installation

1. Clonez le dépôt :
   ```bash
   git clone https://github.com/Jeremy13800/let-cook-react.git
   ```
2. Accédez au répertoire du projet :
   ```bash
   cd let-cook-react
   ```
3. Installez les dépendances :
   ```bash
   npm install
   ```
4. Lancez l'application :
   ```bash
   npm run dev
   ```

## Explications techniques

Composants principaux

- **Header** : Barre de navigation contenant le logo, les liens et le bouton de mode sombre.
- **Cards** : Affiche une carte pour chaque recette.
- **DashboardContent** : Permet la gestion des recettes (ajout, édition, suppression).
- **DarkModeToggle** : Composant de bascule entre le mode clair et sombre.
- **RecipesContent** : Affiche les détails d'une recette sélectionnée.
- **Hero** : Section d'en-tête pour présenter l'application.
- **HeroDashboard** : Variante de la section Hero pour le dashboard.
- **Section** : Contient des liens utiles, des réseaux sociaux et une newsletter.
- **Footer** : Pied de page affichant les informations de copyright.

### Hooks personnalisés

- `useRecipes` : Gestion de la logique liée aux recettes (filtrage, recherche).

### Données

Les recettes sont stockées dans le fichier **recettes.json**.

## Améliorations possibles 🚀

1. Ajouter des animations pour améliorer l'expérience utilisateur.
2. Permettre la gestion des favoris.
3. Ajouter une fonctionnalité d'authentification pour restreindre l'accès au dashboard.
4. Utiliser une base de données ou une API externe pour stocker les recettes.

## Déploiement

L'application est déployée sur **Vercel**. Vous pouvez y accéder en suivant ce lien : [Let's Cook sur Vercel](https://let-cook-react.vercel.app).

## Auteur

- Nom : Jérémy Cailleux
- Formation : Développeur Web et Web Mobile (DWWM)
- **Objectif :** Validation des compétences en développement d'applications web modernes.
