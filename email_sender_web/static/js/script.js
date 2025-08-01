document.addEventListener('DOMContentLoaded', function() {
    const companyRadio = document.getElementById('send_to_company');
    const individualRadio = document.getElementById('send_to_individual');
    const companyEmailGroup = document.getElementById('company_email').closest('.form-group'); // Get the parent form-group

    function toggleCompanyEmail() {
        if (companyRadio.checked) {
            companyEmailGroup.style.display = 'block';
            document.getElementById('company_email').setAttribute('required', 'required');
        } else {
            companyEmailGroup.style.display = 'none';
            document.getElementById('company_email').removeAttribute('required');
        }
    }

    // Initial check when the page loads
    toggleCompanyEmail();

    // Add event listeners for radio button changes
    companyRadio.addEventListener('change', toggleCompanyEmail);
    individualRadio.addEventListener('change', toggleCompanyEmail);
});