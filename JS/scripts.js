var input;
var i = 0;
while(i<1){
	input = prompt("Введи кПа", 40);

	if (input >= 70){
		confirm("Сработала предаварийная сигнализация");
			}
	else{
		if(input>=50){
			confirm("Сработала предупредительная сигнализация");
		}
		
	}
	if(input == null) break;
}
