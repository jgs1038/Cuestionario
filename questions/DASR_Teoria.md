# Preguntas de Administración de Sistemas Operativos

## 1. En cuanto al arranque y parada del sistema

### Pregunta 1.1

**Apartado: 1. En cuanto al arranque y parada del sistema**

**En cuanto al arranque y parada del sistema...**

- [x] a. El programa cargador (master boot program o boot program) está en los primeros sectores del disco y con un tamaño prefijado.
- [ ] b. El programa cargador (Master Boot Record o Volume Boot Record) está en los primeros sectores del disco y con un tamaño prefijado.
- [ ] c. El Master Boot Record o Volume Boot Record es el programa de arranque del sistema encargado de cargar el núcleo.
- [ ] d. El Master Boot Record o Volume Boot Record es el encargado de cargar el núcleo.
- [ ] e. El master boot program o boot program (no el programa cargador) está en los primeros sectores del disco.

**✓ Solución: a)**

---

### Pregunta 1.2

**Apartado: 1. En cuanto al arranque y parada del sistema**


- [ ] a. El iniciador de la ROM (situado en la ROM) puede soportar varios S.O. independientemente del programa cargador que se encuentre en los primeros sectores del disco.
- [ ] b. El único kernel posible es el fichero /boot/vmlinuz-version.
- [x] c. Ninguna de las otras respuestas es correcta.
- [ ] d. El iniciador de la ROM (/boot/vmlinuz-version) puede soportar varios S.O. siempre que el programa cargador sea cargado desde los primeros sectores del disco duro.
- [ ] e. El iniciador de la ROM (/boot/vmlinuz-version) y el S.O. tienen un acuerdo sobre el programa cargador (ubicación, dirección de arranque y tamaño). De esta manera el iniciador puede soportar varios S.O.

**✓ Solución: c)**

---

### Pregunta 1.3

**Apartado: 1. En cuanto al arranque y parada del sistema**


- [ ] a. Para que el núcleo no tenga un tamaño muy grande, la mayoría de las opciones se programan en código máquina y se compilan de tal forma que el kernel resultante pueda ejecutarse en memoria por completo y de la forma más rápida.
- [ ] b. Para que el núcleo no tenga un tamaño muy grande, la mayoría de las opciones se compilan como módulos, que se cargarán al terminar de arrancar el kernel. Por ello, en el arranque el núcleo necesitará cargar todos sus módulos para poder iniciar el sistema.
- [x] c. Para que el núcleo no tenga un tamaño muy grande, la mayoría de las opciones se compilan como módulos, que se cargarán cuando se necesiten. Por ello, en el arranque el núcleo necesitará cargar algunos módulos para poder iniciar el sistema.
- [ ] d. Ninguna de las otras respuestas son correctas.
- [ ] e. Para que el núcleo no tenga un tamaño muy grande, en el arranque el núcleo necesitará cargar todos los módulos de forma separada para poder introducir estos módulos en particiones independientes de memoria que tendrán su apoyo de memoria en el área de swap.

**✓ Solución: c)**

---

### Pregunta 1.4

**Apartado: 1. En cuanto al arranque y parada del sistema**


- [ ] a. El cargador del sistema realiza una comprobación del hardware del sistema, carga el kernel, carga el initrd (sistema de ficheros temporal inicial – RAM - /boot/initrd-version.img) y le pasa el control, el initrd carga los módulos necesarios y le devuelve el control al núcleo, crea el proceso Init (PID 1) y le pasa el control.
- [ ] b. Ninguna de las otras respuestas son correctas.
- [x] c. El kernel realiza una comprobación del hardware del sistema, se prepara a sí mismo para ejecutar el sistema inicializando sus tablas internas, creando las estructuras de datos necesarias, etc., carga inicialmente el initrd (sistema de ficheros temporal inicial – RAM - /boot/initrd-version.img) y le pasa el control, el initrd carga los módulos necesarios y le devuelve el control al núcleo, crea el proceso Init (PID 1) y le pasa el control.
- [ ] d. El kernel inicializa sus tablas internas, crea las estructuras de datos necesarias, etc., arranca el proceso inicial Init y le pasa el control, carga los módulos necesarios y devuelve el control al núcleo.
- [ ] e. El cargador del sistema realiza una comprobación del hardware del sistema, se prepara a sí mismo para ejecutar el sistema cargando el kernel, carga el initrd (sistema de ficheros temporal inicial – RAM - /boot/initrd-version.img) y le pasa el control, el initrd carga los módulos necesarios y le devuelve el control al núcleo, crea el proceso Init (PID 1) y le pasa el control.

**✓ Solución: c)**

---

### Pregunta 1.5

**Apartado: 1. En cuanto al arranque y parada del sistema**


- [x] a. El iniciador ROM es un programa en la ROM que comprueba el sistema desde el punto de vista hardware, almacena en memoria el programa cargador del S.O. y pasa el control al cargador del S.O., saltando a la dirección de memoria donde lo ha almacenado.
- [ ] b. El iniciador ROM (/boot/grub/grub.conf, LILO - /etc/lilo.conf, BootMagic (parte de Norton PartitionMagic)...) es un programa en la ROM que comprueba el sistema desde el punto de vista hardware, almacena en memoria el programa cargador del S.O. y pasa el control al cargador del S.O., saltando a la dirección de memoria donde lo ha almacenado.
- [ ] c. El iniciador ROM es un programa en la ROM que comprueba el sistema desde el punto de vista hardware y almacena en memoria el kernel del sistema al que pasa el control.
- [ ] d. El iniciador ROM es un programa en la ROM que comprueba el sistema desde el punto de vista hardware, almacena en memoria el master boot program o boot program el programa (no el cargador del S.O.) y almacena en memoria el kernel del sistema al que pasa el control.
- [ ] e. El iniciador ROM (/boot/grub/grub.conf, LILO - /etc/lilo.conf, BootMagic (parte de Norton PartitionMagic)...) es un programa en la ROM que comprueba el sistema desde el punto de vista hardware, almacena en memoria el programa cargador del S.O. y almacena en memoria el kernel del sistema al que pasa el control.

**✓ Solución: a)**

---

## 2. En cuanto a los servicios de red en el sistema operativo linux

### Pregunta 2.1

**Apartado: 2. En cuanto a los servicios de red en el sistema operativo linux**


- [ ] a. "httpd" permite el acceso al Servidor Web.
- [ ] b. "sshd" permite que al ordenador se pueda acceder con la orden ssh, que habilita una conexión de telnet y ftp segura.
- [ ] c. "smbd" proporciona el servicio de compartición de ficheros con clientes Samba.
- [ ] d. "in.telnetd", "in.fingerd", "ipop3d", "in.rlogind", "in.talkd" permitirán el acceso a los servicios de acceso vía telnet (no seguro), de información, de correo, de acceso vía rlogin a comandos en la máquina remota y al envío de mensajes.
- [x] e. Todas las otras opciones son correctas.

**✓ Solución: e)**

---

### Pregunta 2.2

**Apartado: 2. En cuanto a los servicios de red en el sistema operativo linux**


- [ ] a. "named" será el servicio encargado del servidor de Domain Name System (sólo es necesario si el ordenador hace de DNS)
- [ ] b. "ntpd" será el servicio encargado de sincronizar la hora del sistema
- [x] c. Todas las otras respuestas son correctas.
- [ ] d. "sendmail" será el encargado del correo electrónico
- [ ] e. El fichero "/etc/init.d/network", "/etc/rc.d/init.d/network" o cualquier otra opción de localización será el script que activa la red en tiempo de arranque.

**✓ Solución: c)**

---

### Pregunta 2.3

**Apartado: 2. En cuanto a los servicios de red en el sistema operativo linux**


- [ ] a. "named" será el servicio encargado del servidor de Domain Name System, siempre en ejecución en todas las máquinas Linux para que funcione correctamente ya que arranca los demonios usados por el sistema y que están a la escucha de las llamadas al sistema por parte del usuario.
- [ ] b. "sendmail" será el encargado del correo electrónico en todas las distribuciones linux
- [ ] c. El fichero "network" será el script que reactivará la red cuando se realiza cualquier tipo de modificación de su configuración.
- [ ] d. "ntpd" será el servicio encargado de sincronizar la hora del sistema y debe estar presente en todas las distribuciones para el correcto funcionamiento de servicios como el correo electrónico, el servidor de nombre, etc. De no ser así, los datos compartidos a través de los diferentes servicios no tendrían una marca de tiempo aceptable (ctime, atime, agidtime, etc.) por lo que no funcionaría correctamente por fallo de sincronización).
- [x] e. Ninguna de las otras opciones es correcta.

**✓ Solución: e)**

---

### Pregunta 2.4

**Apartado: 2. En cuanto a los servicios de red en el sistema operativo linux**


- [ ] a. Algunas opciones correspondientes a xinetd.conf incluyen... El máximo número de peticiones que xinetd puede manejar simultáneamente. Las entradas de registro al archivo /var/log/secure. Registrar si la conexión tiene éxito. log_on_failure. cps. includedir /etc/xinetd.d/
- [x] b. Todas las otras respuestas son correctas.
- [ ] c. Algunas opciones correspondientes a xinetd.conf incluyen... El máximo número de peticiones que xinetd puede manejar simultáneamente. log_type. log_on_success. No permitir más allá de un máximo de conexiones por segundo a cualquier servicio dado. Y las opciones declaradas en los archivos de configuración específicos del servicio, localizados en el directorio /etc/xinetd.d/.
- [ ] d. Algunas opciones correspondientes a xinetd.conf incluyen... El máximo número de peticiones que xinetd puede manejar simultáneamente. log_type. log_on_success. log_on_failure. cps. includedir /etc/xinetd.d/
- [ ] e. Algunas opciones correspondientes a xinetd.conf incluyen... El máximo número de peticiones que xinetd puede manejar simultáneamente. Las entradas de registro al archivo /var/log/secure. Registrar si la conexión tiene éxito. No permitir más allá de un máximo de conexiones por segundo a cualquier servicio dado. Y las opciones declaradas en los archivos de configuración específicos del servicio, localizados en el directorio /etc/xinetd.d/.

**✓ Solución: b)**

---

### Pregunta 2.5

**Apartado: 2. En cuanto a los servicios de red en el sistema operativo linux**


- [ ] a. "networkd" y no "named" será el servicio encargado del servidor de Domain Name System, siempre en ejecución en todas las máquinas linux. Y nunca estará presente en las máquinas clientes de este servicio.
- [ ] b. "sendmail" no existe como servicio en las distribuciones linux ya que es un servicio postal en USA.
- [ ] c. Ninguna de las otras opciones es correcta.
- [x] d. "ntpd" será el servicio encargado de sincronizar la hora del sistema y no tiene por qué estar presente en todas las máquinas para el correcto funcionamiento de servicios como el correo electrónico, el servidor de nombre, etc., dado que el hecho de mantener la hora exacta sólo tendría cierto sentido en el servidor, y mucho menos en los clientes de tales servicios.
- [ ] e. El fichero "networkd" será el script que reactivará la red cuando se realiza cualquier tipo de modificación de su configuración

**✓ Solución: d)**

---

### Pregunta 2.6

**Apartado: 2. En cuanto a los servicios de red en el sistema operativo linux**


- [ ] a. Todas las otras respuestas son falsas.
- [ ] b. Los diferentes procesos correspondientes a los servicios de red son ejecutados por xinetd según el fichero de configuración /etc/xinet.conf.
- [ ] c. Los diferentes procesos correspondientes a los servicios de red son ejecutados por xinet según el fichero de configuración /etc/xinet.conf.
- [x] d. Los diferentes demonios correspondientes a los servicios de red son lanzados a través del proceso xinetd.
- [ ] e. Los diferentes demonios correspondientes a los servicios de red son lanzados a través del demonio xinet

**✓ Solución: d)**

---

### Pregunta 2.7

**Apartado: 2. En cuanto a los servicios de red en el sistema operativo linux**


- [ ] a. "sshd" permite que al ordenador se pueda acceder con la orden ssh, que habilita una conexión de telnet y ftp segura. Para ello se realizará el arranque del demonio "telnetd" o "ftpd" dependiendo del servicio deseado.
- [ ] b. "httpd" permite el acceso al Servidor Web. Este servicio se utilizará en paralelo con "sshd", servicio que será usado por "http" para el acceso seguro al sistema.
- [ ] c. "smbd" proporciona el servicio de compartición de ficheros con clientes Samba/NFS. Será necesario determinar el tipo de cliente para adecuar la configuración en cada caso. Como ambos servicios son incompatibles sólo uno de ellos podría estar en funcionamiento en cada momento.
- [x] d. Ninguna de las otras respuestas es correcta.
- [ ] e. "in.telnetd", "in.fingerd", "ipop3d", "in.rlogind", "in.talkd" permitirán el acceso a los servicios de acceso vía telnet (no seguro), de información, de correo, de acceso vía rlogin a comandos en la máquina remota y al envío de mensajes. "in.telnetd" será necesario cuando se utiliza "sshd" como servicio de comunicación. "in.fingerd" sólo será necesario que funcione en caso de utilizar DNS para la recopilación de los datos de las diferentes máquinas. "ipop3d" se utiliza en "sendmail" como demonio básico para el envío y recepción de correos. E "in.rlogind" e "in.talkd" se utilizan para la autenticación y envío de mensajes unix a unix o usuario de unix a usuario de unix.

**✓ Solución: d)**

---

### Pregunta 2.8

**Apartado: 2. En cuanto a los servicios de red en el sistema operativo linux**


- [x] a. Los diferentes servicios de red son lanzados a través de procesos como el representado por el comando "/etc/init.d/http start" para el servidor web.
- [ ] b. Los diferentes procesos de red son lanzados a través de procesos ejecutados desde el fichero /etc/init.d/xinetd.conf restart.
- [ ] c. Los diferentes servicios de red son lanzados a través de procesos ejecutados desde el fichero /etc/init.d/xinetd.conf restart.
- [ ] d. Los diferentes procesos de red son lanzados a través del arranque del proceso init pero en ningún caso mediante procesos ejecutados desde el fichero /etc/init.d/xinetd restart.
- [ ] e. Todas las otras respuestas son falsas.

**✓ Solución: a)**

---

## 3. En cuanto a las caídas del sistema operativo linux

### Pregunta 3.1

**Apartado: 3. En cuanto a las caídas del sistema operativo linux**


- [x] a. Las caídas no ordenadas del sistema pueden deberse a fallos irrecuperables de hardware, problemas de Input/Output, problemas con alguno de los sistemas de ficheros del sistema, etc.
- [ ] b. Ninguna de las otras respuestas es correcta.
- [ ] c. En caso de no poder rearrancar el sistema en modo multiusuario hay que indicar que se monte como partición raíz una distinta mediante "root=particion" en el arranque de GRUB.
- [ ] d. Siempre que se rearranque el sistema hay que mirar los mensajes en /var/log/messages (logs con prioridad info, notice o warn), /var/log/kern.log (logs del kernel, generados por klogd), /var/log/auth.log (su, intentos fallidos, ...), /var/log/dmesg (mensajes del kernel producidos en el arranque) para comprobar la ocurrencia de los errores producidos y sus causas.
- [ ] e. Para poder interpretar los mensajes incluidos en los ficheros de log del sistema hay que utilizar alguna de las aplicaciones estándar del sistema linux: Ksystemlog, GNOME-System-Log, Xlogmaster, Xwatch.

**✓ Solución: a)**

---

### Pregunta 3.2

**Apartado: 3. En cuanto a las caídas del sistema operativo linux**


- [ ] a. Las caídas no ordenadas del sistema pueden deberse a la imposibilidad de realizar la escritura en disco en alguna de las particiones aunque estas no pertenezcan a ninguno de los sistemas de ficheros del sistema, si estas particiones contienen errores en la configuración del sistema.
- [ ] b. Las caídas no ordenadas del sistema pueden deberse a la imposibilidad de realizar la escritura en disco en alguna de las particiones aunque estas no pertenezcan a ninguno de los sistemas de ficheros del sistema.
- [x] c. Las caídas no ordenadas del sistema pueden deberse a fallos irrecuperables de hardware, problemas de Input/Output, problemas con alguno de los sistemas de ficheros del sistema, etc.
- [ ] d. Las caídas no ordenadas del sistema pueden deberse a la imposibilidad de realizar la escritura en los sistemas de ficheros del sistema.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: c)**

---

## 4. En cuanto a la parada de linux

### Pregunta 4.1

**Apartado: 4. En cuanto a la parada de linux**


- [ ] a. A la hora de cerrar el sistema, si este se encuentra en modo multiusuario, se puede ejecutar la orden reboot para hacer un cierre lógico del sistema.
- [ ] b. A la hora de cerrar el sistema, si este se encuentra en modo monousuario, se puede ejecutar la orden haltsys para hacer un cierre lógico del sistema.
- [ ] c. A la hora de cerrar el sistema, si este se encuentra en modo multiusuario, se puede ejecutar la orden "telinit nivel" para hacer un cierre lógico del sistema.
- [x] d. Todas las otras opciones son correctas.
- [ ] e. A la hora de cerrar el sistema, si este se encuentra en modo multiusuario, se puede ejecutar la orden shutdown para hacer un cierre lógico del sistema.

**✓ Solución: d)**

---

### Pregunta 4.2

**Apartado: 4. En cuanto a la parada de linux**


- [ ] a. Los script en /etc/rcn.d o /etc/rc.d/rcn.d (dependerá de las distribuciones) se ejecutarán por parte del proceso kernel según un modelo no basado en eventos.
- [x] b. Todos los script, llamados rc* en /etc/rc.d o /etc (dependerá de las distribuciones), son ejecutados por el Init mediante un modelo síncrono no basado en eventos.
- [ ] c. La parada se realizará de forma ordenada y tiene como finalidad dejar el sistema operativo en un estado consistente. Para ello
- [ ] d. Los script, llamados rc* en /etc/rc.d o /etc (dependerá de las distribuciones) del modelo basado en eventos serán ejecutados por parte del kernel.
- [ ] e. Ninguna de las otras opciones es correcta.

**✓ Solución: b)**

---

### Pregunta 4.3

**Apartado: 4. En cuanto a la parada de linux**


- [ ] a. La orden shutdown a ejecutar será obligatoriamente con la opción -c.
- [ ] b. La orden shutdown a ejecutar será obligatoriamente con la opción -k.
- [x] c. Ninguna de las otras opciones es correcta.
- [ ] d. La orden shutdown a ejecutar será obligatoriamente con la opción -r.
- [ ] e. La orden shutdown a ejecutar será obligatoriamente con la opción -h.

**✓ Solución: c)**

---

### Pregunta 4.4

**Apartado: 4. En cuanto a la parada de linux**


