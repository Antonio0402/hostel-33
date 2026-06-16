import BranchSwitch from './branch-switch.js';

class AddressMap extends BranchSwitch {
  constructor() {
    super();
    this.addressSection = document.querySelector('.address-section');
    if (!this.addressSection) return;
    this.listenToBranchSwitch();
  }

  listenToBranchSwitch() {
    const switchButton = this.branchSwitch.querySelectorAll('input');
    switchButton.forEach(button => {
      button.addEventListener('change', (e) => this.updateData(e));
    });
  }

  updateData(e) {
    const target = e.currentTarget;
    const branch = target.getAttribute('data-checked');
    this.handleAddress(branch);
  }

  async handleAddress(branch) {
    try {
      // Create FormData instead of JSON
      const formData = new FormData();
      formData.append('action', addressAjaxData.action);
      formData.append('branch', branch);
      formData.append('nonce', addressAjaxData.nonce);
      const response = await fetch(`${addressAjaxData.ajax_url}`, {
        method: 'POST',
        headers: {
          'X-WP-Nonce': addressAjaxData.nonce
        },
        body: formData
      });
      const result = await response.text();
      if (result) {
        this.addressSection.innerHTML = result;
      } else {
        console.error('No response from the server');
      }
    } catch (error) {
      console.error(error);
    }
  }
}
// Initialize form when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
  new AddressMap();
});
export default AddressMap;