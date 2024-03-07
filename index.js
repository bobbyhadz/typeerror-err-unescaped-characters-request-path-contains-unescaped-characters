// TypeError [ERR_UNESCAPED_CHARACTERS] Request path contains unescaped characters

// EXAMPLE 1 - Using encodeURI() function to solve the error (axios)

import axios from 'axios';

async function makeRequest() {
  const url = 'https://example.com/some-path 1 2 % 3';

  // 1) Encode the URI
  const encodedURL = encodeURI(url);

  try {
    // 2) Make an HTTP request using the encoded URI
    const res = await axios.get(encodedURL, {
      method: 'GET',
    });
    const data = res.data;
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

makeRequest();

// ------------------------------------------------------------------

// // EXAMPLE 2 - Using encodeURI() with fetch()

// async function getUser() {
//   const url = 'https://example.com/some-path 1 2 % 3';

//   // 1) Encode the URI
//   const encodedURL = encodeURI(url);

//   try {
//     // 2) Make an HTTP request using the encoded URI
//     const response = await fetch(encodedURL, {
//       method: 'GET',
//     });

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log('👉️👉️👉️', err);
//   }
// }

// getUser();

// ------------------------------------------------------------------

// // EXAMPLE 3 - Using the `encodeURIComponent` function instead

// const domain = 'https://example.com';

// const path = 'some-path 1 2 % 3';

// // 👇️ encode the path
// const encodedPath = encodeURIComponent(path);

// const encodedURI = domain + encodedPath;

// // 👇️ https://example.comsome-path%201%202%20%25%203
// console.log(encodedURI);

// ------------------------------------------------------------------

// // EXAMPLE 4 - Using decodeURIComponent()

// const domain = 'https://example.com';

// const path = 'some-path 1 2 % 3';

// const encodedPath = encodeURIComponent(path);

// const encodedURI = domain + encodedPath;

// // 👇️ https://example.comsome-path%201%202%20%25%203
// console.log(encodedURI);

// const decodedURI = decodeURIComponent(encodedURI);

// // 👇️ https://example.comsome-path 1 2 % 3
// console.log(decodedURI);

// ------------------------------------------------------------------

// // EXAMPLE 5 - Using the URL() constructor in Node.js

// const url = 'https://example.com/some-path 1 2 % 3';

// const encodedURI = new URL(url);

// // URL {
// //   href: 'https://example.com/some-path%201%202%20%%203',
// //   origin: 'https://example.com',
// //   protocol: 'https:',
// //   username: '',
// //   password: '',
// //   host: 'example.com',
// //   hostname: 'example.com',
// //   port: '',
// //   pathname: '/some-path%201%202%20%%203',
// //   search: '',
// //   searchParams: URLSearchParams {},
// //   hash: ''
// // }

// console.log(encodedURI);

// async function getUser() {
//   try {
//     const response = await fetch(encodedURI);

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log('👉️👉️👉️', err);
//   }
// }

// console.log(await getUser());

// ------------------------------------------------------------------

// // EXAMPLE 6 - An example using a real API

// async function getUser() {
//   const url = 'https://randomuser.me/api/';

//   const encodedURI = new URL(url);
//   console.log(encodedURI);

//   try {
//     const response = await fetch(encodedURI);

//     if (!response.ok) {
//       throw new Error(`Error! status: ${response.status}`);
//     }

//     const result = await response.json();
//     return result;
//   } catch (err) {
//     console.log(err);
//   }
// }

// console.log(await getUser());
