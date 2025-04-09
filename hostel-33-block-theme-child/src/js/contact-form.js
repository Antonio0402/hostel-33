const CONTACT_ITEM_NAMES = ['name', 'email', 'message'];

class ContactForm {
  constructor() {
    this.form = document.getElementById('hostel33-contact-form');
    if (!this.form) return;
    this.timeout = null;
    this.initForm();
  }

  initForm(e) {
    this.form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.submitForm();
    });
  }

  async submitForm() {
    if (this.timeout) {
      clearTimeout(this.timeout);
    }
    const messageEl = this.form.querySelector('.contact-form-message');
    const contactItemData = {};
    const contactFormItem = this.form.querySelectorAll('.contact-form-item');
    contactFormItem.forEach((formItem) => {
      const itemEl = formItem.querySelector('input, textarea');
      const itemName = itemEl.getAttribute('name').replace('contact-form-', '').trim();
      if (CONTACT_ITEM_NAMES.includes(itemName)) {
        contactItemData[itemName] = itemEl.value;
      }
    });

    try {
      const formData = new FormData();
      formData.append('action', contactFormAjaxData?.action);
      formData.append('nonce', contactFormAjaxData?.nonce);
      Object.keys(contactItemData).forEach((key) => {
        formData.append(key, contactItemData[key]);
      })

      const response = await fetch(supportFormAjaxData.ajax_url, {
        method: 'POST',
        headers: {
          'X-WP-Nonce': contactFormAjaxData.nonce
        },
        body: formData
      });

      const data = await response.json();

      if (data.success && !data.data.message) {
        // Reset form
        this.form.reset();

        // Trigger Popup Maker popup
        if (typeof PUM !== 'undefined' && data.data.popup_id) {
          /* Only open in 5s then close it*/
          PUM.open(data.data.popup_id);

          this.timeout = setTimeout(() => {
            PUM.close(data.data.popup_id);
          }, 1000);
        }
      } else {
        // Error case - wp_send_json_error() response
        let errorMessage = 'An error occurred during submission.';

        // Extract error message from WordPress response
        if (data.data) {
          errorMessage = typeof data.data === 'string' ? data.data :
            (data.data.message || errorMessage);
        }

        // Show error message
        messageEl.innerHTML = `<p class="error">${errorMessage}</p>`;
      }
    } catch (error) {
      console.error('Form submission error:', error);
      messageEl.innerHTML = '<p class="error">An unexpected error occurred. Please try again.</p>';
    }
  }

}

document.addEventListener('DOMContentLoaded', () => {
  new ContactForm();
});

export default ContactForm;