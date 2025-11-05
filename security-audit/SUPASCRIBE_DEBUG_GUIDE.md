# 🐛 Supascribe Feed Debug Guide

## Situatie
Supascribe nieuwsfeed blijft leeg ondanks CSP updates en succesvolle deploy.

**Verified:**
- ✅ Substack publicatie bestaat: `https://slimmermetai.substack.com`
- ✅ Content aanwezig: 7+ gepubliceerde posts
- ✅ Supascribe script bestaat en is toegankelijk
- ✅ CSP includes alle Supascribe domeinen (met wildcard)

---

## 🔍 Debug Stappen

### Stap 1: Check Browser Console Errors

**Open je website:**
```
https://slimmermetai.com/nieuws
```

**Open Browser Console:**
1. Druk **F12** (of Ctrl+Shift+I / Cmd+Option+I op Mac)
2. Ga naar de **Console** tab
3. Refresh de pagina (Ctrl+R / Cmd+R)

**Wat te zoeken:**

#### A. CSP Errors (rood)
```
❌ Refused to load the script 'https://...' because it violates CSP...
❌ Refused to connect to 'https://...' because it violates CSP...
❌ Refused to load the stylesheet 'https://...' because it violates CSP...
```

**Als je deze ziet:**
- Noteer het **exacte domein** dat geblokkeerd wordt
- Stuur dit door → dan kunnen we het toevoegen aan CSP

#### B. JavaScript Errors
```
❌ Uncaught TypeError: ...
❌ Failed to load resource: ...
❌ SupascribeWidget is not defined
```

**Als je deze ziet:**
- Het script laadt niet correct
- Mogelijk timing probleem

#### C. Supascribe Specific Errors
```
❌ Invalid embed ID
❌ Feed not found
❌ API request failed
```

---

### Stap 2: Check Network Tab

**In DevTools:**
1. Ga naar **Network** tab
2. Refresh de pagina (Ctrl+R)
3. Filter op "supascribe" (typ in de filter box)

**Wat te zoeken:**

| Request | Status | Betekenis |
|---------|--------|-----------|
| `js.supascribe.com/...` | 200 (groen) | ✅ Script laadt |
| `js.supascribe.com/...` | Failed (rood) | ❌ Script geblokkeerd |
| `api.supascribe.com/...` | 200 | ✅ API werkt |
| `api.supascribe.com/...` | 403/404 | ❌ Geen toegang |
| `events.supascribe.com/...` | 200 | ✅ Tracking werkt |

**Screenshot helpers:**
- Klik rechts op een failed request → "Copy as cURL"
- Of neem screenshot van de Network tab

---

### Stap 3: Check Elements Tab (DOM Inspection)

**In DevTools:**
1. Ga naar **Elements** tab
2. Gebruik "Select Element" tool (Ctrl+Shift+C)
3. Klik op het lege feed gebied

**Wat te zoeken:**

#### Scenario A: Div is leeg
```html
<div data-supascribe-embed-id="589349283017" data-supascribe-feed></div>
<!-- Geen child elements -->
```
**Betekenis:** Script laadt niet of initialiseert niet

#### Scenario B: Div heeft content
```html
<div data-supascribe-embed-id="589349283017" data-supascribe-feed>
  <div class="supascribe-...">
    <!-- Supascribe widgets hier -->
  </div>
</div>
```
**Betekenis:** Script werkt! Mogelijk CSS probleem (content is onzichtbaar)

---

## 🔧 Mogelijke Oplossingen

### Oplossing 1: CSP Fix (als domein geblokkeerd wordt)

Als Console shows CSP error voor een specifiek domein:
```
Refused to load ... 'https://cdn.supascribe.com/...'
```

**→ Voeg toe aan netlify.toml:**
```toml
script-src ... https://cdn.supascribe.com;
```

---

### Oplossing 2: Embed ID Check

De huidige embed ID is: `589349283017`

