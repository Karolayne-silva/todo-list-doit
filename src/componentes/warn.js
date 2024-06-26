export default function warn() {
  const phrases = [
    "Cuidado! Tarefas além do limite! Não queremos que você se afogue em afazeres. Limite de 6",
    "Ei, cuidado! Não sobrecarregue seu cérebro. Máximo de 6 tarefas por aqui!",
    "Parece que alguém está pronto para dominar o mundo! Mas vamos manter as coisas simples. Máximo de 6 tarefas!",
    "Hora de diminuir a velocidade! Não temos espaço para mais tarefas. Máximo de 6!",
  ];
  function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
  }
  const random = getRandomPhrase();
  return (
    <div className="container-warn">
      <p className="warn-text">{random}</p>
    </div>
  );
}
