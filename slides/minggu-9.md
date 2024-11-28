---
title: Custom Component
version: 1.0.0
theme: react
header: Custom Component
footer: https://github.com/universitas-ibbi/ibbi-si-it-ti-vii-m1
paginate: true
marp: true
---

<!-- 
_class: lead 
_paginate: skip
-->

# Custom Component

---

## Pengertian 

Custom Component adalah komponen buatan yang dibuat sendiri untuk memenuhi kebutuhan spesifik dalam aplikasi. 

---

## Kegunaan 

Custom component memungkinkan pengembang untuk:
- Mengurangi duplikasi kode: Komponen yang sering digunakan bisa di-reuse.
- Meningkatkan maintainability: Aplikasi lebih mudah dikelola karena kode terorganisir.
- Membuat kode lebih modular: Memecah aplikasi menjadi bagian-bagian kecil yang independen.

---

```javascript
import React from 'react';
import { Text, View } from 'react-native';

const Header = () => {
  return (
    <View style={{ padding: 20, backgroundColor: 'blue' }}>
      <Text style={{ color: 'white', fontSize: 20 }}>My App Header</Text>
    </View>
  );
};

export default Header;
```

---

## Cara Membuat Custom Component Sederhana

Kamu bisa membuat komponen sederhana dengan mendefinisikannya sebagai fungsi atau kelas dan mengembalikan JSX. 
Komponen ini bisa digunakan dalam komponen utama seperti `App`.

---

```javascript
const CustomButton = () => (
  <View style={{ padding: 10, backgroundColor: 'green', borderRadius: 5 }}>
    <Text style={{ color: 'white' }}>Click Me</Text>
  </View>
);

export default CustomButton;
```

---

## Menerima Props di Custom Component

Untuk membuat komponen lebih fleksibel, Kamu bisa menggunakan *props* yang memungkinkan komponen menerima data dari luar.

---

```javascript
const Greeting = ({ name }) => {
  return <Text>Hello, {name}!</Text>;
};

// Menggunakan komponen dengan props
<Greeting name="Alice" />
```


