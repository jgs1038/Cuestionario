# Cuestionario de Diseño por Contrato MEPRO

**1. El diseño por contrato se basa en:**
- ☐ a. Incluir en el software documentación con la especificación.
- ☑ b. Incluir en el software con mecanismos para probar la especificación.
- ☐ c. Incluir en el software con código adicional imperativo que compruebe todo.

**2. Una aserción implica:**
- ☑ a. Entidades que cumplen una condición en ejecución.
- ☐ b. Entidades que cumplen una condición en la documentación.
- ☐ c. Entidades que cumplen una condición en compilación.

**3. En la metáfora del contrato, el empleado que va a la entrevista busca:**
- ☐ a. Trabajos con precondiciones débiles y postcondiciones fuertes.
- ☐ b. Trabajos con precondiciones débiles y postcondiciones débiles.
- ☑ c. Trabajos con precondiciones fuertes y postcondiciones débiles.

**4. Las postcondiciones implican al:**
- ☐ a. Cliente.
- ☐ b. Cliente y proveedor.
- ☑ c. Proveedor.

**5. En Java los asertos:**
- ☐ a. Son macros al igual que en C.
- ☐ b. Se implementan imperativamente con if-else.
- ☑ c. Son una palabra reservada del lenguaje.

**6. En los lenguajes de programación que no incluyen invariantes, estos se deberían añadir manualmente en:**
- ☐ a. Sólo en las precondiciones a los métodos.
- ☐ b. Sólo en las postcondiciones a los métodos.
- ☑ c. Pre y postcondiciones a los métodos.

**7. Dado el siguiente código Java:**
```java
int x = 10;
assert x < 10 : "Aserción no verificada con valor :" + x;
```
- ☐ a. Nunca se interrumpe la ejecución, porque se verifica el aserto.
- ☑ b. Se interrumpe la ejecución sólo si activamos los asertos.
- ☐ c. Se interrumpe la ejecución siempre.

**8. Para un método que permita extraer un elemento de una cola, la precondición más adecuada sería:**
- ☑ a. La cola no está vacía.
- ☐ b. La cola tiene 3 elementos.
- ☐ c. La cola está llena.

**9. En el diseño por contrato, una precondición en una rutina:**
- ☑ a. Debe ser justificable porque está documentada y es parte de la especificación.
- ☐ b. Debe ser justificable si se puede implementar en el lenguaje de programación utilizado.
- ☐ c. Se incluye aunque no esté documentada ni sea parte de la especificación.

**10. La documentación de Oracle en cuanto al diseño por contrato en Java sugiere que:**
- ☐ a. Se use programación defensiva en todas las salidas a los métodos.
- ☐ b. No se incluyan asertos como postcondiciones.
- ☑ c. Se usen asertos en la salida de los métodos.

**11. El diseño por contrato parte de la idea de que...**
- ☐ a. Comprobaciones redundantes son de obligada inclusión.
- ☑ b. Comprobaciones redundantes pueden incluir nuevos errores.
- ☐ c. Comprobaciones redundantes nunca hacen daño.

**12. Los invariantes se deben verificar:**
- ☐ a. Durante algunos momentos observables de la vida del objeto.
- ☐ b. Durante todos los momentos de la vida del objeto.
- ☑ c. Durante todos los momentos observables de la vida del objeto.

**13. Para la comunicación entre rutinas con diseño por contrato:**
- ☑ a. Usamos pre y postcondiciones en clientes y proveedores.
- ☐ b. Usamos programación defensiva en los clientes y proveedores.
- ☐ c. Usamos programación defensiva en los clientes y postcondiciones en los proveedores.

**14. Las precondiciones implican al:**
- ☑ a. Cliente.
- ☐ b. Proveedor.
- ☐ c. Cliente y proveedor.

**15. En los constructores, los invariantes se deben verificar:**
- ☑ a. A la finalización.
- ☐ b. Al inicio.
- ☐ c. Al inicio y finalización.

**16. En la metáfora del contrato, el empresario que contrata busca:**
- ☐ a. Trabajos con precondiciones fuertes y postcondiciones fuertes.
- ☐ b. Trabajos con precondiciones fuertes y postcondiciones débiles.
- ☑ c. Trabajos con precondiciones débiles y postcondiciones fuertes.

**17. El diseño por contrato prefiere:**
- ☑ a. Realizar las comprobaciones mínimas y necesarias.
- ☐ b. Realizar todas las comprobaciones necesarias, incluso redundantes.
- ☐ c. No realizar comprobaciones delegando en la fiabilidad de los lenguajes estáticamente tipados.

**18. En una tripleta incompleta de Hoare como la siguiente, sería correcto especificar como postcondición:**
```hoare
{x > 0} x = x + 1
```
- ☐ a. {x < 1}
- ☑ b. {x > 1}
- ☐ c. {x = 1}

**19. Un método en Java que devuelve un valor booleano debe:**
- ☑ a. Tener un modificador accesible para los clientes de la rutina si se incluye como precondición.
- ☐ b. Tener un modificador privado para los clientes de la rutina si se incluye como precondición.
- ☐ c. Tener un modificador accesible para los clientes de la rutina si se incluye como postcondición.

**20. La documentación de Oracle en cuanto al diseño por contrato en Java sugiere que:**
- ☐ a. Se use programación defensiva en toda las entradas a los métodos.
- ☐ b. Se use programación defensiva a la finalización de la ejecución de todos los métodos.
- ☑ c. Se use programación defensiva en la entrada de todos los métodos públicos y asertos en los métodos no públicos.
