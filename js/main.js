// First task
function script1() {
  let travelAgency = {
    name: "Подорожі",
    address: "Марс",
    phone: "+1234567890"
  }

  alert("Турфірма" + "\nНазва: " + travelAgency.name + "\nАдреса: " + travelAgency.address + "\nТелефон: " +
    travelAgency.phone)
}

// Second task
function script2() {
  let pass = {
    city: "",
    price: 0,
    numberOfDays: 0,

    calculateCost: function() {
      return this.price * this.numberOfDays
    },
    changePrice: function(newPrice) {
      return this.price = newPrice
    },
    displayPass: function() {
      alert(`Місто: ${this.city}, Ціна: ${this.price}, Кількість днів: ${this.numberOfDays}`)
    }
  }

  pass.city = "Париж"
  pass.price = 1000
  pass.numberOfDays = 7

  alert("Вартість путівки: " + pass.calculateCost() + "\nНова ціна: " + pass.changePrice(1200))
  pass.displayPass()
}

// Third task
function script3() {
  function TravelAgency(name, address, phone) {
    this.name = name
    this.address = address
    this.phone = phone
  }

  function Pass(city, price, numberOfDays) {
    this.city = city
    this.price = price
    this.numberOfDays = numberOfDays
  }

  Pass.prototype = {
    calculateCost: function() {
      return this.price * this.numberOfDays
    },
    changePrice: function(newPrice) {
      return this.price = newPrice
    },
    displayPass: function() {
      alert(`Місто: ${this.city}, Ціна: ${this.price}, Кількість днів: ${this.numberOfDays}`)
    }
  }

  let travelAgency = new TravelAgency("Подорожі", "Марс", "+1234567890")
  alert(`Турфірма: ${travelAgency.name}, Адреса: ${travelAgency.address}, Телефон: ${travelAgency.phone}`)

  let pass = new Pass("Париж", 1000, 7);
  alert("Вартість путівки: " + pass.calculateCost() + "\nНова ціна: " + pass.changePrice(1200))
  pass.displayPass()
}

// Fourth task
function script4() {
  function TravelAgency(name, address, phone) {
    this.name = name
    this.address = address
    this.phone = phone
  }

  TravelAgency.prototype = {
    displayData: function() {
      alert(`Турфірма: ${this.name}, Адреса: ${this.address}, Телефон: ${this.phone}`)
    }
  }

  let travelAgency = new TravelAgency("Подорожі", "Марс", "+1234567890")
  travelAgency.displayData()
}

// Fifth task
function script5() {
  function TravelAgency(name, address, phone) {
    this.name = name
    this.address = address
    this.phone = phone
  }

  TravelAgency.prototype.displayData = function() {
    return `Турфірма: ${this.name}, Адреса: ${this.address}, Телефон: ${this.phone}`
  }

  function Department(name, address, phone, departmentName, departmentAddress) {
    TravelAgency.call(this, name, address, phone)
    this.departmentName = departmentName
    this.departmentAddress = departmentAddress
    this.displayData = function() {
      return `${TravelAgency.prototype.displayData.call(this)}, Назва відділу: ${this.departmentName}, Адреса відділу: ${this.departmentAddress}`
    }
  }

  let department = new Department("Подорожі", "Марс", "+1234567890",
    "Головний відділ", "вул. Перемоги")
  alert(department.displayData())
}

// Sixth task
function script6() {
  class TravelAgency {
    constructor() {
      this._name = ""
      this._address = ""
      this._phone = ""
    }

    set name(name) {
      this._name = name
    }

    get name() {
      return this._name
    }

    set address(address) {
      this._address = address
    }

    get address() {
      return this._address
    }

    set phone(phone) {
      this._phone = phone
    }

    get phone() {
      return this._phone
    }

    displayData() {
      return `Турфірма: ${this.name}, Адреса: ${this.address}, Телефон: ${this.phone}`
    }
  }

  class Department extends TravelAgency {
    constructor() {
      super()
      this._departmentName = ""
      this._departmentAddress = ""
    }

    set departmentName(name) {
      this._departmentName = name
    }

    get departmentName() {
      return this._departmentName
    }

    set departmentAddress(address) {
      this._departmentAddress = address
    }

    get departmentAddress() {
      return this._departmentAddress
    }

    displayData() {
      return `${super.displayData()}, Назва відділу: ${this.departmentName}, Адреса відділу: ${this.departmentAddress}`
    }
  }

  let department = new Department()
  department.name = "Подорожі"
  department.address = "Марс"
  department.phone = "+1234567890"
  department.departmentName = "Головний відділ"
  department.departmentAddress = "вул. Перемоги"

  alert(department.displayData())
}