- [ ] a. A la hora de terminar con los procesos del sistema, se debe notificar la próxima finalización de tales procesos antes de enviar la orden de apagado.
- [ ] b. Ninguna de las otras opciones es correcta.
- [x] c. A la hora de terminar con los procesos del sistema, se envía la señal de terminación (TERM) a los procesos en ejecución, se paran los demonios y se envía la señal de fin (KILL) a los procesos que queden en ejecución.
- [ ] d. A la hora de terminar con los procesos del sistema, y dependiendo de la orden shutdown ejecutada, se puede invertir el orden de finalización realizando el envío de la señal de terminación (KILL) a los procesos en ejecución, y el envío de la señal de fin (TERM) a los procesos que queden en ejecución o enviando primero la señal de parada de resolución de peticiones de servicios para con los usuarios para posteriormente realizar la terminación (KILL) de los procesos en ejecución.
- [ ] e. A la hora de terminar con los procesos del sistema, antes de enviar la señal de terminación (TERM) a los procesos en ejecución, se debe actualizar todo elemento modificado y pendiente de salvar en el disco.

**✓ Solución: c)**

---

## 5. En cuanto a los sistemas de ficheros tipo Linux

### Pregunta 5.1

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


**Si el sistema de ficheros raíz se quedase sin espacio (al 100% ocupado) el sistema tendría problemas para funcionar normalmente, por ejemplo no podría arrancar. ¿Por qué?**

- [ ] a. No es cierto porque los ficheros se generarán de forma temporal en la memoria RAM y en todo caso en el área de swap por lo que el sistema seguiría funcionando sin problemas.
- [x] b. Porque ni siquiera se podrían generar ficheros temporales en el sistema de ficheros.
- [ ] c. Porque al generarse un nuevo fichero de área de swap en el disco, no tendrá espacio suficiente como para generar este fichero. En este caso tanto el arranque como el funcionamiento normal del sistema se verán afectados.
- [ ] d. No es cierto porque en el arranque no se genera ninguna estructura nueva. En todo caso, a la hora de utilizar algún servicio se producirán nuevos datos que luego serán escritos en el disco cuando el proceso así lo determine, momento en el que sí podrá tener problemas de escritura, si se pretende ocupar una cantidad mayor de espacio en disco.
- [ ] e. Ninguna de las otras opciones es correcta.

**✓ Solución: b)**

---

### Pregunta 5.2

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


- [x] a. Las caídas no ordenadas del sistema pueden deberse a fallos irrecuperables de hardware, problemas de Input/Output, problemas con alguno de los sistemas de ficheros del sistema, etc.
- [ ] b. Ninguna de las otras respuestas es correcta.
- [ ] c. En caso de no poder rearrancar el sistema en modo multiusuario hay que indicar que se monte como partición raíz una distinta mediante "root=particion" en el arranque de GRUB.
- [ ] d. Siempre que se rearranque el sistema hay que mirar los mensajes en /var/log/messages (logs con prioridad info, notice o warn), /var/log/kern.log (logs del kernel, generados por klogd), /var/log/auth.log (su, intentos fallidos, ...), /var/log/dmesg (mensajes del kernel producidos en el arranque) para comprobar la ocurrencia de los errores producidos y sus causas.
- [ ] e. Para poder interpretar los mensajes incluidos en los ficheros de log del sistema hay que utilizar alguna de las aplicaciones estándar del sistema linux: Ksystemlog, GNOME-System-Log, Xlogmaster, Xwatch.

**✓ Solución: a)**

---

### Pregunta 5.3

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


- [ ] a. Cuando un sistema de ficheros está dañado se debe realizar un chequeo del mismo. Para ello, se parará el sistema porque al arrancar el propio sistema determinará que se ha producido un error por lo que iniciará el chequeo correspondiente.
- [ ] b. Cuando un sistema de ficheros de red (como puede ser el tipo NFS) está dañado se debe realizar un chequeo del mismo. Para ello, se parará el sistema de forma ordenada, y al arrancar en un modo con red, y por tanto antes de que sea montado desde nuestro sistema, se hará el correspondiente chequeo del mismo a través de una aplicación como fsck.
- [ ] c. Ninguna de las otras respuestas es correcta.
- [x] d. Cuando un sistema de ficheros está dañado se debe realizar un chequeo del mismo. Si es el sistema de fichero raíz, se debe arrancar en monousuario para realizar el chequeo a través de una aplicación como fsck. Y si es otro sistema de ficheros cualquiera, se debe echar a los usuarios del sistema, realizar una parada de los servicios de cara a los usuarios, anular la red y realizar el mismo tipo de chequeo.
- [ ] e. Cuando un sistema de ficheros está dañado se debe realizar un chequeo del mismo. Para ello, se realizará una parada ordenada del sistema para ser reiniciado en modo monousuario y chequear este sistema.

**✓ Solución: d)**

---

### Pregunta 5.4

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


- [ ] a. Ninguna de las otras respuestas es correcta.
- [ ] b. Cuando un sistema de ficheros está dañado se ejecuta una aplicación para el chequeo y resolución de posibles problemas. Estas herramientas chequean la consistencia del sistema de ficheros, detecta problemas e intenta repararlos. Para ello actúa sobre el contenido de los ficheros, pero no sobre su estructura detectando bloques que pertenecen a varios ficheros, bloques marcados como libres pero que están en uso, bloques marcados como usados pero que están libres, inconsistencia del nº de enlaces, nodos-i marcados como ocupados pero libres, etc.
- [ ] c. Cuando un sistema de ficheros está dañado se ejecuta una aplicación para el chequeo y resolución de posibles problemas. Estas herramientas chequean la consistencia del sistema de ficheros, detecta problemas e intenta repararlos. Para ello actúa sobre su estructura, pero no sobre el contenido de los ficheros leyendo y copiando los ficheros asociados al sistema de ficheros para determinar su estado.
- [x] d. Cuando un sistema de ficheros está dañado se ejecuta una aplicación para el chequeo y resolución de posibles problemas. Estas herramientas chequean la consistencia del sistema de ficheros, detecta problemas e intenta repararlos. Para ello actúa sobre su estructura, pero no sobre el contenido de los ficheros detectando bloques que pertenecen a varios ficheros, bloques marcados como libres pero que están en uso, bloques marcados como usados pero que están libres, inconsistencia del nº de enlaces, nodos-i marcados como ocupados pero libres, etc.
- [ ] e. Cuando un sistema de ficheros está dañado se ejecuta una aplicación para el chequeo y resolución de posibles problemas. Estas herramientas chequean la consistencia del sistema de ficheros, detecta problemas e intenta repararlos. Para ello actúa sobre el contenido de los ficheros, pero no sobre su estructura leyendo y copiando los ficheros asociados al sistema de ficheros para determinar su estado.

**✓ Solución: d)**

---

### Pregunta 5.5

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


**La diferencia fundamental entre tar, cpio, dump y dd a la hora de hacer copias de seguridad es que tar agrupa ficheros y comprime, cpio (similar a tar y creado para ser usado con cintas) permite copiar ficheros en o desde el árbol de directorio o archivo cpio, o bien copiar estructuras completas de directorios en unidades extraíbles, dump lee el sistema de archivos directamente y no a través del propio sistema de archivos y dd permite hacer copias exactas de particiones completas lo que le permite copiar una partición para la que Linux carece de controladores del sistema de archivos.**

- [ ] a. Ninguna de las otras respuestas es correcta
- [ ] b. No es cierto dado que la diferencia fundamental entre tar, cpio, dump y dd es sobre todo temporal dado que dependen del grado de madurez tecnológico de cada comando.
- [ ] c. No es cierto dado que los controladores se refieren a dispositivos y por tanto sobre las particiones o sobre discos, pero no sobre los sistemas de ficheros.
- [x] d. La propuesta es cierta.
- [ ] e. No es cierto dado que cpio y dump son prácticamente similares por ser dump una evolución de cpio. De hecho ambas pueden ser recuperados mediante el mismo comando restore, comando que incorpora en su última versión la compatibilidad necesaria como para que se puedan recuperar las copias con cpio.

**✓ Solución: d)**

---

### Pregunta 5.6

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


**En cuanto al control y gestión de la actividad de los recursos del sistema operativo linux (CPU, memoria, ...)
El comando df puede mostrar información sobre la capacidad de almacenamiento de cada uno de los sistemas de ficheros del sistema que hayan sido montados.
Y la información visualizada será la relacionada con el sistema de fichero a detallar, el número de bloques de 1k de cada sistema de ficheros, cuántos estén usados, cuántos disponibles, el porcentaje de bloques usados respecto al total y el directorio de montaje.**

- [ ] a. Ninguna de las otras respuestas es correcta.
- [ ] b. No es cierto dado que el comando df en ningún caso mostrará información sobre la capacidad de almacenamiento de los sistemas de ficheros del sistema que hayan sido montados sino de los nodos incluidos dentro de cada sistema de ficheros.
- [ ] c. El comando df puede mostrar información sobre la capacidad de almacenamiento de los sistemas de ficheros, como el número de bloques de 1k de cada sistema de ficheros, cuántos estén usados, cuántos disponibles, el porcentaje de bloques usados respecto al total y el directorio de montaje, ya que es información que suministrará el comando du.
- [x] d. La definición propuesta es correcta.
- [ ] e. No es cierto dado que el comando df no sólo mostrará información sobre la capacidad de almacenamiento de los sistemas de ficheros del sistema que hayan sido montados sino también de aquellos definidos en /etc/fstab que no hayan sido montados tanto de forma manual como de forma automática, por ejemplo, en el arranque del sistema.

**✓ Solución: d)**

---

### Pregunta 5.7

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


**Si el sistema de ficheros raíz se quedase sin nodos-i libres tendría problemas de funcionamiento. ¿Por qué?**

- [x] a. Porque ni siquiera se podrían generar ficheros temporales en el sistema de ficheros, ni tan siquiera en el arranque, ficheros que aún siendo temporales también generan el correspondiente i-nodo.
- [ ] b. No es cierto porque los ficheros se generarán de forma temporal en la memoria RAM y en todo caso en el área de swap por lo que el sistema seguirá funcionando sin problemas dado que los i-nodos sólo se generan al intentar guardarlos de forma permanente en el disco.
- [ ] c. Ninguna de las otras opciones es correcta.
- [ ] d. No es cierto porque el número de i-nodos no tiene límite y en todo caso tampoco es un dato de cada sistema de ficheros sino de la totalidad del sistema.
- [ ] e. No es cierto porque el sistema generará ficheros dependientes del proceso por lo que les asociará el mismo i-nodo que al proceso padre, luego no tendría por qué tener problemas de número de i-nodos.

**✓ Solución: a)**

---

### Pregunta 5.8

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


- [ ] a. La diferencia fundamental entre los sistemas de ficheros de tipo Ext2, Ext3 y Ext4 es que Ext2, Ext3 y Ext4 tienen el mismo formato pero Ext3 incluye extensiones para llevar un registro de los bloques de un fichero lo que resulta útil en grandes ficheros y sistemas de ficheros. Y además Ext4 incorpora journaling para poder recuperar rápidamente la consistencia tras una caída del sistema).
- [ ] b. La diferencia fundamental entre los sistemas de ficheros de tipo Ext2, Ext3 y Ext4 es que Ext2, Ext3 y Ext4 tienen el mismo formato pero se adaptan a las nuevas tecnologías y por tanto mejoran las velocidades, tipos de drivers, tamaño de la palabra, manejan tamaños de ficheros mayores y permiten el arranque desde cualquier partición situada en cualquier disco al permitir un direccionamiento con mayor número de bits. En ningún caso permite una herramienta de defragmentación online ya que es una operación a bajo nivel no permitida con el sistema operativo arrancado a nivel 6.
- [ ] c. La diferencia fundamental entre los sistemas de ficheros de tipo Ext2, Ext3 y Ext4 es que Ext3 tiene el mismo formato que Ext2 y es transaccional (Añade un registro o journal que permite recuperar rápidamente la consistencia tras una caída del sistema) y que Ext4 añade la posibilidad de utilizar RAID5 con lo que se define como un sistema a prueba de fallos.
- [x] d. La diferencia fundamental entre los sistemas de ficheros de tipo Ext2, Ext3 y Ext4 es que Ext3 tiene el mismo formato que Ext2 y es transaccional (Añade un registro o journal que permite recuperar rápidamente la consistencia tras una caída del sistema) y que Ext4 tiene un formato similar a Ext3 pero además Ext4 incluye extensiones para llevar un registro de los bloques de un fichero, se retrasa en la reserva de bloques de disco hasta escribir en él (mayor número de bloques contiguos en disco), implementa una herramienta de desfragmentación online (e4defrag) para evitar la fragmentación y permite el manejo de sistema de ficheros y ficheros de mayor tamaño.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: d)**

---

### Pregunta 5.9

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


**Las diferencias fundamentales entre los modelos RAID* es que RAID0 divide la información en diferentes discos, RAID1 copia lo mismo (toda la información) en dos discos espejos, RAID4 divide la información en varios discos y su paridad la introduce en un disco más y RAID5 es similar a RAID4 pero con la paridad de cada unidad de información introducida en un disco diferente para equilibrar retrasos de tiempos de igual forma entre todos los discos.**

- [ ] a. No es cierto dado que hasta RAID1 se añade journaling a los discos y por tanto no tiene por qué ser duplicada la información y la recuperación es automática. De hecho se consideran sistemas a prueba de fallos.
- [ ] b. No es cierto dado que RAID0 no tiene ninguna aportación al ser la situación más básica.
- [x] c. La frase propuesta es cierta.
- [ ] d. La afirmación es cierta pero RAID5 añade journaling a los discos y por tanto añade un nivel más de seguridad al permitir su recuperación automática de forma desatendida. De hecho se consideran sistemas a prueba de fallos.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: c)**

---

### Pregunta 5.10

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


**En cuanto al servicio de red NFS en el sistema operativo linux...
El fichero "/usr/sbin/showmount" muestra información en un servidor NFS según se ejecuten las siguientes opciones:
• -a - lista los nombres de los clientes y los directorios montados
• -d - listado de los directorios montados
• -e - muestra la lista de los directorios exportados**

- [ ] a. Todas las otras respuestas son incorrectas.
- [x] b. Sin opciones, este comando muestra los clientes que han montado Sistemas de Ficheros desde el sistema local en el que se ejecuta.
- [ ] c. El fichero "/usr/sbin/showmount" ejecuta no sólo las opciones descritas sino además "-v" (verbose), -u (unmount), -l (listado de los Sistemas de Ficheros definidos en /etc/fstab que se definen vía NFS, pero que no están montados en el momento de ejecutar), entre otros.
- [ ] d. El fichero "/usr/sbin/showmount" no existe. De hecho ninguno de los ficheros relacionados con NFS en su configuración o para mostrar datos contienen "mount" en sus nombres.
- [ ] e. El fichero "/usr/sbin/showmount" no está directamente relacionado con NFS ya que muestra todos los Sistemas de Ficheros montados en el sistema. De hecho lo que ejecuta en realidad es "mount" sin opciones.

**✓ Solución: b)**

---

### Pregunta 5.11

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


- [ ] a. El directorio /sbin contiene los archivos ejecutables accesibles sólo por los usuarios, /usr contiene los archivos correspondientes a los programas y utilidades generales de los usuarios, /bin contiene los archivos ejecutables sólo accesibles por el administrador.
- [ ] b. El directorio /tmp contiene gran parte de los temporales del sistema necesarios para el funcionamiento de muchos de los programas soportados por el sistema operativo, /media contiene los subdirectorios donde tradicionalmente se montarán los diferentes dispositivos extraíbles, /bin contiene los archivos ejecutables accesibles sólo por el administrador.
- [x] c. El directorio /tmp contiene gran parte de los temporales del sistema necesarios para el funcionamiento de muchos de los programas soportados por el sistema operativo, /mnt contiene los subdirectorios donde tradicionalmente se montarán los diferentes dispositivos extraíbles, /media contiene los subdirectorios donde se montarán los diferentes dispositivos extraíbles en las distribuciones más actuales, /proc será un directorio virtual donde se tendrá acceso a los dispositivos no accesibles a través de los ficheros contenidos en /dev, ".." será el directorio padre de aquel en el que nos encontremos y "." el directorio actual.
- [ ] d. El directorio /tmp contiene gran parte de los temporales del sistema necesarios para el funcionamiento de muchos de los programas soportados por el sistema operativo, /mnt contiene los subdirectorios donde se montarán los diferentes dispositivos extraíbles en las distribuciones más actuales, /dev será un directorio donde se tendrá acceso a los dispositivos no accesibles a través de los ficheros contenidos en /proc, /usr contiene los archivos ejecutables accesibles sólo por el administrador.
- [ ] e. Ninguna de las otras opciones es correcta.

**✓ Solución: c)**

---

### Pregunta 5.12

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


**En los sistemas de ficheros se permite la definición de cuotas de disco (limitar el nº de bloques y/o ficheros que un usuario/grupo puede usar por partición) y para ello, si se quiere fijar esta opción en las máquinas en explotación, se definen los límites, se parametriza en el fichero /etc/fstab añadiendo a las opciones la nueva opción usrquota, se remonta el sistema de ficheros y se ejecuta la activación de las cuotas a través de "quotaon -a". Además se deben asignar cuotas a los usuarios.**

- [ ] a. No es cierto dado que basta con activar el servicio de cuotas para que se incluya en el fichero /etc/fstab de forma automática.
- [ ] b. No es cierto dado que no se deben asignar cuotas a los usuarios dado que el sistema inicializa las cuotas para todos los usuarios, salvo el root, al reiniciar el sistema.
- [ ] c. No es cierto dado que la definición de cuotas para el usuario se hace desde los ficheros /etc/shadow y /etc/gshadow.
- [ ] d. Ninguna de las otras respuestas es correcta.
- [x] e. La frase propuesta es cierta.

**✓ Solución: e)**

---

### Pregunta 5.13

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


**En los sistemas de ficheros se permite la definición de cuotas de disco (limitar el nº de bloques y/o ficheros que un usuario/grupo puede usar por partición) y para ello se definen dos límites. El límite hard que no puede ser superado por el usuario de ninguna forma y si lo hace ya no podrá usar más bloques o crear más ficheros. Y el límite soft que se puede sobrepasar durante cierto tiempo, pero sin llegar al límite hard. Pasado ese tiempo es como si se hubiese superado el límite hard.**

- [ ] a. Ninguna de las otras respuestas es correcta.
- [ ] b. No es cierto dado que no se trata de poner límites en función de los bloques sino exclusivamente de ficheros e i-nodos.
- [ ] c. No es cierto dado que no se trata de poner límites en función de los bloques sino exclusivamente de ficheros e i-nodos y para ello se define límite máximo de ficheros que podrá ser superado sólo durante un tiempo o período de gracia en el que el usuario es avisado de su estado y de que tiene que liberar espacio.
- [ ] d. En los sistemas de ficheros se permite la definición de cuotas de disco (limitar el nº de bloques y/o ficheros que un usuario/grupo puede usar por partición) y para ello se define límite máximo que podrá ser superado sólo durante un tiempo o período de gracia en el que el usuario es avisado de su estado y de que tiene que liberar espacio.
- [x] e. La frase propuesta es cierta.

**✓ Solución: e)**

---

### Pregunta 5.14

**Apartado: 5. En cuanto a los sistemas de ficheros tipo Linux**


