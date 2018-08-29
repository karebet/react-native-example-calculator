# react-native-example-calculator
Contoh Aplikasi kalkulator dengan menggunakan react-native 

react-native: 0.55.4
```
react-native init kalkulator --version="0.55.4"
```

install gradient
```
npm install react-native-linear-gradient@2.4.0 --save
react-native link
```

Error 'index.android.bundle'
```
> create dir android\app\src\main\assets
> react-native bundle --platform android --dev false --entry-file index.js --bundle-output android/app/src/main/assets/index.android.bundle --assets-dest android/app/src/main/res
```
