const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    /* 1.zwróć sumę wszystkich elementów znajdujących się w tablicy, */
const sumArray = array.reduce((acc, item) => {
    return acc + item
})
console.log('Suma to:', sumArray)
    /* 2.zwróć sumę wszystkich parzystych elementów tablicy, */
const sumEven = array
    .filter((item) => {
        return item % 2 === 0
    }).reduce((acc, item) => {
        return acc + item
    })
console.log(sumEven)
    /* 3.zwróć sumę wszystkich elementów tablicy + 10(10 dodaj za pomocą initialValue) */
const initSum = array.reduce((acc, item) => {
    return acc + item
}, 10)
console.log(initSum)
    /* 4. Napisz czym będzie accumulator jak nie podamy initialValue, a czym będzie jak podamy initialValue.
    accumulator w przypadku podania initialValue będzie wartością początkową do której będziemy dodawać kolejne iterowane elementy tablicy, a w przypadku jej nie podania, accumulatorem będzie element[0] tablicy.
    Accumulator - czyli skumulowana wartość.
    Więc czy nie można pokusić się o stwierdzenie że, initialValue w przypadku jego nie dodania wynosi domyślnie '0'?
    (currentValue = kolejny element tablicy) 
    
    acc = 0
    acc + currentValue /// 0 + ( element zerowy tablicy, czyli w tym przypadku 1) = 1
    acc = 1
    acc + currentValue /// 1 + (element 1 tablicy, czyli w tym przypadku 2) = 3
    acc = 3
     i tak dalej i tak dalej ...
     W przypadku podania initial value = 10,
     acc wynosi juz na starcie 10
     wiec, analogicznie zaczynajac petle od poczatku z initial value: 10.
     acc = 10
     acc + currentValue /// 10 + (zerowy element tablicy, czyli w tym przypadku 1) = 11
     acc = 11
     acc + currentValue /// 11 + (element 1 tablicy, czyli w tym przypadku 2) = 13
     acc = 13
     i tak dalej, i tak dalej...
      */
    /* 5. Jeśli podamy initialValue w tablicy to jaki index będzie miał prawdziwy pierwszy element naszej tablicy ? */
    /* nie wiem za bardzo o co chodzi, w przypadku tablicy  z numberami gdy podamy initial value 10, element pierwszy będzie wyglądał tak: array[0] + 10
    /* 6 */
function sum(arr) {
    let sum = 0;
    for (const val of arr) {
        sum += val;
    }
    return sum;
}
const someArray = [11, 3, 5, 31, 31, 54, 23, 14]
    /* 7. zwróć true jeśli tablica zawiera chociaż jeden element większy niż 50, */
const greaterThan50 = (item) => item > 50
const isGreaterThan50 = someArray.some(greaterThan50)
console.log(isGreaterThan50)
    /* 8. zwróć true jeśli w tablicy każdy element jest większy od 2, */
const allGreaterThan2 = (item) => item > 2
const isAllGreaterThan2 = someArray.every(allGreaterThan2)
console.log(isAllGreaterThan2)
    /* 9.Jaka jest różnica między some i every? */
    /* some wyszukuje conajmniej 1 element zgodny z (instrukcją funkcji ?) i daje name true.
        every zwraca true jeśli WSZYSTKIE elementy z tablicy zgodne są z (instrukcją funkcji?).
/* 10. sprawdz czy tablica zawiera element podzielny przez 7 i jeśli tak to niech wyświetli w konsoli informacje, że
w tablicy znajduje się element podzielny przez 7, */
const DividedBy7 = someArray.some((item) => item % 7 === 0)
const isDividedBy7 = () => {
    if (DividedBy7) {
        console.log(`Tablica ${someArray} zawiera conajmniej 1 element podzielny przez 7`)
    } else { console.log(`Tablica ${someArray} nie zawiera żadnego elementu podzielnego przez 7`) }
}
isDividedBy7()
    /* Serio tutaj nie umialem nic wymyslić więcej, zrobilem tak, konsola dobrze wyświetla. */
    /*11. stwórz metodę some za pomocą pętli for, */
const biggerThan25 = some(item => item > 25)

function some(funkcja) {
    for (let i = 0; i < someArray.length; i++) {
        const number = someArray[i]
        if (funkcja(number)) {
            return true
        }
    }
    return false
}
console.log(biggerThan25)
    /* "zrobilem" czyli zernżnąłem to po lajwie, naprawde nie moge ogarnąć :D, po co robimy funkcje some i przekazujemy do niej tak naprawde metodę some, i consologujemy i tak tę zmienną biggerThan25 (opieram się tylko na tym co bylo na lajwie) jeszcze chyba za malo doswiadczenia.
    /* 12 */
    /* 12. nie zrobilem bo mam te same wątpliwości jak w przypadku 11. przepraszam :D
    /* 13.przyjmuje tablicę jako parametr i sumuje nam elementy typu number z tej tablicy(użyj typeof) */
const tablica1 = [1, 3, 5, 'string1', 'string2']
const costam = (arr) => {
    const newArr =
        arr.filter((item) => {
            if (typeof item == 'number') {
                return item
            }
        })
        .reduce((acc, item) => {
            return acc + item
        }, 0)
    return newArr
}
console.log(costam(tablica1))
    /* 14. przyjmuję dwa parametry (tablicę oraz wartość initialValue), a następnie odejmuje nam każdy kolejny element
    tablicy od następnego, */
const tablica2 = [1, 3, 5, 6, 3, 4, 7]
const odejmij = (arr, init) => {
    const res = arr.reduce((acc, value) => {
        return acc - value
    }, init)
    return res
}
console.log(odejmij(tablica2, 10))
    /*  15. przyjmuję dwa parametry(tablice i wartość, której szukamy w tej tablicy). Funkcją powinna nam zwrócić true
    jeśli w tablicy znajdzie się ta wartość, */
const szukaj = (arr, value) => arr.includes(value)

console.log(szukaj(tablica1, 5))

/* 16, */
const Car = function(model, yearOfProduction, color) {
    this.model = model;
    this.yearOfProduction = yearOfProduction;
    this.color = color;
    this.drive = () => console.log('Jazda');
}
const BMW = new Car('320d', 2008, 'Blue')
const Mercedes = new Car('SLK', 2010, 'Green')
console.log(BMW)
console.log(Mercedes)
    /* 17  co robi new?*/
    /* nie chcialem tego az tak szukac w necie i wypisywać więc na moje oko z tego co widzę, 'new' inicjuje - tworzy nowy obiekt na podstawie modelu konstruktora.

        /* 18 */
Car.prototype.tankFuel = function() { console.log('Procedura tankowania') }
Car.prototype.stop = function() { console.log('Procedura zatrzymania') }
console.log(BMW.stop())

/* Wydaje mi sie że tak srednio  czaje to wszystko jeszcze */
