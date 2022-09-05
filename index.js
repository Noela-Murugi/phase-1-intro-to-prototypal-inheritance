function User(name, email) {
    this.name = name;
    this.email = email;
    this.sayHello = function () {
      console.log(`Hello everybody, my name is ${this.name} whom you've been
  mailing at ${this.email}!`);
    };
  }

  const lauren = new User("lauren", "lauren@gmail.com");
  lauren.sayHello();
