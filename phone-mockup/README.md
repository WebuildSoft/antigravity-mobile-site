# Antigravity Smartphone Mockup Component 📱

Componente totalmente independente e desacoplado, escrito em **TypeScript** e compilado com **esbuild**, projetado para simular o aplicativo **Antigravity Flutter Mobile** em qualquer página da web.

## 🚀 Como Usar em Qualquer Lugar (Drop-in Embed)

Basta incluir o CSS, uma `div` de montagem e o script compilado:

```html
<!-- 1. Estilos do Mockup -->
<link rel="stylesheet" href="phone-mockup/style.css">

<!-- 2. Ponto de Montagem -->
<div id="antigravity-phone-mockup"></div>

<!-- 3. Motor de Simulação Compilado -->
<script src="phone-mockup/dist/phone-mockup.js"></script>
```

O script inicializa automaticamente ao carregar a página se o ID `antigravity-phone-mockup` estiver presente.

---

## 🛠️ Inicialização Customizada (Opcional via JS)

Se desejar controlar a inicialização ou passar cenários customizados:

```html
<script src="phone-mockup/dist/phone-mockup.js"></script>
<script>
  const customScenarios = [
    {
      chipLabel: "⚡ Meu Teste",
      prompt: "Execute os testes do projeto...",
      time: "14:20",
      thinking: { lines: "2 linhas", text: "Processando..." },
      tool: { name: "run_command", cmd: "npm test", output: "All tests passed", success: "✓ Sucesso" },
      response: "Pronto! Tudo passou."
    }
  ];

  const simulator = AntigravityPhoneMockup.create('meu-container-id', customScenarios);
</script>
```

---

## 💻 Desenvolvimento & Compilação

Para editar o código TypeScript e recompilar o bundle:

```bash
cd phone-mockup
npm install
npm run build      # Valida tipos com tsc e gera dist/phone-mockup.js
npm run dev        # Modo watch para desenvolvimento contínuo
```
