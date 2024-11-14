function verificarAprovacao() {
    // Captura as notas dos campos de entrada
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Verifica se todas as notas são válidas e estão no intervalo de 0 a 100
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3) || nota1 < 0 || nota1 > 100 || nota2 < 0 || nota2 > 100 || nota3 < 0 || nota3 > 100) {
        const resultadoElemento = document.getElementById('resultado');
        resultadoElemento.innerText = "Por favor, insira todas as notas entre 0 e 100.";
        resultadoElemento.className = ""; // Remove classes de aprovado/reprovado
        resultadoElemento.style.color = "orange";
        return;
    }

    // Calcula a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Define a condição de aprovação (média maior ou igual a 6)
    const aprovado = media >= 60;

    // Exibe o resultado
    const resultadoElemento = document.getElementById('resultado');
    if (aprovado) {
        resultadoElemento.innerText = `Aprovado! Média: ${media.toFixed(2)}`;
        resultadoElemento.className = "aprovado"; // Aplica estilo verde
    } else {
        resultadoElemento.innerText = `Reprovado. Média: ${media.toFixed(2)}`;
        resultadoElemento.className = "reprovado"; // Aplica estilo vermelho
    }
}
