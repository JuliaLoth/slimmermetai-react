# SlimmerMetAI Website

Een moderne React website met Decap CMS integratie voor eenvoudig content beheer, speciaal gebouwd voor AI training en advies services.

## ✨ Features

- **React 18** - Moderne, snelle frontend
- **React Router** - Client-side routing
- **Styled Components** - Component-gebaseerde styling
- **Decap CMS** - Gebruiksvriendelijk content management
- **Netlify Ready** - Geoptimaliseerd voor Netlify hosting
- **Responsive Design** - Werkt perfect op alle devices
- **SEO Vriendelijk** - Geoptimaliseerd voor zoekmachines

## 🚀 Quick Start

### 1. Repository Setup

```bash
# Maak een nieuwe repository op GitHub
# Clone de repository lokaal
git clone https://github.com/JuliaLoth/slimmermetai-website.git
cd slimmermetai-website

# Installeer dependencies
npm install
```

### 2. Ontwikkel Lokaal

```bash
# Start de development server
npm start

# Of gebruik Netlify Dev voor CMS functionaliteit
npx netlify dev
```

De website is nu beschikbaar op `http://localhost:3000`

### 3. Deploy naar Netlify

#### Optie A: Via GitHub (Aanbevolen)

1. Push je code naar GitHub
2. Ga naar [Netlify Dashboard](https://app.netlify.com)
3. Klik "New site from Git"
4. Verbind je GitHub repository
5. Build instellingen:
   - **Build command**: `npm run build`
   - **Publish directory**: `build`
6. Klik "Deploy site"

#### Optie B: Via Netlify CLI

```bash
# Installeer Netlify CLI
npm install -g netlify-cli

# Login
netlify login

# Build en deploy
npm run build
netlify deploy --prod --dir=build
```

### 4. CMS Setup

#### Netlify Identity Setup

1. Ga naar je site dashboard op Netlify
2. Ga naar **Site settings** > **Identity**
3. Klik **Enable Identity**
4. Ga naar **Settings** > **Registration preferences**
5. Selecteer **Invite only** voor veiligheid
6. Ga naar **Settings** > **Git Gateway**
7. Klik **Enable Git Gateway**

#### Admin Toegang Instellen

1. Ga naar `jouwsite.netlify.app/admin`
2. Klik "Login with Netlify Identity"
3. Je wordt doorgestuurd naar registratie
4. Check je email voor verificatie

#### Jezelf als Admin Toevoegen

```bash
# Via Netlify CLI
netlify identity:invite julia@loth.nl
```

Of via Netlify Dashboard:
1. **Site settings** > **Identity** > **Invite users**
2. Voer je email in
3. Check je email en volg de link

## 📁 Project Structuur

```
slimmermetai-website/
├── public/
│   ├── admin/
│   │   └── index.html          # CMS Admin Interface
│   └── index.html
├── src/
│   ├── components/
│   │   ├── Header.js           # Navigatie component
│   │   └── Footer.js           # Footer component
│   ├── pages/
│   │   ├── Home.js             # Homepage
│   │   ├── TrainingenAdvies.js # Services pagina
│   │   ├── Nieuws.js           # News/Substack pagina
│   │   └── OverMij.js          # About pagina
│   ├── hooks/
│   │   └── useContent.js       # Content management hook
│   ├── content/               # CMS content files
│   └── App.js                 # Main app component
├── netlify.toml               # Netlify configuratie
├── package.json
└── README.md
```

## 🎨 Styling & Design

De website gebruikt een moderne gradient design met:

- **Hoofdkleuren**: Purple/Blue gradient (#667eea tot #764ba2)
- **Accent kleuren**: Wit en lichtgrijs tinten
- **Typography**: Arial, moderne sans-serif stack
- **Layout**: CSS Grid en Flexbox voor responsieve design
- **Hover effecten**: Subtle animaties en transform effecten

### Kleuren Aanpassen

Bewerk de styled-components in de React componenten:

```javascript
// Hoofdgradient
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);

// Accent kleuren
color: #333;           // Donkere tekst
color: #666;           // Grijze tekst
background: #f8f9fa;   // Lichte achtergrond
```

## 📝 Content Beheer

### Via CMS (Aanbevolen)

1. Ga naar `jouwsite.netlify.app/admin`
2. Log in met Netlify Identity
3. Bewerk pagina's via de intuïtieve interface
4. Wijzigingen worden automatisch gecommit naar Git
5. Site wordt automatisch opnieuw gebouwd

### Via Code

Content kan ook direct bewerkt worden in:
- `src/hooks/useContent.js` - Default content
- React componenten voor directe aanpassingen

## 🔧 Configuratie

### CMS Instellingen

Bewerk `public/admin/config.yml` voor:
- Nieuwe content types
- Extra velden
- Workflow aanpassingen

### Netlify Instellingen

Bewerk `netlify.toml` voor:
- Build commando's
- Redirect regels
- Headers en veiligheid

### Environment Variabelen

Voor API keys of andere secrets:

1. Netlify Dashboard > **Site settings** > **Environment variables**
2. Voeg variabelen toe
3. Gebruik in React: `process.env.REACT_APP_VARIABLE_NAME`

## 📧 Contact & Support

**Email**: julia@loth.nl  
**Website**: slimmermetai.com  
**LinkedIn**: [Julia Loth](https://linkedin.com/in/julia-loth)

## 🚀 Deployment Checklist

- [ ] Repository gemaakt en code gepusht
- [ ] Netlify site verbonden
- [ ] Netlify Identity enabled
- [ ] Git Gateway enabled
- [ ] Admin user toegevoegd
- [ ] Custom domein ingesteld (optioneel)
- [ ] SSL certificaat actief
- [ ] CMS toegang getest

## 🔒 Veiligheid

- Netlify Identity voor authenticatie
- Git Gateway voor veilige CMS toegang
- HTTPS geforceerd
- Security headers geconfigureerd
- Admin panel alleen toegankelijk voor geautoriseerde gebruikers

## 📈 SEO & Performance

- **Meta tags** geconfigureerd
- **Responsive design** voor alle devices
- **Fast loading** geoptimaliseerd
- **Clean URLs** met React Router
- **Image optimization** ready voor Netlify

---

**Veel succes met je nieuwe website! 🎉**

Voor vragen of ondersteuning, neem gerust contact op via julia@loth.nl
