const chart = document.querySelector('.body__chart');


// console.log(chartItem)

const addElements = (items) => {
    items.forEach(item => addElement(item))
}

const addElement = ({amount, day}) => {
    const container = createContainer()
    const bar = createBar(amount)
    const label = createLabel(day)
    const spendings = createAmount(amount)

    container.appendChild(bar);
    container.append(label);
    chart.appendChild(container);
    bar.appendChild(spendings);
}

const createContainer = () => {
    const container = document.createElement('div')
    container.classList.add('chartItem')
    return container
}


const createBar = (amount) => {
    const bar = document.createElement('div')
    bar.classList.add('chartItem__bar')
    bar.style.height = `${amount * 3}px`;
    return bar;
}


const createLabel = (day) => {
    const label = document.createElement('span')
    label.classList.add('chartItem__label')
    label.innerHTML = day
    return label;
}

const createAmount = (amount) => {
    const value = document.createElement('div')
    value.classList.add('chartItem__value');
    value.innerHTML = `$${amount}`;
    return value;
}

fetch("./data.json")
    .then((response) => response.json())
    .then((json) => addElements(json));



// console.log(chartBar)