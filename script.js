// Get references to the dialog and buttons
const dialog = document.getElementById('dialog');
const openDialogButton = document.getElementById('openDialogButton');
const closeDialogButton = document.getElementById('closeDialogButton');

// Function to open the dialog
function openDialog() {
    dialog.style.display = 'block';
}

// Function to close the dialog
function closeDialog() {
    dialog.style.display = 'none';
}

// Event listeners for buttons
openDialogButton.addEventListener('click', openDialog);
closeDialogButton.addEventListener('click', closeDialog);