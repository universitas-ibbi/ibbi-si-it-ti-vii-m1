---
title: State
version: 1.0.0
theme: react
header: State
footer: https://github.com/universitas-ibbi/ibbi-si-it-ti-vii-m1
paginate: true
marp: true
---

<!-- 
_class: lead 
_paginate: skip
-->

# State

---

# State di React Native

State adalah salah satu konsep inti dalam React dan React Native. State digunakan untuk menyimpan data atau status lokal dari suatu komponen yang dapat berubah selama aplikasi berjalan. State bersifat dinamis dan akan memicu re-render komponen jika berubah.

---

### Perbedaan antara State dan Props
- State: Dikelola secara lokal oleh komponen dan hanya dapat diubah oleh komponen itu sendiri.
- Props: Data yang diterima komponen dari parent dan bersifat read-only.

---

### Mengapa State Penting?
State memungkinkan komponen untuk:
- Merespons interaksi pengguna.
- Menyimpan data sementara.
- Menangani logika dan perilaku aplikasi.

---

## Mendefinisikan State

```javascript
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={() => setCount(count + 1)} />
    </View>
  );
};

export default Counter;
```

---

## Mengubah State Dengan `useState` (Functional Component)

```javascript
setCount(count + 1);
```
Fungsi `setCount` langsung mengganti nilai state lama dengan nilai baru.

---

## State pada Event Handler
State biasanya diperbarui melalui event handler seperti `onPress` atau `onChangeText`.

---

### Contoh: Counter dengan Event Handler

```javascript
import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';

const Counter = () => {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  return (
    <View>
      <Text>Count: {count}</Text>
      <Button title="Increment" onPress={increment} />
    </View>
  );
};

export default Counter;
```


