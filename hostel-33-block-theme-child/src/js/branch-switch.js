import SwiperBanner from './swiper-banner';

class BranchSwitch {
  constructor() {
    this.branchSwitch = document.querySelector('.switch-group');
    if (!this.branchSwitch) return;
    this.bindEvents();
  }

  bindEvents() {
    const switchButton = this.branchSwitch.querySelectorAll('input');
    switchButton.forEach(button => {
      button.addEventListener('change', (e) => this.switchBranch(e));
    });
  }

  switchBranch(e) {
    const target = e.currentTarget;
    const branch = target.getAttribute('data-checked');
    const labels = this.branchSwitch.querySelectorAll('label');
    this.loader = this.branchSwitch.parentElement.parentElement.querySelector('.loader');
    this.roomSlider = this.branchSwitch.parentElement.parentElement.querySelector('.room-slider');
    labels.forEach(label => {
      label.classList.remove('active');
    });
    target.nextElementSibling.classList.add('active');

    this.handleSwitch(branch);
  }

  async handleSwitch(branch) {
    try {
      this.loader.style.display = 'block';
      this.roomSlider.style.display = 'none';
      // Create FormData instead of JSON
      const formData = new FormData();
      formData.append('action', switchAjaxData.action);  // 'switch_branch'
      formData.append('branch', branch);
      formData.append('nonce', switchAjaxData.nonce);
      const response = await fetch(`${switchAjaxData.ajax_url}`, {
        method: 'POST',
        headers: {
          'X-WP-Nonce': switchAjaxData.nonce
        },
        body: formData
      });
      const result = await response.text();
      if (result) {
        if (this.roomSlider) {
          this.roomSlider.innerHTML = result;
          this.roomSlider.style.display = 'revert';
          this.loader.style.display = 'none';
        }
        const roomSliderSwiper = new SwiperBanner('.room-slider');
      } else {
        console.error('No response from the server');
      }
    } catch (error) {
      console.error(error);
    }
  }
}

new BranchSwitch();
export default BranchSwitch;