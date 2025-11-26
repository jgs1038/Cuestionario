import { parseMarkdownQuestions } from './src/utils/markdownParser.js';

const sampleMarkdown = `
## 1. Section Header

### Pregunta 1.1
**Question text line 1**
Question text line 2

- [ ] Option A
- [x] Option B

### Pregunta 1.2
Single line question

- [x] Option C
- [ ] Option D

## 2. Another Section (Should be ignored)

### Pregunta 2.1
- [ ] Option E
- [x] Option F

**1. El modificador protected permite el acceso a:**

- ☐ a. Sólo a clientes del mismo paquete.
- ☐ b. Sólo a descendientes.
- ☑ c. Clientes del mismo paquete y descendientes.

**2. En Java, hasta su version 7, no había conflictos de herencia múltiple porque:**

- ☑ a. No se pueden heredar dos propiedades diferentes y concretas con el mismo nombre.
- ☐ b. No existe herencia múltiple de clases.
- ☐ c. Se evitan los conflictos con renombrados.
`;

const questions = parseMarkdownQuestions(sampleMarkdown);
console.log(JSON.stringify(questions, null, 2));
