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


---


Berikut adalah topik mengenai styling `width` dan `height` UI di React Native, dilengkapi dengan penjelasan dan contoh kode.

---

### Styling Width dan Height UI di React Native

Mengatur `width` dan `height` adalah hal penting dalam mendesain antarmuka pengguna (UI) di React Native. Dengan pengaturan yang tepat, Anda dapat memastikan bahwa elemen UI tampil dengan baik di berbagai ukuran layar.

---

## Pengenalan Width dan Height

Di React Native, `width` dan `height` digunakan untuk mengontrol ukuran komponen. Anda bisa menggunakan nilai tetap (fixed) atau persentase untuk mendefinisikan ukuran komponen.

---

## Menggunakan Nilai Tetap (Fixed Values)

Nilai tetap biasanya dinyatakan dalam piksel. Berikut adalah contoh penggunaan nilai tetap untuk `width` dan `height`.

---

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const FixedSizeExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Box dengan Ukuran Tetap</Text>
      </View>
    </View>
  );
};

export default FixedSizeExample;
```

---

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5fcff',
  },
  box: {
    width: 200,   // Ukuran lebar tetap
    height: 100,  // Ukuran tinggi tetap
    backgroundColor: 'lightblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});
```
---

## Menggunakan Persentase

Anda juga bisa menggunakan persentase untuk mendefinisikan `width` dan `height`, yang membuat UI lebih responsif terhadap ukuran layar.

---

```javascript
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const PercentageSizeExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Box dengan Ukuran Persentase</Text>
      </View>
    </View>
  );
};
```

---

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  box: {
    width: '80%',   // 80% dari lebar layar
    height: '50%',  // 50% dari tinggi layar
    backgroundColor: 'skyblue',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
});

export default PercentageSizeExample;
```

---

## Menggunakan `Dimensions` untuk Responsif

Anda juga bisa menggunakan `Dimensions` API untuk mendapatkan ukuran layar dan mengatur `width` dan `height` secara dinamis.

---

```javascript
import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const DimensionsExample = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>Box dengan Dimensions API</Text>
      </View>
    </View>
  );
};

export default DimensionsExample;
```

---

```js
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  box: { 
    width: width * 0.8, 
    height: height * 0.4, 
    backgroundColor: 'powderblue' }
});
```

