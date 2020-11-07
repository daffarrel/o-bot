[![CodeFactor](https://www.codefactor.io/repository/github/liimalim/o-bot/badge)](https://www.codefactor.io/repository/github/liimalim/o-bot) [![Depfu](https://badges.depfu.com/badges/7438088d6f569e58ee9807db06a1a8c8/overview.svg)](https://depfu.com/github/liimalim/o-bot?project_id=17608)

# O-bot 

It uses Puppeteer to run a real instance of Whatsapp Web to avoid getting blocked.

**NOTE:** I can't guarantee you will not be blocked by using this method, although it has worked for me. WhatsApp does not allow bots or unofficial clients on their platform, so this shouldn't be considered totally safe.
## Getting Started

Please note that Node v10.18.1+ is required due to Puppeteer.

### Install
Clone this project

```bash
> git clone https://github.com/liimalim/o-bot.git
> cd o-bot
```

Install the dependencies:

```bash
> npm install
```

### Usage
1. run the Whatsapp bot

```bash
> node index.js
```

after running it you need to scan the qr

---

### Premium

[Deploy whatsapp bot on Heroku(free)](https://trakteer.id/liimalim/showcase/deploy-whatsapp-bot-ke-heroku-6IfFF "Deploy whatsapp bot on Heroku")

---

### Fitur 
ketik /menu untuk menampilkan fitur

| Fitur        | Status | Command | Example |
| --------------- |:---------:|:---:|:------------------:|
| Informasi Covid-19 | ✔️ | /corona | /corona |
| Seluruh surat Al-Qur'an | ✔️ | /quran | /quran |
| Surat Al-Qur'an | ✔️ | /quran `nomor surat` | /quran `1` |
| Ayat Al-Qur'an | ✔️ | /quran `[nomor surat] [nomor ayat]` | /quran `1 1` |
| Informasi Group | ✔️ | /group info | /group info |

### Perintah 

## Command

  - `/corona`: menampillkan informasi data Covid-19 di Indonesia
  - `/quran`: menampilkan seluruh surat di dalam Al-Qur'an
  - `/quran [nomor surat]`: menampilkan informasi surat di dalam Al-Qur'an
  - `/quran [nomor ayat] [nomor ayat]`: menampilkan ayat Al-Qur'an
  - `/group info`: menampilkan informasi group