**Test of deze geldig is:**
1. Log in op je Supascribe account: https://supascribe.com
2. Ga naar Embeds/Widgets
3. Check of deze feed widget bestaat
4. Mogelijk is de ID verlopen of verwijderd

**Als ID niet geldig is:**
- Maak nieuwe feed widget in Supascribe
- Kopieer nieuwe embed code
- Update `src/pages/Nieuws.js` met nieuwe ID

---

### Oplossing 3: Script Timing Fix

Mogelijk laadt het script te laat. Probeer script in `<head>` te laden:

**In `public/index.html` toevoegen:**
```html
<head>
  <!-- Existing head content -->

  <!-- Supascribe loader -->
  <script src="https://js.supascribe.com/v1/loader/HjNBdTYKW9Wl1aIOtLNHtNKttNC3.js" async></script>
</head>
```

**Dan in `src/pages/Nieuws.js` VERWIJDEREN:**
```javascript
// Verwijder deze useEffect:
useEffect(() => {
  const script = document.createElement('script');
  // ...
}, []);
```

---

### Oplossing 4: Alternatief - Native Substack RSS

Als Supascribe niet werkt, gebruik native Substack embed:

**Replace in `src/pages/Nieuws.js`:**

```javascript
// Verwijder:
<div data-supascribe-embed-id="589349283017" data-supascribe-feed></div>

// Vervang met:
<iframe
  src="https://slimmermetai.substack.com/embed"
  width="100%"
  height="500"
  style={{border: '1px solid #EEE', background: 'white'}}
  frameBorder="0"
  scrolling="no"
/>
```

Dit toont alleen een subscribe form, geen feed.

**Voor echte feed:**
```javascript
<iframe
  src="https://slimmermetai.substack.com/archive"
  width="100%"
  height="800"
  style={{border: '1px solid #EEE', background: 'white'}}
  frameBorder="0"
  scrolling="yes"
/>
```

---

## 📊 Current CSP Configuration

**Huidige Supascribe CSP (netlify.toml):**

```toml
script-src 'self' ... https://*.supascribe.com;
style-src 'self' 'unsafe-inline' ... https://*.supascribe.com;
connect-src 'self' ... https://*.supascribe.com https://events.supascribe.com;
frame-src 'self' ... https://*.supascribe.com;
```

**Covered domeinen:**
- ✅ `js.supascribe.com`
- ✅ `api.supascribe.com`
- ✅ `events.supascribe.com`
- ✅ Alle andere `*.supascribe.com` subdomeinen

---

## 📝 Debug Checklist

Vul dit in en stuur door:

### Console Tab
- [ ] Geen errors
- [ ] CSP error voor domein: `_______________`
- [ ] JavaScript error: `_______________`
- [ ] Andere error: `_______________`

### Network Tab
- [ ] `js.supascribe.com/v1/loader/...` laadt (200)
- [ ] `api.supascribe.com` requests zichtbaar
- [ ] `events.supascribe.com` requests zichtbaar
- [ ] Alle requests zijn groen (200)
- [ ] Rode/failed requests voor: `_______________`

### Elements Tab
- [ ] Div is leeg (geen child elements)
- [ ] Div heeft Supascribe content
- [ ] Content is onzichtbaar (CSS issue)

### Supascribe Account
- [ ] Account bestaat en ingelogd
- [ ] Feed widget bestaat met ID `589349283017`
- [ ] Widget is actief (niet archived/deleted)

---

## 🚀 Next Steps

**Based on debugging:**

1. **If CSP error** → Update netlify.toml met specifiek domein
2. **If script doesn't load** → Try Oplossing 3 (timing fix)
3. **If embed ID invalid** → Update met nieuw ID
4. **If nothing works** → Switch naar Oplossing 4 (native Substack)

---

## 📞 Voor Hulp

**Stuur door:**
1. Screenshot van Console tab
2. Screenshot van Network tab (filtered op "supascribe")
3. Antwoorden op Debug Checklist hierboven

**Dan kunnen we exact zien wat er mis is en de juiste fix implementeren! 🎯**
