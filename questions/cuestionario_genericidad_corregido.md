# Cuestionario de Genericidad en Java - Corregido

**1. ¿Por qué al leer de `List<? super String>` solo podemos asignar el resultado a `Object`?**

- ☐ a. Porque `super` indica que la lista solo acepta `Object`.
- ☐ b. Porque el erasure convierte automáticamente todos los supertipos en `Object`.
- ☑ c. Porque no se sabe el supertipo concreto (podría ser `Object`, `Serializable`, `CharSequence` como ancestros de `String`.)

---

**2. Dada la declaración `List<? super Integer>`, ¿qué operación es segura?**

- ☑ a. Añadir objetos de tipo `Integer` o sus subtipos.
- ☐ b. Leer elementos con garantía de ser de tipo `Integer`.
- ☐ c. Tanto leer como escribir cualquier tipo `Number` (siendo `Integer` descendiente de `Number`).

---

**3. Las variables de tipo o parámetros formales no pueden usarse para:**

- ☐ a. Declarar atributos de instancia.
- ☑ b. Declarar atributos estáticos.
- ☐ c. Declarar variables de un método.

---

**4. Los tipos paramétricos se implementan:**

- ☐ a. Con clases abstractas.
- ☐ b. Con herencia de clases.
- ☑ c. Con clases genéricas.

---

**5. Un tipo paramétrico con parámetro formal el tipo desconocido, como `List<?>`...**

- ☐ a. Permite leer objetos de cualquier tipo.
- ☑ b. Permite leer objetos que serán de tipo Object.
- ☐ c. No permite leer elementos.

---

**6. Para un tipo T generado a partir de una clase genérica, las propiedades de T son...**

- ☐ a. Aquellas definidas en la clase base de alguno de sus parámetros actuales.
- ☐ b. La clase formada por la suma de la clase base y de las clases de los argumentos formales.
- ☑ c. Aquellas definidas en su clase base a partir de la derivación genérica.

---

**7. La genericidad restringida permite:**

- ☐ a. Acceder a las propiedades del tipo acotación.
- ☐ b. Acceder a las propiedades del tipo acotación y sus subtipos.
- ☑ c. Acceder a las propiedades del tipo acotación y sus supertipos.

---

**8. Al recuperar un elemento de una colección genérica declarada de tipo `ArrayList<String>`, ¿qué operación realiza implícitamente el compilador?**

- ☐ a. Ninguna conversión, ya que el tipo genérico se preserva en tiempo de ejecución.
- ☑ b. Un downcast de `Object` a `String` insertando un molde (o cast) en el bytecode.
- ☐ c. Un upcast de `String` a `Object` para mayor seguridad en tiempo de ejecución.

---

**9. Una clase genérica se construye...**

- ☑ a. Declarando una variable de tipo denominada parámetro formal.
- ☐ b. Declarando una variable en un método como argumento formal.
- ☐ c. Declarando un atributo del tipo que se quiere utilizar.

---

**10. Un tipo paramétrico se corresponde con:**

- ☐ a. Con varias implementaciones diferentes.
- ☐ b. Un único tipo.
- ☑ c. Una plantilla de tipos.

---

**11. Un tipo paramétrico con parámetro formal el tipo desconocido, como `List<?>`...**

- ☑ a. Permite guardar cualquier tipo de objeto.
- ☐ b. Sólo permite guardar descendientes de List.
- ☐ c. No permite guardar elementos pero sí leerlos.

---

**12. En Java, podemos decir que el tipo `List<String>` respecto al tipo `List<Object>` es:**

- ☐ a. Un subtipo.
- ☑ b. No hay relación de subtipado.
- ☐ c. Un supertipo.

---

**13. En genericidad un módulo se corresponde con:**

- ☑ a. 1 clase genérica y N tipos
- ☐ b. 1 clase genérica y 1 tipo
- ☐ c. N clases genéricas y M tipos

---

**14. En genericidad en Java se permiten:**

- ☑ a. Clases y métodos genéricos.
- ☐ b. Sólo métodos genéricos.
- ☐ c. Sólo clases genéricas.

---

**15. En Java hasta la versión 5, se simulaba la genericidad con:**

- ☐ a. Sobrecarga de clases.
- ☐ b. Mecanismos de *upcast*.
- ☑ c. Polimorfismo de inclusión y herencia.

---

**16. ¿Qué ocurre con la información de tipos genéricos en tiempo de ejecución debido al erasure?**

- ☑ a. Se sustituye por `Object` y se pierde la información del tipo concreto
- ☐ b. Se convierte en anotaciones especiales que pueden consultarse en tiempo de ejecución.
- ☐ c. Se mantiene completamente disponible para reflexión y validación.

---

**17. La genericidad tiene sentido:**

- ☑ a. En lenguajes estáticamente tipados.
- ☐ b. En lenguajes estática y dinámicamente tipados.
- ☐ c. En lenguajes dinámicamente tipados.

---

**18. Una clase genérica A en Java tendrá una declaración similar a:**

- ☐ a. class A.E
- ☑ b. class A<E>
- ☐ c. class A[E]

---

**19. Sin tipos parametricos se utilizaba...**

- ☐ a. Herencia.
- ☑ b. "Copiar y pegar" implementaciones entre clases.
- ☐ c. Relaciones de cliente y proveedor entre clases.

---

**20. Cuando se tiene `new A<E>()` se dice que:**

- ☐ a. Se tiene una derivación genérica.
- ☑ b. Se tiene una instanciación genérica.
- ☐ c. Se tiene una declaración genérica.

---

**21. El tipo ? representa:**

- ☑ a. Cualquier tipo que se quiera dar como sustitución.
- ☐ b. Un tipo concreto y único que se puede dar como sustitución.
- ☐ c. No define realmente ningún tipo sino que se usa sólo como operador.

---

**22. Sobre una entidad de tipo genérico NO se puede:**

- ☐ a. Comparar con otra entidad del mismo tipo.
- ☐ b. Asignar su valor a otra entidad del mismo tipo.
- ☑ c. Invocar a propiedades diferentes a las heredadas de la clase Object.

---

**23. El tipo desconocido y la genericidad restringida...**

- ☐ a. Sólo admite la acotación por el tipo Object.
- ☐ b. No se pueden utilizar combinados.
- ☑ c. Se pueden combinar.

---

**24. En genericidad restringida en Java se admite:**

- ☐ a. Acotar por varias clases y varias interfaces.
- ☑ b. Acotar por una clase y varias interfaces.
- ☐ c. Acotar por varias clases y una interfaz.

---

**25. Cuando se tiene `A<E> var;` se dice que:**

- ☐ a. Se tiene una declaración genérica.
- ☐ b. Se tiene una instanciación genérica.
- ☑ c. Se tiene una derivación genérica.