- [ ] a. Los script, llamados rc* en /etc/rc.d o /etc (dependerá de las distribuciones) del modelo basado en eventos serán ejecutados por parte del kernel.
- [x] b. Todos los script, llamados rc* en /etc/rc.d o /etc (dependerá de las distribuciones), son ejecutados por el Init mediante un modelo síncrono no basado en eventos.
- [ ] c. Algunos de los script, llamados rc* en /etc/rc.d o /etc (dependerá de las distribuciones), son ejecutados por Init mediante un modelo basado en eventos.
- [ ] d. Ninguna de las otras opciones es correcta.
- [ ] e. Los script en /etc/rcn.d o /etc/rc.d/rcn.d (dependerá de las distribuciones) se ejecutarán por parte del proceso kernel según un modelo no basado en eventos.

**✓ Solución: b)**

---

## 6. En cuanto a las generaciones los Sistemas Operativos

### Pregunta 6.1

**Apartado: 6. En cuanto a las generaciones los Sistemas Operativos**


- [ ] a. Dentro de esta quinta generación de computadoras se desarrolló un proyecto lanzado por Japón a finales de los 70: FGCS (Fifth Generation Computer Systems). Su objetivo era el desarrollo de una clase de computadoras que utilizarían técnicas de inteligencia artificial al nivel del lenguaje de máquina (lenguaje PROLOG) y serían capaces de resolver problemas complejos, como la traducción automática de una lengua natural a otra. No se obtuvo tal resultado.
- [ ] b. En la quinta generación, desde los 90, los ordenadores están basados en la utilización masiva de VLSI, inteligencia artificial y sistemas expertos, procesamiento paralelo (basado en arquitectura paralela), sistemas operativos en red, simulación y creación de lenguajes de programación cercanos al lenguaje natural (PROLOG).
- [x] c. Todas las otras respuestas son correctas.
- [ ] d. En la cuarta generación, desde mediados de los 70, los sistemas operativos son orientados a usuarios (interfaces gráficas, ratón, Internet como conexión global, multimedia, microinformática, ...).
- [ ] e. En la quinta generación, desde los 90, se realiza un esfuerzo en la estandarización a través de un modelo abierto (OSI, POSIX, X Windows, X/Open, ...), y en la compatibilidad de los dispositivos.

**✓ Solución: c)**

---

### Pregunta 6.2

**Apartado: 6. En cuanto a las generaciones los Sistemas Operativos**


- [x] a. En la tercera generación los ordenadores se diseñaron como sistemas para uso general y algunos de ellos soportaban modos múltiples de forma simultánea (procesos por lotes, tiempo compartido, procesamiento de tiempo real y multiprocesamiento).
- [ ] b. En la tercera generación los ordenadores se diseñaron como sistemas para uso específico y algunos de ellos soportaban modos múltiples de forma simultánea. El uso general sólo apareció en los años 80 con la generalización del uso de ordenadores con la familia x86 y ya dentro de la cuarta generación.
- [ ] c. En la tercera generación los ordenadores se diseñaron como sistemas para uso general y algunos de ellos soportaban modos múltiples de forma simultánea (procesos por lotes, tiempo compartido y multiprocesamiento). Pero no se diseñaron en tiempo real ya que este modo de trabajo será de cuarta generación.
- [ ] d. Ninguna de las otras respuestas es correcta.
- [ ] e. En la tercera generación apareció el procesamiento en tiempo real pero los sistemas se diseñaron para poder trabajar sólo en alguno de los modos hasta entonces creados (procesamiento por lotes, tiempo compartido, multiprocesamiento y procesamiento en tiempo real) ya que el modelo de modos múltiples simultáneos apareció en la cuarta generación.

**✓ Solución: a)**

---

### Pregunta 6.3

**Apartado: 6. En cuanto a las generaciones los Sistemas Operativos**


- [ ] a. Los ordenadores tienen componentes hardware (discos, memoria, fuente de alimentación, ...) y software (sistemas operativos y aplicaciones de usuario).
- [ ] b. La red puede ser sólo de área local o conectarse con el resto del mundo a través de Internet.
- [x] c. Todas las otras respuestas son correctas.
- [ ] d. Los principales elementos de un sistema en red son los usuarios, los ordenadores y el hardware de red (routers, switches, cables, ...).
- [ ] e. Los principales elementos de un sistema en red son los usuarios, los ordenadores y el hardware de red. Los ordenadores tienen componentes hardware y software. Y la red puede ser sólo de área local o conectarse con el resto del mundo a través de Internet.

**✓ Solución: c)**

---

### Pregunta 6.4

**Apartado: 6. En cuanto a las generaciones los Sistemas Operativos**


- [x] a. Todas las otras respuestas son correctas.
- [ ] b. Dentro de esta quinta generación de computadoras se desarrolló un proyecto lanzado por Japón a finales de los 70: FGCS (Fifth Generation Computer Systems). Su objetivo era el desarrollo de una clase de computadoras que utilizarían técnicas de inteligencia artificial al nivel del lenguaje de máquina (lenguaje PROLOG) y serían capaces de resolver problemas complejos, como la traducción automática de una lengua natural a otra. No se obtuvo tal resultado.
- [ ] c. En la cuarta generación, desde mediados de los 70, los sistemas operativos son orientados a usuarios (interfaces gráficas, ratón, Internet como conexión global, multimedia, microinformática, ...).
- [ ] d. En la quinta generación, desde los 90, se realiza un esfuerzo en la estandarización a través de un modelo abierto (OSI, POSIX, X Windows, X/Open, ...), y en la compatibilidad de los dispositivos.
- [ ] e. En la quinta generación, desde los 90, los ordenadores están basados en la utilización masiva de VLSI, inteligencia artificial y sistemas expertos, procesamiento paralelo (basado en arquitectura paralela), sistemas operativos en red, simulación y creación de lenguajes de programación cercanos al lenguaje natural (PROLOG).

**✓ Solución: a)**

---

### Pregunta 6.5

**Apartado: 6. En cuanto a las generaciones los Sistemas Operativos**


- [x] a. Todas las otras respuestas son correctas.
- [ ] b. En la primera generación se diseñaron para facilitar la transición entre trabajos evitando pérdidas de tiempo entre trabajos mediante procesamiento por lotes.
- [ ] c. En la primera generación las tarjetas perforadas sustituyeron a los tableros con conexiones modificables a mano para introducir los programas en lenguaje máquina y los datos.
- [ ] d. La primera generación coincidió con la introducción del transistor en detrimento de las válvulas.
- [ ] e. En la primera generación el trabajo en ejecución tenía el control de la máquina y al terminar cada trabajo, el control era devuelto al sistema operativo, que iniciaba el trabajo siguiente.

**✓ Solución: a)**

---

### Pregunta 6.6

**Apartado: 6. En cuanto a las generaciones los Sistemas Operativos**


- [ ] a. En la segunda generación se desarrollaron los sistemas compartidos con multiprogramación (se utilizan varios procesadores en un solo sistema computacional).
- [ ] b. En la segunda generación se desarrollaron los sistemas compartidos con multiprocesamiento (varios programas de usuario al mismo tiempo en el almacenamiento principal y el procesador se cambia rápidamente de un trabajo a otro).
- [ ] c. Ninguna de las otras respuestas es correcta.
- [x] d. En la segunda generación se desarrollaron los sistemas compartidos con multiprogramación (varios programas de usuario al mismo tiempo en el almacenamiento principal y el procesador se cambia rápidamente de un trabajo a otro) y multiprocesamiento (se utilizan varios procesadores en un solo sistema computacional).
- [ ] e. En la segunda generación se desarrollaron los sistemas compartidos con multiprogramación (se utilizan varios procesadores en un solo sistema computacional) y multiprocesamiento (varios programas de usuario al mismo tiempo en el almacenamiento principal y el procesador se cambia rápidamente de un trabajo a otro).

**✓ Solución: d)**

---

### Pregunta 6.7

**Apartado: 6. En cuanto a las generaciones los Sistemas Operativos**


- [x] a. En la tercera generación los ordenadores se diseñaron como sistemas para uso general y algunos de ellos soportaban modos múltiples de forma simultánea (procesos por lotes, tiempo compartido, procesamiento de tiempo real y multiprocesamiento).
- [ ] b. En la tercera generación los ordenadores se diseñaron como sistemas para uso específico y algunos de ellos soportaban modos múltiples de forma simultánea. El uso general sólo apareció en los años 80 con la generalización del uso de ordenadores con la familia x86 y ya dentro de la cuarta generación.
- [ ] c. En la tercera generación los ordenadores se diseñaron como sistemas para uso general y algunos de ellos soportaban modos múltiples de forma simultánea (procesos por lotes, tiempo compartido y multiprocesamiento). Pero no se diseñaron en tiempo real ya que este modo de trabajo será de cuarta generación.
- [ ] d. Ninguna de las otras respuestas es correcta.
- [ ] e. En la tercera generación apareció el procesamiento en tiempo real pero los sistemas se diseñaron para poder trabajar sólo en alguno de los modos hasta entonces creados (procesamiento por lotes, tiempo compartido, multiprocesamiento y procesamiento en tiempo real) ya que el modelo de modos múltiples simultáneos apareció en la cuarta generación.

**✓ Solución: a)**

---

### Pregunta 6.8

**Apartado: 6. En cuanto a las generaciones los Sistemas Operativos**


- [x] a. Todas las otras respuestas son correctas.
- [ ] b. Dentro de esta quinta generación de computadoras se desarrolló un proyecto lanzado por Japón a finales de los 70: FGCS (Fifth Generation Computer Systems). Su objetivo era el desarrollo de una clase de computadoras que utilizarían técnicas de inteligencia artificial al nivel del lenguaje de máquina (lenguaje PROLOG) y serían capaces de resolver problemas complejos, como la traducción automática de una lengua natural a otra. No se obtuvo tal resultado.
- [ ] c. En la cuarta generación, desde mediados de los 70, los sistemas operativos son orientados a usuarios (interfaces gráficas, ratón, Internet como conexión global, multimedia, microinformática, ...).
- [ ] d. En la quinta generación, desde los 90, se realiza un esfuerzo en la estandarización a través de un modelo abierto (OSI, POSIX, X Windows, X/Open, ...), y en la compatibilidad de los dispositivos.
- [ ] e. En la quinta generación, desde los 90, los ordenadores están basados en la utilización masiva de VLSI, inteligencia artificial y sistemas expertos, procesamiento paralelo (basado en arquitectura paralela), sistemas operativos en red, simulación y creación de lenguajes de programación cercanos al lenguaje natural (PROLOG).

**✓ Solución: a)**

---

### Pregunta 6.9

**Apartado: 6. En cuanto a las generaciones los Sistemas Operativos**


- [x] a. Todas las otras respuestas son correctas.
- [ ] b. En la primera generación se diseñaron para facilitar la transición entre trabajos evitando pérdidas de tiempo entre trabajos mediante procesamiento por lotes.
- [ ] c. En la primera generación las tarjetas perforadas sustituyeron a los tableros con conexiones modificables a mano para introducir los programas en lenguaje máquina y los datos.
- [ ] d. La primera generación coincidió con la introducción del transistor en detrimento de las válvulas.
- [ ] e. En la primera generación el trabajo en ejecución tenía el control de la máquina y al terminar cada trabajo, el control era devuelto al sistema operativo, que iniciaba el trabajo siguiente.

**✓ Solución: a)**

---

### Pregunta 6.10

**Apartado: 6. En cuanto a las generaciones los Sistemas Operativos**


- [ ] a. En la cuarta generación, desde mediados de los 70, los ordenadores se diseñaron de forma que incluían redes de computadores, procesamiento en línea, sistemas de seguridad y sistemas de bases de datos. Las máquinas virtuales pertenecen a la quinta generación.
- [x] b. En la cuarta generación, desde mediados de los 70, los ordenadores se diseñaron de forma que incluían redes de computadores, procesamiento en línea, sistemas de seguridad, máquinas virtuales y sistemas de bases de datos.
- [ ] c. En la cuarta generación, desde mediados de los 70, los ordenadores se diseñaron de forma que incluían redes de computadores, sistemas de seguridad, máquinas virtuales y sistemas de bases de datos. El procesamiento en línea pertenece a la quinta generación.
- [ ] d. En la cuarta generación, desde mediados de los 70, los ordenadores se diseñaron de forma que incluían procesamiento en línea, sistemas de seguridad, máquinas virtuales y sistemas de bases de datos. Las redes de ordenadores pertenecen a la quinta generación.
- [ ] e. En la cuarta generación, desde mediados de los 70, los ordenadores se diseñaron de forma que incluían redes de computadores, procesamiento en línea, sistemas de seguridad y máquinas virtuales. El sistema de bases de datos pertenece a la quinta generación.

**✓ Solución: b)**

---

## 7. En cuanto al servicio de red SAMBA en el sistema operativo Linux

### Pregunta 7.1

**Apartado: 7. En cuanto al servicio de red SAMBA en el sistema operativo Linux**


**Contiene los paquetes:
"samba-common" con los archivos comunes de samba utilizados para clientes y servidores.
"smbclient", el cliente con comandos para acceder a los recursos compartidos.
"swat", una herramienta de administración de Samba vía web
"samba-doc", la documentación de Samba.
"smbfs", con los comandos para montar/desmontar unidades de red samba.
"winbind", el servicio que mostrará la información de los usuarios y servidores Windows**

- [x] a. Todas las otras respuestas son correctas.
- [ ] b. Algunos de los comandos del paquete "smbclient" son: findsmb, smbclient, smbget, smbtar, rpcclient, smbspool, smbtree, smbcacls, smbcquotas. Estos comandos son similares a los de otros servicios de manejo de ficheros entre equipos remotos como puede ser FTP.
- [ ] c. En esa estructura de paquetes faltaría el paquete "samba" como servidor de archivos/impresoras.
- [ ] d. Este servicio contará para su manejo con comandos propios de SAMBA y su manejo no será por tanto únicamente a través del uso de los comandos FTP para hacer una actualización fácil de FTP a SAMBA.
- [ ] e. Correcto.

**✓ Solución: a)**

---

### Pregunta 7.2

**Apartado: 7. En cuanto al servicio de red SAMBA en el sistema operativo Linux**


**Las secciones que se incluyen en el fichero de configuración "/etc/samba/smb.conf" determinan... [homes] [printers] cada nuevo elemento a exportar (los directorios personales, impresoras, sistemas de ficheros, ficheros,...), [print$] los controladores de impresión, [netlogon] los scripts de inicio de sesión, para almacenar archivos de Políticas de Grupo (NTConfig.POL), así como la localización de otras herramientas comunes que se puedan necesitar para el proceso de inicio de sesión, [profiles] los perfiles móviles o de escritorio de los usuarios, y [global] la parametrización general o parámetros globales del servicio, entre otros.**

- [ ] a. Las secciones no tienen nada que ver con los controladores de impresión.
- [ ] b. Las secciones no tienen nada que ver con los scripts de inicio de sesión o el almacenamiento de los archivos de Políticas de Grupo (NTConfig.POL).
- [ ] c. Las secciones no tienen nada que ver con la localización de herramientas comunes a necesitar para el proceso de inicio de sesión y mucho menos con el inicio de windows.
- [ ] d. Las secciones no tienen nada que ver con los perfiles de los usuarios o su escritorio.
- [x] e. Correcto. También hay otras posibilidades como puede ser un directorio temporal ([temp]).

**✓ Solución: e)**

---

## 8. En cuanto al servicio de red NIS en el sistema operativo Linux

### Pregunta 8.1

**Apartado: 8. En cuanto al servicio de red NIS en el sistema operativo Linux**


**Algunos de los comandos que se ejecutan sobre NIS son:
• yppasswd - Permite que los usuarios puedan cambiar su contraseña en el servidor NIS desde un cliente.
• ypchsh - Permite cambiar el shell del usuario en el servidor NIS.
• ypchfn - Cambia el campo gecos (General Information) del usuario en el servidor NIS.
• ypcat - Permite conocer el contenido de un mapa NIS. Por ejemplo, permite visualizar el fichero de passwords o los servidores disponibles.
• ypwhich - Devuelve el nombre del servidor NIS.**

- [ ] a. Efectivamente "ypchfn" permite cambiar el campo de Información del usuario en el servidor NIS pero debe ser realizado desde el propio servidor para evitar inconsistencias en el sistema, donde debe estar en ejecución el demonio "rpc.yppasswdd".
- [ ] b. Efectivamente "ypchsh" permite cambiar el shell del usuario en el servidor NIS pero debe ser realizado desde el propio servidor, donde debe estar en ejecución el demonio "rpc.yppasswdd".
- [ ] c. Efectivamente "yppasswd" permite que los usuarios puedan cambiar su contraseña en el servidor NIS pero debe ser realizado desde el propio servidor donde debe estar en ejecución el demonio "rpc.yppasswdd".
- [x] d. Es correcto.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: d)**

---

### Pregunta 8.2

**Apartado: 8. En cuanto al servicio de red NIS en el sistema operativo Linux**


- [x] a. Tras cada modificación de los datos se debe ejecutar el correspondiente comando "make" en el directorio de definición de NIS ("/etc/yp") para que la modificación se distribuya automáticamente al resto de máquinas.
- [ ] b. Ninguna de las otras respuestas es correcta.
- [ ] c. Todas las otras respuestas son incorrectas.
- [ ] d. Cuando se requiera la modificación de un dato en cualquiera de las bases de datos a exportar (/etc/hosts, /etc/passwd, ...) y para la correcta sincronización de los datos, este dato debe ser modificado en todos los ficheros de las diferentes máquinas. Sólo así y sea cual sea la máquina que resulte dañada podría usar como fuente a cualquier otra máquina para la recuperación de sus datos.
- [ ] e. Cada modificación de los datos se debe ejecutar en el correspondiente servidor central y dentro del directorio y ficheros correspondientes (/var/yp/etc/passwd, /var/yp/etc/hosts, ...) para que la modificación de los mapas sea efectiva. Sólo así se podrá realizar una recuperación de los datos al ser requerida desde cualquiera de los clientes del servicio.

**✓ Solución: a)**

---

### Pregunta 8.3

**Apartado: 8. En cuanto al servicio de red NIS en el sistema operativo Linux**


- [ ] a. El nombre de dominio se definirá únicamente en el fichero "/etc/yp.conf" con el formato: NISDOMAIN="aso_nis"
- [x] b. Ninguna de las otras respuestas es correcta.
- [ ] c. Los nombres de dominios a utilizar deben ser siempre en minúsculas (del tipo "inf.dasr.ubu.es") como lo son los nombres definidos mediante la estructura "nombre1.nombre2.nombre3..." en internet
- [ ] d. Utilizan nombres de dominios del tipo "inf.DASR.ubu.es"
- [ ] e. La autenticación de este servicio se hace a través de Kerberos dado que NIS carece de capacidad de autenticación por sí misma

**✓ Solución: b)**

---

### Pregunta 8.4

**Apartado: 8. En cuanto al servicio de red NIS en el sistema operativo Linux**


