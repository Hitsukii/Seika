import { auth, db, logout, onUserStateChanged } from './auth.js';

import {
  collection,
  addDoc,
  query,
  where,
  getDocs,
  doc,
  updateDoc
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

// Detecta si hay usuario logueado
onUserStateChanged(async (user) => {
  if (!user) {
    location = 'login.html';
  } else {
    loadGoals(user.uid);
    document.getElementById('add').onclick = () => createGoal(user.uid);
  }
});

// Cargar metas del usuario
async function loadGoals(uid) {
  const qs = query(collection(db, 'goals'), where('uid', '==', uid));
  const snap = await getDocs(qs);

  const div = document.getElementById('goals');
  div.innerHTML = '';

  snap.forEach(d => {
    const g = d.data();

    div.innerHTML += `
      <div>
        <b>${g.name}</b><br>
        Racha: ${g.streak} días<br>
        <button onclick="mark('${d.id}', ${g.streak})">Marcar día</button>
      </div>
      <hr>
    `;
  });
}

// Marcar racha
window.mark = async (id, streak) => {
  await updateDoc(doc(db, 'goals', id), {
    streak: streak + 1,
    last: Date.now()
  });
  location.reload();
};

// Crear meta nueva
async function createGoal(uid) {
  const name = prompt("Nombre de meta:");
  if (!name) return;

  await addDoc(collection(db, 'goals'), {
    uid,
    name,
    streak: 0,
    last: null
  });

  location.reload();
}
