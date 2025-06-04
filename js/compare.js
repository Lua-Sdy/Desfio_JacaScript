
//car
let carArr = [];

class Car {
   

    constructor(nome, preco, alturaCacamba, alturaVeiculo, alturaSolo, capacidadeCarga, motor, potencia, volumeCacamba, roda, image){

        this.nome = nome;
        this.preco = preco;
        this.alturaCacamba = alturaCacamba;
        this.alturaVeiculo = alturaVeiculo;
        this.alturaSolo = alturaSolo;
        this.capacidadeCarga = capacidadeCarga;
        this.motor = motor;
        this.potencia = potencia;
        this.volumeCacamba = volumeCacamba;
        this.roda = roda;
        this.image = image;
       
    }
} 

// search on array if exist carClass returning 1 if not return -1
function GetCarArrPosition(arr, carClass) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i].nome  === carClass.nome)
            return i;
    }
    return -1;
}

function SetCarToCompare(el, carClass) {
    // Extrai o nome do carro
    const carName = carClass.nome;

    // Verifica se já existe um carro com esse nome no array
    function getCarIndex(name) {
        for (let i = 0; i < carArr.length; i++) {
            if (carArr[i].nome === name) return i;
        }
        return -1;
    }

    if (el.checked) {
        // Se ainda não está na lista, adiciona
        if (getCarIndex(carName) === -1) {
            carArr.push(carClass);
        } else {
            alert("Este carro já foi adicionado.");
            el.checked = false;
        }
    } else {
        // Remove da lista, se existir
        const index = getCarIndex(carName);
        if (index !== -1) {
            carArr.splice(index, 1);
        }
    }
}

function ShowCompare() {
    if(carArr.length < 2) {
        alert("Precisa marcar 2 carros para apresentar a comparação");
        return;
    }

    UpdateCompareTable();
    document.getElementById("compare").style.display = "block";
}

function HideCompare(){
    document.getElementById("compare").style.display = "none"; 
}

function UpdateCompareTable() {
    for(let i = 0; i < carArr.length; i++){
        const car = carArr[i];
        document.getElementById(`compare_image_${i}`).innerHTML = `<img src="${car.image}" style="width: 100px; height: 100px;">`;
        document.getElementById(`compare_modelo_${i}`).textContent = car.nome;
        document.getElementById(`compare_alturacacamba_${i}`).textContent = car.alturaCacamba;
        document.getElementById(`compare_alturaveiculo_${i}`).textContent = car.alturaVeiculo;
        document.getElementById(`compare_alturasolo_${i}`).textContent = car.alturaSolo;
        document.getElementById(`compare_capacidadecarga_${i}`).textContent = car.capacidadeCarga;
        document.getElementById(`compare_motor_${i}`).textContent = car.motor;
        document.getElementById(`compare_potencia_${i}`).textContent = car.potencia;
        document.getElementById(`compare_volumecacamba_${i}`).textContent = car.volumeCacamba;
        document.getElementById(`compare_roda_${i}`).textContent = car.roda;
        document.getElementById(`compare_preco_${i}`).textContent = `R$ ${car.preco.toLocaleString('pt-BR')}`
    }
}

// função para mostrar informações do carro no popup
function showCarInfo(carClass) {
    if(carClass instanceof Car){
        document.getElementById("car_info_image").innerHTML = `<img src="${carClass.image}" style="width: 100px; height: 100px;">`;
        document.getElementById("car_info_nome").textContent = carClass.nome;
        document.getElementById("car_info_preco").textContent = `R$ ${carClass.preco.toLocaleString('pt-BR')}`;
        document.getElementById("car_info_alturacacamba").textContent = carClass.alturaCacamba;
        document.getElementById("car_info_alturaveiculo").textContent = carClass.alturaVeiculo;
        document.getElementById("car_info_alturasolo").textContent = carClass.alturaSolo;
        document.getElementById("car_info_capacidadecarga").textContent = carClass.capacidadeCarga;
        document.getElementById("car_info_motor").textContent = carClass.motor;
        document.getElementById("car_info_potencia").textContent = carClass.potencia;
        document.getElementById("car_info_volumecacamba").textContent = carClass.volumeCacamba;
        document.getElementById("car_info_roda").textContent = carClass.roda;

        document.getElementById("car_info_popup").style.display = "flex";
    } else {
        throw "You need set a Car Class";
    }
}

// Fechar popup quando clicar no X

    function fecharpopup(){
        document.getElementById('car-popup-info').style.display = 'none';
    };

// Fechar popup quando clicar fora do conteúdo
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('car-popup-info')) {
        document.getElementById('car-popup-info').style.display = 'none';
    }
});

// Adicionar eventos de clique para as imagens de info
document.addEventListener('DOMContentLoaded', function () {

    // Carros:
    const xlCabine = new Car(
        'XL Cabine Simples 2.2 Diesel 4X4 MT 2022',
        183850, 511, 1821, 232, 1234, 2.2, 160, 1420,
        'Aço Estampado 16',
        'img/XL Cabine.jpg'
    );

    const xlsDiesel = new Car(
        'XLS 2.2 Diesel 4X4 AT 2022',
        220690, 511, 1821, 232, 1076, 2.2, 160, 1180,
        'Aço Estampado 16',
        'img/xls 2.2 diesel.jpg'
    );

    const storm = new Car(
        'Storm 3.2 Diesel 4X4 AT 2022',
        222790, 511, 1821, 232, 1040, 3.2, 200, 1180,
        'Liga Leve 17',
        'img/storm.jpg'
    );

    // eventos de clique:
    document.getElementById('xlCabine').addEventListener('click', function () {
        showCarInfo(xlCabine);
    });

    document.getElementById('xls-diesel-info').addEventListener('click', function () {
        showCarInfo(xlsDiesel);
    });

    document.getElementById('storm-info').addEventListener('click', function () {
        showCarInfo(storm);
    });
});