- [ ] a. Ninguna de las otras respuestas es correcta.
- [ ] b. Las bases de datos como SQLServer, Postgresql, etc, tienen que estar definidas en un único servidor de tipo cluster que contendrá además el servidor NIS para su correcta configuración.
- [ ] c. Las bases de datos estarán definidas en el directorio "/etc/yp" dado que todos los servicios en linux se configuran desde el directorio "/etc"
- [x] d. Las bases de datos estarán definidas en el directorio "/var/yp".
- [ ] e. Las bases de datos como SQLServer, Postgresql, etc, tienen que estar definidas en un único servidor de tipo Dominio (modelo de windows) que contendrá además el servidor NIS para su correcta configuración.

**✓ Solución: d)**

---

### Pregunta 8.5

**Apartado: 8. En cuanto al servicio de red NIS en el sistema operativo Linux**


- [x] a. Tras cada modificación de los datos se debe ejecutar el correspondiente comando "make" en el directorio de definición de NIS ("/etc/yp") para que la modificación se distribuya automáticamente al resto de máquinas.
- [ ] b. Ninguna de las otras respuestas es correcta.
- [ ] c. Todas las otras respuestas son incorrectas.
- [ ] d. Cuando se requiera la modificación de un dato en cualquiera de las bases de datos a exportar (/etc/hosts, /etc/passwd, ...) y para la correcta sincronización de los datos, este dato debe ser modificado en todos los ficheros de las diferentes máquinas. Sólo así y sea cual sea la máquina que resulte dañada podría usar como fuente a cualquier otra máquina para la recuperación de sus datos.
- [ ] e. Cada modificación de los datos se debe ejecutar en el correspondiente servidor central y dentro del directorio y ficheros correspondientes (/var/yp/etc/passwd, /var/yp/etc/hosts, ...) para que la modificación de los mapas sea efectiva. Sólo así se podrá realizar una recuperación de los datos al ser requerida desde cualquiera de los clientes del servicio.

**✓ Solución: a)**

---

### Pregunta 8.6

**Apartado: 8. En cuanto al servicio de red NIS en el sistema operativo Linux**


- [ ] a. El nombre de dominio se definirá únicamente en el fichero "/etc/yp.conf" con el formato: NISDOMAIN="aso_nis"
- [x] b. Ninguna de las otras respuestas es correcta.
- [ ] c. Los nombres de dominios a utilizar deben ser siempre en minúsculas (del tipo "inf.dasr.ubu.es") como lo son los nombres definidos mediante la estructura "nombre1.nombre2.nombre3..." en internet
- [ ] d. Utilizan nombres de dominios del tipo "inf.DASR.ubu.es"
- [ ] e. La autenticación de este servicio se hace a través de Kerberos dado que NIS carece de capacidad de autenticación por sí misma.

**✓ Solución: b)**

---

### Pregunta 8.7

**Apartado: 8. En cuanto al servicio de red NIS en el sistema operativo Linux**


- [ ] a. Ninguna de las otras respuestas es correcta.
- [ ] b. Las bases de datos como SQLServer, Postgresql, etc, tienen que estar definidas en un único servidor de tipo cluster que contendrá además el servidor NIS para su correcta configuración.
- [ ] c. Las bases de datos estarán definidas en el directorio "/etc/yp" dado que todos los servicios en linux se configuran desde el directorio "/etc"
- [x] d. Las bases de datos estarán definidas en el directorio "/var/yp".
- [ ] e. Las bases de datos como SQLServer, Postgresql, etc, tienen que estar definidas en un único servidor de tipo Dominio (modelo de windows) que contendrá además el servidor NIS para su correcta configuración.

**✓ Solución: d)**

---

## 9. En cuanto a la gestión de usuarios del sistema operativo Linux

### Pregunta 9.1

**Apartado: 9. En cuanto a la gestión de usuarios del sistema operativo Linux**


- [ ] a. Para crear los usuarios se puede ejecutar useradd o adduser que permitirán crear cuentas de usuario, o modificar cuentas ya existentes. Estos comandos permitirán toma los valores por defecto de /etc/default/useradd y de /home/login.defs
- [ ] b. Para crear los usuarios se deben ejecutar necesariamente useradd o adduser que permitirán crear cuentas de usuario, o modificar cuentas ya existentes.
- [ ] c. Para crear los usuarios se deben ejecutar necesariamente useradd o adduser que permitirán crear cuentas de usuario, o modificar cuentas ya existentes. Estos comandos permitirán toma los valores por defecto de /etc/default/useradd y de /etc/login.defs
- [ ] d. Ninguna de las otras respuestas es correcta.
- [x] e. Para crear los usuarios se puede ejecutar useradd o adduser que permitirán crear cuentas de usuario, o modificar cuentas ya existentes. Estos comandos permitirán tomar los valores por defecto de /etc/default/useradd y de /etc/login.defs

**✓ Solución: e)**

---

### Pregunta 9.2

**Apartado: 9. En cuanto a la gestión de usuarios del sistema operativo Linux**


- [ ] a. Si se quiere ejecutar una única aplicación como única opción posible para el usuario, se podrá incluir este ejecutable como última línea del fichero de definición de variables del usuario (/home/usuario/.* - dependiendo de la shell escogida) para que se ejecute cuando entre en el sistema y se salga del sistema al abandonar la aplicación.
- [x] b. Si se quiere ejecutar una única aplicación como única opción posible para el usuario, se podrá incluir este ejecutable como shell del usuario en el fichero /etc/passwd para que se ejecute cuando entre en el sistema y se salga del sistema al abandonar la aplicación.
- [ ] c. Ninguna de las otras respuestas es correcta.
- [ ] d. Si se quiere ejecutar una única aplicación como única opción posible para el usuario, se definirá que el owner del directorio HOME del usuario sea el root para que el usuario no pueda salir del directorio dado que no puede hacer un cambio de directorio sobre un directorio del que no es dueño ni tampoco pueda ejecutar otros comandos situados fuera de su directorio por igual razón. Sin embargo sí podrá ejecutar aplicaciones dentro de su directorio al seguir siendo owner del resto de ficheros regulares allí situados por lo que podrá ejecutar la aplicación en modo comando.
- [ ] e. Si se quiere ejecutar una única aplicación como única opción posible para el usuario, se podrá arrancar mediante "runlevel 4" para que se ejecute el modo de arranque de usuario para luego ejecutar la aplicación en modo comando.

**✓ Solución: b)**

---

### Pregunta 9.3

**Apartado: 9. En cuanto a la gestión de usuarios del sistema operativo Linux**


- [x] a. Algunos parámetros relacionados con los usuarios se definirán mediante comandos como chsh.
- [ ] b. Ninguna de las otras respuestas es correcta.
- [ ] c. Algunos parámetros relacionados con los usuarios se definirán mediante comandos como skel.
- [ ] d. Algunos parámetros relacionados con los usuarios se definirán mediante comandos como /sbin/nologin.
- [ ] e. Algunos parámetros relacionados con los usuarios se definirán mediante comandos como /bin/false

**✓ Solución: a)**

---

### Pregunta 9.4

**Apartado: 9. En cuanto a la gestión de usuarios del sistema operativo Linux**


- [ ] a. Si se quiere ejecutar una única aplicación como única opción posible para el usuario, se podrá arrancar mediante "runlevel 4" para que se ejecute el modo de arranque de usuario para luego ejecutar la aplicación en modo comando.
- [ ] b. Si se quiere ejecutar una única aplicación como única opción posible para el usuario, se podrá incluir este ejecutable como última línea del fichero de definición de variables del usuario (/home/usuario/.* - dependiendo de la shell escogida) para que se ejecute cuando entre en el sistema y se salga del sistema al abandonar la aplicación.
- [ ] c. Ninguna de las otras respuestas es correcta.
- [x] d. Si se quiere ejecutar una única aplicación como única opción posible para el usuario, se podrá incluir este ejecutable como shell del usuario en el fichero /etc/passwd para que se ejecute cuando entre en el sistema y se salga del sistema al abandonar la aplicación.
- [ ] e. Si se quiere ejecutar una única aplicación como única opción posible para el usuario, se definirá que el owner del directorio HOME del usuario sea el root para que el usuario no pueda salir del directorio dado que no puede hacer un cambio de directorio sobre un directorio del que no es dueño ni tampoco pueda ejecutar otros comandos situados fuera de su directorio por igual razón. Sin embargo sí podrá ejecutar aplicaciones dentro de su directorio al seguir siendo owner del resto de ficheros regulares allí situados por lo que podrá ejecutar la aplicación en modo comando.

**✓ Solución: d)**

---

### Pregunta 9.5

**Apartado: 9. En cuanto a la gestión de usuarios del sistema operativo Linux**


- [ ] a. Las restricciones de tiempo ejecutadas mediante el comando chage (changed, minlife, maxlife, warn, inactive, expired), dan como resultado que el fichero /etc/passwd contenga líneas como: pepe:Ep6mckrOlChF:10063:0:99999:7:::.
- [ ] b. Ninguna de las otras respuestas es correcta.
- [ ] c. Se definirán diferentes restricciones de tiempo: changed, minlife, maxlife, warn, inactive, expired (/etc/login.defs - valores por defecto). Estas restricciones se configuran mediante chage o passwd (Ex: chage -d -últ. día usuario - fecha del último cambio de password).
- [ ] d. Las restricciones de tiempo ejecutadas mediante el comando chage (changed, minlife, maxlife, warn, inactive, expired), dan como resultado que el fichero /etc/gshadow contenga líneas como: pepe:pepe:10063:0:99999:7:::.
- [x] e. Las restricciones de tiempo ejecutadas mediante el comando chage (changed, minlife, maxlife, warn, inactive, expired), dan como resultado que el fichero /etc/shadow contenga líneas como: pepe:pepe(enformatotexto):10063:0:99999:7:::.

**✓ Solución: e)**

---

### Pregunta 9.6

**Apartado: 9. En cuanto a la gestión de usuarios del sistema operativo Linux**


- [x] a. Los ficheros fundamentales involucrados para su configuración general son: /etc/passwd - /etc/shadow - /etc/group - /etc/gshadow, y los ficheros del directorio /etc/skel.
- [ ] b. Los ficheros fundamentales involucrados para su configuración general son: /etc/passwd - /etc/shadow - /etc/group - /etc/gshadow, y los ficheros situados en los directorios de cada uno de los usuarios con los que se define cada una de las variables del usuario (.bash_profile, .bashrc, ...).
- [ ] c. Ninguna de las otras respuestas es correcta.
- [ ] d. Los ficheros fundamentales involucrados para su configuración general son: /etc/passwd - /etc/shadow - /etc/group - /etc/gshadow, y los ficheros situados en el directorio /usr/sbin/vipw donde se encuentran los originales de los ficheros situados en los directorios de cada uno de los usuarios con los que se define cada una de las variables del usuario (.bash_profile, .bashrc, ...).
- [ ] e. Los ficheros fundamentales involucrados para su configuración general son: /etc/passwd - /etc/shadow - /etc/group - /etc/gshadow, y los ficheros situados en el directorio /usr/sbin/vipw donde se encuentran los originales de los ficheros situados en los directorios de cada uno de los usuarios con los que se define cada una de las variables del usuario (.bash_profile, .bashrc, ...).

**✓ Solución: a)**

---

## 10. En cuanto a la evolución de internet

### Pregunta 10.1

**Apartado: 10. En cuanto a la evolución de internet**


- [ ] a. Vint Cerf, fue el creador de IP (protocolo para la interconexión de redes de paquetes) junto con Robert Khan en 1974. El PC aparece a principios de los años 1980 de la mano de IBM. Ambos elementos resultaron ser fundamentales para la expansión exponencial de los ordenadores en Internet.
- [ ] b. Internet nació con la idea de no llegar jamás a alcanzar más de 128 ordenadores conectados.
- [x] c. Todas las otras respuestas son correctas.
- [ ] d. La primera red (ARPANET) apareció en 1969 en la Universidad de UCLA de la mano de la empresa BBN.
- [ ] e. La Universidad de Berkeley incluyó en su Sistema Operativo Unix, el protocolo TCP-IP desarrollado por la empresa BBN.

**✓ Solución: c)**

---

### Pregunta 10.2

**Apartado: 10. En cuanto a la evolución de internet**


- [x] a. TDT (Televisión Digital Terrestre) es un servicio de transmisión de imágenes en movimiento y su sonido asociado mediante codificación binaria a través de una red de repetidores terrestres por cuya infraestructura se permite el envío de datos y por tanto, implementarse el acceso a Internet.
- [ ] b. TDT (Televisión Digital Terrestre) en ningún caso permite el acceso a Internet puesto que la señal de televisión es continua a través del cable por lo que en ningún momento se permitirá el envío de otra información paralela.
- [ ] c. TDT (Televisión Digital para Todos) es un servicio de transmisión de imágenes en movimiento y su sonido asociado mediante codificación binaria a través de una red de repetidores terrestres por cuya infraestructura se permite el envío de datos y por tanto, implementarse el acceso a Internet.
- [ ] d. TDT (Televisión Digital para Todos) es un servicio de transmisión de imágenes en movimiento y su sonido asociado mediante codificación binaria a través de una red de repetidores terrestres por cuya infraestructura se permite el envío de datos y por tanto, implementarse el acceso a Internet. Como en otros casos en ningún caso se permite el envío de voz por el retraso que se produce en el envío de la información y su posible desorden en destino por el que la audición es inmediata y no permite el reenvío de la voz de forma ordenada una vez localizado el problema.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: a)**

---

### Pregunta 10.3

**Apartado: 10. En cuanto a la evolución de internet**


- [ ] a. SAT (Servicio Asíncrono de Telecomunicaciones) es un servicio de transmisión de televisión por el que se puede retransmitir desde un satélite de comunicaciones una señal de televisión emitida desde un punto de la Tierra, de forma que ésta pueda llegar a otras partes del planeta (... a grandes extensiones de terreno y distancias, independientemente de sus condiciones orográficas, por el continuo rebote de la señal en tierra y los diferentes satélites) y que por cuyos medios físicos también puede transmitirse datos y por tanto implementarse el acceso a Internet.
- [x] b. SAT (Televisión por Satélite) es un servicio de transmisión de televisión por el que se puede retransmitir desde un satélite de comunicaciones una señal de televisión emitida desde un punto de la Tierra, de forma que ésta pueda llegar a otras partes del planeta (... a grandes extensiones de terreno y distancias, independientemente de sus condiciones orográficas, por el continuo rebote de la señal en tierra y los diferentes satélites) y que por cuyos medios físicos también puede transmitirse datos y por tanto implementarse el acceso a Internet.
- [ ] c. SAT (Servicio Asíncrono de Telecomunicaciones) es un servicio de transmisión de televisión por el que se puede retransmitir datos y por tanto implementarse el acceso a Internet. Sin embargo no sirve para la transmisión de voz por el enorme retraso que se produce y la gran posibilidad de que se produzca cierto desorden en los envíos de datos. Evidentemente el sistema sabrá cómo reordenar los datos pero en el caso de la voz el desorden se reproducirá de inmediato como un fallo de voz.
- [ ] d. SAT (televisión por satélite) servirá para voz por el escaso tamaño a utilizar por las diferentes conversaciones dado el escaso tamaño de los datos por los espacios sin voz de una conversación pero no servirá para el envío de datos por el escaso ancho de banda que permite al exigir un exceso de control con acuses de recibo y tener estos un retraso tan grande.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: b)**

---

### Pregunta 10.4

**Apartado: 10. En cuanto a la evolución de internet**


- [x] a. PLC (Power Line Communications) es un servicio de transmisión de energía eléctrica y que por cuyos medios físicos también puede transmitirse datos y por tanto implementarse el acceso a Internet.
- [ ] b. PLC (Power Line Communications) es una computadora utilizada en la ingeniería automática o automatización informática, para automatizar procesos por lotes, tales como el control de las maquinas en líneas de montaje.
- [ ] c. Ninguna de las otras respuestas es correcta.
- [ ] d. PLC (Programmable Logic Controller) es una computadora utilizada en la ingeniería automática o automatización informática, para automatizar procesos por lotes, tales como el control de las maquinas en líneas de montaje.
- [ ] e. PLC (Programmable Logic Controller) es un servicio de transmisión de energía eléctrica y que por cuyos medios físicos también puede transmitirse datos y por tanto implementarse el acceso a Internet.

**✓ Solución: a)**

---

### Pregunta 10.5

**Apartado: 10. En cuanto a la evolución de internet**


- [ ] a. RTB es la Red de Telefonía Basada en paquetes o red analógica mientras que ISDN es la Red Digital de Servicios Integrados o red digital. Ambas están orientadas a la comunicación de datos pero no de voz.
- [ ] b. RTB es la Red de Telefonía Basada en paquetes o red analógica mientras que ISDN es la Red Digital de Servicios Integrados o red digital. Ambas están orientadas a la comunicación de voz pero no de datos.
- [ ] c. RTB es la Red de Telefonía Basada en paquetes o red analógica mientras que ISDN es la Red Digital de Servicios Integrados o red digital. El PC aparece a principios de los años 1980 de la mano de IBM. Ambos elementos resultaron ser fundamentales para la expansión exponencial de los ordenadores en Internet.
- [ ] d. RTB es la Red de Telefonía Basada en paquetes o red analógica mientras que ISDN es la Red Digital de Servicios Integrados o red digital. Ambas están orientadas a la comunicación tanto de voz como de datos.
- [x] e. RTB es la Red de Telefonía Conmutada o red analógica mientras que ISDN es la Red Digital de Servicios Integrados o red digital.

**✓ Solución: e)**

---

## 11. En cuanto a las estrategias a seguir por los administradores

### Pregunta 11.1

**Apartado: 11. En cuanto a las estrategias a seguir por los administradores**


- [ ] a. El administrador no tiene por qué planear cada acción en el desempeño de sus funciones.
- [ ] b. Todas las otras respuestas son correctas.
- [x] c. El administrador debe conocer cómo trabaja cada elemento y probarlo, planear cada acción, hacer que estas sean reversibles y siempre de forma incremental, probar el resultado de la acción realizada, ..., antes de pasarlo a explotación.
- [ ] d. El administrador puede realizar toda acción como un todo y no de forma incremental, para asegurar su escalabilidad.
- [ ] e. El administrador no tiene por qué conocer cómo trabaja cada elemento, y ni siquiera haberlo probado, para el correcto desempeño de sus funciones

**✓ Solución: c)**

---

### Pregunta 11.2

**Apartado: 11. En cuanto a las estrategias a seguir por los administradores**


- [ ] a. Ninguna de las otras respuestas es correcta.
- [ ] b. En unix no existe el grupo root sino que sólo existe como usuario. De hecho todos ellos se incluyen en un grupo "administrador" que figura en primer lugar en el fichero /etc/group.
- [x] c. En unix cualquier usuario puede realizar acciones como si se tratara de root siempre que sea definido en el grupo "sudoers" dentro del fichero /etc/group
- [ ] d. En unix, cada grupo puede estar compuesto por una serie de usuarios salvo el grupo root, que estará compuesto únicamente por el usuario root al tener que cumplir aún con mayor determinación las directrices de seguridad del sistema, según las cuales, se debe controlar la actividad de todos y cada uno de los usuarios del sistema. Por ello, más aún si se trata de cualquier usuario con privilegios dadas las capacidades que se le predefinen.
- [ ] e. En unix, el grupo root será el compuesto por todos los usuarios con privilegios de root del sistema

