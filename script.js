function expandOption(optionId) {
    const options = document.querySelectorAll('.expandable-option');
    options.forEach(option => {
      if (option.id === optionId) {
        option.style.display = 'block';
      } else {
        option.style.display = 'none';
      }
    });
  }
  