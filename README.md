# Ejercicio Weekdays

Aquí tienes la base para una app Angular. Tendrás que hacer que se muestren los siete días de la semana.

Ahora mismo sólo tienes el módulo `App` y el componente `App`.

Tendrás que crear dos componentes más, `WeekdaysList` y `Weekday`. El template del componente `App` debe mostrar el listado de días debajo del `h1`.

El componente `Weekday` recibirá un objeto día, que tendrá un nombre y un booleano indicando si es el día actual o no. Debe pintar un `div` con la clase `day`, que dentro muestre las 3 primeras letras del nombre del día. Además, si es el día actual debe tener también la clase `day--current`;

Aquí tienes el CSS del componente `Weekday`:

```css
.day {
  border: 1px solid #000;
  height: 100px;
  display: flex;
  justify-content: center;
  align-items: center;
}

.day--current {
  font-weight: bold;
  font-size: 1.2rem;
}
```

El componente `WeekdaysList` tendrá una variable que almacenará los siete días de la semana. Cada día tendrá un nombre y un booleano indicando si es el día actual o no.

En el template del componente `WeekdaysList` debes renderizar tantas instancias del componente `Weekday` como días haya, y a cada instancia le debes pasar un día.

Aquí tienes el CSS para el componente `WeekdayList`:

```css
.days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);

  > :nth-child(1) {
    background-color: #3498db;
  }

  > :nth-child(2) {
    background-color: #e74c3c;
  }

  > :nth-child(3) {
    background-color: #2ecc71;
  }

  > :nth-child(4) {
    background-color: #f39c12;
  }

  > :nth-child(5) {
    background-color: #9b59b6;
  }

  > :nth-child(6) {
    background-color: #1abc9c;
  }

  > :nth-child(7) {
    background-color: #e67e22;
  }
}
```
