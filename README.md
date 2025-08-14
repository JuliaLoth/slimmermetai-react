# slimmermetai-react

Een moderne React website met Decap CMS integratie voor eenvoudig contentbeheer, speciaal gebouwd voor AI‑training en adviesservices.

## ✨ Features

- **React 18** – Moderne, snelle frontend
- **React Router** – Client‑side routing
- **Decap CMS** – Gebruiksvriendelijk content management
- **Netlify Ready** – Geoptimaliseerd voor Netlify hosting
- **Responsive Design** – Werkt perfect op alle devices
- **SEO‑vriendelijk** – Geoptimaliseerd voor zoekmachines

## 🚀 Quick Start

### 1. Repository setup

```bash
# Clone de repository lokaal
git clone https://github.com/JuliaLoth/slimmermetai-react.git
cd slimmermetai-react

# Installeer dependencies
npm install
```

### 2. Ontwikkel lokaal

```bash
# Start de development server
npm start

# (Optioneel) Gebruik Netlify Dev voor CMS functionaliteit
npx netlify dev
```

De website is nu beschikbaar op `http://localhost:3000`.

### 3. Deploy naar Netlify

#### Optie A: via GitHub (aanbevolen)

1. Push je code naar GitHub
2. Ga naar [Netlify Dashboard](https://app.netlify.com)
3. Klik "New site from Git"
4. Verbind je GitHub repository
5. Build‑instellingen:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Klik "Deploy site"

#### Optie B: via Netlify CLI

```bash
# Installeer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build en deploy
npm run build
netlify deploy --prod --dir=build
```

### 4. CMS setup

#### Netlify Identity setup

1. Ga naar je site dashboard op Netlify
2. Ga naar **Site settings** > **Identity**
3. Klik **Enable Identity**
4. Ga naar **Settings** > **Registration preferences**
5. Selecteer **Invite only** voor veiligheid
6. Ga naar **Settings** > **Git Gateway**
7. Klik **Enable Git Gateway**

#### Admin‑toegang instellen

1. Ga naar `jouwsite.netlify.app/admin`
2. Klik "Login with Netlify Identity"
3. Je wordt doorgestuurd naar registratie
4. Check je e‑mail voor verificatie

#### Jezelf als admin toevoegen

```bash
# Via Netlify CLI
netlify identity:invite julia@loth.nl
```

Of via Netlify Dashboard:
1. **Site settings** > **Identity** > **Invite users**
2. Voer je e‑mail in
3. Check je e‑mail en volg de link

## 📁 Projectstructuur

```
slimmermetai-react/
├── public/
│   ├── admin/
│   │   ├── config.yml
│   │   └── index.html
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js
│   │   └── Footer.js
│   ├── hooks/
│   │   └── useContent.js
│   ├── pages/
│   │   ├── Home.js
│   │   ├── TrainingenAdvies.js
│   │   ├── Nieuws.js
│   │   └── OverMij.js
│   ├── App.js
│   └── index.js
├── netlify.toml
├── package.json
├── package-lock.json
└── README.md
```

## 📝 Contentbeheer

- Via CMS: `jouwsite.netlify.app/admin` (Netlify Identity + Git Gateway)
- Via code: inhoud staat in React componenten en `src/hooks/useContent.js`

## 🔧 Configuratie

- CMS: `public/admin/config.yml`
- Netlify: `netlify.toml`
- Environment variabelen: Netlify Dashboard > **Site settings** > **Environment variables**. Gebruik in React: `process.env.REACT_APP_VARIABLE_NAME`

## 📧 Contact & Support

**Email**: julia@loth.nl  
**Website**: slimmermetai.com  
**LinkedIn**: [Julia Loth](https://linkedin.com/in/julia-loth)

## 🚀 Deployment checklist

- [ ] Repository gemaakt en code gepusht
- [ ] Netlify site verbonden
- [ ] Netlify Identity enabled
- [ ] Git Gateway enabled
- [ ] Admin user toegevoegd
- [ ] Custom domein ingesteld (optioneel)
- [ ] SSL‑certificaat actief
- [ ] CMS‑toegang getest

---

**Veel succes met je website! 🎉**
