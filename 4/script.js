const button = document.querySelector('button')
    container = document.querySelector('container')
    usersList = document.querySelector('.users');

const fetchUsersJSON = async() => {
    const response = await fetch('https://reqres.in/api/users');
    const data = await response.json();
    return data;
}

let isRequest = false;

button.addEventListener('click', () => {
    if(!isRequest) {

        fetchUsersJSON().then(users => (usersData = users.data.forEach(user => {
            console.log(user);
            isRequest = true;
      
          const element = document.createElement('tr');
          usersList.append(element);
      
          let avatar = document.createElement('td');
          let image = document.createElement('img');
          image.src=`${user.avatar}`;
          image.alt=user.first_name;
          let name = document.createElement('p');
          name.textContent = `${user.first_name} ${user.last_name}`;
          avatar.append(image, name);
      
          element.append(avatar);
      
          let email = document.createElement('td');
          let p = document.createElement('p');
          email.append(p);
          p.textContent = `${user.email}`;
          element.append(email);
          })));
    }
})