**✓ Solución: c)**

---

### Pregunta 11.3

**Apartado: 11. En cuanto a las estrategias a seguir por los administradores**


- [ ] a. En unix, el usuario root podrá tener un identificador de usuario menor o igual a 10.
- [ ] b. En unix, el usuario root tendrá un identificador de usuario menor que 1.
- [ ] c. Ninguna de las otras respuestas es correcta.
- [x] d. En unix, el usuario root podrá tener un identificador de usuario incluido en el rango de usuarios especiales y por tanto menor o igual a 100.
- [ ] e. En unix, el usuario root tendrá, como administrador principal, el identificador de usuario 1.

**✓ Solución: d)**

---

## 12. En cuanto a un usuario sin privilegios y la ejecución del comando sudo

### Pregunta 12.1

**Apartado: 12. En cuanto a un usuario sin privilegios y la ejecución del comando sudo**


- [ ] a. Las reglas contenidas en el fichero /etc/sudoers son del tipo: usuario host = comando1, comando2, ... comandoN
- [ ] b. El comando sudo permite la ejecución del comando solicitado sin necesidad de incorporar la contraseña en algunos casos siempre que el tiempo transcurrido entre los intentos sea menor que uno parametrizado por defecto.
- [x] c. Todas las otras respuestas son correctas.
- [ ] d. El fichero /etc/sudoers contendrá Alias (usuarios, comandos o equipos), Opciones y Reglas de Acceso (qué usuarios ejecutan qué comandos y bajo qué usuarios).
- [ ] e. Al ejecutar sudo se puede ejecutar comandos de otros usuarios que no sean el root a través de la opción -u.

**✓ Solución: c)**

---

### Pregunta 12.2

**Apartado: 12. En cuanto a un usuario sin privilegios y la ejecución del comando sudo**


- [ ] a. La opción -l (--login) hace que se mantengan todas las variables del usuario sin que se redefinan las variables con los datos del nuevo usuario.
- [x] b. No funcionará correctamente si no está o está dañado el fichero /etc/sudoers.
- [ ] c. La opción -c (--command) hace que se mantengan todas las variables del usuario sin que se redefinan las variables con los datos del nuevo usuario.
- [ ] d. Las opciones -m o -p hacen que se mantengan todas las variables del usuario sin que se redefinan las variables con los datos del nuevo usuario.
- [ ] e. La opción -s (--shell) hace que se mantengan todas las variables del usuario sin que se redefinan las variables con los datos del nuevo usuario.

**✓ Solución: b)**

---

### Pregunta 12.3

**Apartado: 12. En cuanto a un usuario sin privilegios y la ejecución del comando sudo**


- [ ] a. A través de la opción "-V" del comando sudo se podrá ver el listado de opciones parametrizadas por defecto para este comando.
- [ ] b. A través de la opción "-c" del editor por defecto de /etc/sudoers se comprueba si el fichero está bien configurado.
- [x] c. Todas las otras respuestas son correctas.
- [ ] d. A través de la opción "-f" del editor por defecto de sudo se determina un fichero alternativo al fichero /etc/sudoers.
- [ ] e. A través de la opción "-l" del comando sudo se podrá ver el listado de comandos que el usuario pueda ejecutar.

**✓ Solución: c)**

---

## 13. En cuanto a la MIB dentro de la gestión de red en el modelo SNMP

### Pregunta 13.1

**Apartado: 13. En cuanto a la MIB dentro de la gestión de red en el modelo SNMP**


- [ ] a. En el grupo "snmp" se proporciona información relativa a las estadísticas sobre paquetes SNMP enviados y recibidos pero nada tiene que ver con los errores en la sintaxis ASN.1.
- [ ] b. Todas la otras respuestas son correctas.
- [ ] c. En el grupo "snmp" se proporciona información relativa a las estadísticas sobre paquetes SNMP enviados y recibidos, errores a través de las TRAPs... pero nada tiene que ver con los errores en la sintaxis ASN.1.
- [x] d. En el grupo "snmp" se proporciona información relativa a las estadísticas sobre paquetes SNMP enviados y recibidos, número de GETs, SETs y errores a través de las TRAPs... pero nada tiene que ver con los errores en la sintaxis ASN.1.
- [ ] e. En el grupo "snmp" se proporciona información relativa a las estadísticas sobre paquetes SNMP enviados y recibidos, errores en la sintaxis ASN.1, número de GETs, SETs y TRAPs...

**✓ Solución: d)**

---

### Pregunta 13.2

**Apartado: 13. En cuanto a la MIB dentro de la gestión de red en el modelo SNMP**


- [ ] a. No es cierto. De hecho el texto correcto sería: En el grupo ip se proporciona información relativa al funcionamiento del protocolo IP, la tabla de direccionamiento o de encaminamiento, o la tabla de traducción de direcciones.
- [ ] b. Ninguna de las otras opciones es correcta.
- [ ] c. No es cierto dado que la tabla de traducciones pertenece al grupo "at".
- [ ] d. No es cierto dado que la tabla de traducciones pertenece al grupo "interfaces".
- [x] e. Es correcta.

**✓ Solución: e)**

---

### Pregunta 13.3

**Apartado: 13. En cuanto a la MIB dentro de la gestión de red en el modelo SNMP**


- [ ] a. En el grupo "transmisión" se proporciona información relativa al protocolo de transmisión utilizado para conectar cada interfaz del sistema por ejemplo IEEE 802.4 Token Bus, IEEE 802.5 Token Ring FDDI, Ethernet, etc.
- [x] b. El grupo "transmisión" no existe.
- [ ] c. Ninguna de las otras opciones es correcta.
- [ ] d. En el grupo "transmisión" se proporciona información relativa a la tabla de conexiones establecida tras la transmisión de datos. A su vez en el grupo "recepción" proporciona información relativa a la tabla de conexiones establecida tras la recepción de datos.
- [ ] e. En el grupo "transmisión" se proporciona información relativa al medio de transmisión conectado a cada interfaz del sistema por ejemplo IEEE 802.4 Token Bus, IEEE 802.5 Token Ring FDDI, Ethernet, etc.

**✓ Solución: b)**

---

### Pregunta 13.4

**Apartado: 13. En cuanto a la MIB dentro de la gestión de red en el modelo SNMP**


- [ ] a. El texto es correcto. De hecho se incluyen datos como: ifIndex, ifDescr, ifType, ifMTU, ifPhysAddress, ifSpeed, ifAdminStatus, ifOperStatus
- [ ] b. El texto es correcto. De hecho se incluyen datos como: ifAdminStatus, ifOperStatus. "ifAdminStatus" determinará el estado deseado mientras que "ifOperStatus" determinará el estado real en el que se encuentra el dispositivo.
- [ ] c. El texto es correcto. De hecho se incluyen datos como el índice de cada interfaz, la descripción textual, el tipo de hardware que hay bajo la capa de red, el tamaño de MTU para el interfaz, la dirección física del interfaz o el ancho de banda utilizado por el interfaz.
- [x] d. Todas las otras respuestas son correctas.
- [ ] e. El texto es correcto. De hecho se incluyen Información estadística como el número de paquetes enviados, recibidos, descartados, multicast, erróneos, tamaño de colas... para cada dispositivo.

**✓ Solución: d)**

---

### Pregunta 13.5

**Apartado: 13. En cuanto a la MIB dentro de la gestión de red en el modelo SNMP**


**La RFC que trata sobre la MIB-II (1213) subdivide la información de gestión de la red en diversos nodos entre los que se encuentran: RMON, SNMP, TRANSMISIÓN, EGP, UDP, TCP, ICMP, IP, AT, Interfaces o System**

- [ ] a. Es correcta pero faltan además otras subramas como Ethernet MAU, Application MIB, MTA MIB, upsMIB, snaMIB, ...
- [ ] b. Es correcta pero faltan además otras subramas como mdmMIB, sdlcstatus, Printer-MIB, entity-MIB, docsdev, notificationlogMIB, ...
- [x] c. Todas las otras respuestas son correctas.
- [ ] d. Es correcta pero faltan además otras subramas como CMOT, OSPF, BGP, X500, ifMIB, ...
- [ ] e. Es correcta pero faltan además otras subramas como Managed objects for bridges, Bridge mib, rptrhealth, host-resources-mib, ...

**✓ Solución: c)**

---

### Pregunta 13.6

**Apartado: 13. En cuanto a la MIB dentro de la gestión de red en el modelo SNMP**


**En el grupo tcp se proporciona información relativa la configuración del protocolo, estadísticas de conexiones (activas, pasivas, intentos fallidos de conexión...) y estadísticas sobre envío y recepción de segmentos.**

- [ ] a. Es correcta. De hecho proporciona información como tcpAltorithm, tcpMin, tcpMax o tcpConnTable.
- [ ] b. No es cierto dado que la información que contiene es la tabla de conexiones TCP que se produce con el tráfico TCP existente en la red.
- [ ] c. Ninguna de las otras opciones es correcta.
- [ ] d. No es cierto dado que la información que proporciona no tiene nada que ver con conexiones ya que no se producen a través de este protocolo.
- [x] e. Es correcta. De hecho proporciona información como tcpRtoAltorithm, tcpRtoMin, tcpRtoMax o tcpConnTable.

**✓ Solución: e)**

---

## 14. En cuanto a los elementos de un sistema

### Pregunta 14.1

**Apartado: 14. En cuanto a los elementos de un sistema**


- [ ] a. Los ordenadores tienen componentes hardware (discos, memoria, fuente de alimentación, ...) y software (sistemas operativos y aplicaciones de usuario).
- [ ] b. La red puede ser sólo de área local o conectarse con el resto del mundo a través de Internet.
- [x] c. Todas las otras respuestas son correctas.
- [ ] d. Los principales elementos de un sistema en red son los usuarios, los ordenadores y el hardware de red (routers, switches, cables, ...).
- [ ] e. Los principales elementos de un sistema en red son los usuarios, los ordenadores y el hardware de red. Los ordenadores tienen componentes hardware y software. Y la red puede ser sólo de área local o conectarse con el resto del mundo a través de Internet.

**✓ Solución: c)**

---

### Pregunta 14.2

**Apartado: 14. En cuanto a los elementos de un sistema**


- [ ] a. En el enunciado se produce un error ya que la asignación de nombres y direcciones (DNS), se realiza por parte de la IANA (organismo para la distribución de direcciones IPv4 y que determinará por tanto la equivalencia con los nombres a través de los servidores DNS).
- [ ] b. Ninguna de las otras respuestas es correcta.
- [x] c. La gestión de red se refiere a la parametrización para su uso desde las aplicaciones de terceros, al uso de sistemas de monitorización para el hardware de red (SNMP), a nivel de aplicación, al uso de sistemas de directorio para el control de usuarios (NIS), asignación de nombres y direcciones (DNS), etc. En ningún caso se referirá al diseño de la topología de la red teniendo en consideración aspectos de seguridad y de hardware, ya que será realizado por analistas de red o en todo caso, analistas de sistemas.
- [ ] d. La gestión de red se refiere al diseño de la topología de la red teniendo en consideración aspectos de seguridad (red privada vs. DMZ) y de hardware (switches, cables, ...), a la parametrización para su uso desde las aplicaciones de terceros, al uso de sistemas de monitorización para el hardware de red (SNMP), a nivel de aplicación, al uso de sistemas de directorio para el control de usuarios (NIS), asignación de nombres y direcciones (DNS), etc.
- [ ] e. En el enunciado se produce un error ya que la red privada es una zona DMZ por lo que no existen como opciones.

**✓ Solución: c)**

---

### Pregunta 14.3

**Apartado: 14. En cuanto a los elementos de un sistema**


- [ ] a. La gestión de usuarios se refiere a gestionar las altas, bajas y modificaciones de la información de los usuarios, controlará los permisos y niveles de acceso y realizará el soporte técnico sobre la formación, documentación y gestión de incidencias. En ningún caso determinará si se permite o no a los usuarios gestionar sus propios equipos. La funcionalidad a desarrollar por los usuarios no estará determinada por los administradores informáticos sino por los responsables de los diferentes departamentos a los que pertenezcan.
- [x] b. La gestión de usuarios se refiere a decidir si se debe controlar el uso de usuarios locales y si se permite o no a los usuarios gestionar sus propios equipos. Para ello, el administrador gestionará las altas, bajas y modificaciones de la información de los usuarios, controlará los permisos y niveles de acceso y realizará el soporte técnico sobre la formación, documentación y gestión de incidencias.
- [ ] c. La gestión de usuarios se refiere a decidir si se debe controlar el uso de usuarios locales y si se permite o no a los usuarios gestionar sus propios equipos. Además, el administrador gestionará las altas, bajas y modificaciones de la información de los usuarios, controlará los permisos y niveles de acceso y realizará el soporte técnico sobre la formación, documentación y gestión de incidencias.
- [ ] d. Ninguna de las otras respuestas es correcta.
- [ ] e. La gestión de usuarios será realizada por parte de los operadores y se refiere a decidir si se debe controlar el uso de usuarios locales y si se permite o no a los usuarios gestionar sus propios equipos. Para ello, el operador gestionará las altas, bajas y modificaciones de la información de los usuarios y controlará los permisos y niveles de acceso. Y a su vez los administradores realizarán el soporte técnico sobre la formación, documentación y gestión de incidencias.

**✓ Solución: b)**

---

## 15. En cuanto a los estándares internacionales asociados a las comunicaciones de datos

### Pregunta 15.1

**Apartado: 15. En cuanto a los estándares internacionales asociados a las comunicaciones de datos**


- [ ] a. IRTF (Internet Research Task Force – Fuerza de trabajo de investigación de Internet) formada para resolver problemas a corto plazo). Publica las RFC (Request For Comment) IETF (Internet Engineering Task Force – Fuerza de trabajo de ingenieros de Internet) formada para resolver problemas a largo plazo).
- [ ] b. Ninguna de las otras respuestas es correcta.
- [ ] c. IRTF (Internet Research Task Force – Fuerza de trabajo de investigación de Internet) formada para resolver problemas a corto plazo). IETF (Internet Engineering Task Force – Fuerza de trabajo de ingenieros de Internet) formada para resolver problemas a largo plazo).
- [ ] d. La IRTF publica las RFC (Request For Comment)
- [x] e. IRTF (Internet Research Task Force – Fuerza de trabajo de investigación de Internet) formada para resolver problemas a largo plazo). IETF (Internet Engineering Task Force – Fuerza de trabajo de ingenieros de Internet) formada para resolver problemas a corto plazo).

**✓ Solución: e)**

---

### Pregunta 15.2

**Apartado: 15. En cuanto a los estándares internacionales asociados a las comunicaciones de datos**


- [ ] a. Los pasos del proceso de estandarización incluyen: Draft Standard, Proposed Standard→Draft Standard, Cuando el desarrollo tiene un cierto éxito en su uso (pasando a tener el status de Internet Standard)
- [ ] b. Los pasos del proceso de estandarización incluyen: Proposed Standard, Cuando el desarrollo tiene un cierto éxito en su uso (pasando a tener el status de Internet Standard)
- [ ] c. Los pasos del proceso de estandarización incluyen: Draft Standard, Cuando el desarrollo tiene un cierto éxito en su uso (pasando a tener el status de Internet Standard)
- [ ] d. Los pasos del proceso de estandarización incluyen: Proposed Standard, Draft Standard
- [x] e. Los pasos del proceso de estandarización incluyen: Proposed Standard, Draft Standard, Cuando el desarrollo tiene un cierto éxito en su uso (pasando a tener el status de Internet Standard), y es adoptado finalmente por la totalidad de la comunidad internet.

**✓ Solución: e)**

---

## 16. En cuanto a la gestión de red

### Pregunta 16.1

**Apartado: 16. En cuanto a la gestión de red**


- [ ] a. La gestión basada en el modelo de Internet se conoce de forma general como modelo SNMP y se basa en el protocolo SNMP (Simple Network Management Protocol).
- [x] b. Todas las otras respuestas son correctas.
- [ ] c. Los bloques funcionales de TMN son el bloque funcional del sistema de operaciones (OSF), de elemento de red (NEF), de adaptador Q (QAF), de mediación (MF) y de estación de trabajo (WSF). Sin embargo en SNMP hay cinco grandes áreas funcionales: Gestión de Fallos, Gestión de Configuración, Gestión de Contabilidad, Gestión de Prestaciones y Gestión de Seguridad.
- [ ] d. La gestión basada en la arquitectura TMN (Telecommunications Management Network) se basa en una arquitectura de servicios distribuida en las arquitecturas funcional, de información, física y lógica. Los bloques funcionales son el bloque funcional del sistema de operaciones (OSF), de elemento de red (NEF), de adaptador Q (QAF), de mediación (MF) y de estación de trabajo (WSF).
- [ ] e. La gestión basada en el modelo OSI se conoce de forma general como modelo CMIP/CMIS en el que CMIS (Common Management Information Service) es un servicio de gestión y CMIP (Common Management Information Protocol) es el protocolo de gestión.

**✓ Solución: b)**

---

## 17. En cuanto a la seguridad de las comunicaciones

### Pregunta 17.1

**Apartado: 17. En cuanto a la seguridad de las comunicaciones**


- [x] a. Se identificarán los activos a proteger, se implantarán medidas para protegerlos, se evaluarán los riesgos, se determinarán los niveles de confianza, se hará uso de los sistemas de control de acceso y de detección y corrección de errores redundantes, se determinarán las respuestas ante los ataques (preventivas y reactivas), los sistemas de monitorización y la regulación pertinente, se validarán los supuestos previamente diseñados y se evitarán las dependencias e inconsistencias innecesarias.
- [ ] b. Se identificarán los activos y los riesgos, se determinarán las respuestas ante los ataques (preventivas y reactivas), los sistemas de monitorización y la regulación pertinente y se harán las pruebas de seguridad previamente diseñados.
- [ ] c. Se implantarán medidas para proteger los activos, se evaluarán los riesgos, se determinarán los niveles de confianza, se hará uso de los sistemas de control de acceso y de detección y corrección de errores redundantes, se determinarán las respuestas ante los ataques (preventivas y reactivas), los sistemas de monitorización y la regulación pertinente, se validarán los supuestos previamente diseñados y se evitarán las dependencias e inconsistencias innecesarias. Pero en ningún caso incluye la identificación de los activos a proteger ya que son responsabilidad del departamento de compras, quienes deben suministrar el inventario de recursos existentes, que los administradores no tienen por qué conocer.
- [ ] d. En ningún caso habrá que realizar ninguna actuación dado que se refiere a las comunicaciones y estas son responsabilidad de las empresas proveedoras de los servicios de telecomunicaciones, y no incluyen nuestros sistemas.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: a)**

---

### Pregunta 17.2

**Apartado: 17. En cuanto a la seguridad de las comunicaciones**


