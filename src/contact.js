export default function loadContact() {
    const content = document.getElementById('content');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Contact Us';
  
    const phone = document.createElement('p');
    phone.textContent = '📞 Phone: (123) 456-7890';
  
    const address = document.createElement('p');
    address.textContent = '🏠 Address: 123 Delicious Street, Food City, Yumland';
  
    const form = document.createElement('form');
    form.innerHTML = `
      <label for="name">Name:</label><br>
      <input type="text" id="name" name="name"><br>
      <label for="email">Email:</label><br>
      <input type="email" id="email" name="email"><br>
      <button type="submit">Submit</button>
    `;
  
    content.appendChild(heading);
    content.appendChild(phone);
    content.appendChild(address);
    content.appendChild(form);
  }
  