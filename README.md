# Tangkap Bintang ⭐

Game anak **Tangkap Bintang** berbasis HTML/CSS/JavaScript yang bisa dimainkan di web dan dikemas menjadi aplikasi Android menggunakan Capacitor.

## Fitur game
- Karakter: Bimo, Lala, Mimi, Bunny
- 4 dunia: Langit Ceria, Hutan Ajaib, Laut Pelangi, Ruang Angkasa
- 12 level
- Skor, koin, nyawa, waktu, streak
- Power-up Magnet dan Rainbow x2
- Efek suara
- Leaderboard lokal top 5
- Sistem hadiah
- Pause/resume
- Responsif untuk HP dan desktop

## Struktur proyek
```text
Tester-Game/
├── index.html                 # versi web / GitHub Pages
├── style.css
├── game.js
├── www/                       # aset web yang dibundel oleh Capacitor
│   ├── index.html
│   ├── style.css
│   └── game.js
├── capacitor.config.ts        # konfigurasi Capacitor
├── package.json               # dependency + script Android
├── .gitignore
└── .github/workflows/
    ├── pages.yml              # deploy web ke GitHub Pages
    └── android-apk.yml        # build APK otomatis
```

> Folder `android/` sengaja tidak disimpan di repository. Folder native Android dibuat otomatis oleh `npx cap add android` saat proses build, sehingga repository tetap ringan.

## Build APK lokal

### Persyaratan
- Node.js 22+
- Android Studio + Android SDK
- JDK 21 untuk toolchain Android Capacitor 8

### Langkah
```bash
npm install
npx cap add android
npx cap sync android
cd android
./gradlew assembleDebug
```

APK debug akan berada di:
```text
android/app/build/outputs/apk/debug/app-debug.apk
```

Untuk membuka project Android di Android Studio:
```bash
npx cap open android
```

### Build dengan script npm
```bash
npm run android:add
npm run android:sync
npm run android:build
```

## Build APK otomatis di GitHub

Workflow `.github/workflows/android-apk.yml` menjalankan:
1. Checkout repository
2. Install Node.js 22
3. Setup Java 21
4. `npm install`
5. `npx cap add android`
6. `npx cap sync android`
7. `./gradlew assembleDebug`
8. Upload `app-debug.apk` sebagai GitHub Actions artifact

Workflow dapat dijalankan dari tab **Actions → Build Android APK → Run workflow**, atau otomatis saat file aplikasi Android yang relevan berubah di branch `main`.

## Catatan release

APK yang dihasilkan workflow saat ini adalah **debug APK** untuk pengujian. Untuk distribusi ke pengguna/Google Play, buat signing keystore dan build release (`assembleRelease`) atau Android App Bundle (`bundleRelease`) dengan konfigurasi signing yang aman.

## Web

Aplikasi web tetap dideploy lewat workflow GitHub Pages yang sudah ada.
