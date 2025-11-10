export function generateReservationCode(
  age: number,
  horario: string,
  tipo: "R" | "C" | "D"
): string {
  // Extract day and month from horario
  // Format: "Sábado, 11 de enero 4-6pm"
  const horarioParts = horario.split(" ");
  
  // Get day (number)
  const dia = parseInt(horarioParts[1], 10);
  
  // Get month name (e.g., "enero")
  const mesIndex = horarioParts.indexOf("de") + 1;
  const mes = horarioParts[mesIndex];
  
  // Get first 3 letters of month and convert to uppercase
  const mesAbrev = mes.substring(0, 3).toUpperCase();
  
  // Get hour from the time part (e.g., "4-6pm" -> "4")
  // The time is at the end, find the last space and extract time
  const timeMatch = horario.match(/(\d+)-(\d+)pm/);
  const horaInicio = timeMatch ? timeMatch[1] : "0"; // Get first hour from range
  
  // Format: {EDAD}{MES[0]}{DIA}{MES[1]}{HORA_INICIO}+"{TIPO}"
  const codigo = `${age}${mesAbrev[0]}${dia}${mesAbrev[1]}${horaInicio}+"${tipo}"`;
  
  return codigo;
}

