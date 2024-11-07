---
title: Styling React Native
version: 1.0.0
theme: react
header: Styling React Native
footer: https://github.com/universitas-ibbi/ibbi-si-it-ti-vii-m1
paginate: true
marp: true
---

<!-- 
_class: lead 
_paginate: skip
-->

# Styling React Native

---


## Dasar-dasar Styling di React Native

Di React Native, styling dilakukan menggunakan objek JavaScript. Alih-alih menerapkan style seperti CSS, kita mendefinisikan objek dengan properti yang mirip dengan CSS.

```js
<Text style={{ color: 'blue', fontSize: 18 }}>Hello, Inline Style!</Text>
```

---

## 

Styling di React Native dapat dilakukan dengan berbagai pendekatan:  
- inline styles
- `StyleSheet.create()`. 
- external styles

---

## Inline Styling

Inline styling di React Native mirip dengan style inline di HTML. Kita menerapkan style langsung pada komponen menggunakan objek JavaScript.

---

```javascript
import React from 'react';
import { View, Text } from 'react-native';

const InlineStyleExample = () => (
  <View style={{ padding: 20, backgroundColor: '#f0f8ff' }}>
    <Text style={{ color: 'blue', fontSize: 18 }}>Hello, Inline Style!</Text>
  </View>
);

export default InlineStyleExample;
```

---

## Kelebihan Inline Styling:

- Cepat dan langsung, cocok untuk style yang tidak berulang atau sangat spesifik.
- Membantu eksperimen styling saat ingin mencoba-coba tampilan tanpa membuat style terpisah.

---

## Kekurangan Inline Styling:
- Sulit dimaintain jika ada banyak style, terutama dalam proyek besar.
- Mengurangi efisiensi karena setiap kali komponen dirender, objek style baru dibuat.

---

## Styling dengan `StyleSheet.create()`

React Native menyediakan API `StyleSheet.create()` untuk mendefinisikan style secara efisien. `StyleSheet.create()` mengompilasi style untuk efisiensi memori, yang berguna untuk meningkatkan performa aplikasi.

---

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const StyleSheetExample = () => (
  <View style={styles.container}>
 <Text style={styles.text}>Hello, StyleSheet!</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
 padding: 20,
 backgroundColor: '#f0f8ff',
  },
  text: {
 color: 'blue',
 fontSize: 18,
  },
});

export default StyleSheetExample;
```

---

## Kelebihan `StyleSheet.create()`:
- Lebih efisien secara performa dibandingkan inline styling karena meminimalkan pembuatan objek style baru.
- Menjaga style terpisah dari logika komponen, membuat kode lebih rapi.
- Memberikan keamanan karena semua properti style diperiksa dan dikompilasi oleh React Native, sehingga kesalahan dapat terdeteksi lebih awal.

---

## Kekurangan `StyleSheet.create()`:

Style tidak dapat diubah secara dinamis setelah dibuat, jadi tidak ideal untuk style yang sering berubah sesuai kondisi atau state.

---

## External Styling

External styling melibatkan pembuatan file terpisah (misalnya `styles.js`) untuk menyimpan semua definisi style yang dapat digunakan di beberapa komponen. Pendekatan ini membantu dalam menjaga kebersihan kode dan membuat style yang dapat digunakan ulang.

---

Contoh Struktur:
- `App.js` (untuk komponen utama)
- `styles.js` (untuk file style eksternal)

--- 

File `styles.js`:
```javascript
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
 padding: 20,
 backgroundColor: '#f0f8ff',
  },
  text: {
 color: 'blue',
 fontSize: 18,
  },
});

export default styles;
```

--- 

File `App.js`:
```javascript
import React from 'react';
import { View, Text } from 'react-native';
import styles from './styles';

const ExternalStyleExample = () => (
  <View style={styles.container}>
 <Text style={styles.text}>Hello, External Style!</Text>
  </View>
);

export default ExternalStyleExample;
```

---

## Kelebihan External Styling:
- Kode lebih rapi dan terorganisir, terutama dalam proyek besar.
- Style dapat digunakan ulang di beberapa komponen, memudahkan pemeliharaan dan konsistensi.

---

## Kekurangan External Styling:

Jika style tidak dapat digunakan kembali, pemisahan ini mungkin terasa berlebihan untuk komponen-komponen kecil.

---

## Perbandingan

| Pendekatan  | Kelebihan | Kekurangan|
|--- |--- | --- |
| Inline Styling  | Mudah digunakan, cocok untuk style sederhana.  | Sulit dimaintain, mempengaruhi performa. |
| `StyleSheet.create()` | Efisien, terorganisir, aman untuk aplikasi besar. | Tidak cocok untuk styling yang dinamis.  |
| External Styling| Terstruktur, reusable, cocok untuk proyek besar.  | Terasa berlebihan untuk style yang spesifik saja. |


