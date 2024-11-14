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

## Pengertian dan Kegunaan Custom Component di React Native

*Custom components* adalah komponen yang kita buat sendiri untuk digunakan berulang kali dalam aplikasi. Tujuannya adalah untuk modularitas, sehingga setiap bagian UI dapat dikelola secara terpisah dan digunakan kembali. Ini meningkatkan keterbacaan dan efisiensi kode.

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

Anda bisa membuat komponen sederhana dengan mendefinisikannya sebagai fungsi atau kelas dan mengembalikan JSX. Komponen ini bisa digunakan dalam komponen utama seperti `App`.

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

Untuk membuat komponen lebih fleksibel, Anda bisa menggunakan *props* yang memungkinkan komponen menerima data dari luar.

---

```javascript
const Greeting = ({ name }) => {
  return <Text>Hello, {name}!</Text>;
};

// Menggunakan komponen dengan props
<Greeting name="Alice" />
```

---

## Default Props dan Prop Types pada Custom Component

*Default props* memberikan nilai awal jika tidak ada *props* yang diberikan. `PropTypes` memastikan tipe data yang benar untuk setiap *props*.

---

```javascript
import PropTypes from 'prop-types';

const Greeting = ({ name }) => <Text>Hello, {name}!</Text>;

Greeting.defaultProps = {
  name: 'Guest',
};

Greeting.propTypes = {
  name: PropTypes.string,
};

export default Greeting;
```


