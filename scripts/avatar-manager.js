// Simple Avatar Manager - Only for Engene profile
class AvatarManager {
    constructor() {
        this.loadSavedAvatar();
    }

    loadSavedAvatar() {
        const savedAvatar = localStorage.getItem('engeneAvatar');
        if (savedAvatar) {
            document.getElementById('engene-avatar').src = savedAvatar;
        }
    }

    saveAvatar(avatarUrl) {
        localStorage.setItem('engeneAvatar', avatarUrl);
        document.getElementById('engene-avatar').src = avatarUrl;
        this.closeModal();
    }

    openModal() {
        document.getElementById('avatarModal').style.display = 'flex';
    }

    closeModal() {
        document.getElementById('avatarModal').style.display = 'none';
    }
}

// Global instance
const avatarManager = new AvatarManager();

// Global functions for HTML
function openAvatarSelector(event) {
    event.stopPropagation(); // Prevent triggering the main click
    avatarManager.openModal();
}

function selectAvatar(avatarUrl) {
    avatarManager.saveAvatar(avatarUrl);
}

function closeAvatarModal() {
    avatarManager.closeModal();
}

function goToEngene() {
    window.location.href = 'engene.html';
}

// Close modal if clicking outside
document.addEventListener('click', function(e) {
    const modal = document.getElementById('avatarModal');
    if (e.target === modal) {
        closeAvatarModal();
    }
});

// Close modal with Escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeAvatarModal();
    }
});