const url = "https://mihernopjxeixxfvlgre.supabase.co/rest/v1/Usuarios";

const API_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1paGVybm9wanhlaXh4ZnZsZ3JlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjIyODE4NzcsImV4cCI6MjA3Nzg1Nzg3N30.gmYu59WagvuDLqdd58qh05GEwe_dUeWguaYVZ_Krxvw';

// 1. OBTENER TODOS LOS USUARIOS DE LA TABLA "USUARIOS"
console.log('Procesando punto 1. Obteniendo todos los datos de la tabla usuarios >>>>...');

fetch(url, {
  headers: {
    'apikey': API_KEY,
    'Authorization': `Bearer ${API_KEY}`, // recomendado por Supabase
    'Content-Type': 'application/json'
  }
})
.then(r => r.json())
.then(data => console.log('Todos los datos de la tabla usuarios están así:', data))
.catch(err => console.error("Error al obtener datos:", err));
