# Cuestionario de Programacion Defensiva MEPRO

**1. La instrucción en Java para lanzar excepciones de manera imperativa es:**
- ☐ a. catch
- ☑ b. throw
- ☐ c. throws

**2. A la hora de ordenar los bloques catch con sus excepciones:**
- ☐ a. Se ordenan de más a menos generales.
- ☑ b. Se ordenan de menos a más generales.
- ☐ c. No hay restricciones.

**3. ¿Cuál de los siguientes elementos NO es una palabra clave en el manejo de excepciones en el lenguaje Java?**
- ☐ a. try
- ☐ b. throws
- ☑ c. Throwable

**4. El lanzamiento de una excepción no comprobable...**
- ☐ a. Nunca tenemos que preocuparnos como programadores de este tipo de excepciones.
- ☑ b. Suele indicar un error de lógica de programación y sugiere corregir el código.
- ☐ c. Se puede recuperar siempre el programa en tiempo de ejecución.

**5. El mecanismo de encadenamiento de excepciones se basa en:**
- ☑ a. Instanciar nuevas excepciones pasando en el constructor la instancia de la excepción previa.
- ☐ b. Instanciar nuevas excepciones pasando en el constructor la cadena de texto descriptiva.
- ☐ c. Instanciar nuevas excepciones pasando en el constructor una lista de excepciones.

**6. Al reintentar...**
- ☑ a. Se debe intentar cambiar las condiciones iniciales que llevaron a la excepción.
- ☐ b. Se deben repetir los reintentos de manera indefinida hasta resolver el problema.
- ☐ c. Nunca es posible que finalice en pánico organizado.

**7. Un fracaso es el resultado de una excepción...**
- ☑ a. Pero no toda excepción lleva al fracaso.
- ☐ b. Pero toda excepción lleva al fracaso.
- ☐ c. Y la rutina finaliza en un estado de éxito.

**8. La programación defensiva se basa en el lema:**
- ☐ a. "Defiéndete de todo aunque sea redundante"
- ☑ b. "Es mejor comprobar demasiado que demasiado poco."
- ☐ c. "Bajo ninguna circunstancia debe el cuerpo de la rutina verificar el cumplimiento de la precondición de la rutina"

**9. En la cima de la jerarquía de herencia de excepciones en Java está...**
- ☐ a. Exception
- ☐ b. RuntimeException
- ☑ c. Throwable

**10. En una cláusula throws estamos obligados a:**
- ☐ a. No hay ninguna obligación a la hora de incluir las excepciones en dicha cláusula.
- ☑ b. Añadir todas las excepciones capturables que se pueden lanzar en el método y no son atrapadas en el mismo.
- ☐ c. Añadir todas las excepciones NO capturables que se pueden lanzar en el método y no son atrapadas en el mismo.

**11. Las excepciones comprobables creadas por el programador deben heredar de:**
- ☑ a. Exception
- ☐ b. RuntimeException
- ☐ c. Throwable

**12. Un bloque finally se ejecuta:**
- ☐ a. Sólo cuando ha saltado alguna excepción.
- ☐ b. Sólo cuando ha finalizado con éxito el bloque try.
- ☑ c. Siempre.

**13. En la declaración del bloque catch se puede:**
- ☑ a. Atrapar un tipo excepción.
- ☐ b. Atrapar una cadena de texto con la descripción del error.
- ☐ c. Atrapar un error de ejecución con código numérico.

**14. En Java las excepciones van asociadas a condiciones anómalas en:**
- ☐ a. Tiempo de compilación.
- ☐ b. Tiempo de compilación y ejecución.
- ☑ c. Tiempo de ejecución.

**15. En Java la política de reintentos:**
- ☐ a. No se puede realizar puesto que no hay palabras reservadas en el lenguaje para ello.
- ☑ b. Se puede simular con try-catch y bucles.
- ☐ c. Se implementa con las instrucciones retry-on.

**16. ¿Cuál de las siguientes acciones es fuente de excepciones?**
- ☐ a. Invocar a una propiedad sobre una referencia distinta de nulo
- ☑ b. Invocar a una rutina que a su vez falla.
- ☐ c. Invocar a un método que no incumple aserciones.

**17. Al utilizar los bloques catch y finally asociados a un bloque try...**
- ☑ a. Podemos usar tantos bloques catch como queramos y sólo un bloque finally.
- ☐ b. Podemos usar tantos bloques catch y finally como queramos.
- ☐ c. Podemos usar un bloque catch y tantos bloques finally como queramos.

**18. De estas tres aproximaciones en el tratamiento de excepciones ¿cuál es la menos peligrosa?**
- ☑ a. Salvaje
- ☐ b. Burocrática.
- ☐ c. Despreocupada.

**19. ¿Cuál de las siguientes acciones es fuente de excepciones?**
- ☐ a. Invocar a métodos estáticos desde un método de instancia.
- ☑ b. Invocar a una propiedad sobre una referencia nula.
- ☐ c. Invocar a un método privado en la misma clase.

**20. El pánico organizado en muchas ocasiones finalizará en forma similar a...**
- ☐ a. Una aproximación despreocupada.
- ☐ b. Una aproximación burocrática.
- ☑ c. Una aproximación salvaje.