- [ ] a. Se implantarán políticas de seguridad para obtener la confidencialidad (en una conversación los mensajes sólo pueden ser generados por los interlocutores autorizados), la integridad (los medios necesarios para la conversación deben estar garantizados para su uso por parte de los usuarios autorizados) y la disponibilidad (en una conversación sólo los interlocutores autorizados podrán participar en la misma)
- [ ] b. Se implantarán políticas de seguridad para obtener la confidencialidad (los medios necesarios para la conversación deben estar garantizados para su uso por parte de los usuarios autorizados), la integridad (en una conversación sólo los interlocutores autorizados podrán participar en la misma) y la disponibilidad (en una conversación los mensajes sólo pueden ser generados por los interlocutores autorizados)
- [ ] c. Se definirán e implantarán políticas de seguridad para obtener la confidencialidad (los medios necesarios para la conversación deben estar garantizados para su uso por parte de los usuarios autorizados) y la integridad (en una conversación sólo los interlocutores autorizados podrán participar en la misma) pero no la disponibilidad (en una conversación los mensajes sólo pueden ser generados por los interlocutores autorizados) ya que esta característica es sólo necesaria en los sistemas pero no en las comunicaciones.
- [x] d. Se implantarán políticas de seguridad para obtener la confidencialidad (en una conversación sólo los interlocutores autorizados podrán participar en la misma), la integridad (en una conversación los mensajes sólo pueden ser generados por los interlocutores autorizados) y la disponibilidad (los medios necesarios para la conversación deben estar garantizados para su uso por parte de los usuarios autorizados)
- [ ] e. Se definirán e implantarán políticas de seguridad para obtener la confidencialidad (en una conversación los mensajes sólo pueden ser generados por los interlocutores autorizados) y la integridad (los medios necesarios para la conversación deben estar garantizados para su uso por parte de los usuarios autorizados) pero no la disponibilidad (en una conversación sólo los interlocutores autorizados podrán participar en la misma) ya que esta característica es sólo necesaria en los sistemas, pero no en las comunicaciones.

**✓ Solución: d)**

---

## 18. En cuanto al arranque upstart

### Pregunta 18.1

**Apartado: 18. En cuanto al arranque upstart**


- [ ] a. Los eventos ejecutados desde el demonio Init determinan qué tarea ejecutar, cuándo y cómo, mediante comandos python. Las tareas asíncronas serán arrancadas por tanto desde el Init en un modo asíncrono como consecuencia de su ejecución mediante lenguajes de altas prestaciones.
- [ ] b. Es un arranque secuencial síncrono definido a través del proceso Init en el que cada tarea debe arrancarse a través de la orden initctl(start / stop).
- [x] c. El directorio /etc/event.d/ (dependiente de la distribución) contiene una serie de ficheros (representando los eventos) que determinan qué tarea ejecutar, cuándo y cómo, mediante un lenguaje descriptivo propio.
- [ ] d. El directorio /etc/event.d/ (dependiente de la distribución) contiene una serie de ficheros (representando los eventos) que Init ejecuta según el orden y las dependencias establecidas en los mismos mediante un orden estrictamente ortográfico.
- [ ] e. Ninguna de las otras opciones es correcta.

**✓ Solución: c)**

---

### Pregunta 18.2

**Apartado: 18. En cuanto al arranque upstart**


- [ ] a. Es un modo asíncrono de arranque ya que pueden arrancarse diferentes elementos en cualquier momento, una vez arrancado el sistema.
- [ ] b. Es un arranque en el que cada tarea no se inicia hasta que la tarea anterior no termina positivamente o negativamente (por timeout o denegación de servicio).
- [ ] c. Ninguna de las otras opciones es correcta.
- [ ] d. Es un arranque en el que cada tarea debe estar definida con anterioridad y sólo puede ser ejecutada cuando el demonio correspondiente al proceso Init cambia de estado y por tanto, cuando la máquina se arranca o se apaga.
- [x] e. Es un arranque basado en la secuencia de eventos que se resuelve mediante el proceso Init por el que se produce un arranque secuencial síncrono.

**✓ Solución: e)**

---

## 19. En cuanto al control y gestión de la actividad de los recursos del sistema operativo linux (CPU, memoria, ...)

### Pregunta 19.1

**Apartado: 19. En cuanto al control y gestión de la actividad de los recursos del sistema operativo linux (CPU, memoria, ...)**


**El comando vmstat muestra información sobre la memoria virtual, mostrados de forma periódica. Vmstat permite ordenar los procesos según el porcentaje de uso de la CPU, filtrarlos por PID para ver sólo algunos de los procesos especificando los PIDs en el comando, etc. Y la información visualizada será la relacionada con los procesos, la memoria, la paginación, la Entrada/Salida, el sistema (interrupciones e intercambios de contexto) y la CPU.**

- [ ] a. No es cierto porque el comando no se llama vmstat sino vpstat.
- [ ] b. El texto propuesto es correcto.
- [x] c. No es cierta porque vmstat no permite ningún tipo de orden, ni permite ningún tipo de filtrado.
- [ ] d. Ninguna de las otras respuestas es correcta.
- [ ] e. No es cierto porque la información visualizada (relacionada con los procesos, la memoria, la paginación, la Entrada/Salida, el sistema (interrupciones e intercambios de contexto) y la CPU) es la información suministrada por el comando mpstat.

**✓ Solución: c)**

---

### Pregunta 19.2

**Apartado: 19. En cuanto al control y gestión de la actividad de los recursos del sistema operativo linux (CPU, memoria, ...)**


- [ ] a. Comandos como uptime (relacionado con la configuración de la hora actual), pstree (relacionado con la visualiza un árbol de los procesos en ejecución y los recursos de CPU utilizados en cada caso) o ps (relacionado con la visualización de la información sobre los procesos en ejecución) resultan interesantes para poder verificar el correcto funcionamiento del sistema.
- [ ] b. Comandos como uptime (relacionado con la configuración de la hora actual), pstree (relacionado con la visualiza un árbol de los procesos en ejecución) o ps (relacionado con la visualización de la información sobre los procesos en ejecución) resultan interesantes para poder verificar el correcto funcionamiento del sistema.
- [x] c. Comandos como uptime (relacionado con la visualización del tiempo que lleva arrancado el sistema), pstree (relacionado con la visualiza un árbol de los procesos en ejecución) o ps (relacionado con la visualización de la información sobre los procesos en ejecución) resultan interesantes para poder verificar el correcto funcionamiento del sistema.
- [ ] d. Ninguna de las otras respuestas es correcta.
- [ ] e. Comandos como uptime (relacionado con la visualización del tiempo que lleva arrancado el sistema), pstree (relacionado con la visualiza un árbol de los procesos en ejecución y los recursos de CPU utilizados en cada caso) o ps (relacionado con la visualización de la información sobre los procesos en ejecución) resultan interesantes para poder verificar el correcto funcionamiento del sistema.

**✓ Solución: c)**

---

### Pregunta 19.3

**Apartado: 19. En cuanto al control y gestión de la actividad de los recursos del sistema operativo linux (CPU, memoria, ...)**


**El comando du puede mostrar información sobre la cantidad de espacio de disco utilizado por un directorio, los ficheros que hay en él y todos sus subdirectorios. Y la información visualizada será la relacionada con el tamaño del elemento (fichero o directorio) y el nombre del elemento.**

- [ ] a. No es cierto porque el comando du puede mostrar información sobre la cantidad de espacio de disco utilizado por un directorio, los ficheros que hay en él y todos sus subdirectorios, pero además incorpora datos de momento de última edición, usuario y grupos dueños del mismo, etc., de forma similar al formato largo del comando ls.
- [ ] b. No es correcto dado que es el comando df el que suministra ese tipo de información.
- [x] c. La definición propuesta es correcta.
- [ ] d. Ninguna de las otras respuestas es correcta.
- [ ] e. No es cierto porque la información visualizada contendrá además el total en la última línea y porque incorpora además datos de los ficheros que no ocupan espacio ni recurso alguno en el disco/sistema cuando se ejecuta con la opción -a.

**✓ Solución: c)**

---

### Pregunta 19.4

**Apartado: 19. En cuanto al control y gestión de la actividad de los recursos del sistema operativo linux (CPU, memoria, ...)**


**El comando mpstat muestra estadísticas del procesador (o procesadores) junto con la media global de todos los datos mostrados de forma periódica. Mpstat permite ordenar los procesos según el porcentaje de uso de la CPU, filtrarlos por PID para ver sólo algunos de los procesos especificando los PIDs en el comando, etc. Y la información visualizada será entre otras, CPU, %user, %nice, %sys, %iowait, %irq, %idle, etc.**

- [x] a. No es cierta porque mpstat no permite ningún tipo de orden, ni trata en absoluto sobre los procesos, ni permite ningún tipo de filtrado.
- [ ] b. No es cierto porque el comando mpstat muestra estadísticas de la memoria y de los procesos (combinada) y no de la CPU.
- [ ] c. Ninguna de las otras respuestas es correcta.
- [ ] d. El texto propuesto es correcto.
- [ ] e. No es cierto porque la información visualizada (CPU, %user, %nice, %sys, %iowait, %irq, %idle, etc.) es la información suministrada por el comando top.

**✓ Solución: a)**

---

### Pregunta 19.5

**Apartado: 19. En cuanto al control y gestión de la actividad de los recursos del sistema operativo linux (CPU, memoria, ...)**


**El comando df puede mostrar información sobre la capacidad de almacenamiento de cada uno de los sistemas de ficheros del sistema que hayan sido montados. Y la información visualizada será la relacionada con el sistema de fichero a detallar, el número de bloques de 1k de cada sistema de ficheros, cuántos estén usados, cuántos disponibles, el porcentaje de bloques usados respecto al total y el directorio de montaje.**

- [ ] a. Ninguna de las otras respuestas es correcta.
- [ ] b. No es cierto dado que el comando df en ningún caso mostrará información sobre la capacidad de almacenamiento de los sistemas de ficheros del sistema que hayan sido montados sino de los nodos incluidos dentro de cada sistema de ficheros.
- [ ] c. El comando df puede mostrar información sobre la capacidad de almacenamiento de los sistemas de ficheros, como el número de bloques de 1k de cada sistema de ficheros, cuántos estén usados, cuántos disponibles, el porcentaje de bloques usados respecto al total y el directorio de montaje, ya que es información que suministrará el comando du.
- [x] d. La definición propuesta es correcta.
- [ ] e. No es cierto dado que el comando df no sólo mostrará información sobre la capacidad de almacenamiento de los sistemas de ficheros del sistema que hayan sido montados sino también de aquellos definidos en /etc/fstab que no hayan sido montados tanto de forma manual como de forma automática, por ejemplo, en el arranque del sistema.

**✓ Solución: d)**

---

### Pregunta 19.6

**Apartado: 19. En cuanto al control y gestión de la actividad de los recursos del sistema operativo linux (CPU, memoria, ...)**


**El comando free muestra información sobre la memoria virtual, mostrados de forma periódica. free permite ordenar los procesos según el porcentaje de uso de la CPU, filtrarlos por PID para ver sólo algunos de los procesos especificando los PIDs en el comando, etc. Y la información visualizada será la relacionada con la cantidad total de memoria RAM, la cantidad total de memoria utilizada por el sistema, la cantidad de memoria libre y la cantidad de memoria utilizada de forma compartida entre varios programas para la compartición de datos.**

- [ ] a. Todas las otras respuestas son correctas.
- [ ] b. No es cierta porque free no visualiza información sobre la memoria virtual sino sobre la memoria física.
- [ ] c. No es cierto dado que Y la información visualizada serán los relacionados con la cantidad total de memoria RAM, la cantidad total de memoria utilizada por el sistema, la cantidad de memoria libre y la cantidad de memoria utilizada de forma compartida entre varios programas para la compartición de datos.
- [x] d. No es cierto dado que la visualización no se hace de forma periódica sino de su estado en un momento determinado.
- [ ] e. No es cierto porque free en ningún caso trata la información sobre los procesos.

**✓ Solución: d)**

---

### Pregunta 19.7

**Apartado: 19. En cuanto al control y gestión de la actividad de los recursos del sistema operativo linux (CPU, memoria, ...)**


**El comando top muestra la actividad dinámica del procesador en tiempo real según intervalos de tiempo. Admite la posibilidad de usar un interfaz interactivo limitado para la manipulación de procesos y mucho más extenso para su configuración. Top permite ordenar los procesos según el porcentaje de uso de la CPU, filtrarlos por PID para ver sólo algunos de los procesos especificando los PIDs en el comando, etc. Y la información visualizada será entre otras, PID, PPID, UID, USER, GROUP, TTY, PR, NI, %CPU, TIME, %MEM, SWAP, etc.**

- [ ] a. No es cierto ya que el interfaz interactivo para la manipulación de procesos no es objetivo de este comando.
- [ ] b. Ninguna de las otras respuestas es correcta.
- [ ] c. No es cierto ya que, entre otras cosas, ni se pueden ordenar los procesos según el porcentaje de uso de la CPU, ni se pueden filtrar por PID para ver sólo algunos de los procesos especificando los PIDs en el comando.
- [x] d. No es cierto ya que el interfaz interactivo para la manipulación de los procesos y la configuración, en realidad es el mismo.
- [ ] e. No es cierto ya que las columnas PID, PPID, UID, USER, GROUP, TTY, PR, NI, %CPU, TIME, %MEM, SWAP, etc. en realidad son las columnas del comando mpstat.

**✓ Solución: d)**

---

## 20. En cuanto al modelo de gestión SNMP

### Pregunta 20.1

**Apartado: 20. En cuanto al modelo de gestión SNMP**


**Toda distribución de SNMPv3 estará compuesto por todos o algunos de los siguientes módulos: Dispatcher, Message Processing Subsystem, Security Subsystem, Access Control Subsystem**

- [ ] a. El Message Processing Subsystem prepara los mensajes para que sean enviados, agregando la cabecera correspondiente a la versión necesaria y extrae los datos de los mensajes recibidos. Está compuesto por al menos un Modelo de Procesamiento de mensajes ya que puede haber un Modelo de Procesamiento de Mensajes para cada versión de protocolo necesario en la red. Además interactúa con el subsistema de seguridad para lograr la encriptación o desencriptación de los datos que la necesiten.
- [ ] b. El Access Control Subsystem suministra servicio de autentificación de acceso que hacen posible restringir el acceso a la MIB y limitar las operaciones que los gestores pueden realizar sobre los agentes. Se define el Modelo de Control de Acceso basado en vistas, VACM (View-based Access Control Model) y estará compuesto por los elementos: Grupos, Nivel de seguridad, Contexto, Vistas de la MIB y Políticas de acceso.
- [x] c. Todas las otras respuestas son correctas.
- [ ] d. El Dispatcher es un manejador de tránsito de los mensajes de múltiples versiones del protocolo SNMP. Sus funciones son enviar y recibir mensajes SNMP a y desde la red, determinar la versión de un mensaje SNMP e interaccionar con el correspondiente modelo de procesamiento de mensajes y proveer una interfaz abstracta a las aplicaciones SNMP para permitirlas enviar PDUs SNMP a entidades remotas.
- [ ] e. El Security Subsystem proporciona autenticación y privacidad al poder estar formado por varios subsistemas para dar servicio a varios modelos de seguridad. Uno de estos modelos es el basado en usuario, USM y se encarga de verificar la identidad de quién envió el mensaje y de que los mensajes no hayan sido modificados durante el tránsito. Además pueden coexistir de forma concurrente varias implementaciones de modelos.

**✓ Solución: c)**

---

### Pregunta 20.2

**Apartado: 20. En cuanto al modelo de gestión SNMP**


**Toda distribución de SNMPv3 estará compuesto por todas o algunas de los siguientes aplicaciones que interaccionan con el motor SNMP para enviar y recibir mensajes, enviar y recibir respuestas o enviar y recibir mensajes asíncronos: Generador de comandos, Respondedor de Comandos, Receptor de notificaciones, Generador de notificaciones, Proxy Forwarder,...**

- [ ] a. Es correcto. Además el Generador de notificaciones es el encargado de monitorizar al sistema ante condiciones o eventos particulares.
- [ ] b. Es correcto. Además el Gestor necesita un dispatcher, un subsistema de procesamiento de mensajes, un subsistema de seguridad y un subsistema de control de acceso en el motor, y un generador de comandos, un creador de notificaciones y un receptor de notificaciones como aplicaciones.
- [ ] c. Es correcto. Además el Proxy Forwarder será necesario en caso de que haya partes de la red que no soporten el protocolo SNMP, cuando sea necesario tener información en caché para minimizar la carga de trabajo de los dispositivos o para autentificar y autorizar peticiones.
- [x] d. Todas las otras respuestas son correctas.
- [ ] e. Es correcto. Además el Gestor necesita un dispatcher, un subsistema de procesamiento de mensajes y un subsistema de seguridad en el motor, y un generador de comandos, un creador de notificaciones y un receptor de notificaciones como aplicaciones.

**✓ Solución: d)**

---

### Pregunta 20.3

**Apartado: 20. En cuanto al modelo de gestión SNMP**


- [ ] a. En los mensajes de SNMPv1 el campo "Enterprise" representa el nombre del objeto que genera la Trap (valor del sysObjectID).
- [ ] b. En los mensajes de SNMPv1 el campo "Generic Trap" representa el tipo de Trap genérico y el campo "Specific Trap" representa el código de Trap específico.
- [x] c. Todas las otras respuestas son correctas.
- [ ] d. En los mensajes de SNMPv1 el campo "Time Stamp" representa el tiempo transcurrido entre la última reinicialización de la entidad y la generación de la Trap.
- [ ] e. En los mensajes de SNMPv1 el campo "Agent Address" representa la dirección IP del agente que genera la Trap.

**✓ Solución: c)**

---

### Pregunta 20.4

**Apartado: 20. En cuanto al modelo de gestión SNMP**


**Hay 7 traps definidas en la versión SNMPv1: coldStart, warmStart, linkDown, linkUp, authenticationFailure, egpNeighborLoss, enterpriseSpecific**

- [ ] a. No hay 7 sino 8 traps para la versión SNMPv1. De hecho en esa definición hay varios errores, unas no están bien definidos, otras sobran y otras faltan.
- [ ] b. Todas las otras respuestas son correctas.
- [ ] c. No es correcto, entre otras cosas porque la trap "egpNeighborLoss" no existe. Hay que recordar que EGP no es el único protocolo utilizado para la búsqueda de rutas.
- [ ] d. No es correcto, entre otras cosas porque la trap "linkDown" se envía cuando se recuperan la totalidad de los enlaces de conexión, cuando uno o varios de estos han caído, y no cuando ha fallado uno de los enlaces de comunicaciones del agente. Esto se debe a que si el enlace caído es aquel por el que se manda la información al gestor, no podría funcionar. A su vez "linkUp" se envía cuando se resetean los enlaces por un apagado ordenado de los enlaces.
- [x] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: e)**

---

### Pregunta 20.5

**Apartado: 20. En cuanto al modelo de gestión SNMP**


