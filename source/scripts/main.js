AOS.init();

const dataDoEvento = new Date("Apr 23, 2025 19:00:00");
const timeStampDoEvento = dataDoEvento.getTime();

const contaAsHoras = setInterval(function() {
    const agora = new Date();
    const timeStampAtual = agora.getTime();

    const distanciaAteEvento = timeStampDoEvento - timeStampAtual;

    const diaEmMs = 1000 * 60 * 60 * 24;
    const horaEmMs = 1000 * 60 * 60;
    const minutoEmMs = 1000 * 60;
    const segundoEmMs = 1000;

    const diasAteEvento = Math.floor(distanciaAteEvento / diaEmMs);
    const horasAteEvento = Math.floor((distanciaAteEvento % diaEmMs) / horaEmMs);
    const minutosAteEvento = Math.floor((distanciaAteEvento % horaEmMs) / minutoEmMs);
    const segundosAteEvento = Math.floor((distanciaAteEvento % minutoEmMs / segundoEmMs));

    document.getElementById('contador').innerHTML = `${diasAteEvento}d ${horasAteEvento}h ${minutosAteEvento}m e ${segundosAteEvento}s`;

    if (distanciaAteEvento < 0) {
        clearInterval(contaAsHoras);
        document.getElementById('contador').innerHTML = 'Evento expirado!'
    }

    console.log(`Faltam ${diasAteEvento} dias, ${horasAteEvento} horas, ${minutosAteEvento} minutos e ${segundosAteEvento}s` );
}, 1000);