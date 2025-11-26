# Examen Java POO - Soluciones

**1. El modificador `protected` permite el acceso a:**

- ☐ a. Sólo a clientes del mismo paquete.
- ☐ b. Sólo a descendientes.
- ☑ c. Clientes del mismo paquete y descendientes.

**2. En Java, hasta su version 7, no había conflictos de herencia múltiple porque:**

- ☑ a. No se pueden heredar dos propiedades diferentes y concretas con el mismo nombre.
- ☐ b. No existe herencia múltiple de clases.
- ☐ c. Se evitan los conflictos con renombrados.

**3. Dado el siguiente código podemos decir:**

```java
Poligono p1 = new Triangulo();
Triangulo t = new Triangulo();
Poligono p2 = new Poligono();
```

- ☑ a. Tenemos dos instancias directas de triangulo, y tres instancias de poligono.
- ☐ b. Tenemos dos instancias directas de triangulo, y una instancia de poligono.
- ☐ c. Tenemos tres instancias directas de poligono.


**4. Una conversión *downcast* en la jerarquía de herencia:**

- ☐ a. Es opcional usar un molde de conversión.
- ☐ b. Es ilegal si los tipos coinciden.
- ☑ c. Exige usar un molde de conversión.

**5. En un descendiente los invariantes son:**

- ☑ a. Más restrictivos.
- ☐ b. Menos restrictivos.
- ☐ c. Iguales.

**6. En Java tenemos de manera **estricta**:**

- ☐ a. Sobrecarga de operadores y métodos.
- ☐ b. Sólo sobrecarga de operadores.
- ☑ c. Sólo sobrecarga de métodos.



**7. En Java tenemos herencia...**

- ☑ a. Simple de clases.
- ☐ b. Simple o múltiple de clase en función de las sintaxis utilizada.
- ☐ c. Múltiple de clases.

**8. Siguiendo el principio de Liskov podríamos decir:**

- ☑ a. Todo rectángulo poder ser visto como un polígono.
- ☐ b. Algunos rectángulos pueden ser vistos como polígonos.
- ☐ c. Todo polígono puede ser visto como rectángulo.

**9. El polimorfismo permite que a una variable de un tipo referencia a objeto...**

- ☑ a. Sólo se pueden asignar variables de sus subtipos.
- ☐ b. Sólo se pueden asignar variables de ese mismo tipo.
- ☐ c. No hay restricciones en la asignación de variables de cualquier tipo.

**10. Una redefinición en Java:**

- ☐ a. Se produce sólo en atributos.
- ☐ b. Se produce en atributos y métodos.
- ☑ c. Se produce sólo en métodos.

**11. La inclusión de métodos implementados en las interfaces a partir de Java 8 tiene como objetivo:**

- ☑ a. Permitir la inclusión de nuevos métodos siendo compatibles las clases de versiones previas.
- ☐ b. Permite añadir herencia múltiple de clases en el lenguaje.
- ☐ c. No tienen ningún objetivo adicional, salvo la inclusión de código.

**12. En Java 8, en caso de conflicto de un método concreto de una clase y un método implementado en una interfaz:**

- ☑ a. Se prefiere el de la clase.
- ☐ b. No se detecta realmente como conflicto en compilación.
- ☐ c. Se prefiere el de la interfaz.

**13. La inicialización en herencia:**

- ☑ a. Se usa `super` si tenemos constructores "no por defecto" en las superclases.
- ☐ b. Se usa `this` para invocar al constructor de la superclase.
- ☐ c. Siempre se tiene que usar la referencia `super`.

**14. La referencia paterna en Java es:**

- ☐ a. `myBase`
- ☐ b. `baseClass`
- ☑ c. `super`
- ☐ d. `this`

**15. Una conversión *upcast* en la jerarquía de herencia:**

- ☑ a. Es opcional usar un molde de conversión.
- ☐ b. Es ilegal.
- ☐ c. Obliga a usar un molde de conversión.

**16. La siguiente redefinición de método:**

```java
@Override
void metodo() {
    super.metodo();
}
```

- ☑ a. No tiene efecto ninguno.
- ☐ b. Sobra el uso del `super`.
- ☐ c. Es obligatoria incluirla para que la clase pueda compilar.

**17. Una clase abstracta en Java:**

- ☑ a. No es instanciable.
- ☐ b. Es una interface.
- ☐ c. Es instanciable.

**18. Si redefinimos un método público en el ancestro, como privado en el descendiente...**

- ☑ a. Es incorrecto hacer más restrictivo el modificador en el descendiente.
- ☐ b. Es correcto independientemente del uso que se vaya a hacer del método.
- ☐ c. Es correcto si nadie intenta usar el método del descendiente.