- [ ] a. La versión SNMPv2 estaba limitada por un único problema para el envío de órdenes y de datos que suponía una gran sobrecarga en las transferencias de datos. Esto se debía a que los envíos de datos debían hacerse como respuesta a una petición específica por lo que para cada envío de datos tenía que venir precedido el paquete de petición de datos de cada nodo con la consiguiente sobrecarga.
- [ ] b. La versión SNMPv2 estaba limitada tanto por sobrecargas como por seguridad. De hecho, ni se podían mandar todos los datos de golpe lo que suponía tener que sobrecargar la red con multitud de envíos, ni se podía autenticar un usuario para una vista determinada de la MIB en el agente.
- [x] c. La versión SNMPv2 estaba limitada por sus problemas de seguridad al tener como mecanismo de autenticación una única clave llamada Nombre de Comunidad.
- [ ] d. La versión SNMPv2 no tenía limitación alguna ni por sobrecargas ni por seguridad. Sin embargo se mejoró en posteriores versiones aumentando prestaciones y otros elementos de la arquitectura como son los tipos de datos.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: Respuesta no especificada claramente en el documento**

---

### Pregunta 20.6

**Apartado: 20. En cuanto al modelo de gestión SNMP**


**Los tipos de mensajes en SNMP1 son: GetRequest, GetNextRequest, SetRequest, GetResponse, Trap**

- [ ] a. Es incorrecto dado que en esta versión no existe la opción de SetRequest dado que no estaba permitido por los agentes.
- [ ] b. Es correcta. Además las 8 traps predefinidas para el envío de avisos de diferentes sucesos resultan una ayuda importante para la gestión en este modelo.
- [ ] c. Es incorrecto dado que en ningún caso devuelve el mismo contenido que en la petición porque resultaría evidentemente inútil y generaría una sobrecarga en el uso de la red.
- [x] d. Respuesta correcta. Sin embargo no resuelve el problema del envío masivo de datos aunque cuente con GetNextRequest al producir una sobrecarga en el uso de la red.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: d)** *(Nota: El documento indica "Solución: d" pero hay inconsistencias en la numeración)*

---

### Pregunta 20.7

**Apartado: 20. En cuanto al modelo de gestión SNMP**


**El subsistema de seguridad contempla dos niveles de seguridad: Sin autenticación ni privacidad (noauthNoPriv) por la que no se provee de seguridad al mensaje y se comporta como un sistema equivalente a SNMPv1 y con autenticación y privacidad (authPriv).**

- [x] a. Es incorrecto dado que la frase más correcta sería que el subsistema de seguridad contempla tres niveles de seguridad: Sin autenticación ni privacidad (noauthNoPriv), con autenticación pero sin privacidad (authNoPriv) y con autenticación y privacidad (authPriv).
- [ ] b. La descripción es correcta.
- [ ] c. Ninguna de las otras respuestas es correcta.
- [ ] d. Es incorrecto dado que la frase más correcta sería que el subsistema de seguridad contempla tres niveles de seguridad: Sin autenticación ni privacidad (noauthNoPriv), sin autenticación pero con privacidad (privNoAuth) y con autenticación y privacidad (authPriv). Es incorrecta porque SNMPv1 sí tiene autenticación aunque sea de una forma rudimentaria y a través del nombre de comunidad y por tanto sin cifrado.

**✓ Solución: a)**

---

## 21. En cuanto al control y gestión de los dispositivos de entrada/salida del sistema operativo linux

### Pregunta 21.1

**Apartado: 21. En cuanto al control y gestión de los dispositivos de entrada/salida del sistema operativo linux**


**El comando sar visualiza estadísticas sobre la actividad del sistema (CPU, discos, memoria, dispositivos de red, ...). Y la información visualizada será entre otras, el número de peticiones de lectura por segundo, el número peticiones de escritura por segundo, los sectores/seg leídos de un dispositivo (512 bytes) y los sectores/sg escritos.**

- [ ] a. Ninguna de las otras respuestas es correcta.
- [ ] b. No es cierto dado que la información visualizada propuesta es del comando iostat.
- [x] c. La definición propuesta es correcta.
- [ ] d. No es cierto dado que la información del número de transferencias por segundo, el número de bloques leídos por segundo, el número de bloques escritos por segundo el número total de bloques leídos y el número total de bloques escritos, son informaciones que se visualizan con la ejecución del comando "top"
- [ ] e. No es cierto dado que el comando sar visualiza información estadística de los dispositivos de entrada y salida pero en ningún caso sobre la CPU, discos, etc.

**✓ Solución: c)**

---

### Pregunta 21.2

**Apartado: 21. En cuanto al control y gestión de los dispositivos de entrada/salida del sistema operativo linux**


**El comando iostat visualiza estadísticas sobre la CPU y los dispositivos y particiones de entrada/salida. Y la información visualizada será entre otras, el número de transferencias por segundo, el número de bloques leídos por segundo, el número de bloques escritos por segundo el número total de bloques leídos y el número total de bloques escritos.**

- [ ] a. Ninguna de las otras respuestas es correcta.
- [ ] b. No es cierto dado que la información del número de transferencias por segundo, el número de bloques leídos por segundo, el número de bloques escritos por segundo el número total de bloques leídos y el número total de bloques escritos, son informaciones que se visualizan con la ejecución del comando "df -a"
- [x] c. La definición propuesta es correcta.
- [ ] d. No es cierto dado que el comando iostat visualiza información estadística de los dispositivos de entrada y salida pero en ningún caso sobre la CPU o las particiones.
- [ ] e. No es cierto dado que la información visualizada contendrá un seguimiento dinámico de las estadísticas de uso mediante un intervalo determinado en el propio comando de formato: iostat [intervalo] [número]

**✓ Solución: c)**

---

## 22. En cuanto a los parámetros de servicio

### Pregunta 22.1

**Apartado: 22. En cuanto a los parámetros de servicio**


- [x] a. Se consideran prestaciones a la cadencia efectiva, el retardo de tránsito y la tasa residual de fallos. Y se consideran parámetros de calidad de servicio a la cadencia efectiva, al retardo de tránsito, a la tasa residual de fallos y a la disponibilidad.
- [ ] b. Se considera calidad a la cadencia efectiva, el retardo de tránsito y la tasa residual de fallos y a la disponibilidad y se consideran parámetros de prestación de servicio a la cadencia efectiva, al retardo de tránsito, a la tasa residual de fallos.
- [ ] c. Se consideran prestaciones a la cadencia efectiva, el retardo de tránsito y la tasa residual de fallos y a la disponibilidad. Y se consideran parámetros de calidad de servicio a la cadencia efectiva, al retardo de tránsito, a la tasa residual de fallos.
- [ ] d. Se considera calidad a la cadencia efectiva, el retardo de tránsito y la tasa residual de fallos y se consideran parámetros de prestación de servicio a la cadencia efectiva, al retardo de tránsito, a la tasa residual de fallos y a la disponibilidad.
- [ ] e. Ninguna de las otras respuesta es correcta.

**✓ Solución: a)**

---

## 23. En cuanto a la gestión de red en el modelo SNMP

### Pregunta 23.1

**Apartado: 23. En cuanto a la gestión de red en el modelo SNMP**


**Está basado en una arquitectura cliente/servidor, implementado como gestores/agentes, donde la información será estática, dinámica y estadística y será enviada como mensajes a través del protocolo de aplicación SNMP.**

- [ ] a. La información será enviada como mensajes a través del protocolo de aplicación SNMP salvo que los valores estadísticos serán enviados a través de RMON.
- [ ] b. La información sólo será dinámica como resultado de la variación de la información estática con el tiempo.
- [ ] c. La información sólo será estática.
- [x] d. Es correcto.
- [ ] e. Ninguno de las otras opciones es correcta.

**✓ Solución: d)**

---

### Pregunta 23.2

**Apartado: 23. En cuanto a la gestión de red en el modelo SNMP**


- [ ] a. Las RFCs (Requests Of Comments) sólo determinan de forma única todo cuanto debe ser definido, relacionado con el modelo SNMP.
- [x] b. Las RFCs definen los estándares relacionados con la red de Internet. Sin embargo sólo un subconjunto de ellos están directamente relacionados con SNMP.
- [ ] c. Ninguna de las otras opciones es correcta.
- [ ] d. Las RFCs no tienen nada que ver con la definición de los nodos de la MIB relacionados con Internet dado que se refieren a las características técnicas y funcionales de los protocolos que conforman Internet.
- [ ] e. Una de las RFCs más importantes es la RFC1213 que define de forma única la estructura de la MIB en la subrama de Internet.

**✓ Solución: b)**

---

### Pregunta 23.3

**Apartado: 23. En cuanto a la gestión de red en el modelo SNMP**


**Se desarrolla a través de cuatro elementos fundamentales: Un protocolo para especificar el intercambio de datos entre agentes y gestores, una especificación de la estructura de la base de datos, un conjunto de objetos de datos y un complemento como es la extensión para la monitorización de las LAN.**

- [ ] a. RMON no es ninguna extensión del modelo SNMP sino otro modelo separado e importado de forma independiente del modelo OSI.
- [ ] b. Sólo el protocolo de intercambio de datos entre agentes y gestores forma parte del modelo SNMP. El resto de elementos son derivados de otro modelos y reutilizados para este modelo. De hecho OSI es el origen como Organismo Internacional de Estandarización del resto de elementos.
- [ ] c. Ninguno de las otras opciones es correcta.
- [ ] d. La especificación de la estructura o SMI es la base fundamental y origen del modelo SNMP. Tanto la MIB, como derivada de SMI, como el protocolo SNMP son elementos añadidos al modelo en posteriores versiones del modelo.
- [x] e. Es correcto.

**✓ Solución: e)**

---

### Pregunta 23.4

**Apartado: 23. En cuanto a la gestión de red en el modelo SNMP**


- [ ] a. Las Reglas de codificación básicas, o BER (Basic Encoding Rules), incluye uno de los formatos de codificación definidos como parte del estándar SNMP: ASN.1.
- [ ] b. La sintaxis BER, junto con Canonical Encoding Rules (CER) son los dos subconjuntos de Distinguished Encoding Rules (DER) para la codificación de datos SNMP a enviar sobre UDP como sintaxis de transferencia entre entidades SNMP.
- [ ] c. Ninguna de las otras respuestas son correctas.
- [x] d. Todas las otras respuestas son correctas.
- [ ] e. El formato BER especifica un formato para codificar las estructuras de datos ASN.1.

**✓ Solución: d)**

---

### Pregunta 23.5

**Apartado: 23. En cuanto a la gestión de red en el modelo SNMP**


- [ ] a. Los siguientes tipos de datos son manejados por el modelo SNMP: Números enteros, secuencias de bytes, identificadores de objetos, estructuras y arrays unidimensionales, etc.
- [ ] b. Las tablas en la MIB se definen a través de un tipo de dato específico como es "sequence" o "sequence of"
- [x] c. Todas las opciones son correctas.
- [ ] d. Los siguientes tipos de datos son manejados por el modelo SNMP: idirección IP, contador (sólo se puede incrementar), contadores que se puede incrementar y decrementar, contador de tiempo en centésimas de segundo, etc.
- [ ] e. Los siguientes tipos de datos son manejados por el modelo SNMP: ipAddress, counter, gauge, timeticks, etc.

**✓ Solución: c)**

---

### Pregunta 23.6

**Apartado: 23. En cuanto a la gestión de red en el modelo SNMP**


- [ ] a. Las operaciones a ejecutar sobre las tablas se referirán a entradas individuales.
- [ ] b. Las operaciones a ejecutar sobre las tablas podrán hacerse mediante un accesos secuencial.
- [ ] c. La instancia de un objeto escalar se generará añadiendo un "0" al identificador del objeto.
- [ ] d. Las operaciones a ejecutar sobre las tablas podrán hacerse mediante un accesos aleatorio.
- [x] e. Todas las opciones son correctas.

**✓ Solución: e)**

---

### Pregunta 23.7

**Apartado: 23. En cuanto a la gestión de red en el modelo SNMP**


- [ ] a. Los siguientes tipos de datos son manejados por el modelo SNMP: Números enteros, secuencias de bytes, identificadores de objetos, estructuras y arrays unidimensionales, etc.
- [ ] b. Las tablas en la MIB se definen a través de un tipo de dato específico como es "sequence" o "sequence of"
- [x] c. Todas las opciones son correctas.
- [ ] d. Los siguientes tipos de datos son manejados por el modelo SNMP: idirección IP, contador (sólo se puede incrementar), contadores que se puede incrementar y decrementar, contador de tiempo en centésimas de segundo, etc.
- [ ] e. Los siguientes tipos de datos son manejados por el modelo SNMP: ipAddress, counter, gauge, timeticks, etc.

**✓ Solución: c)**

---

## 24. En cuanto a la monitorización remota RMON del modelo de gestión SNMP

### Pregunta 24.1

**Apartado: 24. En cuanto a la monitorización remota RMON del modelo de gestión SNMP**


**En el grupo "alarm" se definen un conjunto de umbrales sobre el rendimiento de la red. La única tabla que contiene define la variable a monitorizar, cierta información de control del proceso de muestreo y el valor de muestreo más reciente.**

- [ ] a. Es correcto. Además los nodos incluidos en cada entrada de la tabla contiene información como alarmStartupAlarm, risingAlarm, fallingAlarm, risingOrFallingAlarm, alarmRisingThreshold, alarmFallingThreshold, alarmRisingEventIndex, alarmFallingEventIndex, ...
- [x] b. Todas las otras opciones son correctas.
- [ ] c. Es correcto. Además las reglas para generar eventos de alarmas de subida definen que si el primer valor muestreado tras validar una fila es menor que el umbral_subida, la primera vez que el valor es mayor o igual que ese umbral, se genera el evento de alarma de subida, etc.
- [ ] d. Es correcto. Además los nodos incluidos en cada entrada de la tabla contiene información como alarmInterval, alarmVariable, alarmSampleType, absoluteValue, deltaValue, alarmValue, ...
- [ ] e. Es correcto. Además se define un mecanismo para evitar que pequeñas fluctuaciones del valor generen alarmas repetidamente por el cual tras haberse generado un evento de alarma de subida no se podrá generar otro evento similar hasta después de que el valor muestreado baje por debajo del umbral de bajada y de nuevo sobrepase el umbral de subida (Mecanismo de histéresis).

**✓ Solución: b)**

---

### Pregunta 24.2

**Apartado: 24. En cuanto a la monitorización remota RMON del modelo de gestión SNMP**


**La información que se obtiene con la MIB-II sin extensiones es local a cada dispositivo gestionado y proporciona información sobre el tráfico global en una red. Por tanto los monitores remotos obtendrán la información de su subred de forma local para, entre todos los monitores remotos obtener una visión global de la red.**

- [ ] a. Es correcto dado que no es una extensión de la MIB-II la que proporciona información sobre el tráfico global en una red, sino una subrama de "management", como extensión, y que correspondiente a RMON.
- [x] b. Es incorrecto dado que no es la MIB-II la que proporciona información sobre el tráfico global en una red, sino la extensión de la MIB correspondiente a RMON.
- [ ] c. Es correcto dado que la información de la MIB relacionada con RMON y RMON2 son junto con el grupo "Token Ring" la información perteneciente a la subrama de "management".
- [ ] d. Ninguna de las otras respuestas es correcta.
- [ ] e. Es incorrecto dado que incluso el esquema es incorrecto

**✓ Solución: b)**

---

## 25. En cuanto al envío de mensajes mediante las herramientas del sistema

### Pregunta 25.1

**Apartado: 25. En cuanto al envío de mensajes mediante las herramientas del sistema**


- [ ] a. "mesg" sirve para habilitar/deshabilitar la llegada de mensajes a los usuarios
- [ ] b. "talk" sirve para conversar con un usuario, incluso pero sólo en la máquina Linux/Unix local pero a través del terminal TTY
- [x] c. "wall" (similar a write) sirve para enviar un mensaje a todos los usuarios en el sistema y a través de todas las TTYs (broadcast)
- [ ] d. "write" se utiliza para enviar un mensaje a un usuario y a la TTY asociada
- [ ] e. "mail" (correo electrónico) permite enviar un mensaje sin que el usuario esté conectado al sistema a pero sólo en máquinas locales

**✓ Solución: c)**

---

### Pregunta 25.2

**Apartado: 25. En cuanto al envío de mensajes mediante las herramientas del sistema**


- [x] a. El fichero /etc/motd contiene el mensaje del día que se imprime justo después de entrar al sistema, el fichero $HOME/.hushlogin permite evitar el mensaje del día, y el fichero /etc/issue contiene el mensaje que se muestra antes del login (normalmente muestra las versiones de Linux y núcleo instaladas)
- [ ] b. El fichero $HOME/.hushlogin contiene el mensaje del día que se imprime justo después de entrar al sistema, el fichero /etc/issue permite evitar el mensaje del día, y el fichero /etc/motd contiene el mensaje que se muestra antes del login (normalmente muestra las versiones de Linux y núcleo instaladas)
- [ ] c. Ninguna de las otras respuestas es correcta.
- [ ] d. El fichero /etc/issue contiene el mensaje del día que se imprime justo después de entrar al sistema, el fichero /etc/motd permite evitar el mensaje del día, y el fichero $HOME/.hushlogin contiene el mensaje que se muestra antes del login (normalmente muestra las versiones de Linux y núcleo instaladas)
- [ ] e. El fichero /etc/issue contiene el mensaje del día que se imprime justo después de entrar al sistema, el fichero $HOME/.hushlogin permite evitar el mensaje del día, y el fichero /etc/motd contiene el mensaje que se muestra antes del login (normalmente muestra las versiones de Linux y núcleo instaladas)

**✓ Solución: a)**

---

## 26. En cuanto al servicio de red NFS en el sistema operativo linux

### Pregunta 26.1

**Apartado: 26. En cuanto al servicio de red NFS en el sistema operativo linux**


**El montaje en los clientes se hace a través del comando: $ mount -t nfs -o opciones_nfs 191.168.6.10:/home /datos**

- [ ] a. El comando es correcto, entre otras cosas porque la opción "-t nfs" y "191.168.6.10:/home /datos" determinan las opciones que no son por defecto por lo que tomará el resto de opciones de las opciones por defecto que se determinan según "-o opciones_nfs".
- [ ] b. Es imposible montarlo con ese comando.
- [ ] c. El comando es correcto, entre otras cosas porque la opción "-t nfs" determina de forma única el tipo de Sistema de Ficheros a montar y con el que tendrán que estar de acuerdo las opciones a definir. Sin embargo, todo dependerá de si entre las opciones se consideran o no los elemento relacionados con "rpcbind".
- [ ] d. El comando es correcto, entre otras cosas porque la opción "191.168.6.10:/home /datos" determina el origen del Sistema de Ficheros a montar y la localización del mismo en el cliente una vez montado. Todo dependerá de si entre las opciones se consideran o no los elemento relacionados con "rpcbind".
- [x] e. Todas las otras respuestas son incorrectas.

**✓ Solución: e)**

---

### Pregunta 26.2

