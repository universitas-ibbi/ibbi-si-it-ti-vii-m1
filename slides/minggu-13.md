---
title: API with React Native
version: 1.0.0
theme: react
header: API with React Native
footer: https://github.com/universitas-ibbi/ibbi-si-it-ti-vii-m1
paginate: true
marp: true
---

<!-- 
_class: lead 
_paginate: skip
-->

# API with React Native

---

## Pendahuluan tentang API

API (Application Programming Interface) adalah antarmuka yang memungkinkan aplikasi untuk berkomunikasi dengan aplikasi lain. Dalam konteks pengembangan aplikasi, API sering digunakan untuk mengambil data dari server atau mengirim data ke server.

---

### Jenis-jenis API:
- **REST API**: Menggunakan HTTP untuk pertukaran data, biasanya dalam format JSON.
- **GraphQL**: Memungkinkan klien untuk meminta data secara spesifik sesuai kebutuhan.

---

### Peran API:
- Menghubungkan aplikasi klien dan server.
- Mempermudah integrasi dengan layanan pihak ketiga.

---

## REST API dan HTTP Request

REST API menggunakan metode HTTP untuk berkomunikasi dengan server. Berikut adalah metode utama:
- **GET**: Mengambil data dari server.
- **POST**: Mengirim data ke server.
- **PUT**: Memperbarui data di server.
- **DELETE**: Menghapus data dari server.

Contoh format data yang umum digunakan adalah JSON:
```json
{
  "id": 1,
  "name": "John Doe",
  "email": "johndoe@example.com"
}
```

---

## Alat dan Paket untuk Mengakses API di React Native

- **Fetch API**: Fungsi bawaan JavaScript untuk membuat permintaan HTTP.
- **Axios**: Perpustakaan populer untuk HTTP request dengan fitur tambahan seperti interceptor dan konfigurasi global.

Install Axios:
```bash
npm install axios
```

---

## Mengakses API Menggunakan Fetch

```javascript
fetch('https://jsonplaceholder.typicode.com/posts/1')
      .then((response) => response.json())
      .then((json) => {
        setData(json);
      })
      .catch((error) => console.error(error));
```

---

## Mengakses API Menggunakan Axios

```javascript
import axios from 'axios';

axios.get('https://jsonplaceholder.typicode.com/posts/1')
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

---

## Interaksi dengan API yang Membutuhkan Authentication

```javascript
axios.get('https://api.example.com/user', {
  headers: {
    Authorization: 'Bearer your_token_here',
  },
})
  .then((response) => console.log(response.data))
  .catch((error) => console.error(error));
```

---

## Testing dan Debugging API

- **Postman**: Alat untuk menguji endpoint API.
- **Insomnia**: Alternatif untuk Postman dengan antarmuka sederhana.
