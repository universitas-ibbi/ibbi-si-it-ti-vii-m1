---
title: Layouting
version: 1.0.0
theme: react
header: Layouting
footer: https://github.com/universitas-ibbi/ibbi-si-it-ti-vii-m1
paginate: true
marp: true
---

<!-- 
_class: lead 
_paginate: skip
-->

# Layouting

---

## Width dan Height

Di React Native, `width` dan `height` digunakan untuk mengontrol ukuran komponen. Kamu bisa menggunakan nilai tetap (fixed) atau persentase untuk mendefinisikan ukuran komponen.

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

Kamu juga bisa menggunakan persentase untuk mendefinisikan `width` dan `height`, yang membuat UI lebih responsif terhadap ukuran layar.

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

## Pengenalan Flexbox

Flexbox adalah sistem layout yang dirancang untuk membantu menyusun elemen dalam satu arah (horizontal atau vertikal) dan mengatur tata letak yang fleksibel. 

---

## Properti Flex Container

Flex container adalah elemen yang membungkus elemen-elemen lainnya. Berikut adalah beberapa properti penting:

---

## . `flexDirection`

Properti ini mengatur arah tata letak elemen di dalam container.
- `row`: Elemen disusun secara horizontal.
- `column`: Elemen disusun secara vertikal (default).

---

Contoh Kode:
```jsx
<View style={{ flexDirection: 'row', padding: 10 }}>
  <View style={{ backgroundColor: 'red', width: 50, height: 50 }} />
  <View style={{ backgroundColor: 'green', width: 50, height: 50 }} />
  <View style={{ backgroundColor: 'blue', width: 50, height: 50 }} />
</View>
```

---

## . `justifyContent`

Properti ini mengatur distribusi elemen di sepanjang sumbu utama (horizontal jika `flexDirection: 'row'`, vertikal jika `flexDirection: 'column'`).
- `flex-start`: Elemen disusun mulai dari awal container.
- `center`: Elemen disusun di tengah.
- `space-between`: Ruang di antara elemen dibagi merata.
- `space-around`: Ruang di antara elemen dan di sisi luar elemen dibagi merata.

---

Contoh Kode:
```jsx
<View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
  <View style={{ backgroundColor: 'orange', width: 50, height: 50 }} />
  <View style={{ backgroundColor: 'purple', width: 50, height: 50 }} />
  <View style={{ backgroundColor: 'pink', width: 50, height: 50 }} />
</View>
```

---

## . `alignItems`
Properti ini mengatur penyelarasan elemen di sepanjang sumbu sekunder (vertikal jika `flexDirection: 'row'`).
- `stretch`: Elemen meregang untuk mengisi container.
- `flex-start`: Elemen disejajarkan di awal.
- `center`: Elemen disejajarkan di tengah.
- `flex-end`: Elemen disejajarkan di akhir.

---

Contoh Kode:
```jsx
<View style={{ flexDirection: 'row', alignItems: 'center', height: 100 }}>
  <View style={{ backgroundColor: 'lightblue', width: 50, height: 50 }} />
  <View style={{ backgroundColor: 'lightgreen', width: 50, height: 70 }} />
</View>
```

---

## . `flexWrap`
Mengatur apakah elemen dalam container akan dibungkus ke baris baru jika melebihi ruang yang tersedia.
- `nowrap`: Elemen tidak akan dibungkus (default).
- `wrap`: Elemen dibungkus ke baris baru jika perlu.

---

Contoh Kode:
```jsx
<View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
  {Array.from({ length: 10 }).map((_, index) => (
    <View key={index} style={{ backgroundColor: 'coral', width: 50, height: 50, margin: 5 }} />
  ))}
</View>
```

---

## Properti Flex Item

Flex item adalah elemen di dalam container. Berikut properti yang digunakan:

---

## . `flex`

Properti ini menentukan bagaimana elemen akan menempati ruang dalam container. Nilai `flex` bisa berupa angka yang menggambarkan proporsi elemen.

---

Contoh Kode:
```jsx
<View style={{ flexDirection: 'row' }}>
  <View style={{ backgroundColor: 'red', flex: 1, height: 50 }} />
  <View style={{ backgroundColor: 'green', flex: 2, height: 50 }} />
  <View style={{ backgroundColor: 'blue', flex: 1, height: 50 }} />
</View>
```

---

## . `alignSelf`
Properti ini mengatur penyelarasan elemen secara individual di dalam container, mengesampingkan `alignItems`.
- `auto`: Mengikuti `alignItems` di container.
- `flex-start`, `center`, `flex-end`, `stretch`: Sama seperti `alignItems`.

---

Contoh Kode:
```jsx
<View style={{ flexDirection: 'row', alignItems: 'flex-start' }}>
  <View style={{ backgroundColor: 'cyan', width: 50, height: 50, alignSelf: 'center' }} />
  <View style={{ backgroundColor: 'magenta', width: 50, height: 50 }} />
</View>
```