**Apartado: 26. En cuanto al servicio de red NFS en el sistema operativo linux**


**La ejecución del fichero "/usr/sbin/exportfs" actualiza la información de los SF exportados y la muestra. Para ello hace un "restart" de los demonios "rpc.nfsd" y "rpc.mount". Sus opciones son: -a, -r, -u, -v**

- [ ] a. La ejecución del fichero "/usr/sbin/exportfs" actualiza la información de los SF exportados y la muestra. Para ello hace un "restart" del demonio "rpc.nfsd". Sus opciones son las descritas en la pregunta pero se añade además la posibilidad de definición de nuevos usuarios mediante el mapeo de usuarios entre las máquinas clientes y el servidor, entre otras.
- [ ] b. La ejecución del fichero "/usr/sbin/exportfs" actualiza la información de los SF exportados y la muestra. Para ello hace un "restart" de un único demonio "rpc.nfsd". Sus opciones son las descritas en la pregunta salvo "-r" ya que la reexportación de directorios se realiza al parar y rearrancar el servicio.
- [ ] c. El fichero "/usr/sbin/exportfs" actualiza la información de los SF exportados y la muestra. Para ello hace un "restart" del demonio "rpc.nfsd" pero no de "rpc.mount" ya que no existe en linux, aunque sí existía en las antiguas distribuciones de unix de tipo BSD. De hecho "rpcd" es el demonio encargado de la ejecución de los comandos ejecutados en los clientes por parte de los clientes de tipo red para varios tipos de servicios de red (DNS, FTP, ...)
- [ ] d. Todas las otras respuestas son incorrectas.
- [x] e. La ejecución del fichero "/usr/sbin/exportfs" actualiza la información de los SF exportados y la muestra. Para ello hace un "restart" de los demonios "rpc.nfsd" y "rpc.mount". Sus opciones son las descritas en la pregunta salvo "-r" ya que la reexportación de directorios se realiza al parar y rearrancar el servicio.

**✓ Solución: e)**

---

### Pregunta 26.3

**Apartado: 26. En cuanto al servicio de red NFS en el sistema operativo linux**


**El fichero "/usr/sbin/showmount" muestra información en un servidor NFS según se ejecuten las siguientes opciones: -a, -d, -e**

- [ ] a. Todas las otras respuestas son incorrectas.
- [x] b. Sin opciones, este comando muestra los clientes que han montado Sistemas de Ficheros desde el sistema local en el que se ejecuta.
- [ ] c. El fichero "/usr/sbin/showmount" ejecuta no sólo las opciones descritas sino además "-v" (verbose), -u (unmount), -l (listado de los Sistemas de Ficheros definidos en /etc/fstab que se definen vía NFS, pero que no están montados en el momento de ejecutar), entre otros.
- [ ] d. El fichero "/usr/sbin/showmount" no existe. De hecho ninguno de los ficheros relacionados con NFS en su configuración o para mostrar datos contienen "mount" en sus nombres.
- [ ] e. El fichero "/usr/sbin/showmount" no está directamente relacionado con NFS ya que muestra todos los Sistemas de Ficheros montados en el sistema. De hecho lo que ejecuta en realidad es "mount" sin opciones.

**✓ Solución: b)**

---

## 27. En cuanto al modo multiusuario

### Pregunta 27.1

**Apartado: 27. En cuanto al modo multiusuario**


- [ ] a. Ninguna de las otras opciones es correcta.
- [x] b. Es uno de los niveles: 0: El sistema está apagado, 1, s ó S: Modo monousuario, 2: Multiusuario sin funciones de red, 3: Multiusuario completo con terminales en modo texto, 4: Multiusuario completo con terminales en modo texto y uno en modo gráfico, 5: Multiusuario con pantalla de inicio de sesión basada en X, 6: El sistema se está reiniciando
- [ ] c. Se puede utilizar cualquiera de los niveles de arranque.
- [ ] d. Es uno de los 6 niveles de arranque que pueden ser determinados como modo por defecto mediante su inclusión en el fichero /etc/inittab
- [ ] e. Puede ser usado utilizando el comando "/sbin/inittab id:5:initdefault:" al permitir cambiar el modo de ejecución

**✓ Solución: b)**

---

### Pregunta 27.2

**Apartado: 27. En cuanto al modo multiusuario**


- [ ] a. Ninguna de las otras opciones es correcta.
- [ ] b. Sólo se chequea el sistema de ficheros raíz de forma automática cuando haya habido algún problema en la parada del sistema anterior.
- [ ] c. Se chequea el sistema de ficheros raíz de forma automática.
- [ ] d. Se chequean las cuotas de disco mediante "quotacheck -a" y no se ejecutaría ningún otro comando como "quotaon –a" ya que su activación resulta implícita en el chequeo.
- [x] e. Activa las particiones de intercambio o swapping con "swapon -a" al igual que en monousuario

**✓ Solución: e)**

---

## 28. En cuanto al control y gestión de la actividad de la shell del sistema operativo linux

### Pregunta 28.1

**Apartado: 28. En cuanto al control y gestión de la actividad de la shell del sistema operativo linux**


- [ ] a. El comando ulimit permite controlar los recursos disponibles para una shell y los procesos lanzados por esa shell. Se define un límite para cada parámetro y el sistema restringirá el uso del recurso por parte de la shell que alcance ese límite. El fichero de configuración de los límites será "/etc/limits.conf".
- [x] b. El comando ulimit permite controlar los recursos disponibles para una shell y los procesos lanzados por esa shell. Se define un límite para cada parámetro y el sistema restringirá el uso del recurso por parte de la shell que alcance ese límite. El fichero de configuración de los límites será "/etc/security/limits.conf".
- [ ] c. El comando ulimit permite controlar los recursos disponibles para una shell y los procesos lanzados por esa shell. La opción "-S" permite cambiar y visualizar el límite blando asociado con los recursos, y "-H" el límite duro. El límite blando es el valor que el kernel hace cumplir para el recurso correspondiente. El límite duro actúa como techo para el límite blando.
- [ ] d. El comando ulimit permite controlar los recursos disponibles para una shell y los procesos lanzados por esa shell. La opción "-S" permite cambiar y visualizar el límite blando asociado con los recursos, y "-H" el límite duro. El fichero de configuración de los límites será "/etc/limits.conf".
- [ ] e. El comando ulimit permite controlar los recursos disponibles para una shell y los procesos lanzados por esa shell. La opción "-S" permite cambiar y visualizar el límite blando asociado con los recursos, y "-H" el límite duro. No existe fichero alguno de parametrización ya que se hace por comando.

**✓ Solución: b)**

---

## 29. En cuanto a las generaciones del hardware de los sistemas

### Pregunta 29.1

**Apartado: 29. En cuanto a las generaciones del hardware de los sistemas**


- [x] a. La evolución del hardware incluyen válvulas (primera generación), transistores (segunda generación), circuitos integrados (tercera generación) y circuitos integrados de gran y muy gran escala (cuarta generación).
- [ ] b. Ninguna de las otras respuestas es correcta.
- [ ] c. La evolución del hardware incluyen válvulas (primera generación), transistores (segunda generación), circuitos integrados (tercera generación), circuitos integrados de gran escala (cuarta generación) y muy gran escala (quinta generación).
- [ ] d. La evolución del hardware incluyen válvulas (primera generación), transistores (segunda generación) y circuitos integrados (tercera generación) y sistemas cuánticos (cuarta generación).
- [ ] e. La evolución del hardware incluyen sistemas arcaicos como el ábaco (primera generación), válvulas (segunda generación), transistores (tercera generación), circuitos integrados (cuarta generación) y circuitos integrados de gran y muy gran escala (quinta generación)

**✓ Solución: a)**

---

### Pregunta 29.2

**Apartado: 29. En cuanto a las generaciones del hardware de los sistemas**


- [ ] a. Cada nueva generación de hardware ha ido acompañada de enormes aumentos en el coste, prestaciones, difusiones de calor y de velocidad y capacidad.
- [ ] b. Cada nueva generación de hardware ha ido acompañada de enormes reducciones en el coste, tamaño, emisión de calor y consumo de energía, de velocidad y capacidad.
- [ ] c. Ninguna de las otras respuestas es correcta.
- [x] d. Cada nueva generación de hardware ha ido acompañada de enormes reducciones en el coste, tamaño, emisión de calor y consumo de energía, y enormes aumentos de velocidad y capacidad.
- [ ] e. Cada nueva generación de hardware ha ido acompañada de enormes reducciones en el coste, tamaño, emisión de calor y consumo de energía, y enormes aumentos de velocidad y discapacidades.

**✓ Solución: d)**

---

## 30. En cuanto a las copias de seguridad en el sistema operativo Linux

### Pregunta 30.1

**Apartado: 30. En cuanto a las copias de seguridad en el sistema operativo Linux**


**La diferencia fundamental entre tar, cpio, dump y dd a la hora de hacer copias de seguridad es que tar agrupa ficheros y comprime, cpio (similar a tar y creado para ser usado con cintas) permite copiar ficheros en o desde el árbol de directorio o archivo cpio, o bien copiar estructuras completas de directorios en unidades extraíbles, dump lee el sistema de archivos directamente y no a través del propio sistema de archivos y dd permite hacer copias exactas de particiones completas lo que le permite copiar una partición para la que Linux carece de controladores del sistema de archivos.**

- [ ] a. Ninguna de las otras respuestas es correcta
- [ ] b. No es cierto dado que la diferencia fundamental entre tar, cpio, dump y dd es sobre todo temporal dado que dependen del grado de madurez tecnológico de cada comando.
- [ ] c. No es cierto dado que los controladores se refieren a dispositivos y por tanto sobre las particiones o sobre discos, pero no sobre los sistemas de ficheros.
- [x] d. La propuesta es cierta.
- [ ] e. No es cierto dado que cpio y dump son prácticamente similares por ser dump una evolución de cpio. De hecho ambas pueden ser recuperados mediante el mismo comando restore, comando que incorpora en su última versión la compatibilidad necesaria como para que se puedan recuperar las copias con cpio.

**✓ Solución: d)**

---

## 31. En cuanto a la zona de intercambio del sistema operativo linux

### Pregunta 31.1

**Apartado: 31. En cuanto a la zona de intercambio del sistema operativo linux**


- [ ] a. Se debe montar antes de arrancar el sistema operativo ya que será la zona intermedia utilizada como zona de intercambio entre el disco cuya partición contiene el sistema operativo a arrancar y la memoria donde se situará el sistema de ficheros del sistema.
- [ ] b. También llamado initrd es el sistema de ficheros temporal utilizado para el arranque del sistema operativo.
- [x] c. Es el área que se usa para almacenar temporalmente los procesos cuando no caben en memoria. Su presencia no es obligatoria pero junto con la paginación permite la implementación de la memoria virtual con lo que mejora el rendimiento de la memoria física del sistema.
- [ ] d. Es la zona donde se sitúa la caché del sistema operativo en la que se realizará la búsqueda de los ficheros antes de realizar la búsqueda en la partición del sistema operativo. Estos ficheros se encontrarán en la zona de swap si previamente han sido referenciados durante un tiempo previo aleatorio. Este tiempo aleatorio dependerá del tamaño del área de swap ya que dependerá del algoritmo utilizado para ver qué fichero saldrá de la zona cuando no haya espacio suficiente. El algoritmo a utilizar puede ser FIFO, etc.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: c)**

---

### Pregunta 31.2

**Apartado: 31. En cuanto a la zona de intercambio del sistema operativo linux**


- [ ] a. Se definirán en el fichero /etc/fstab con los parámetros necesarios: /dev/sda2 none swap defaults 0 0
- [ ] b. Se activan mediante el comando similar a "swapon /dev/sdc1".
- [ ] c. Se desactivan mediante el comando similar a "sudo swapoff -a".
- [ ] d. El área de swap puede no ser una partición como tal, ya que también puede ser un fichero.
- [x] e. Todas las otras respuestas son correctas.

**✓ Solución: e)**

---

## 32. En cuanto al modo monousuario

### Pregunta 32.1

**Apartado: 32. En cuanto al modo monousuario**


- [ ] a. La ejecución de "Ctrl+D" producirá la ejecución del nivel de arranque por defecto, reiniciando el sistema hasta el arranque por defecto.
- [ ] b. La ejecución de "Ctrl+D" producirá la parada ordenada del sistema.
- [ ] c. La ejecución de "Ctrl+D" producirá la ejecución del nivel de arranque por defecto, parando todos los procesos del sistema hasta el arranque por defecto.
- [x] d. La ejecución de "Ctrl+D" producirá la ejecución del nivel de arranque por defecto.
- [ ] e. Ninguna de las otras opciones es correcta.

**✓ Solución: d)**

---

## 33. En cuanto al protocolo SNMP dentro de la gestión de red en el modelo SNMP

### Pregunta 33.1

**Apartado: 33. En cuanto al protocolo SNMP dentro de la gestión de red en el modelo SNMP**


**El modelo se basa en un protocolo a través del cual se tiene acceso desde el puerto 161 del gestor para leer y escribir objetos escalares en la MIB de un agente y desde el puerto 162 del mismo gestor para emitir las notificaciones.**

- [ ] a. Es incorrecto dado que el puerto 161 es el puerto destino para el envío de peticiones desde el agente y el puerto 162 es el puerto en el que escucha el mismo agente cuando los agentes le mandan las notificaciones.
- [ ] b. Es incorrecto dado que el puerto 161 es el puerto destino para el envío de peticiones desde el gestor y el puerto 162 es el puerto en el que escucha el mismo gestor cuando los agentes le mandan las notificaciones.
- [ ] c. Es incorrecto dado que la descripción correcta será: El modelo se basa en un protocolo a través del cual se tiene acceso desde el puerto 161 del agente para leer y escribir objetos escalares en la MIB de un gestor y desde el puerto 162 del gestor para emitir las notificaciones al agente.
- [x] d. Es incorrecto dado que la descripción correcta será: El modelo se basa en un protocolo a través del cual se tiene acceso desde el puerto 161 del gestor para leer y escribir objetos escalares en la MIB de un agente y desde el puerto 162 del agente para emitir las notificaciones al gestor.
- [ ] e. Es incorrecto dado que la descripción correcta será: El modelo se basa en un protocolo a través del cual se tiene acceso desde el puerto 161 del agente para leer y escribir objetos escalares en la MIB de un gestor y desde el puerto 162 también del agente para emitir las notificaciones al gestor.

**✓ Solución: d)**

---

### Pregunta 33.2

**Apartado: 33. En cuanto al protocolo SNMP dentro de la gestión de red en el modelo SNMP**


- [ ] a. Los dispositivos proxy o sistemas delegados permitirán la comunicación entre dos gestores.
- [ ] b. Los dispositivos proxy son los encargados de realizar la conversión de protocolos de SNMPv3 a SNMPv1.
- [x] c. Los dispositivos proxy convertirán, por ejemplo, cada petición enviada por la estación de gestión al agente proxy de tal forma que los parámetros enviados mediante un primer protocolo serán modificados para ser compatibles con los correspondientes a un segundo protocolo de gestión que sea usado por el dispositivo gestionado.
- [ ] d. Los dispositivos proxy convertirán cada petición enviada por el agente a la estación de gestión proxy de tal forma que los parámetros enviados mediante un primer protocolo serán modificados para ser compatibles con los correspondientes a un segundo protocolo de gestión que sea usado por el dispositivo gestor, o para realizar la modificación inversa, desde el gestor al elemento gestionado.
- [ ] e. Ninguna de las otras respuestas es correcta.

**✓ Solución: c)**

---

## 34. En cuanto al control y gestión de señales del sistema operativo linux

### Pregunta 34.1

**Apartado: 34. En cuanto al control y gestión de señales del sistema operativo linux**


- [ ] a. El comando kill sirve no solo para matar o terminar procesos sino principalmente para enviar señales a los procesos. La señal por defecto cuando no se indica ninguna es matar el proceso, y la sintaxis es kill PID. Y las señales van de 1 (matar el proceso) a 9 (releer sus archivos de configuración estando en ejecución).
- [ ] b. El comando sigsend sirve para enviar señales a los procesos. La señal por defecto cuando no se indica ninguna es matar el proceso, y la sintaxis es kill PID. Y las señales más comunes son la 19 y 20 que detienen momentáneamente la ejecución de un proceso o programa, 18 la continua, 1 que es la señal de hang up que obliga al proceso a releer sus archivos de configuración estando en ejecución y 9 que termina rotundamente un proceso.
- [ ] c. El comando kill sirve no solo para matar o terminar procesos sino principalmente para enviar señales a los procesos. La señal por defecto cuando no se indica ninguna es matar el proceso, y la sintaxis es kill PID. Y las señales van de 1 (releer sus archivos de configuración estando en ejecución) a 9 (matar el proceso).
- [ ] d. Ninguna de las otras respuestas es correcta.
- [x] e. El comando kill sirve no solo para matar o terminar procesos sino principalmente para enviar señales a los procesos. La señal por defecto cuando no se indica ninguna es matar el proceso, y la sintaxis es kill PID. Y las señales más comunes son la 19 y 20 que detienen momentáneamente la ejecución de un proceso o programa, 18 la continua, 1 que es la señal de hang up que obliga al proceso a releer sus archivos de configuración estando en ejecución y 9 que termina rotundamente un proceso. Ejemplos: #> kill -9 11428 (termina, mata un proceso completamente) • #> kill -SIGKILL 11428 (Lo mismo que lo anterior)

**✓ Solución: e)**

---

### Pregunta 34.2

**Apartado: 34. En cuanto al control y gestión de señales del sistema operativo linux**


**Los principios básicos de la administración de sistemas incluyen...**

- [ ] a. ... la definición de políticas y la previsibilidad.
- [ ] b. ... la previsibilidad y la escalabilidad.
- [ ] c. ... la definición de políticas y la escalabilidad.
- [ ] d. Ninguna de las otras respuestas es correcta.
- [x] e. ... la definición de políticas, la previsibilidad y la escalabilidad.

**✓ Solución: e)**

---

### Pregunta 34.3

**Apartado: 34. En cuanto al control y gestión de señales del sistema operativo linux**


**En cuanto al control y gestión de los procesos por lotes del sistema operativo linux... El comando at ejecuta órdenes a una determinada hora. Puede recibir como parámetro un fichero de texto con las órdenes a ejecutar y puede recibir las órdenes a ejecutar desde teclado, a través de un prompt especial. El comando atq permite consultar la lista de órdenes, el comando atrm, eliminar órdenes, el comando cron ejecuta tareas periódicamente y el comando crontab establece las tareas a ejecutar.**

- [ ] a. Ninguna de las otras respuestas es correcta.
- [x] b. La frase propuesta es correcta.
- [ ] c. La frase no es correcta ya que atq es la orden a utilizar para salir de la herramienta at.
- [ ] d. La frase no es correcta ya que no existe posibilidad de recibir como parámetro un fichero de texto con las órdenes a ejecutar.
- [ ] e. Los comandos cron y crontab nada tienen que ver con el procesamiento por lotes ya que son los demonios de otros dos servicios de igual nombre.

**✓ Solución: b)**
