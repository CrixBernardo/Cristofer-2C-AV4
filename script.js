function verificarAprovacao() {
    // Captura as notas dos campos de entrada
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);

    // Verifica se todas as notas são válidas
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        document.getElementById('resultado').innerText = "Por favor, insira todas as notas.";
        return;
    }

    // Calcula a média
    const media = (nota1 + nota2 + nota3) / 3;

    // Define a condição de aprovação (média maior ou igual a 6)
    const aprovado = media >= 6;

    // Exibe o resultado
    const resultadoElemento = document.getElementById('resultado');
    if (aprovado) {
        resultadoElemento.innerText = `Aprovado! Média: ${media.toFixed(2)}`;
        resultadoElemento.style.color = "green";
    } else {
        resultadoElemento.innerText = `Reprovado. Média: ${media.toFixed(2)}`;
        resultadoElemento.style.color = "red";
    }
}
