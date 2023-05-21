const Historia = 
[
	{
		"texto": "Has comenzado. Ahora tendrás que nombrar al prota (es una mujer)",
		"effect": "temblar",
		"type": "texto",
	},
	{
		"texto": "",
		"type": "nombre",
	},
	{
		"texto": "Conductor: Ya llegamos... señorita Name",
		"effect": "temblar",
		"type": "texto",
	},
	{
		"texto": "Muchas gracias... Androide",
		"effect": "temblar",
		"type": "desition",
	},
	{
		"texto": "Name avanza al desolado instituto a pasos cortos, preocupada por cómo será recibida",
		"effect": "temblar",
		"type": "texto",
	},
	{
		"texto": "IA: ¡Has llegado!",
		"effect": "temblar",
		"type": "texto",
	},
	{
		"texto": "IA: Te mostraré una lista:",
		"effect": "temblar",
		"type": "texto",
	},
	{
		"texto": "",
		"effect": "false",
		"type": "lista",
	},
	{
		"texto": "IA: La primera pregunta es: ¿Quieren vivir?",
		"type": "texto",
	},
	{
		"texto": "",
		"type": "charla",
	},
	{
		"texto": "IA: Eliminen a uno de la lista:",
		"effect": "temblar",
		"type": "texto",
	},
	{
		"texto": "",
		"effect": "true",
		"type": "lista",
	},
	{
		"texto": "IA: La segunda pregunta es: ¿Quieren ganar?",
		"type": "texto",
	},
	{
		"texto": "",
		"type": "charla",
	},
	{
		"texto": "IA: Eliminen a uno de la lista:",
		"effect": "temblar",
		"type": "texto",
	},
	{
		"texto": "",
		"effect": "true",
		"type": "lista",
	},
	{
		"texto": "IA: Oh, parece que ya hemos terminado con el primer paso...",
		"effect": "temblar",
		"type": "texto",
	},
	{
		"texto": "IA: Los felicito por llegar hasta aquí, Name y Sobreviviente. Ahora podemos dar el segundo paso",
		"effect": "temblar",
		"type": "pasoDosStart",
	},
	{
		"texto": "IA: Name, ¿qué virtud representa Sobreviviente? Puedes escribir la virtud tanto en plural como singular, yo te entenderé.",
		"effect": "temblar",
		"type": "texto",
	},
	{
		"texto": "",
		"effect": "temblar",
		"type": "virtud",
	},
	{
		"texto": "(IA responde en consecuencia)",
		"effect": "temblar",
		"type": "texto",
	},
	{
		"texto": "(Sobreviviente responde en consecuencia)",
		"effect": "virtud",
		"type": "texto",
	},
	{
		"texto": "IA: La respuesta de Name fue correcta, no cabe duda. Ya hemos dado los dos pasos, ahora deben estar preparados para correr (Cierra los ojos)",
		"effect": "virtud",
		"type": "texto",
	},
	{
		"texto": "IA: Proceso de reconfiguración de estado en proceso...",
		"effect": "virtud",
		"type": "texto",
	},
	{
		"texto": "",
		"effect": "temblar",
		"type": "escapar",
	},
	{
		"texto": "Corría...",
		"effect": "virtud",
		"type": "texto",
	},
	{
		"texto": "Name: Sobreviviente esta sujetándome de la mano para que me salve junto a él...",
		"effect": "virtud",
		"type": "texto",
	},
	{
		"texto": "Jugar a Correr",
		"effect": "",
		"type": "desition",
	},
	{
		"texto": "",
		"effect": "",
		"type": "Run",
	},
	{
		"texto": "Sobreviviente: Ahgm",
		"effect": "",
		"type": "texto",
	},
	{
		"texto": "Un proyectil de ballesta atraviesa el pecho de Sobreviviente y cae al suelo",
		"effect": "",
		"type": "texto",
	},
	{
		"texto": "Me sorprendí y debía tomar una decisión crucial",
		"effect": "",
		"type": "texto",
	},
	{
		"texto": "Correr hacía la salida, Quedarse con Sobreviviente",
		"effect": "",
		"type": "desition",
	},
	{
		"texto": "fin",
		"type": "desitionOn",
	}
]

export default Historia;