// Show admin panel
document.getElementById('adminBtn').addEventListener('click', () => {
  document.getElementById('adminPanel').classList.remove('admin-hidden');
});

// Close admin panel
document.getElementById('closeAdminBtn').addEventListener('click', () => {
  document.getElementById('adminPanel').classList.add('admin-hidden');
});

// Save edited details
document.getElementById('saveBtn').addEventListener('click', () => {
  const name = document.getElementById('editName').value;
  const bio = document.getElementById('editBio').value;
  const profileImgUrl = document.getElementById('editProfileImg').value;

  if (name) {
    document.getElementById('name').textContent = name;
  }
  if (bio) {
    document.getElementById('bio').textContent = bio;
  }
  if (profileImgUrl) {
    document.getElementById('profileImg').src = profileImgUrl;
  }

  // Hide admin panel after saving
  document.getElementById('adminPanel').classList.add('admin-hidden');
});

// Populate admin fields with current data when opening
document.getElementById('adminBtn').addEventListener('click', () => {
  document.getElementById('editName').value = document.getElementById('name').textContent;
  document.getElementById('editBio').value = document.getElementById('bio').textContent;
  document.getElementById('editProfileImg').value = document.getElementById('profileImg').src;
});
