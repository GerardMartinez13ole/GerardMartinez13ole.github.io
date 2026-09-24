// auth.js - Lógica de Autenticación con Firebase

document.addEventListener('DOMContentLoaded', () => {
  const authForm = document.getElementById('auth-form');
  const btnLogin = document.getElementById('btn-login');
  const btnRegister = document.getElementById('btn-register');
  const btnLogout = document.getElementById('btn-logout');
  
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');

  // Registrar Nuevo Usuario
  btnRegister.addEventListener('click', async () => {
    if (!window.auth) return window.showAuthError('Firebase no està configurat encara.');
    
    const usernameInput = document.getElementById('username');
    const email = emailInput.value;
    const password = passwordInput.value;
    const username = usernameInput ? usernameInput.value.trim() : '';
    
    if (!email || !password) return window.showAuthError('Emplena email i contrasenya');
    if (!username) return window.showAuthError("Has d'escriure un Nom o Sobrenom per registrar-te.");

    try {
      const userCredential = await window.auth.createUserWithEmailAndPassword(email, password);
      // Actualizar el perfil del usuario con su nombre
      await userCredential.user.updateProfile({
        displayName: username
      });
      // Actualizar variable global por si acaso
      window.currentUser = userCredential.user;
    } catch (error) {
      window.showAuthError(error.message);
    }
  });

  // Iniciar Sessió
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    if (!window.auth) return window.showAuthError('Firebase no està configurat encara.');
    
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
      await window.auth.signInWithEmailAndPassword(email, password);
    } catch (error) {
      window.showAuthError(error.message);
    }
  });

  // Cerrar Sesión
  btnLogout.addEventListener('click', () => {
    if (window.auth) window.auth.signOut();
  });

  // Observador de estado de sesión
  if (window.auth) {
    window.auth.onAuthStateChanged(user => {
      if (user) {
        // Usuario logueado
        document.getElementById('auth-screen').style.display = 'none';
        document.getElementById('app-screen').style.display = 'flex';
        
        window.currentUser = user; // Guardar globalmente
        
        // Cargar muro automáticamente al entrar
        if (window.loadMuro) window.loadMuro();
      } else {
        // Usuario no logueado
        document.getElementById('auth-screen').style.display = 'flex';
        document.getElementById('app-screen').style.display = 'none';
        window.currentUser = null;
      }
    });
  }
});

