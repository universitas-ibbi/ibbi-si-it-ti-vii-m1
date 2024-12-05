---
title: Screen Navigation
version: 1.0.0
theme: react
header: Screen Navigation
footer: https://github.com/universitas-ibbi/ibbi-si-it-ti-vii-m1
paginate: true
marp: true
---

<!-- 
_class: lead 
_paginate: skip
-->

# Screen Navigation
Expo Router

---

## Pengenalan Expo Router

- **Expo Router** adalah pustaka open-source untuk navigasi pada aplikasi Universal React Native yang dibangun menggunakan Expo. 
- Expo Router merupakan sistem navigasi berbasis file untuk aplikasi React Native dan web. 

---

![bg](./images/minggu-10-1.gif)

---

## Membuat Halaman dengan Expo Router

Expo Router menggunakan konvensi navigasi berbasis file. Ketika sebuah file dibuat di direktori `app`, file tersebut secara otomatis menjadi sebuah rute dalam aplikasi. Contoh struktur file berikut menghasilkan rute-rute sebagai berikut:

```
app
  index.tsx         // cocok dengan '/'
  home.tsx          // cocok dengan '/home'
  [user].tsx        // cocok dengan rute dinamis seperti '/expo' atau '/evanbacon'
  settings
    index.tsx       // cocok dengan '/settings'
```

---

## Rute Dinamis

Rute dinamis mencocokkan setiap jalur yang belum terpasang pada level segmen tertentu. Contohnya:

| Rute                     | URL yang Cocok       |
| ------------------------ | -------------------- |
| `app/blog/[slug].tsx`    | `/blog/123`          |
| `app/blog/[...rest].tsx` | `/blog/123/settings` |

---

## Navigasi Antar Halaman dengan Link

Expo Router menggunakan komponen **Link** untuk berpindah antar halaman dalam aplikasi, mirip dengan penggunaan tag `<a>` dan atribut `href` pada web. Contoh struktur file:

```
app
  index.tsx
  about.tsx
  user
    [id].tsx
```

---

Berikut adalah contoh kode untuk menavigasi antar halaman menggunakan komponen **Link**:

```tsx
// app/index.tsx

import { View } from 'react-native';
import { Link } from 'expo-router';

export default function Page() {
  return (
    <View>
      <Link href="/about">Tentang</Link>
      {/* ...tautan lainnya */}
      <Link href="/user/bacon">Lihat Pengguna</Link>
    </View>
  );
}
```

---

## Menautkan ke Rute Dinamis

Rute dinamis dan parameter query dapat disediakan secara statis atau menggunakan objek **Href** untuk kemudahan.

---

```tsx
// app/index.tsx

import { Link } from 'expo-router';
import { View } from 'react-native';

export default function Page() {
  return (
    <View>
      <Link
        href={{
          pathname: '/user/[id]',
          params: { id: 'bacon' }
        }}>
          Lihat Pengguna
        </Link>
    </View>
  );
}
```

---

Dengan Expo Router, Kamu dapat dengan mudah mengelola navigasi, termasuk rute dinamis, dalam aplikasi React Native Kamu, memastikan pengalaman pengguna yang konsisten di berbagai platform.