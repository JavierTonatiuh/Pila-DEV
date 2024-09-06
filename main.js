/*1.- Hacer una función que reciba como parámetros una pila, y un número. La función debe retornar tantos elementos como diga el número (segundo parámetro).
Entrada : mifuncion([‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’,‘Papaya’,‘Sandía’,‘Melón’],4)
Salida: [‘Manzana’,‘Cebolla’,‘Apio’,‘Naranja’].
2.- Escribe una función “reemplazar” que tenga como parámetros una pila de elementos de tipo Number, y dos valores también de tipo Number “nuevo” y “viejo”, de forma que si el segundo valor aparece en algún lugar de la pila, sea reemplazado por el primero (Solo la primera vez), y hará pop de los elementos más nuevos.
Entrada: reemplazar([3,2,3,4,6,8,1,2,5,5], 7, 2)
Salida: [3,2,3,4,6,8,1,7]
3.- Un conductor maneja de un pueblo origen a un pueblo destino, pasando por varios pueblos. Una vez en el pueblo destino, el conductor debe regresar a casa por el mismo camino. Muestre el camino recorrido tanto de ida como de vuelta.
Recorrido: Pueblo Origen → pueblo 1 → pueblo 2 → destino
Regreso: destino → pueblo 2’ → pueblo 1 → Pueblo Origen
4.- Un almacén tiene capacidad para apilar “n” contenedores. Cada contenedor tiene un número de identificación. Cuando se desea retirar un contenedor específico, deben retirarse primer*/



class Almacen{
    constructor(){
        this.items = {};
        this.top = 0;

    };

    push(data){
        this.top++;
        this.items[this.top] = data;
    };

    pop(){
        let deleteDate;

        if(this.top){
            deleteDate = this.items[this.top];
            delete this.items[this.top];
            this.top--;
            return deleteDate;
        }
    }

    getSize(){
        return this.top;

    }

    isEmpty(){
        if(!this.getSize()){
            return true;
        }else{
            return false;
        }

    }

    peek(){
        if(this.isEmpty()){
            return null;
        };

        return this.items[this.top];

    }

    print(){
        let result = '';
        for(let i = this.top; i > 0; i--){
            result += this.items[i] + ''
        };
        return result
    }

    
}

const contenedor = new Almacen();
contenedor.push("N1")
contenedor.push("N2")
contenedor.push("N3")

console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")

function guerreros(pila, numero){
    if(numero > pila.lenght){
        return pila;
    }

    return pila.slice(0, numero);

}

const resultado = guerreros(['Mexicas', 'Caballeros', 'Samurais', 'Ninjas',], 7);
console.log(resultado);

console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,")

function reemplazar(pila,nuevo,viejo){
    const index = pila.indexOf(viejo);

    if(index !== -1){
        pila[index] = nuevo;

    }

    const originalSize = pila.lenght;
    pila = pila.slice(0, originalSize);

    return pila;
}

const result = reemplazar([3,2,3,4,6,8,1,2,5,5], 9,5);
console.log(result);

console.log(",,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,,");

function viaje (array, inicio, fin){
    if(inicio < 0 || fin >= array.lenght || inicio > fin){
        console.log("fuera de rango");
        return;
    }

    console.log("Recorrido de ida");
    for(let i = inicio; i <= fin; i++){
        console.log(array[i]);
    }

    console.log("Recorrido de regreso");
    for(let i = fin; i >= inicio; i--){
        console.log(array[i]);

    }
}

const pueblos = ["Cancun", "Tulum", "Bacalar", "Chetumal"];
viaje(pueblos, 0,3)