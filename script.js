document.addEventListener('DOMContentLoaded', function() {
  // Handle Contact Form Submission
  const contactForm = document.querySelector('.contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(contactForm);
      const data = Object.fromEntries(formData.entries());
      try {
        const res = await fetch('/api/contact', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        showFormMessage(contactForm, result.success ? 'Message sent successfully!' : 'Failed to send message.', result.success);
        if (result.success) contactForm.reset();
      } catch (err) {
        showFormMessage(contactForm, 'An error occurred. Please try again.', false);
      }
    });
  }

  // Handle Feedback Form Submission
  const feedbackForm = document.querySelector('.feedback-form');
  if (feedbackForm) {
    feedbackForm.addEventListener('submit', async function(e) {
      e.preventDefault();
      const formData = new FormData(feedbackForm);
      const data = Object.fromEntries(formData.entries());
      try {
        const res = await fetch('/api/feedback', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data)
        });
        const result = await res.json();
        showFormMessage(feedbackForm, result.success ? 'Thank you for your feedback!' : 'Failed to submit feedback.', result.success);
        if (result.success) feedbackForm.reset();
      } catch (err) {
        showFormMessage(feedbackForm, 'An error occurred. Please try again.', false);
      }
    });
  }

  // Utility to show form messages
  function showFormMessage(form, message, isSuccess) {
    let msg = form.querySelector('.form-message');
    if (!msg) {
      msg = document.createElement('div');
      msg.className = 'form-message';
      form.appendChild(msg);
    }
    msg.textContent = message;
    msg.style.color = isSuccess ? 'green' : 'red';
    msg.style.marginTop = '0.7rem';
    msg.style.fontWeight = '600';
  }
}); 