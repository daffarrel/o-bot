### Install

Clone project ini

```bash
> git clone https://github.com/liimalim/whatsapp-bot
> cd whatsapp-bot

```

## Installation
```bash
> npm i
```
Please note that Node v10.18.1+ is required due to Puppeteer.

### Usage
1. menjalankan bot

```bash
> node index.js
```

kalo status bot nya udah berjalan, silahkan scan qr nya di aplikasi whatsapp

### Fitur 
ketik !menu untuk menampilkan fitur

| Fitur        | Status | Command | Example |
| --------------- |:---------:|:---:|:------------------:|
| Informasi Covid-19 | ✔️ | !corona | !corona |
| Seluruh surat Al-Qur'an | ✔️ | !quran | !quran
| Surat Al-Qur'an | ✔️ | !quran `nomor surat` | !quran `1` |
| Ayat Al-Qur'an | ✔️ | !quran `[nomor surat] [nomor ayat]` | !quran `1 1` |

### Perintah 

## Command

  - `!corona`: menampillkan informasi data Covid-19 di Indonesia
  - `!quran`: menampilkan seluruh surat di dalam Al-Qur'an
  - `!quran [nomor surat]`: menampilkan informasi surat di dalam Al-Qur'an
  - `!quran [nomor ayat] [nomor ayat]`: menampilkan ayat Al-Qur'an