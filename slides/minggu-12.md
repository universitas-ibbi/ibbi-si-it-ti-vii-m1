---
title: Async Storage
version: 1.0.0
theme: react
header: Async Storage
footer: https://github.com/universitas-ibbi/ibbi-si-it-ti-vii-m1
paginate: true
marp: true
---

<!-- 
_class: lead 
_paginate: skip
-->

# Pengenalan Async Storage

Async Storage adalah API penyimpanan data lokal berbasis key-value yang tersedia di React Native. Ini memungkinkan aplikasi untuk menyimpan data secara persisten, meskipun aplikasi di-restart. Async Storage cocok untuk menyimpan data kecil seperti preferensi pengguna, token autentikasi, atau status aplikasi.

---

Kapan Menggunakan Async Storage:
- Untuk menyimpan data kecil secara lokal.
- Ketika tidak memerlukan database yang kompleks.
- Untuk persistensi sederhana, seperti sesi pengguna.

---

# Instalasi dan Konfigurasi Async Storage

---

## Instalasi:
```bash
npx expo install @react-native-async-storage/async-storage
```

---

# Operasi Dasar dengan Async Storage

---

## Menyimpan Data (`setItem`):

```javascript
await AsyncStorage.setItem(key, value);
```
Contoh : 
```javascript
await AsyncStorage.setItem("nama", "Budi");
```

---

```javascript
import AsyncStorage from '@react-native-async-storage/async-storage';

const storeData = async (key, value) => {
  try {
    await AsyncStorage.setItem(key, value);
    console.log('Data saved');
  } catch (e) {
    console.error('Failed to save data:', e);
  }
};

storeData('username', 'JohnDoe');
```

---

## Membaca Data (`getItem`):

```javascript
const value = await AsyncStorage.getItem(key);
```
Contoh: 
```javascript
const value = await AsyncStorage.getItem("nama");
// value = "Budi"
```
---

```javascript
const getData = async (key) => {
  try {
    const value = await AsyncStorage.getItem(key);
    if (value !== null) {
      console.log('Retrieved data:', value);
    }
  } catch (e) {
    console.error('Failed to fetch data:', e);
  }
};

getData('username');
```

---

## Menghapus Data (`removeItem`):
```javascript
const removeData = async (key) => {
  try {
    await AsyncStorage.removeItem(key);
    console.log('Data removed');
  } catch (e) {
    console.error('Failed to remove data:', e);
  }
};

removeData('username');
```

---

# Penggunaan Async Storage dengan Objek JSON
Async Storage hanya menyimpan string, jadi kita perlu mengonversi objek ke JSON.

```json
{ id: 1, nama: 'Budi', status: 'Mahasiswa' }
```

---

## Menyimpan Objek:

```javascript
const jsonValue = JSON.stringify(object);
// '{"id":1,"nama":"Budi", "status": "Mahasiswa"}'

await AsyncStorage.setItem(key, jsonValue);
```

--- 

```javascript
const storeObject = async (key, object) => {
  try {
    const jsonValue = JSON.stringify(object);
    await AsyncStorage.setItem(key, jsonValue);
    console.log('Object saved');
  } catch (e) {
    console.error('Failed to save object:', e);
  }
};

storeObject('user', { name: 'John', age: 30 });
```

---

## Membaca Objek:

```javascript
const jsonValue = await AsyncStorage.getItem(key);

jsonValue = JSON.parse(jsonValue);
// jsonValue = { id: 1, nama: 'Budi', status: 'Mahasiswa' }
```

---

```javascript
const getObject = async (key) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (e) {
    console.error('Failed to fetch object:', e);
  }
};

getObject('user').then((user) => console.log(user));
```

---

## Apa itu useEffect?

useEffect adalah hook bawaan React yang digunakan untuk menangani efek samping (side effects) dalam komponen fungsional. Contoh efek samping meliputi pengambilan data dari API, manipulasi DOM secara langsung, atau pendaftaran event listener.

---


```javascript
import { useEffect } from 'react';

useEffect(() => {

  console.log('Dijalankan ketika count berubah');
  
}, [count]);
```