**19. La herencia puede ser vista como...**

- ☐ a. No tiene una representación gráfica asociada.
- ☐ b. Mapa de Karnaugh.
- ☑ c. Relación jerárquica o conjuntos de tipos.

**20. En Java 8, si se heredan dos métodos diferentes, uno implementado en una interfaz y el otro abstracto de una clase, con misma signatura:**

- ☐ a. Se prefiere el método abstracto en la clase.
- ☑ b. Se debe redefinir el método.
- ☐ c. Se prefiere el método implementado en la interfaz.

**21. La ligadura dinámica se basa:**

- ☐ a. En el tipo de la clase que contiene la variable.
- ☐ b. En el tipo estático de las variables.
- ☑ c. En el tipo dinámico de las variables.

**22. En Java existe herencia múltiple:**

- ☐ a. De clases con clases.
- ☐ b. De interfaces con clases.
- ☑ c. De interfaces con interfaces.

**23. En Java, en caso de incompatibilidad en el intento de asignación de variables referencia a objeto con un molde (cast):**

- ☑ a. Se lanza una excepción en tiempo de ejecución por incompatibilidad de tipos.
- ☐ b. Se produce una asignación de valor nulo a la variable.
- ☐ c. No se realiza la asignación dejando el valor actual en la variable.

**24. El polimorfismo se basa:**

- ☐ a. En el tipo de la clase que contiene la variable.
- ☑ b. En el tipo estático de las variables.
- ☐ c. En el tipo dinámico de las variables.

**25. A partir de Java 8, un método en una interfaz....**

- ☐ a. No puede incluir un cuerpo de instrucciones.
- ☐ b. Ya no son implícitamente abstract.
- ☑ c. Puede incluir un cuerpo de instrucciones si se utiliza la palabra clave default.

**26. Una clase final en Java:**

- ☑ a. No puede tener descendientes.
- ☐ b. Tiene como máximo un descendiente.
- ☐ c. Tiene infinitos descendientes.

**27. En una interface Java hasta la versión 7 incluida:**

- ☐ a. Hay atributos y métodos implementados.
- ☑ b. No hay código ejecutable.
- ☐ c. Sólo se pueden definir signaturas de métodos abstractos.

**28. En Java 8, en caso de heredarse por varios caminos un método implementado en una interfaz, y redefinido por alguno de los caminos de herencia:**

- ☑ a. Se prefiere el más específico.
- ☐ b. Se prefiere el más general.
- ☐ c. Se obliga al programador a resolver la ambigüedad.

**29. Si tenemos el siguiente código, la invocación es correcta si:**

```java
var.operacion();
```

- ☐ a. Sólo si operacion es un método definido y accesible en la clase que implementa el tipo de la variable var.
- ☑ b. Sólo si operacion es un método definido y accesible en la clase que implementa el tipo de la variable var o bien en alguno de sus ancestros.
- ☐ c. Sólo si operacion es un método definido y accesible en un ancestro de la clase que implementa el tipo de la variable var.

**30. Dado el siguiente código, al instanciar un objeto de tipo B:**

```java
class A {
    int i;
}

class B extends A {
    int i;
    B() {
        super.i = 1;
    }
}
```

- ☐ a. Se tiene sólo un atributo `i`, con valor 0.
- ☐ b. Se tiene sólo un atributo `i`, con valor 1.
- ☑ c. Se tienen dos atributos `i`, uno con valor 0 y otro con valor 1.

**31. Una clase en Java que hereda un método abstracto y no lo implementa:**

- ☐ a. Puede ser concreta.
- ☐ b. Pasa a ser una interface.
- ☑ c. Pasa a ser abstracta.

**32. Dado el siguiente código, al instanciar un objeto de tipo B:**

```java
class A {
    int i;
}

class B extends A {
    int i;
    B() {
        i = 1;
    }
}
```

- ☐ a. Se tiene un atributo i, con valor 0.
- ☐ b. Se tiene un atributo i, con valor 1.
- ☑ c. Se tienen dos atributos i, uno con valor 0 y otro con valor 1.

**33. Cuando se ejecuta el constructor en Java:**

- ☐ a. Como los constructores se heredan, no es necesario indicar nada.
- ☑ b. Se realizan llamadas implícitas o explícitas a los constructores de los ancestros.
- ☐ c. Se inicializa el objeto, sin necesidad de reutilizar los constructores de los ancestros.

**34. El concepto de herencia está ligado al principio de:**

- ☑ a. Reutilizar clases, sin modificar las superclases.
- ☐ b. Tener que editar las superclases para poder habilitar la herencia.
- ☐ c. Copiar y pegar manualmente el código de las superclases en las subclases.
```