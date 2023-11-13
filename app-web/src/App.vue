<script setup>
import { ref } from 'vue';

const email = ref('');
const password = ref('');
const username = ref('');
const age = ref(0);
const id = ref('');
const items = ref('');
const status = ref('');

async function readData() {
  try {
    const req = await fetch('http://localhost:3000/api/customers/', {
      method: 'GET',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const res = await req.json();
    console.log(res);
    items.value = res;

    if (req.status >= 500) {
      status.value = 'Invalid Data Input';
    } else {
      status.value = 'Success';
    }
  } catch (error) {
    console.log(error);
  }
}

async function createData() {
  try {
    const data = {
      email: email.value,
      password: password.value,
      username: username.value,
      age: age.value
    };

    const req = await fetch('http://localhost:3000/api/customers/', {
      method: 'POST',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (req.status >= 400 && req.status < 500) {
      status.value = 'Invalid Data Input';
    } else if (req.status >= 500) {
      status.value = 'Server Error';
    } else {
      status.value = 'Success';
    }
  } catch (error) {
    console.log(error);
  }

}

async function deleteData() {
  try {
    const req = await fetch(`http://localhost:3000/api/customers/${id.value}`, {
      method: 'DELETE',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (req.status >= 400 && req.status < 500) {
      status.value = 'Invalid Data Input';
    } else if (req.status >= 500) {
      status.value = 'Server Error';
    } else {
      status.value = 'Success';
    }
  } catch (error) {
    console.log(error);
  }
}

async function updateData() {
  try {
    const data = {
      email: email.value,
      password: password.value,
      username: username.value,
      age: age.value
    };

    const req = await fetch(`http://localhost:3000/api/customers/${id.value}`, {
      method: 'PATCH',
      credentials: 'include',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (req.status >= 400 && req.status < 500) {
      status.value = 'Invalid Data Input';
    } else if (req.status >= 500) {
      status.value = 'Server Error';
    } else {
      status.value = 'Success';
    }
  } catch (error) {
    console.log(error);
  }
}

</script>

<template>
  <main>
    <div>
      <h1>Note: </h1>
      <p>Untuk 'create' lakukan input email, password, username, dan age.</p>
      <p>Untuk 'read' tidak menerima input.</p>
      <p>Untuk 'delete' lakukan input id.</p>
      <p>Untuk 'update' lakukan input email, password, username, age, dan id.</p>
    </div>

    <div class="container">
      <h1>Form Akun</h1>
      <form @submit.prevent="">
        <label for="Email">Email: </label>
        <input type="email" id="Email" v-model="email">
        <label for="Password">Password: </label>
        <input type="password" id="Password" v-model="password">
        <label for="Username">Username: </label>
        <input type="text" id="Username" v-model="username">
        <label for="Age">Age: </label>
        <input type="number" id="Age" v-model="age">
        <label for="ID">ID: </label>
        <input type="text" id="ID" v-model="id">
      </form>

      <div class="button-container">
        <button @click="createData">create</button>
        <button @click="readData">read</button>
        <button @click="deleteData">delete</button>
        <button @click="updateData">update</button>
      </div>

      <p class="status">Status: {{ status }}</p>

      <div class="account-list">
        <h2>Daftar Akun</h2>
        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Username</th>
              <th>Age</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in items.docs" :key="item.id">
              <td>{{ item.id }}</td>
              <td>{{ item.username }}</td>
              <td>{{ item.age }}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </main>
</template>

<style scoped>

main {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  height: 100vh;
  padding: 5vw;
  font-family: 'Poppins', sans-serif;
}

.container {
  background-color: #fff;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  width: 400px;
}

h1 {
  text-align: center;
  color: #333;
}

form {
  display: flex;
  flex-direction: column;
}

label {
  margin-top: 10px;
  font-weight: bold;
  color: #555;
}

input {
  margin-bottom: 15px;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size: 16px;
}

.button-container {
  display: flex;
  justify-content: space-around;
  margin-top: 15px;
}

button {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  transition: background-color 0.3s ease;
}

.create-btn {
  background-color: #4caf50;
  color: #fff;
}

.read-btn {
  background-color: #2196f3;
  color: #fff;
}

.delete-btn {
  background-color: #f44336;
  color: #fff;
}

.update-btn {
  background-color: #ff9800;
  color: #fff;
}

.status {
  margin-top: 15px;
  color: #333;
}

.account-list {
  margin-top: 20px;
}

h2 {
  color: #333;
}

table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 10px;
}

th, td {
  padding: 10px;
  border: 1px solid #ddd;
  text-align: left;
}

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}
</style>
