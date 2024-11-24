export default function loadMenu() {
    const content = document.getElementById('content');
    
    const heading = document.createElement('h1');
    heading.textContent = 'Our Menu';
  
    const menuItems = [
      { name: 'Spaghetti Carbonara', price: '$12' },
      { name: 'Margherita Pizza', price: '$10' },
      { name: 'Caesar Salad', price: '$8' },
      { name: 'Tiramisu', price: '$6' }
    ];
  
    const menuList = document.createElement('ul');
    menuItems.forEach(item => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.name} - ${item.price}`;
      menuList.appendChild(listItem);
    });
  
    content.appendChild(heading);
    content.appendChild(menuList);
  }
  