<script setup>

const res = await fetch('http://localhost:3000/api/customers/', {
  method: 'GET',
  credentials: 'include',
  headers: {
    'Content-Type': 'application/json',
  },
});

const item = await res.json();
console.log(item);

// const data = {
//   email: 'dengklek@gmail.com',
//   password: 'deng',
//   username: 'dengklek',
//   age: 23
// };

// const res = await fetch('http://localhost:3000/api/customers/', {
//   method: 'POST',
//   credentials: 'include',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// });


// const res = await fetch('http://localhost:3000/api/customers/654ca5f6c541a9fc2c678081', {
//   method: 'DELETE',
//   credentials: 'include',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// const res = await fetch('http://localhost:3000/api/customers/654ca5f6c541a9fc2c678081', {
//   method: 'PATCH',
//   credentials: 'include',
//   headers: {
//     'Content-Type': 'application/json',
//   },
//   body: JSON.stringify(data),
// });

</script>

<template>

</template>

<style scoped>
header {
  line-height: 1.5;
}
</style>
