function insertButton() {
  if (!Array.from(document.querySelectorAll('a[title="Inbox"], span')).find((el) => el.textContent?.trim() === 'Inbox')) {
    setTimeout(insertButton, 1000);
    return;
  }
  const style = document.createElement('style');
  style.textContent = `
    .gmail-unread-button {
      background-color: #ffdac2;
      border: none;
      border-radius: 16px;
      color: #001d35;
      cursor: pointer;
      font-weight: 500;
      left: 156px;
      padding: 19px 20px;
      position: fixed;
      top: 72px;
      transition: box-shadow 80ms linear;
      z-index: 9999;
    }
    .gmail-unread-button:hover {
      box-shadow: 0 1px 3px 0 rgba(60, 64, 67, .3), 0 4px 8px 3px rgba(60, 64, 67, .15);
    }
  `;
  const button = document.createElement('button');
  button.textContent = 'Unread';
  button.className = 'gmail-unread-button';
  button.addEventListener('click', () => window.location.href = 'https://mail.google.com/mail/u/0/#search/label%3Aunread');
  document.head.appendChild(style);
  document.body.appendChild(button);
}

setTimeout(insertButton, 1000);
