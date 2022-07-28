class UsersInterface {
  constructor() {
    this.list = document.querySelector('.scoreslist');
    this.names = document.querySelector('#name');
    this.scores = document.querySelector('#score');
  }

  addToList(arr) {
    this.list.innerHTML = '';
    arr.forEach((el) => {
      this.list.innerHTML += `
          <li class="item">${el.user} : ${el.score}</li>
          `;
    });
  }

  clearInputFields() {
    this.names.value = '';
    this.scores.value = '';
  }
}

export default UsersInterface;