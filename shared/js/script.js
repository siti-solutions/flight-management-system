// Shared utility functions

function formatDate(dateStr) {
  const date = new Date(dateStr);
  return date.toLocaleDateString() + ' ' + date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
}

function showAlert(message) {
  alert(message);
}

function checkAdminLogin() {
  const adminId = localStorage.getItem('adminId');
  if (!adminId) {
    alert('Please log in as an admin first.');
    window.location.href = '/admin/auth/login.html';
  }
}

function checkUserLogin() {
  const userId = localStorage.getItem('userId');
  if (!userId) {
    alert('Please log in first.');
    window.location.href = '/user/auth/login.html';
  }
}
